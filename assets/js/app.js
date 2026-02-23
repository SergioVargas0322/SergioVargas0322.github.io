(() => {
  "use strict";

  const data = window.CATALOG_DATA;
  if (!data || !Array.isArray(data.courses)) return;

  const refs = {
    catalogTitle: byId("catalogTitle"),
    catalogSubtitle: byId("catalogSubtitle"),
    searchInput: byId("searchInput"),
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
    activeCourseId: data.courses[0] ? data.courses[0].id : null
  };

  if (refs.catalogTitle) refs.catalogTitle.textContent = data.title || "Catalogo de Cursos";
  if (refs.catalogSubtitle) refs.catalogSubtitle.textContent = data.subtitle || "";

  bindEvents();
  render();

  function bindEvents() {
    if (refs.searchInput) {
      refs.searchInput.addEventListener("input", (event) => {
        state.query = event.target.value.trim();
        render();
      });
    }

    if (refs.clearSearch) {
      refs.clearSearch.addEventListener("click", () => {
        state.query = "";
        if (refs.searchInput) refs.searchInput.value = "";
        render();
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
      if (event.key === "Escape") closeImageModal();
    });
  }

  function render() {
    const filtered = getFilteredCourses();
    if (!filtered.some((course) => course.id === state.activeCourseId)) {
      state.activeCourseId = filtered[0] ? filtered[0].id : null;
    }

    renderCourseCards(filtered);
    renderCourseDetail();
    if (refs.resultMeta) refs.resultMeta.textContent = `${filtered.length} curso(s)`;
  }

  function getFilteredCourses() {
    const q = normalize(state.query);
    if (!q) return data.courses.slice();

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
      return normalize(bag.join(" ")).includes(q);
    });
  }

  function renderCourseCards(courses) {
    if (!refs.courseGrid) return;

    if (!courses.length) {
      refs.courseGrid.innerHTML = `<p class="empty">No hay cursos que coincidan con la busqueda.</p>`;
      return;
    }

    refs.courseGrid.innerHTML = courses
      .map((course) => {
        const totalModules = course.modules.length;
        const totalTopics = countTopics(course);
        const activeClass = course.id === state.activeCourseId ? " active" : "";
        const tags = (course.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");

        return `
        <button class="course-card${activeClass}" type="button" data-course-id="${escapeAttr(course.id)}">
          <h3>${escapeHtml(course.title)}</h3>
          <p class="course-meta">${escapeHtml(course.provider)} - ${escapeHtml(course.level)} - ${totalModules} modulos - ${totalTopics} temas</p>
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

    const q = normalize(state.query);
    const modules = (course.modules || []).map((module) => ({
      ...module,
      topics: (module.topics || []).filter((topic) => matchesTopic(topic, module, q))
    }));
    const visibleModules = q ? modules.filter((module) => module.topics.length > 0) : modules;

    const totalTopics = countTopics(course);
    const visibleTopics = visibleModules.reduce((sum, module) => sum + module.topics.length, 0);

    refs.courseDetail.innerHTML = `
      <h2>${escapeHtml(course.title)}</h2>
      <p class="detail-summary">${escapeHtml(course.summary)}</p>
      <div class="module-list">
        ${
          visibleModules.length
            ? visibleModules.map((module) => renderModule(module, false)).join("")
            : `<p class="empty">No hay modulos/temas que coincidan con la busqueda actual.</p>`
        }
      </div>
      <p class="course-meta">Mostrando ${visibleTopics} de ${totalTopics} temas del curso.</p>`;

    syncModuleAccordion();
  }

  function renderModule(module, isOpen) {
    return `
    <details class="module-item" ${isOpen ? "open" : ""}>
      <summary>
        <span>${escapeHtml(module.key)} - ${escapeHtml(module.title)}</span>
        <span>${module.topics.length} tema(s)</span>
      </summary>
      <div class="module-topics">
        ${module.topics.map((topic) => renderTopic(topic)).join("")}
      </div>
    </details>`;
  }

  function renderTopic(topic) {
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
    <article class="topic-card">
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
    if (!q) return true;

    const bag = [];
    bag.push(module.key, module.title, topic.code, topic.title, topic.summary);
    for (const section of topic.sections || []) {
      bag.push(section.title);
      bag.push((section.items || []).join(" "));
    }
    return normalize(bag.join(" ")).includes(q);
  }

  function countTopics(course) {
    return (course.modules || []).reduce((sum, module) => sum + (module.topics || []).length, 0);
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
