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
    imageModal: byId("imageModal"),
    imageModalImg: byId("imageModalImg"),
    imageModalCaption: byId("imageModalCaption"),
    imageModalClose: byId("imageModalClose")
  };

  const state = {
    query: "",
    activeCourseId: null,
    pendingJump: null,
    highlightTimer: null
  };
  const courseOrderMap = new Map(
    data.courses.map((course, index) => [course.id, index + 1])
  );

  if (refs.catalogTitle) refs.catalogTitle.textContent = data.title || "Catálogo de Cursos";
  if (refs.catalogSubtitle) refs.catalogSubtitle.textContent = data.subtitle || "";

  bindEvents();
  render();

  function bindEvents() {
    if (refs.searchInput) {
      refs.searchInput.addEventListener("input", (event) => {
        state.query = event.target.value.trim();
        render();
      });

      refs.searchInput.addEventListener("focus", () => {
        renderSearchSuggestions();
      });
    }

    if (refs.clearSearch) {
      refs.clearSearch.addEventListener("click", () => {
        state.query = "";
        if (refs.searchInput) refs.searchInput.value = "";
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
        renderCourseDetail();
        if (refs.coursePicker) refs.coursePicker.open = false;
      });
    }

    if (refs.searchSuggestions) {
      refs.searchSuggestions.addEventListener("click", (event) => {
        const suggestion = event.target.closest("button[data-topic-ref]");
        if (!suggestion) return;

        state.activeCourseId = suggestion.dataset.courseId || state.activeCourseId;
        state.pendingJump = {
          moduleKey: suggestion.dataset.moduleKey || "",
          topicRef: suggestion.dataset.topicRef || ""
        };
        render();
        hideSearchSuggestions();
      });
    }

    if (refs.courseDetail) {
      refs.courseDetail.addEventListener("click", (event) => {
        const imageButton = event.target.closest("button[data-image-src]");
        if (!imageButton) return;
        openImageModal(imageButton.dataset.imageSrc, imageButton.dataset.imageAlt);
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
      if (event.key !== "Escape") return;
      closeImageModal();
      hideSearchSuggestions();
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest(".search-wrap")) return;
      hideSearchSuggestions();
    });
  }

  function render() {
    const filtered = getFilteredCourses();
    if (state.activeCourseId && !filtered.some((course) => course.id === state.activeCourseId)) {
      state.activeCourseId = null;
    }

    renderCourseCards(filtered);
    renderCourseDetail();
    if (refs.resultMeta) refs.resultMeta.textContent = `${filtered.length} curso(s)`;
    renderSearchSuggestions();
  }

  function getFilteredCourses() {
    const q = state.query;
    if (!hasQuery(q)) return data.courses.slice();

    return data.courses.filter((course) => {
      const bag = [];
      bag.push(course.title, course.provider, course.level, course.status, course.summary);
      if (Array.isArray(course.tags)) bag.push(course.tags.join(" "));
      for (const module of course.modules || []) {
        bag.push(module.key, module.title);
        for (const topic of module.topics || []) {
          bag.push(topic.code, topic.title, topic.summary);
          for (const section of topic.sections || []) {
            bag.push(section.title);
            bag.push((section.items || []).join(" "));
          }
        }
      }
      return matchesSearch(bag.join(" "), q);
    });
  }

  function renderCourseCards(courses) {
    if (!refs.courseGrid) return;

    if (!courses.length) {
      refs.courseGrid.innerHTML = `<p class="empty">No hay cursos que coincidan con la búsqueda.</p>`;
      return;
    }

    refs.courseGrid.innerHTML = courses
      .map((course) => {
        const courseNumber = courseOrderMap.get(course.id) || 0;
        const totalModules = course.modules.length;
        const totalTopics = countTopics(course);
        const activeClass = course.id === state.activeCourseId ? " active" : "";
        const tags = (course.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");

        return `
        <button class="course-card${activeClass}" type="button" data-course-id="${escapeAttr(course.id)}">
          <h3>${courseNumber}. ${escapeHtml(course.title)}</h3>
          <p class="course-meta">${escapeHtml(course.provider)} - ${escapeHtml(course.level)} - ${totalModules} módulos - ${totalTopics} temas</p>
          <div class="course-tags">${tags}</div>
        </button>`;
      })
      .join("");
  }

  function renderCourseDetail() {
    if (!refs.courseDetail) return;

    const course = data.courses.find((item) => item.id === state.activeCourseId);
    if (!course) {
      refs.courseDetail.innerHTML = `<p class="empty">Selecciona un curso para ver su contenido.</p>`;
      return;
    }

    const q = state.query;
    const modules = (course.modules || []).map((module) => ({
      ...module,
      topics: (module.topics || []).filter((topic) => matchesTopic(topic, module, q))
    }));
    const visibleModules = hasQuery(q) ? modules.filter((module) => module.topics.length > 0) : modules;

    const totalTopics = countTopics(course);
    const visibleTopics = visibleModules.reduce((sum, module) => sum + module.topics.length, 0);

    refs.courseDetail.innerHTML = `
      <h2>${escapeHtml(course.title)}</h2>
      <p class="detail-summary">${escapeHtml(course.summary)}</p>
      <div class="module-list">
        ${
          visibleModules.length
            ? visibleModules.map((module) => renderModule(course.id, module, false)).join("")
            : `<p class="empty">No hay módulos/temas que coincidan con la búsqueda actual.</p>`
        }
      </div>
      <p class="course-meta">Mostrando ${visibleTopics} de ${totalTopics} temas del curso.</p>`;

    syncModuleAccordion();
    applyPendingJump();
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
          <h5>${escapeHtml(section.title || "Sección")}</h5>
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
    if (!topicNode) return;

    const activeTopic = refs.courseDetail.querySelector(".topic-card.topic-target");
    if (activeTopic && activeTopic !== topicNode) {
      activeTopic.classList.remove("topic-target");
    }

    // Reinicia la animación aunque se seleccione el mismo tema consecutivamente.
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
    if (!refs.searchSuggestions) return;

    const q = state.query;
    if (!hasQuery(q)) {
      hideSearchSuggestions();
      return;
    }

    const suggestions = getTopicSuggestions(q).slice(0, 12);
    if (!suggestions.length) {
      refs.searchSuggestions.innerHTML = `<p class="search-empty">Sin temas coincidentes para "${escapeHtml(state.query)}".</p>`;
      refs.searchSuggestions.hidden = false;
      return;
    }

    refs.searchSuggestions.innerHTML = suggestions
      .map(
        (entry) => `
      <button class="search-suggestion" type="button" data-course-id="${escapeAttr(entry.courseId)}" data-module-key="${escapeAttr(entry.moduleKey)}" data-topic-ref="${escapeAttr(entry.topicRef)}">
        <span class="suggestion-title">${escapeHtml(entry.topicCode)} - ${escapeHtml(entry.topicTitle)}</span>
        <span class="suggestion-meta">${escapeHtml(entry.courseTitle)} - ${escapeHtml(entry.moduleKey)} ${escapeHtml(entry.moduleTitle)}</span>
      </button>`
      )
      .join("");

    refs.searchSuggestions.hidden = false;
  }

  function getTopicSuggestions(q) {
    const matches = [];

    for (const course of data.courses) {
      for (const module of course.modules || []) {
        for (const topic of module.topics || []) {
          const bag = [];
          bag.push(course.title, course.summary, module.key, module.title, topic.code, topic.title, topic.summary);
          for (const section of topic.sections || []) {
            bag.push(section.title);
            bag.push((section.items || []).join(" "));
          }

          if (!matchesSearch(bag.join(" "), q)) continue;

          matches.push({
            courseId: course.id,
            courseTitle: course.title,
            moduleKey: module.key,
            moduleTitle: module.title,
            topicCode: topic.code,
            topicTitle: topic.title,
            topicRef: buildTopicRef(course.id, module.key, topic.code)
          });
        }
      }
    }

    return matches;
  }

  function hideSearchSuggestions() {
    if (!refs.searchSuggestions) return;
    refs.searchSuggestions.hidden = true;
    refs.searchSuggestions.innerHTML = "";
  }

  function openImageModal(src, alt) {
    if (!refs.imageModal || !refs.imageModalImg || !src) return;

    refs.imageModalImg.src = src;
    refs.imageModalImg.alt = alt || "Imagen del tema";
    if (refs.imageModalCaption) refs.imageModalCaption.textContent = alt || "";
    refs.imageModal.hidden = false;
    document.body.classList.add("modal-open");
    if (refs.imageModalClose) refs.imageModalClose.focus();
  }

  function closeImageModal() {
    if (!refs.imageModal || refs.imageModal.hidden) return;
    refs.imageModal.hidden = true;
    document.body.classList.remove("modal-open");
    if (refs.imageModalImg) refs.imageModalImg.src = "";
  }

  function matchesTopic(topic, module, q) {
    if (!hasQuery(q)) return true;

    const bag = [];
    bag.push(module.key, module.title, topic.code, topic.title, topic.summary);
    for (const section of topic.sections || []) {
      bag.push(section.title);
      bag.push((section.items || []).join(" "));
    }
    return matchesSearch(bag.join(" "), q);
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

  function matchesSearch(text, query) {
    const terms = getQueryTerms(query);
    if (!terms.length) return true;

    const words = normalize(text)
      .split(/[^a-z0-9]+/)
      .filter(Boolean);
    if (!words.length) return false;

    const wordSet = new Set(words);
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

