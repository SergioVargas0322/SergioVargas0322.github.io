#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = process.cwd();
const dataPath = path.join(root, "assets", "js", "data.js");
const imagesRoot = path.join(root, "assets", "images");

const errors = [];
const warnings = [];

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function slug(value) {
  return normalize(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function loadCatalogData() {
  if (!fs.existsSync(dataPath)) {
    throw new Error(`No se encontro el archivo: ${dataPath}`);
  }

  const source = fs.readFileSync(dataPath, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox, { filename: dataPath });

  const data = sandbox.window.CATALOG_DATA;
  if (!data || !Array.isArray(data.courses)) {
    throw new Error("CATALOG_DATA.courses no es un arreglo valido.");
  }

  return data;
}

function walkFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function toProjectRelative(filePath) {
  return path.relative(root, filePath).replace(/\\/g, "/").toLowerCase();
}

function run() {
  const data = loadCatalogData();

  const stats = {
    courses: data.courses.length,
    modules: 0,
    topics: 0,
    sections: 0,
    items: 0,
    referencedImages: 0
  };

  const courseIds = new Set();
  const domTopicIds = new Set();
  const referencedImages = new Set();

  for (const [courseIndex, course] of data.courses.entries()) {
    const courseLabel = course.id || `course#${courseIndex + 1}`;

    if (!course.id) errors.push(`Curso sin id (indice ${courseIndex}).`);
    if (!course.title) errors.push(`Curso sin title (${courseLabel}).`);
    if (course.id) {
      if (courseIds.has(course.id)) {
        errors.push(`course.id duplicado: ${course.id}`);
      }
      courseIds.add(course.id);
    }

    if (!Array.isArray(course.modules)) {
      errors.push(`course.modules no es arreglo en ${courseLabel}.`);
      continue;
    }

    const moduleKeys = new Set();

    for (const [moduleIndex, module] of course.modules.entries()) {
      stats.modules += 1;
      const moduleLabel = module.key || `module#${moduleIndex + 1}`;

      if (!module.key) errors.push(`Modulo sin key en ${courseLabel}.`);
      if (!module.title) warnings.push(`Modulo sin title en ${courseLabel}/${moduleLabel}.`);
      if (module.key) {
        if (moduleKeys.has(module.key)) {
          errors.push(`module.key duplicado en ${courseLabel}: ${module.key}`);
        }
        moduleKeys.add(module.key);
      }

      if (!Array.isArray(module.topics)) {
        errors.push(`module.topics no es arreglo en ${courseLabel}/${moduleLabel}.`);
        continue;
      }

      const topicCodes = new Set();

      for (const [topicIndex, topic] of module.topics.entries()) {
        stats.topics += 1;
        const topicLabel = topic.code || `topic#${topicIndex + 1}`;

        if (!topic.code) errors.push(`Tema sin code en ${courseLabel}/${moduleLabel}.`);
        if (!topic.title) warnings.push(`Tema sin title en ${courseLabel}/${moduleLabel}/${topicLabel}.`);
        if (topic.code) {
          if (topicCodes.has(topic.code)) {
            errors.push(`topic.code duplicado en ${courseLabel}/${moduleLabel}: ${topic.code}`);
          }
          topicCodes.add(topic.code);
        }

        const domTopicId = `topic-${slug(course.id)}-${slug(module.key)}-${slug(topic.code)}`;
        if (domTopicIds.has(domTopicId)) {
          errors.push(
            `ID de tema duplicado para el DOM (${domTopicId}) en ${courseLabel}/${moduleLabel}/${topicLabel}.`
          );
        }
        domTopicIds.add(domTopicId);

        if (!Array.isArray(topic.sections) || topic.sections.length === 0) {
          warnings.push(`Tema sin secciones en ${courseLabel}/${moduleLabel}/${topicLabel}.`);
        } else {
          for (const section of topic.sections) {
            stats.sections += 1;
            if (!section.title) {
              warnings.push(`Seccion sin title en ${courseLabel}/${moduleLabel}/${topicLabel}.`);
            }
            if (!Array.isArray(section.items) || section.items.length === 0) {
              warnings.push(
                `Seccion sin items en ${courseLabel}/${moduleLabel}/${topicLabel}/${section.title || "sin-title"}.`
              );
            } else {
              stats.items += section.items.length;
            }
          }
        }

        if (!Array.isArray(topic.images) || topic.images.length === 0) {
          warnings.push(`Tema sin imagenes en ${courseLabel}/${moduleLabel}/${topicLabel}.`);
          continue;
        }

        for (const image of topic.images) {
          stats.referencedImages += 1;
          if (!image.src) {
            errors.push(`Imagen sin src en ${courseLabel}/${moduleLabel}/${topicLabel}.`);
            continue;
          }

          const normalizedSrc = image.src.replace(/^\.\//, "");
          const imagePath = path.resolve(root, normalizedSrc);
          referencedImages.add(toProjectRelative(imagePath));

          if (!fs.existsSync(imagePath)) {
            errors.push(
              `Imagen no existe: ${image.src} (referida por ${courseLabel}/${moduleLabel}/${topicLabel}).`
            );
          }

          if (!image.alt) {
            warnings.push(
              `Imagen sin alt en ${courseLabel}/${moduleLabel}/${topicLabel}: ${image.src}`
            );
          }
        }
      }
    }
  }

  const imageFiles = walkFiles(imagesRoot)
    .filter((filePath) => /\.(png|jpe?g|svg|webp|gif)$/i.test(filePath))
    .map((filePath) => toProjectRelative(filePath));

  const unreferenced = imageFiles.filter((filePath) => !referencedImages.has(filePath));
  if (unreferenced.length) {
    warnings.push(`Imagenes no referenciadas: ${unreferenced.length}`);
  }

  console.log("=== Catalog check summary ===");
  console.log(`Cursos: ${stats.courses}`);
  console.log(`Modulos: ${stats.modules}`);
  console.log(`Temas: ${stats.topics}`);
  console.log(`Secciones: ${stats.sections}`);
  console.log(`Items: ${stats.items}`);
  console.log(`Imagenes referenciadas: ${stats.referencedImages}`);
  console.log(`Imagenes en disco: ${imageFiles.length}`);
  console.log("");

  if (warnings.length) {
    console.log(`Warnings: ${warnings.length}`);
    for (const warning of warnings.slice(0, 25)) {
      console.log(`- ${warning}`);
    }
    if (warnings.length > 25) {
      console.log(`... y ${warnings.length - 25} warnings mas.`);
    }
    console.log("");
  }

  if (errors.length) {
    console.error(`Errores: ${errors.length}`);
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("Resultado: OK");
}

try {
  run();
} catch (error) {
  console.error("Fallo al validar el catalogo.");
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
}
