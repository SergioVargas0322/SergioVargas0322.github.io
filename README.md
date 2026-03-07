# SergioVargas0322.github.io

Catálogo web para organizar y consultar cursos de Cisco por curso, módulo y tema.

## Estado actual
- Proyecto activo: `CursosCISCO`.
- Cursos cargados actualmente: 10.
- Flujo de trabajo: mejora incremental de contenido tema por tema.

## Cursos incluidos
- Conceptos Básicos de Hardware de Computadora
- Operating Systems Basics
- Introducción a Cisco Packet Tracer
- Exploración de redes con Cisco Packet Tracer
- Conceptos básicos de redes
- Dispositivos de Red y Configuración Inicial
- Direccionamiento de red y solución de problemas básicos
- Soporte y Seguridad de red
- Introducción a Ciberseguridad
- Introducción al Internet de las Cosas y Transformación Digital

## Estructura principal
- `index.html`: interfaz del catálogo.
- `assets/css/styles.css`: estilos globales.
- `assets/js/data.js`: datos de cursos, módulos y temas.
- `assets/js/app.js`: render, filtros, búsqueda y navegación por temas.
- `assets/images/`: imágenes por curso.

## Ejecución local
1. Abrir `index.html` en el navegador.
2. Verificar que las rutas `assets/` carguen correctamente.

## Checks de calidad
Requisitos: Node.js 20+ (recomendado 24).

- `npm run check:data`: valida estructura del catalogo, duplicados y rutas de imagenes.
- `npm run check:search`: valida comportamiento de búsqueda por tokens exactos.
- `npm run check`: ejecuta todos los checks.

## Integración continua (CI)
El workflow [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) ejecuta `npm run check` en cada `push` y `pull_request`.
