#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = process.cwd();
const dataPath = path.join(root, "assets", "js", "data.js");
const indexPath = path.join(root, "index.html");
const readmePath = path.join(root, "README.md");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function loadCatalogData() {
  const source = fs.readFileSync(dataPath, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox, { filename: dataPath });

  const data = sandbox.window.CATALOG_DATA;
  assert(data && Array.isArray(data.courses), "CATALOG_DATA.courses no es un arreglo valido.");
  return data;
}

function getReadmeCourseSection(readmeSource) {
  const sectionMatch = readmeSource.match(/## Cursos incluidos\r?\n([\s\S]*?)(?:\r?\n## |\s*$)/);
  assert(sectionMatch, "README.md no contiene la seccion '## Cursos incluidos'.");
  return sectionMatch[1]
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
}

function run() {
  assert(fs.existsSync(indexPath), "No existe index.html.");
  assert(fs.existsSync(readmePath), "No existe README.md.");

  const data = loadCatalogData();
  const indexSource = fs.readFileSync(indexPath, "utf8");
  const readmeSource = fs.readFileSync(readmePath, "utf8");

  const requiredIndexMarkers = [
    'id="imageModal"',
    'id="imageModalClose"',
    'id="imageModalNav"',
    'id="imageModalPrev"',
    'id="imageModalNext"',
    'id="imageModalStatus"',
    'id="imageModalCaption"',
    'id="imageModalImg"',
    'id="searchInput"',
    'id="searchSuggestions"'
  ];

  requiredIndexMarkers.forEach((marker) => {
    assert(indexSource.includes(marker), `index.html no contiene el marcador requerido: ${marker}`);
  });

  const modalContentClass = /class="[^"]*\bimage-modal-content\b[^"]*"/;
  assert(modalContentClass.test(indexSource), "index.html no contiene '.image-modal-content'.");

  const faviconMatch = indexSource.match(
    /<link[^>]+rel=["']icon["'][^>]+href=["']([^"']+)["'][^>]*>/i
  );
  assert(faviconMatch, "index.html no declara un favicon con rel=\"icon\".");

  const faviconPath = path.resolve(root, faviconMatch[1].replace(/^\.\//, ""));
  assert(fs.existsSync(faviconPath), `No existe el favicon declarado: ${faviconMatch[1]}`);

  const countMatch = readmeSource.match(/- Cursos cargados actualmente:\s*(\d+)\./);
  assert(countMatch, "README.md no declara el numero de cursos cargados actualmente.");
  assert(
    Number(countMatch[1]) === data.courses.length,
    `README.md declara ${countMatch[1]} cursos, pero el catalogo tiene ${data.courses.length}.`
  );

  const listedCourses = getReadmeCourseSection(readmeSource);
  const catalogCourses = data.courses.map((course) => course.title);

  assert(
    listedCourses.length === catalogCourses.length,
    `README.md lista ${listedCourses.length} cursos, pero el catalogo tiene ${catalogCourses.length}.`
  );

  catalogCourses.forEach((title) => {
    const exactLine = new RegExp(`^- ${escapeRegex(title)}$`, "m");
    assert(exactLine.test(readmeSource), `README.md no lista el curso: ${title}`);
  });

  console.log("UI integrity checks: OK");
}

try {
  run();
} catch (error) {
  console.error("UI integrity checks: FAIL");
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
}
