(() => {
  "use strict";

  const data = window.CATALOG_DATA;
  if (!data || !Array.isArray(data.courses)) return;

  const refs = {
    catalogTitle: byId("catalogTitle"),
    catalogSubtitle: byId("catalogSubtitle"),
    searchInput: byId("searchInput"),
    searchSuggestions: byId("searchSuggestions"),
    clearSearch: byId("clearSearch"),
    coursePicker: byId("coursePicker"),
    resultMeta: byId("resultMeta"),
    courseGrid: byId("courseGrid"),
    courseDetail: byId("courseDetail"),
    siteHeader: document.querySelector(".site-header"),
    mainContent: byId("mainContent"),
    imageModal: byId("imageModal"),
    imageModalContent: document.querySelector("#imageModal .image-modal-content"),
    imageModalImg: byId("imageModalImg"),
    imageModalCaption: byId("imageModalCaption"),
    imageModalClose: byId("imageModalClose")
  };

  const state = {
    query: "",
    activeCourseId: null,
    pendingJump: null,
    highlightTimer: null,
    searchSnapshotKey: "",
    searchSnapshot: null,
    suggestions: [],
    activeSuggestionIndex: -1,
    lastModalTrigger: null
  };

  const courseOrderMap = new Map(
    data.courses.map((course, index) => [course.id, index + 1])
  );
  const searchIndex = buildSearchIndex(data.courses);

  if (refs.catalogTitle) refs.catalogTitle.textContent = data.title || "Catalogo de Cursos";
  if (refs.catalogSubtitle) refs.catalogSubtitle.textContent = data.subtitle || "";

  bindEvents();
  render();

  function bindEvents() {
    if (refs.searchInput) {
      refs.searchInput.addEventListener("input", (event) => {
        state.query = event.target.value.trim();
        invalidateSearchSnapshot();
        render();
      });

      refs.searchInput.addEventListener("keydown", onSearchInputKeyDown);

      refs.searchInput.addEventListener("focus", () => {
        renderSearchSuggestions();
      });
    }

    if (refs.clearSearch) {
      refs.clearSearch.addEventListener("click", () => {
        state.query = "";
        if (refs.searchInput) refs.searchInput.value = "";
        invalidateSearchSnapshot();
        render();
        hideSearchSuggestions();
        if (refs.searchInput) refs.searchInput.focus();
      });
    }

    if (refs.courseGrid) {
      refs.courseGrid.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-course-id]");
        if (!button) return;
        state.activeCourseId = button.dataset.courseId || state.activeCourseId;
        render();
        hideSearchSuggestions();
        if (refs.coursePicker) refs.coursePicker.open = false;
      });
    }

    if (refs.searchSuggestions) {
      refs.searchSuggestions.addEventListener("click", (event) => {
        const option = event.target.closest("button[data-suggestion-index]");
        if (!option) return;
        const index = Number(option.dataset.suggestionIndex);
        selectSuggestionByIndex(index);
      });
    }

    if (refs.courseDetail) {
      refs.courseDetail.addEventListener("click", (event) => {
        const imageButton = event.target.closest("button[data-image-src]");
        if (!imageButton) return;
        openImageModal(imageButton.dataset.imageSrc, imageButton.dataset.imageAlt, imageButton);
      });
    }

    if (refs.imageModalClose) {
      refs.imageModalClose.addEventListener("click", closeImageModal);
    }

    if (refs.imageModal) {
      refs.imageModal.addEventListener("click", (event) => {
        if (event.target === refs.imageModal) closeImageModal();
      });
    }

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeImageModal();
        hideSearchSuggestions();
        return;
      }
      if (event.key === "Tab" && isImageModalOpen()) {
        trapModalFocus(event);
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest(".search-wrap")) return;
      hideSearchSuggestions();
    });
  }

  function onSearchInputKeyDown(event) {
    if (!refs.searchSuggestions || !refs.searchInput) return;
    if (!hasQuery(state.query) && (event.key === "ArrowDown" || event.key === "ArrowUp")) return;

    if (event.key === "Escape") {
      if (!refs.searchSuggestions.hidden) {
        event.preventDefault();
        hideSearchSuggestions();
      }
      return;
    }

    if (event.key === "Enter") {
      if (refs.searchSuggestions.hidden || state.activeSuggestionIndex < 0) return;
      event.preventDefault();
      selectSuggestionByIndex(state.activeSuggestionIndex);
      return;
    }

    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    if (refs.searchSuggestions.hidden) renderSearchSuggestions();
    if (!state.suggestions.length) return;

    event.preventDefault();
    moveActiveSuggestion(event.key === "ArrowDown" ? 1 : -1);
  }

  function moveActiveSuggestion(step) {
    if (!state.suggestions.length) return;

    let next = state.activeSuggestionIndex;
    if (next < 0) {
      next = step > 0 ? 0 : state.suggestions.length - 1;
    } else {
      next = (next + step + state.suggestions.length) % state.suggestions.length;
    }

    setActiveSuggestionIndex(next);
  }

  function selectSuggestionByIndex(index) {
    if (!Number.isInteger(index) || index < 0 || index >= state.suggestions.length) return;
    selectSuggestion(state.suggestions[index]);
  }

  function selectSuggestion(suggestion) {
    if (!suggestion) return;

    state.activeCourseId = suggestion.courseId || state.activeCourseId;
    state.pendingJump = {
      moduleKey: suggestion.moduleKey || "",
      topicRef: suggestion.topicRef || ""
    };

    render();
    hideSearchSuggestions();
    if (refs.searchInput) refs.searchInput.focus();
  }

  function render() {
    const snapshot = getSearchSnapshot(state.query);
    state.suggestions = snapshot.suggestions.slice(0, 12);
    if (state.activeSuggestionIndex >= state.suggestions.length) {
      state.activeSuggestionIndex = -1;
    }

    if (
      state.activeCourseId &&
      !snapshot.filteredCourses.some((course) => course.id === state.activeCourseId)
    ) {
      state.activeCourseId = null;
    }

    renderCourseCards(snapshot.filteredCourses);
    renderCourseDetail(snapshot);
    if (refs.resultMeta) refs.resultMeta.textContent = `${snapshot.filteredCourses.length} curso(s)`;
    renderSearchSuggestions();
  }

  function renderCourseCards(courses) {
    if (!refs.courseGrid) return;

    if (!courses.length) {
      refs.courseGrid.innerHTML = `<p class="empty">No hay cursos que coincidan con la busqueda.</p>`;
      return;
    }

    refs.courseGrid.innerHTML = courses
      .map((course) => {
        const courseNumber = courseOrderMap.get(course.id) || 0;
        const totalModules = (course.modules || []).length;
        const totalTopics = countTopics(course);
        const activeClass = course.id === state.activeCourseId ? " active" : "";
        const tags = (course.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");

        return `
        <button class="course-card${activeClass}" type="button" data-course-id="${escapeAttr(course.id)}">
          <h3>${courseNumber}. ${escapeHtml(course.title)}</h3>
          <p class="course-meta">${escapeHtml(course.provider)} - ${escapeHtml(course.level)} - ${totalModules} modulos - ${totalTopics} temas</p>
          <div class="course-tags">${tags}</div>
        </button>`;
      })
      .join("");
  }

  function renderCourseDetail(snapshot = getSearchSnapshot(state.query)) {
    if (!refs.courseDetail) return;

    const course = data.courses.find((item) => item.id === state.activeCourseId);
    if (!course) {
      refs.courseDetail.innerHTML = `<p class="empty">Selecciona un curso para ver su contenido.</p>`;
      return;
    }

    const hasTerms = snapshot.terms.length > 0;
    const modules = (course.modules || []).map((module) => ({
      ...module,
      topics: (module.topics || []).filter((topic) =>
        topicMatchesSnapshot(course.id, module.key, topic.code, snapshot)
      )
    }));
    const visibleModules = hasTerms ? modules.filter((module) => module.topics.length > 0) : modules;

    const totalTopics = countTopics(course);
    const visibleTopics = visibleModules.reduce((sum, module) => sum + module.topics.length, 0);

    refs.courseDetail.innerHTML = `
      <h2>${escapeHtml(course.title)}</h2>
      <p class="detail-summary">${escapeHtml(course.summary)}</p>
      <div class="module-list">
        ${
          visibleModules.length
            ? visibleModules.map((module) => renderModule(course.id, module, false)).join("")
            : `<p class="empty">No hay modulos/temas que coincidan con la busqueda actual.</p>`
        }
      </div>
      <p class="course-meta">Mostrando ${visibleTopics} de ${totalTopics} temas del curso.</p>`;

    syncModuleAccordion();
    applyPendingJump();
  }

  function topicMatchesSnapshot(courseId, moduleKey, topicCode, snapshot) {
    if (!snapshot.terms.length) return true;
    return snapshot.topicMatchRefs.has(buildTopicRef(courseId, moduleKey, topicCode));
  }

  function renderModule(courseId, module, isOpen) {
    return `
    <details class="module-item" data-module-key="${escapeAttr(module.key)}" ${isOpen ? "open" : ""}>
      <summary>
        <span>${escapeHtml(module.key)} - ${escapeHtml(module.title)}</span>
        <span>${module.topics.length} tema(s)</span>
      </summary>
      <div class="module-topics">
        ${module.topics.map((topic) => renderTopic(courseId, module, topic)).join("")}
      </div>
    </details>`;
  }

  function renderTopic(courseId, module, topic) {
    const topicRef = buildTopicRef(courseId, module.key, topic.code);
    const sections = (topic.sections || [])
      .map(
        (section) => `
        <section class="section-block">
          <h5>${escapeHtml(section.title || "Seccion")}</h5>
          <ul>
            ${(section.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>`
      )
      .join("");

    return `
    <article id="${escapeAttr(topicRef)}" class="topic-card">
      <span class="topic-code">${escapeHtml(topic.code)}</span>
      <h4>${escapeHtml(topic.title)}</h4>
      <p class="topic-summary">${escapeHtml(topic.summary || "")}</p>
      <div class="topic-layout">
        <div class="topic-sections">
          ${sections}
        </div>
        <aside class="topic-media">
          ${renderTopicMedia(topic)}
        </aside>
      </div>
    </article>`;
  }

  function renderTopicMedia(topic) {
    const images = topic.images || [];
    if (!images.length) return `<p class="topic-image-hint">Sin imagen disponible.</p>`;

    const primary = images[0];
    const thumbnails = images.slice(1);

    return `
      <button class="topic-image-button" type="button" data-image-src="${escapeAttr(primary.src)}" data-image-alt="${escapeAttr(primary.alt || topic.title)}">
        <img loading="lazy" src="${escapeAttr(primary.src)}" alt="${escapeAttr(primary.alt || topic.title)}"/>
      </button>
      ${
        thumbnails.length
          ? `<div class="topic-thumbs">
              ${thumbnails
                .map(
                  (image) => `
                <button class="topic-thumb-button" type="button" data-image-src="${escapeAttr(image.src)}" data-image-alt="${escapeAttr(image.alt || topic.title)}">
                  <img loading="lazy" src="${escapeAttr(image.src)}" alt="${escapeAttr(image.alt || topic.title)}"/>
                </button>`
                )
                .join("")}
            </div>`
          : ""
      }
      <p class="topic-image-hint">Haz clic en la imagen para ampliar.</p>`;
  }

  function syncModuleAccordion() {
    if (!refs.courseDetail) return;

    const moduleItems = refs.courseDetail.querySelectorAll("details.module-item");
    moduleItems.forEach((moduleItem) => {
      moduleItem.addEventListener("toggle", () => {
        if (!moduleItem.open) return;

        moduleItems.forEach((otherItem) => {
          if (otherItem !== moduleItem) otherItem.open = false;
        });

        requestAnimationFrame(() => {
          moduleItem.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    });
  }

  function applyPendingJump() {
    if (!state.pendingJump || !refs.courseDetail) return;

    const jump = state.pendingJump;
    state.pendingJump = null;

    const moduleNode = Array.from(refs.courseDetail.querySelectorAll("details.module-item")).find(
      (item) => item.dataset.moduleKey === jump.moduleKey
    );

    if (moduleNode && !moduleNode.open) moduleNode.open = true;

    const topicNode = byId(jump.topicRef);
    if (!topicNode) return;

    setTimeout(() => {
      topicNode.scrollIntoView({ behavior: "smooth", block: "start" });
      flashTopic(topicNode);
    }, moduleNode ? 180 : 0);
  }

  function flashTopic(topicNode) {
    if (!topicNode || !refs.courseDetail) return;

    const activeTopic = refs.courseDetail.querySelector(".topic-card.topic-target");
    if (activeTopic && activeTopic !== topicNode) {
      activeTopic.classList.remove("topic-target");
    }

    // Reinicia la animacion aunque se seleccione el mismo tema consecutivamente.
    topicNode.classList.remove("topic-target");
    void topicNode.offsetWidth;
    topicNode.classList.add("topic-target");
    if (state.highlightTimer) clearTimeout(state.highlightTimer);
    state.highlightTimer = setTimeout(() => {
      topicNode.classList.remove("topic-target");
      state.highlightTimer = null;
    }, 1800);
  }

  function renderSearchSuggestions() {
    if (!refs.searchSuggestions || !refs.searchInput) return;

    if (!hasQuery(state.query)) {
      hideSearchSuggestions();
      return;
    }

    if (!state.suggestions.length) {
      state.activeSuggestionIndex = -1;
      refs.searchSuggestions.innerHTML = `<p class="search-empty">Sin temas coincidentes para "${escapeHtml(state.query)}".</p>`;
      refs.searchSuggestions.hidden = false;
      setSearchExpanded(true);
      refs.searchInput.removeAttribute("aria-activedescendant");
      return;
    }

    refs.searchSuggestions.innerHTML = state.suggestions
      .map(
        (entry, index) => `
      <button id="searchSuggestionOption-${index}" class="search-suggestion" type="button" role="option" aria-selected="false" data-suggestion-index="${index}">
        <span class="suggestion-title">${escapeHtml(entry.topicCode)} - ${escapeHtml(entry.topicTitle)}</span>
        <span class="suggestion-meta">${escapeHtml(entry.courseTitle)} - ${escapeHtml(entry.moduleKey)} ${escapeHtml(entry.moduleTitle)}</span>
      </button>`
      )
      .join("");

    refs.searchSuggestions.hidden = false;
    setSearchExpanded(true);
    setActiveSuggestionIndex(state.activeSuggestionIndex);
  }

  function hideSearchSuggestions() {
    if (!refs.searchSuggestions || !refs.searchInput) return;
    refs.searchSuggestions.hidden = true;
    refs.searchSuggestions.innerHTML = "";
    state.activeSuggestionIndex = -1;
    refs.searchInput.removeAttribute("aria-activedescendant");
    setSearchExpanded(false);
  }

  function setSearchExpanded(isExpanded) {
    if (!refs.searchInput) return;
    refs.searchInput.setAttribute("aria-expanded", String(Boolean(isExpanded)));
  }

  function setActiveSuggestionIndex(index) {
    if (!refs.searchSuggestions || !refs.searchInput) return;

    if (!Number.isInteger(index) || index < 0 || index >= state.suggestions.length) {
      state.activeSuggestionIndex = -1;
    } else {
      state.activeSuggestionIndex = index;
    }

    const options = Array.from(
      refs.searchSuggestions.querySelectorAll('.search-suggestion[role="option"]')
    );

    options.forEach((option, optionIndex) => {
      const isActive = optionIndex === state.activeSuggestionIndex;
      option.classList.toggle("is-active", isActive);
      option.setAttribute("aria-selected", String(isActive));
    });

    if (state.activeSuggestionIndex < 0 || !options[state.activeSuggestionIndex]) {
      refs.searchInput.removeAttribute("aria-activedescendant");
      return;
    }

    const activeOption = options[state.activeSuggestionIndex];
    refs.searchInput.setAttribute("aria-activedescendant", activeOption.id);
    activeOption.scrollIntoView({ block: "nearest" });
  }

  function openImageModal(src, alt, triggerElement) {
    if (!refs.imageModal || !refs.imageModalImg || !src) return;

    state.lastModalTrigger = triggerElement || document.activeElement;
    refs.imageModalImg.src = src;
    refs.imageModalImg.alt = alt || "Imagen del tema";
    if (refs.imageModalCaption) refs.imageModalCaption.textContent = alt || "";
    refs.imageModal.setAttribute("aria-hidden", "false");
    refs.imageModal.hidden = false;
    document.body.classList.add("modal-open");
    setBackgroundInteractivityDisabled(true);

    const focusable = getFocusableElements(refs.imageModalContent || refs.imageModal);
    if (focusable.length) {
      focusable[0].focus();
    } else if (refs.imageModalContent) {
      refs.imageModalContent.focus();
    }
  }

  function closeImageModal() {
    if (!isImageModalOpen()) return;

    refs.imageModal.hidden = true;
    refs.imageModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    setBackgroundInteractivityDisabled(false);
    if (refs.imageModalImg) refs.imageModalImg.src = "";
    if (refs.imageModalImg) refs.imageModalImg.alt = "";
    if (refs.imageModalCaption) refs.imageModalCaption.textContent = "";

    if (
      state.lastModalTrigger &&
      typeof state.lastModalTrigger.focus === "function" &&
      document.contains(state.lastModalTrigger)
    ) {
      state.lastModalTrigger.focus();
    }
    state.lastModalTrigger = null;
  }

  function isImageModalOpen() {
    return Boolean(refs.imageModal && !refs.imageModal.hidden);
  }

  function setBackgroundInteractivityDisabled(disabled) {
    for (const node of [refs.siteHeader, refs.mainContent]) {
      if (!node) continue;
      if (disabled) {
        node.setAttribute("inert", "");
        node.setAttribute("aria-hidden", "true");
      } else {
        node.removeAttribute("inert");
        node.removeAttribute("aria-hidden");
      }
    }
  }

  function trapModalFocus(event) {
    const modalContainer = refs.imageModalContent || refs.imageModal;
    if (!modalContainer) return;

    const focusable = getFocusableElements(modalContainer);
    if (!focusable.length) {
      event.preventDefault();
      modalContainer.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey) {
      if (active === first || !modalContainer.contains(active)) {
        event.preventDefault();
        last.focus();
      }
      return;
    }

    if (active === last || !modalContainer.contains(active)) {
      event.preventDefault();
      first.focus();
    }
  }

  function getFocusableElements(container) {
    if (!container) return [];
    const selector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled]):not([type='hidden'])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ].join(",");

    return Array.from(container.querySelectorAll(selector)).filter((element) => {
      return !element.hasAttribute("hidden") && element.getAttribute("aria-hidden") !== "true";
    });
  }

  function invalidateSearchSnapshot() {
    state.searchSnapshotKey = "";
    state.searchSnapshot = null;
  }

  function getSearchSnapshot(query) {
    const terms = getQueryTerms(query);
    const key = terms.join("|");

    if (state.searchSnapshot && state.searchSnapshotKey === key) {
      return state.searchSnapshot;
    }

    const snapshot = buildSearchSnapshot(terms);
    state.searchSnapshotKey = key;
    state.searchSnapshot = snapshot;
    return snapshot;
  }

  function buildSearchSnapshot(terms) {
    if (!terms.length) {
      return {
        terms,
        filteredCourses: data.courses.slice(),
        suggestions: [],
        topicMatchRefs: new Set()
      };
    }

    const filteredCourses = [];
    const suggestions = [];
    const topicMatchRefs = new Set();

    for (const courseEntry of searchIndex) {
      let includeCourse = hasAllTerms(courseEntry.words, terms);

      for (const topicEntry of courseEntry.topics) {
        if (!hasAllTerms(topicEntry.words, terms)) continue;
        includeCourse = true;
        topicMatchRefs.add(topicEntry.topicRef);
        suggestions.push(topicEntry.suggestion);
      }

      if (includeCourse) filteredCourses.push(courseEntry.course);
    }

    return {
      terms,
      filteredCourses,
      suggestions,
      topicMatchRefs
    };
  }

  function buildSearchIndex(courses) {
    return courses.map((course) => {
      const courseBag = [];
      courseBag.push(course.title, course.provider, course.level, course.status, course.summary);
      if (Array.isArray(course.tags)) courseBag.push(course.tags.join(" "));

      const topics = [];
      for (const module of course.modules || []) {
        courseBag.push(module.key, module.title);

        for (const topic of module.topics || []) {
          const topicBag = [];
          topicBag.push(
            course.title,
            course.summary,
            module.key,
            module.title,
            topic.code,
            topic.title,
            topic.summary
          );
          for (const section of topic.sections || []) {
            topicBag.push(section.title);
            topicBag.push((section.items || []).join(" "));
          }

          const topicRef = buildTopicRef(course.id, module.key, topic.code);
          topics.push({
            topicRef,
            words: toWordSet(topicBag.join(" ")),
            suggestion: {
              courseId: course.id,
              courseTitle: course.title,
              moduleKey: module.key,
              moduleTitle: module.title,
              topicCode: topic.code,
              topicTitle: topic.title,
              topicRef
            }
          });
        }
      }

      return {
        course,
        words: toWordSet(courseBag.join(" ")),
        topics
      };
    });
  }

  function countTopics(course) {
    return (course.modules || []).reduce((sum, module) => sum + (module.topics || []).length, 0);
  }

  function buildTopicRef(courseId, moduleKey, topicCode) {
    return `topic-${slug(courseId)}-${slug(moduleKey)}-${slug(topicCode)}`;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function hasQuery(query) {
    return getQueryTerms(query).length > 0;
  }

  function getQueryTerms(query) {
    return normalize(query)
      .split(/[^a-z0-9]+/)
      .filter(Boolean);
  }

  function toWordSet(text) {
    const words = normalize(text)
      .split(/[^a-z0-9]+/)
      .filter(Boolean);
    return new Set(words);
  }

  function hasAllTerms(wordSet, terms) {
    if (!terms.length) return true;
    if (!wordSet || !wordSet.size) return false;
    return terms.every((term) => wordSet.has(term));
  }

  function slug(value) {
    return normalize(value)
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }
})();
