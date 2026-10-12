// Builds the project grid (index.html) and project pages (project.html)
// from the PROJECTS list in projects.js. You shouldn't need to edit this.

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = String(text);
  return div.innerHTML;
}

function projectCard(p) {
  return `
    <a class="card" href="project.html?id=${encodeURIComponent(p.id)}" data-category="${escapeHtml(p.category)}">
      <div class="card-image"><img src="${escapeHtml(p.cover)}" alt="${escapeHtml(p.title)}" loading="lazy"></div>
      <div class="card-text">
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.category)} · ${escapeHtml(p.year)}</p>
      </div>
    </a>`;
}

function renderGrid() {
  const grid = document.getElementById("project-grid");
  const filters = document.getElementById("filters");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(projectCard).join("");

  const categories = ["All", ...new Set(PROJECTS.map(p => p.category))];
  if (categories.length <= 2) return; // no point filtering a single category

  filters.innerHTML = categories
    .map((c, i) => `<button class="${i === 0 ? "active" : ""}" data-filter="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
    .join("");

  filters.addEventListener("click", e => {
    const button = e.target.closest("button");
    if (!button) return;
    filters.querySelectorAll("button").forEach(b => b.classList.toggle("active", b === button));
    const filter = button.dataset.filter;
    grid.querySelectorAll(".card").forEach(card => {
      card.hidden = filter !== "All" && card.dataset.category !== filter;
    });
  });
}

function renderProject() {
  const container = document.getElementById("project");
  if (!container) return;

  const id = new URLSearchParams(location.search).get("id");
  const index = PROJECTS.findIndex(p => p.id === id);
  if (index === -1) {
    container.innerHTML = `<section class="intro"><h1>Project not found.</h1><p><a href="index.html#work">Back to all work</a></p></section>`;
    return;
  }

  const p = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  document.title = `${p.title} · ${document.title.split("·").pop().trim()}`;

  const details = Object.entries(p.details || {})
    .map(([k, v]) => `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`)
    .join("");
  const description = (p.description || []).map(t => `<p>${escapeHtml(t)}</p>`).join("");
  const gallery = (p.gallery || [])
    .map(img => `
      <figure>
        <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption || p.title)}" loading="lazy">
        ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ""}
      </figure>`)
    .join("");

  container.innerHTML = `
    <article class="project">
      <header class="project-header">
        <p class="eyebrow">${escapeHtml(p.category)} · ${escapeHtml(p.year)}</p>
        <h1>${escapeHtml(p.title)}</h1>
        <p class="lead">${escapeHtml(p.summary)}</p>
      </header>
      <img class="project-cover" src="${escapeHtml(p.cover)}" alt="${escapeHtml(p.title)}">
      <div class="project-body">
        <dl class="details">${details}</dl>
        <div class="description">${description}</div>
      </div>
      <div class="gallery">${gallery}</div>
      ${next.id !== p.id ? `<a class="next-project" href="project.html?id=${encodeURIComponent(next.id)}">Next project: ${escapeHtml(next.title)} →</a>` : ""}
    </article>`;
}

document.getElementById("year").textContent = new Date().getFullYear();
renderGrid();
renderProject();
