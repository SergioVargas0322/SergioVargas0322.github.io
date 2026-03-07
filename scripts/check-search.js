#!/usr/bin/env node
"use strict";

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getQueryTerms(query) {
  return normalize(query)
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

function toWordSet(text) {
  return new Set(
    normalize(text)
      .split(/[^a-z0-9]+/)
      .filter(Boolean)
  );
}

function hasAllTerms(wordSet, terms) {
  if (!terms.length) return true;
  return terms.every((term) => wordSet.has(term));
}

function matchesSearch(text, query) {
  const terms = getQueryTerms(query);
  if (!terms.length) return true;
  return hasAllTerms(toWordSet(text), terms);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function run() {
  // Exactitud por token (no por subcadenas).
  assert(matchesSearch("Memoria RAM DDR4", "ram"), 'RAM debe encontrar "RAM".');
  assert(!matchesSearch("Panorama general de red", "ram"), 'RAM no debe coincidir con "Panorama".');
  assert(!matchesSearch("Introduccion a redes", "intro"), '"intro" no debe coincidir con "introduccion".');

  // Normalizacion de tildes y mayusculas.
  assert(matchesSearch("Introducción a Ciberseguridad", "introduccion"), "Debe ignorar tildes.");
  assert(matchesSearch("Direccionamiento IPV6", "ipv6"), "Debe ignorar mayusculas/minusculas.");

  // Consulta de varias palabras: todas las palabras deben existir.
  assert(matchesSearch("M1 seguridad de red", "m1 seguridad"), "AND por terminos debe funcionar.");
  assert(!matchesSearch("M1 seguridad de red", "m1 seguridad firewall"), "Debe exigir todos los terminos.");

  console.log("Search behavior checks: OK");
}

try {
  run();
} catch (error) {
  console.error("Search behavior checks: FAIL");
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
}
