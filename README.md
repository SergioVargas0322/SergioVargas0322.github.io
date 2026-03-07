# SergioVargas0322.github.io

Catalogo web para organizar y consultar cursos de Cisco por curso, modulo y tema.

## Estado actual
- Proyecto activo: `CursosCISCO`.
- Cursos cargados actualmente: 9.
- Flujo de trabajo: mejora incremental de contenido tema por tema.

## Cursos incluidos
- Conceptos Basicos de Hardware de Computadora
- Operating Systems Basics
- Introduccion a Cisco Packet Tracer
- Exploracion de redes con Cisco Packet Tracer
- Conceptos basicos de redes
- Dispositivos de Red y Configuracion Inicial
- Direccionamiento de red y solucion de problemas basicos
- Soporte y Seguridad de red
- Introduccion a Ciberseguridad

## Estructura principal
- `index.html`: interfaz del catalogo.
- `assets/css/styles.css`: estilos globales.
- `assets/js/data.js`: datos de cursos, modulos y temas.
- `assets/js/app.js`: render, filtros, busqueda y navegacion por temas.
- `assets/images/`: imagenes por curso.

## Ejecucion local
1. Abrir `index.html` en el navegador.
2. Verificar que las rutas `assets/` carguen correctamente.

## Checks de calidad
Requisitos: Node.js 20+ (recomendado 24).

- `npm run check:data`: valida estructura del catalogo, duplicados y rutas de imagenes.
- `npm run check:search`: valida comportamiento de busqueda por tokens exactos.
- `npm run check`: ejecuta todos los checks.

## Integracion continua (CI)
El workflow [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) ejecuta `npm run check` en cada `push` y `pull_request`.
