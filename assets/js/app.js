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
    jumpToCourses: byId("jumpToCourses"),
    coursePicker: byId("coursePicker"),
    resultMeta: byId("resultMeta"),
    courseGrid: byId("courseGrid"),
    courseDetail: byId("courseDetail"),
    siteHeader: document.querySelector(".site-header"),
    mainContent: byId("mainContent"),
    imageModal: byId("imageModal"),
    imageModalContent: document.querySelector("#imageModal .image-modal-content"),
    imageModalImg: byId("imageModalImg"),
    imageModalNav: byId("imageModalNav"),
    imageModalPrev: byId("imageModalPrev"),
    imageModalNext: byId("imageModalNext"),
    imageModalStatus: byId("imageModalStatus"),
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
    topicImageIndexes: Object.create(null),
    topicAutoplayTimers: Object.create(null),
    autoplayResumeTimer: null,
    autoplayPaused: false,
    autoplayHoldForModal: false,
    modalTopicRef: "",
    lastModalTrigger: null
  };

  const courseOrderMap = new Map(
    data.courses.map((course, index) => [course.id, index + 1])
  );
  const searchIndex = buildSearchIndex(data.courses);
  const TOPIC_AUTOPLAY_DELAY_MS = 5000;
  const TOPIC_AUTOPLAY_RESUME_DELAY_MS = 10000;
  const HEADER_COMPACT_ENTER_Y = 84;
  const HEADER_COMPACT_EXIT_Y = 28;
  const COURSE_VISUALS = {
    "hardware-basics": { tone: "hardware", sigil: "HW", label: "Hardware" },
    "operating-systems-basics": { tone: "systems", sigil: "OS", label: "Sistemas" },
    "packet-tracer-intro": { tone: "packet", sigil: "PT", label: "Simulación" },
    "packet-tracer-network-exploration": { tone: "topology", sigil: "NX", label: "Topologías" },
    "networking-basics": { tone: "network", sigil: "NET", label: "Redes" },
    "network-devices-initial-config": {
      tone: "config",
      sigil: "CFG",
      label: "Configuración"
    },
    "network-addressing-troubleshooting-basics": {
      tone: "addressing",
      sigil: "IP",
      label: "Dirección"
    },
    "network-support-security": { tone: "support", sigil: "NOC", label: "Soporte" },
    "intro-cybersecurity": { tone: "cyber", sigil: "CY", label: "Ciberseg." },
    "intro-iot-digital-transformation": {
      tone: "iot",
      sigil: "IOT",
      label: "Transformación"
    },
    "iot-packet-tracer-exploration": { tone: "iotlab", sigil: "LAB", label: "IoT Lab" }
  };

  if (refs.catalogTitle) refs.catalogTitle.textContent = data.title || "Catálogo de Cursos";
  if (refs.catalogSubtitle) refs.catalogSubtitle.textContent = data.subtitle || "";

  bindEvents();
  render();
  syncHeaderChrome();

  function bindEvents() {
    let headerSyncQueued = false;

    const queueHeaderSync = () => {
      if (headerSyncQueued) return;
      headerSyncQueued = true;
      window.requestAnimationFrame(() => {
        headerSyncQueued = false;
        syncHeaderChrome();
      });
    };

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
      refs.courseDetail.addEventListener("click", onCourseDetailClick);
      refs.courseDetail.addEventListener("keydown", onCourseDetailKeyDown);
    }

    if (refs.imageModalPrev) {
      refs.imageModalPrev.addEventListener("click", () => {
        moveImageModal(-1);
      });
    }

    if (refs.jumpToCourses) {
      refs.jumpToCourses.addEventListener("click", jumpToCourses);
    }

    if (refs.imageModalNext) {
      refs.imageModalNext.addEventListener("click", () => {
        moveImageModal(1);
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
      if (!isImageModalOpen()) return;

      if (event.key === "Tab") {
        trapModalFocus(event);
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        moveImageModal(event.key === "ArrowRight" ? 1 : -1);
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest(".search-wrap")) return;
      hideSearchSuggestions();
    });

    window.addEventListener("scroll", queueHeaderSync, { passive: true });
    window.addEventListener("resize", queueHeaderSync);
  }

  function syncHeaderChrome() {
    if (!refs.siteHeader) return;
    const isCompact = refs.siteHeader.classList.contains("is-compact");
    const shouldCompact = isCompact
      ? window.scrollY > HEADER_COMPACT_EXIT_Y
      : window.scrollY > HEADER_COMPACT_ENTER_Y;
    refs.siteHeader.classList.toggle("is-compact", shouldCompact);
    if (isCompact && !shouldCompact && window.scrollY > 0) {
      forceScrollToTop();
    }
    if (refs.jumpToCourses) {
      refs.jumpToCourses.tabIndex = shouldCompact ? 0 : -1;
      refs.jumpToCourses.setAttribute("aria-hidden", String(!shouldCompact));
    }
    syncStickyOffsets();
  }

  function forceScrollToTop() {
    const scrollToTop = () => {
      const scrollingElement = document.scrollingElement || document.documentElement || document.body;
      if (scrollingElement) scrollingElement.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    scrollToTop();
    window.requestAnimationFrame(scrollToTop);
    window.setTimeout(scrollToTop, 240);
  }

  function jumpToCourses() {
    hideSearchSuggestions();
    if (refs.coursePicker) refs.coursePicker.open = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => {
      const summary = refs.coursePicker ? refs.coursePicker.querySelector("summary") : null;
      if (summary && typeof summary.focus === "function") {
        summary.focus({ preventScroll: true });
      }
    }, 360);
  }

  function syncStickyOffsets() {
    if (!refs.siteHeader) return;
    const rootStyle = window.getComputedStyle(document.documentElement);
    const stickyTop = Number.parseFloat(rootStyle.getPropertyValue("--header-sticky-top")) || 0;
    const headerHeight = refs.siteHeader.getBoundingClientRect().height;
    const contentOffset = Math.ceil(headerHeight + stickyTop + 16);
    document.documentElement.style.setProperty("--content-scroll-offset", `${contentOffset}px`);
  }

  function scrollNodeIntoView(node, behavior = "smooth") {
    if (!node) return;
    syncStickyOffsets();
    const rootStyle = window.getComputedStyle(document.documentElement);
    const offset = Number.parseFloat(rootStyle.getPropertyValue("--content-scroll-offset")) || 0;
    const targetTop = window.scrollY + node.getBoundingClientRect().top - offset;
    window.scrollTo({
      top: Math.max(0, Math.round(targetTop)),
      behavior
    });
  }

  function scrollNodeIntoViewSettled(node, behavior = "smooth") {
    if (!node) return;

    scrollNodeIntoView(node, behavior);
    window.requestAnimationFrame(() => {
      scrollNodeIntoView(node, "auto");
    });
    window.setTimeout(() => {
      scrollNodeIntoView(node, "auto");
    }, 240);
  }

  function getCourseVisual(course) {
    const visual = COURSE_VISUALS[course && course.id ? course.id : ""];
    if (visual) return visual;

    const fallbackLabel = Array.isArray(course && course.tags) && course.tags.length
      ? formatTagLabel(course.tags[0])
      : "Curso";
    const fallbackSigil = String(fallbackLabel)
      .replace(/[^a-z0-9]+/gi, "")
      .slice(0, 3)
      .toUpperCase() || "CS";

    return {
      tone: "default",
      sigil: fallbackSigil,
      label: fallbackLabel
    };
  }

  function formatTagLabel(tag) {
    return String(tag || "")
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
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

  function onCourseDetailClick(event) {
    const carouselControl = event.target.closest("button[data-carousel-action], button[data-carousel-index]");
    if (carouselControl) {
      event.preventDefault();
      pauseAutoplayForInteraction();
      updateTopicCarousel(carouselControl);
      return;
    }

    const imageButton = event.target.closest("button[data-image-src]");
    if (!imageButton) return;

    openImageModal(
      imageButton.dataset.imageSrc,
      imageButton.dataset.imageAlt,
      imageButton.dataset.imageCaption,
      imageButton
    );
  }

  function onCourseDetailKeyDown(event) {
    const imageButton = event.target.closest(".topic-image-button[data-topic-ref]");
    if (!imageButton) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    pauseAutoplayForInteraction();
    shiftTopicImage(
      imageButton.dataset.topicRef || "",
      event.key === "ArrowRight" ? 1 : -1,
      { type: "image" }
    );
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
      refs.courseGrid.innerHTML = `<p class="empty">No hay cursos que coincidan con la búsqueda.</p>`;
      return;
    }

    refs.courseGrid.innerHTML = courses
      .map((course) => {
        const courseNumber = courseOrderMap.get(course.id) || 0;
        const totalModules = (course.modules || []).length;
        const totalTopics = countTopics(course);
        const activeClass = course.id === state.activeCourseId ? " active" : "";
        const visual = getCourseVisual(course);
        const tags = (course.tags || [])
          .map((tag) => `<span class="tag">${escapeHtml(formatTagLabel(tag))}</span>`)
          .join("");

        return `
        <button class="course-card${activeClass}" type="button" data-course-id="${escapeAttr(course.id)}" data-course-tone="${escapeAttr(visual.tone)}">
          <div class="course-card-top">
            <div class="course-identity">
              <span class="course-sigil" aria-hidden="true">${escapeHtml(visual.sigil)}</span>
              <span class="course-track">${escapeHtml(visual.label)}</span>
            </div>
            <span class="course-order" aria-label="Curso ${courseNumber}">${courseNumber}</span>
          </div>
          <h3>${escapeHtml(course.title)}</h3>
          <p class="course-meta">${escapeHtml(course.provider)} - ${escapeHtml(course.level)} - ${totalModules} módulos - ${totalTopics} temas</p>
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
      syncTopicAutoplay();
      return;
    }

    const hasTerms = snapshot.terms.length > 0;
    const visual = getCourseVisual(course);
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
      <div class="course-detail-shell" data-course-tone="${escapeAttr(visual.tone)}">
        <div class="course-hero">
          <div class="course-hero-mark">
            <span class="course-hero-sigil" aria-hidden="true">${escapeHtml(visual.sigil)}</span>
            <p class="course-hero-track">${escapeHtml(visual.label)}</p>
          </div>
          <div class="course-hero-copy">
            <p class="course-hero-meta">${escapeHtml(course.provider)} - ${escapeHtml(course.level)}</p>
            <h2>${escapeHtml(course.title)}</h2>
            <p class="detail-summary">${escapeHtml(course.summary)}</p>
          </div>
        </div>
        <div class="module-list">
          ${
            visibleModules.length
              ? visibleModules.map((module) => renderModule(course.id, module, false)).join("")
              : `<p class="empty">No hay módulos/temas que coincidan con la búsqueda actual.</p>`
          }
        </div>
        <p class="course-meta">Mostrando ${visibleTopics} de ${totalTopics} temas del curso.</p>
      </div>`;

    syncModuleAccordion();
    applyPendingJump();
    syncTopicAutoplay();
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
          ${renderTopicMedia(topic, topicRef)}
        </aside>
      </div>
    </article>`;
  }

  function renderTopicMedia(topic, topicRef) {
    const images = topic.images || [];
    if (!images.length) return `<p class="topic-image-hint">Sin imagen disponible.</p>`;

    const activeIndex = getTopicImageIndex(topicRef, images.length);
    const activeImage = images[activeIndex];
    const imageCaption = getImageCaption(activeImage, topic.title, activeIndex, images.length);
    const hasMultipleImages = images.length > 1;

    return `
      <div class="topic-carousel">
        <button
          class="topic-image-button"
          type="button"
          data-image-src="${escapeAttr(activeImage.src)}"
          data-image-alt="${escapeAttr(activeImage.alt || topic.title)}"
          data-image-caption="${escapeAttr(imageCaption)}"
          data-topic-ref="${escapeAttr(topicRef)}"
          data-image-index="${activeIndex}"
          aria-label="${escapeAttr(`Abrir ${imageCaption}`)}"
        >
          <img loading="lazy" src="${escapeAttr(activeImage.src)}" alt="${escapeAttr(activeImage.alt || topic.title)}"/>
        </button>
        ${
          hasMultipleImages
            ? `<div class="topic-carousel-toolbar">
                <div class="topic-carousel-nav" role="group" aria-label="Navegación de imágenes">
                  <button class="topic-carousel-step" type="button" data-topic-ref="${escapeAttr(topicRef)}" data-carousel-action="prev" aria-label="Mostrar imagen anterior">
                    Anterior
                  </button>
                  <span class="topic-carousel-status" aria-live="polite">${activeIndex + 1} / ${images.length}</span>
                  <button class="topic-carousel-step" type="button" data-topic-ref="${escapeAttr(topicRef)}" data-carousel-action="next" aria-label="Mostrar imagen siguiente">
                    Siguiente
                  </button>
                </div>
                <div class="topic-carousel-dots" role="group" aria-label="Seleccionar imagen">
                  ${images
                    .map(
                      (image, index) => `
                    <button
                      class="topic-carousel-dot${index === activeIndex ? " is-active" : ""}"
                      type="button"
                      data-topic-ref="${escapeAttr(topicRef)}"
                      data-carousel-index="${index}"
                      aria-label="${escapeAttr(`Mostrar imagen ${index + 1} de ${images.length}`)}"
                      aria-pressed="${String(index === activeIndex)}"
                    >
                      <span class="sr-only">Imagen ${index + 1}</span>
                    </button>`
                    )
                    .join("")}
                </div>
              </div>`
            : ""
        }
        <p class="topic-image-hint">${
          hasMultipleImages
            ? "Usa Anterior o Siguiente para cambiar. Haz clic para ampliar."
            : "Haz clic en la imagen para ampliar."
        }</p>
      </div>`;
  }

  function updateTopicCarousel(controlButton) {
    const topicRef = controlButton.dataset.topicRef || "";
    const topicContext = findTopicByRef(topicRef);
    if (!topicContext) return;

    const images = topicContext.topic.images || [];
    if (images.length < 2) return;

    let nextIndex = getTopicImageIndex(topicRef, images.length);
    let focusRequest = { type: "image" };

    if (controlButton.dataset.carouselAction === "prev") {
      nextIndex -= 1;
      focusRequest = { type: "action", value: "prev" };
    } else if (controlButton.dataset.carouselAction === "next") {
      nextIndex += 1;
      focusRequest = { type: "action", value: "next" };
    } else if (Object.prototype.hasOwnProperty.call(controlButton.dataset, "carouselIndex")) {
      nextIndex = Number(controlButton.dataset.carouselIndex);
      nextIndex = normalizeCarouselIndex(nextIndex, images.length);
      focusRequest = { type: "index", value: String(nextIndex) };
    }

    setTopicImageIndex(topicRef, nextIndex, images.length);
    refreshTopicMedia(topicContext.topic, topicRef, focusRequest);
    syncImageModalTopic(topicRef);
  }

  function shiftTopicImage(topicRef, step, focusRequest) {
    const topicContext = findTopicByRef(topicRef);
    if (!topicContext) return;

    const images = topicContext.topic.images || [];
    if (images.length < 2) return;

    const activeIndex = getTopicImageIndex(topicRef, images.length);
    setTopicImageIndex(topicRef, activeIndex + step, images.length);
    refreshTopicMedia(topicContext.topic, topicRef, focusRequest);
    syncImageModalTopic(topicRef);
  }

  function refreshTopicMedia(topic, topicRef, focusRequest) {
    const topicNode = byId(topicRef);
    if (!topicNode) return;

    const mediaNode = topicNode.querySelector(".topic-media");
    if (!mediaNode) return;

    mediaNode.innerHTML = renderTopicMedia(topic, topicRef);
    restoreTopicMediaFocus(topicNode, focusRequest);
  }

  function restoreTopicMediaFocus(topicNode, focusRequest) {
    if (!topicNode || !focusRequest) return;

    const controls = Array.from(topicNode.querySelectorAll(".topic-media button"));
    let nextFocus = null;

    if (focusRequest.type === "action") {
      nextFocus = controls.find((button) => button.dataset.carouselAction === focusRequest.value) || null;
    } else if (focusRequest.type === "index") {
      nextFocus = controls.find((button) => button.dataset.carouselIndex === focusRequest.value) || null;
    } else {
      nextFocus = topicNode.querySelector(".topic-image-button");
    }

    if (nextFocus) nextFocus.focus();
  }

  function findTopicByRef(topicRef) {
    const course = data.courses.find((item) => item.id === state.activeCourseId);
    if (!course || !topicRef) return null;

    for (const module of course.modules || []) {
      for (const topic of module.topics || []) {
        if (buildTopicRef(course.id, module.key, topic.code) === topicRef) {
          return { course, module, topic };
        }
      }
    }

    return null;
  }

  function getTopicImageIndex(topicRef, imageCount) {
    if (!imageCount) return 0;
    const storedIndex = Number(state.topicImageIndexes[topicRef]);
    if (!Number.isInteger(storedIndex)) return 0;
    return normalizeCarouselIndex(storedIndex, imageCount);
  }

  function setTopicImageIndex(topicRef, nextIndex, imageCount) {
    if (!topicRef || !imageCount) return 0;
    const normalizedIndex = normalizeCarouselIndex(nextIndex, imageCount);
    state.topicImageIndexes[topicRef] = normalizedIndex;
    return normalizedIndex;
  }

  function normalizeCarouselIndex(index, imageCount) {
    if (!imageCount) return 0;
    const safeIndex = Number.isFinite(index) ? Math.trunc(index) : 0;
    return (safeIndex + imageCount) % imageCount;
  }

  function getImageCaption(image, fallbackTitle, index, total) {
    const baseText = (image && image.alt) || fallbackTitle || "Imagen del tema";
    if (total > 1) return `Imagen ${index + 1} de ${total}. ${baseText}`;
    return baseText;
  }

  function syncTopicAutoplay(options = {}) {
    const immediate = Boolean(options.immediate);
    const eligibleTopicRefs = getAutoplayEligibleTopicRefs();
    const timerTopicRefs = Object.keys(state.topicAutoplayTimers);

    timerTopicRefs.forEach((topicRef) => {
      if (!eligibleTopicRefs.has(topicRef) || state.autoplayPaused) {
        clearTopicAutoplayTimer(topicRef);
      }
    });

    if (state.autoplayPaused) return;

    eligibleTopicRefs.forEach((topicRef) => {
      if (!state.topicAutoplayTimers[topicRef]) {
        scheduleTopicAutoplay(topicRef, immediate ? 0 : TOPIC_AUTOPLAY_DELAY_MS);
      }
    });
  }

  function getAutoplayEligibleTopicRefs() {
    if (!refs.courseDetail) return new Set();

    const topicRefs = new Set();
    const imageButtons = refs.courseDetail.querySelectorAll(
      "details.module-item[open] .topic-image-button[data-topic-ref]"
    );

    imageButtons.forEach((button) => {
      const topicRef = button.dataset.topicRef || "";
      const topicContext = findTopicByRef(topicRef);
      if ((topicContext && topicContext.topic.images ? topicContext.topic.images.length : 0) > 1) {
        topicRefs.add(topicRef);
      }
    });

    return topicRefs;
  }

  function scheduleTopicAutoplay(topicRef, delay = TOPIC_AUTOPLAY_DELAY_MS) {
    if (!topicRef || state.autoplayPaused) return;

    clearTopicAutoplayTimer(topicRef);
    state.topicAutoplayTimers[topicRef] = window.setTimeout(() => {
      delete state.topicAutoplayTimers[topicRef];
      autoplayTopicImage(topicRef);
    }, delay);
  }

  function autoplayTopicImage(topicRef) {
    if (!topicRef || state.autoplayPaused) return;
    if (isImageModalOpen()) return;

    const topicNode = byId(topicRef);
    if (!topicNode || !topicNode.closest("details.module-item[open]")) return;

    const topicContext = findTopicByRef(topicRef);
    if (!topicContext) return;

    const images = topicContext.topic.images || [];
    if (images.length < 2) return;

    const activeIndex = getTopicImageIndex(topicRef, images.length);
    setTopicImageIndex(topicRef, activeIndex + 1, images.length);
    refreshTopicMedia(topicContext.topic, topicRef);
    scheduleTopicAutoplay(topicRef, TOPIC_AUTOPLAY_DELAY_MS);
  }

  function clearTopicAutoplayTimer(topicRef) {
    const timerId = state.topicAutoplayTimers[topicRef];
    if (!timerId) return;
    window.clearTimeout(timerId);
    delete state.topicAutoplayTimers[topicRef];
  }

  function clearAllTopicAutoplayTimers() {
    Object.keys(state.topicAutoplayTimers).forEach((topicRef) => {
      clearTopicAutoplayTimer(topicRef);
    });
  }

  function clearAutoplayResumeTimer() {
    if (!state.autoplayResumeTimer) return;
    window.clearTimeout(state.autoplayResumeTimer);
    state.autoplayResumeTimer = null;
  }

  function pauseAutoplayForInteraction() {
    state.autoplayPaused = true;
    state.autoplayHoldForModal = false;
    clearAllTopicAutoplayTimers();
    clearAutoplayResumeTimer();
    scheduleAutoplayResume(TOPIC_AUTOPLAY_RESUME_DELAY_MS);
  }

  function pauseAutoplayUntilModalClose() {
    state.autoplayPaused = true;
    state.autoplayHoldForModal = true;
    clearAllTopicAutoplayTimers();
    clearAutoplayResumeTimer();
  }

  function scheduleAutoplayResume(delay = TOPIC_AUTOPLAY_RESUME_DELAY_MS) {
    clearAutoplayResumeTimer();
    if (state.autoplayHoldForModal) return;

    state.autoplayResumeTimer = window.setTimeout(() => {
      state.autoplayResumeTimer = null;
      if (state.autoplayHoldForModal) return;
      state.autoplayPaused = false;
      syncTopicAutoplay({ immediate: true });
    }, delay);
  }

  function syncModuleAccordion() {
    if (!refs.courseDetail) return;

    const moduleItems = refs.courseDetail.querySelectorAll("details.module-item");
    moduleItems.forEach((moduleItem) => {
      moduleItem.addEventListener("toggle", () => {
        if (!moduleItem.open) {
          syncTopicAutoplay();
          return;
        }

        moduleItems.forEach((otherItem) => {
          if (otherItem !== moduleItem) otherItem.open = false;
        });

        syncTopicAutoplay();
        requestAnimationFrame(() => {
          scrollNodeIntoViewSettled(moduleItem);
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
      scrollNodeIntoViewSettled(topicNode);
      flashTopic(topicNode);
    }, moduleNode ? 180 : 0);
  }

  function flashTopic(topicNode) {
    if (!topicNode || !refs.courseDetail) return;

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

  function openImageModal(src, alt, caption, triggerElement) {
    if (!refs.imageModal || !refs.imageModalImg || !src) return;

    pauseAutoplayUntilModalClose();
    state.lastModalTrigger = triggerElement || document.activeElement;
    state.modalTopicRef = triggerElement && triggerElement.dataset ? triggerElement.dataset.topicRef || "" : "";

    if (state.modalTopicRef) {
      const topicContext = findTopicByRef(state.modalTopicRef);
      const images = topicContext && topicContext.topic ? topicContext.topic.images || [] : [];
      const triggerIndex = Number(triggerElement.dataset.imageIndex);
      if (topicContext && images.length) {
        setTopicImageIndex(state.modalTopicRef, triggerIndex, images.length);
        syncImageModalTopic(state.modalTopicRef);
      } else {
        renderImageModalFallback(src, alt, caption);
      }
    } else {
      renderImageModalFallback(src, alt, caption);
    }

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

    const modalTopicRef = state.modalTopicRef;
    const topicNode = modalTopicRef ? byId(modalTopicRef) : null;
    const replacementTrigger = topicNode ? topicNode.querySelector(".topic-image-button") : null;

    refs.imageModal.hidden = true;
    refs.imageModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    setBackgroundInteractivityDisabled(false);
    if (refs.imageModalImg) refs.imageModalImg.src = "";
    if (refs.imageModalImg) refs.imageModalImg.alt = "";
    if (refs.imageModalNav) refs.imageModalNav.hidden = true;
    if (refs.imageModalStatus) refs.imageModalStatus.textContent = "";
    if (refs.imageModalCaption) refs.imageModalCaption.textContent = "";

    if (
      state.lastModalTrigger &&
      typeof state.lastModalTrigger.focus === "function" &&
      document.contains(state.lastModalTrigger)
    ) {
      state.lastModalTrigger.focus();
    } else if (replacementTrigger && typeof replacementTrigger.focus === "function") {
      replacementTrigger.focus();
    }

    state.lastModalTrigger = null;
    state.modalTopicRef = "";
    state.autoplayHoldForModal = false;
    state.autoplayPaused = true;
    scheduleAutoplayResume(TOPIC_AUTOPLAY_RESUME_DELAY_MS);
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

  function moveImageModal(step) {
    if (!isImageModalOpen() || !state.modalTopicRef) return;

    const topicContext = findTopicByRef(state.modalTopicRef);
    if (!topicContext) return;

    const images = topicContext.topic.images || [];
    if (images.length < 2) return;

    pauseAutoplayUntilModalClose();
    const activeIndex = getTopicImageIndex(state.modalTopicRef, images.length);
    setTopicImageIndex(state.modalTopicRef, activeIndex + step, images.length);
    refreshTopicMedia(topicContext.topic, state.modalTopicRef);
    syncImageModalTopic(state.modalTopicRef);
  }

  function syncImageModalTopic(topicRef) {
    if (!topicRef || topicRef !== state.modalTopicRef) return;

    const topicContext = findTopicByRef(topicRef);
    if (!topicContext) return;

    const images = topicContext.topic.images || [];
    if (!images.length) return;

    const activeIndex = getTopicImageIndex(topicRef, images.length);
    const activeImage = images[activeIndex];
    const imageCaption = getImageCaption(activeImage, topicContext.topic.title, activeIndex, images.length);

    refs.imageModalImg.src = activeImage.src;
    refs.imageModalImg.alt = activeImage.alt || topicContext.topic.title || "Imagen del tema";
    if (refs.imageModalCaption) refs.imageModalCaption.textContent = imageCaption;
    if (refs.imageModalNav) refs.imageModalNav.hidden = images.length < 2;
    if (refs.imageModalStatus) {
      refs.imageModalStatus.textContent = images.length > 1 ? `${activeIndex + 1} / ${images.length}` : "";
    }
  }

  function renderImageModalFallback(src, alt, caption) {
    refs.imageModalImg.src = src;
    refs.imageModalImg.alt = alt || "Imagen del tema";
    if (refs.imageModalNav) refs.imageModalNav.hidden = true;
    if (refs.imageModalStatus) refs.imageModalStatus.textContent = "";
    if (refs.imageModalCaption) refs.imageModalCaption.textContent = caption || alt || "";
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
