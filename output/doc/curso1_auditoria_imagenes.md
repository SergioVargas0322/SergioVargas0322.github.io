# Curso 1 - Auditoria de Imagenes

Documento revisado: `Conceptos básicos de hardware de computadora.docx`

## Resumen ejecutivo

- El documento tiene 52 paginas y 23 imagenes/figuras embebidas.
- Las 23 imagenes actuales se visualizan completas dentro del area util de la pagina.
- Ninguna imagen presenta distorsion de proporcion. La diferencia maxima entre proporcion nativa y proporcion colocada es inferior a 0.02%.
- El principal problema no es de maquetacion sino de cobertura pedagogica: el modulo 1 casi no tiene apoyo visual, mientras que los modulos 2 y 3 tienen varias figuras pero todavia hay temas sin imagen o con imagen demasiado generica.

## Validacion tecnica

- Evidencia de render: `tmp/docs/curso1_review/curso1_source.pdf`
- Hojas de contacto de paginas: `tmp/docs/curso1_review/contact_pages_*.png`
- Hojas de contacto de imagenes: `tmp/docs/curso1_review/contact_media_*.png`
- Resultado: no detecte recortes, deformaciones ni figuras salidas de margen.

## Criterio usado

- La imagen debe explicar o reforzar el concepto del tema, no solo decorar.
- En temas de procedimiento, la imagen correcta es una foto tecnica o diagrama del paso real.
- En temas comparativos, una tabla o figura comparativa si es valida como imagen.
- En temas de configuracion, una captura de interfaz solo sirve si muestra exactamente la accion descrita.

## Auditoria por modulo

### Modulo 1 - Computadoras personales

| Tema | Estado actual | Veredicto | Imagen que deberia quedar |
| --- | --- | --- | --- |
| 1.0.2 ¿Qué aprenderé en este módulo? | Tabla de resultados de aprendizaje | Mantener | La tabla actual es pertinente y legible. |
| 1.1.1 Seguridad General y de Incendios | Sin imagen | Agregar | Infografia de seguridad en taller: pulsera antiestatica, gafas, no joyas, no comida, extintor clase C y desconexion de energia. |
| 1.2.1 ¿Qué hay en una computadora? | Sin imagen | Agregar | Foto de un gabinete abierto con placa base, fuente, RAM, almacenamiento y tarjetas claramente identificables. |
| 1.2.2 Seguridad eléctrica | Sin imagen | Agregar | Fuente de poder ATX con simbolo de alto voltaje o foto de PSU abierta/cerrada con advertencia visible. |
| 1.2.3 ESD | Sin imagen | Agregar | Imagen tecnica de descarga electrostatica sobre una placa o tecnico usando muñequera/alfombrilla antiestatica. |
| 1.3.1 Kit de herramientas del técnico | Sin imagen | Agregar | Fotografia cenital de destornilladores, pulsera ESD, pinzas, bandeja magnetica, linterna y bridas. |
| 1.3.3 Desmontaje del equipo | Sin imagen | Agregar | Foto de una torre abierta durante desmontaje, con retiro ordenado de tapa, cables y componentes. |
| 1.4.1 Instalación de la fuente de poder | Sin imagen | Agregar | Foto del montaje de una PSU en gabinete de escritorio, mostrando tornillos y orientacion correcta del ventilador. |
| 1.5.1 Instalación de la CPU | Sin imagen | Agregar | Close-up del socket y la CPU alineando la marca triangular antes del cierre del retenedor. |
| 1.5.3 Instalación de la memoria RAM | Sin imagen | Agregar | Foto de insercion de modulo DIMM mostrando la muesca y el cierre de las pestañas. |
| 1.5.5 Instalación de la placa madre | Sin imagen | Agregar | Foto de la placa base instalada sobre separadores, con puertos alineados al backplate. |
| 1.6.1 Instalación de las unidades | Sin imagen | Agregar | Foto comparativa de HDD/SSD/unidad optica montadas en bahias o soportes del gabinete. |
| 1.6.3 Instalación de tarjetas adaptadoras | Sin imagen | Agregar | Foto de insercion de una tarjeta PCIe, idealmente de red o grafica, en su ranura. |
| 1.7.1 Conexión de los cables de poder internos | Sin imagen | Agregar | Imagen de conectores ATX 24 pines, EPS CPU y SATA power conectados a placa y unidades. |
| 1.7.3 Conexión de los cables de datos internos | Sin imagen | Agregar | Foto o diagrama simple de cable SATA de datos entre placa base y unidad. |
| 1.7.4 Instalación del panel frontal | Sin imagen | Agregar | Diagrama del header frontal con power switch, reset, HDD LED, power LED, audio y USB frontal. |
| 1.7.6 Completar el ensamblaje | Sin imagen | Agregar | Foto del equipo terminado con buen cable management y perifericos externos conectados. |

Diagnostico del modulo 1:

- Es el modulo con mayor deficit visual del curso.
- El contenido es muy procedimental y necesita apoyo visual en casi cada tema.
- Prioridad maxima de correccion.

### Modulo 2 - Computadoras portatiles

| Tema | Estado actual | Veredicto | Imagen que deberia quedar |
| --- | --- | --- | --- |
| 2.0.2 ¿Qué aprenderé en este módulo? | Tabla de resultados de aprendizaje | Mantener | La tabla actual es clara y suficiente. |
| 2.1.1 Computadoras Portátiles | Sin imagen | Agregar | Foto de laptop abierta mostrando pantalla, teclado, touchpad, webcam y puertos laterales. |
| 2.1.2 Funciones externas exclusivas | Sin imagen | Agregar | Imagen etiquetada de puertos, bisagra, ranura Kensington, webcam, microfono y ventilacion. |
| 2.1.4 LED y dispositivos de entrada | Sin imagen | Agregar | Close-up de teclado, touchpad, boton de encendido y LEDs de bateria/Wi-Fi/disco. |
| 2.1.6 Placas base | Tres figuras actuales | Mantener | La comparacion entre placa base portatil, placa de escritorio y tabla es pertinente. |
| 2.1.7 Componentes internos | Cuatro figuras actuales | Mantener | RAM, CPU, unidad SATA y SSD M.2 representan correctamente el tema. |
| 2.2.1 Bluetooth | Dos tablas actuales | Mantener | Las tablas tecnicas son mas utiles que una foto decorativa en este punto. |
| 2.2.2 Conexiones Bluetooth de computadoras portátiles | Foto generica de persona con laptop y telefono | Reemplazar | Captura o foto de emparejamiento real: laptop con Bluetooth activado y periferico detectable. |
| 2.2.5 WAN celular | Dos imagenes actuales | Mantener | El telefono y el hotspot representan bien conectividad celular y zona Wi-Fi portatil. |
| 2.2.6 Wi-Fi | Tabla actual | Mantener | La tabla de estandares es pertinente y legible. |
| 2.3.2 El motivo del mantenimiento | Foto de derrame sobre teclado | Mantener | La imagen ilustra correctamente el riesgo operativo. |
| 2.3.3 Mantenimiento preventivo de computadoras portátiles | Sin imagen | Agregar | Collage tecnico de limpieza de rejillas, teclado, pantalla y revision de bateria/cargador. |

Diagnostico del modulo 2:

- La base visual es buena.
- Faltan imagenes en partes introductorias y de mantenimiento.
- Solo una figura actual conviene reemplazar por ser demasiado generica: la de conexiones Bluetooth.

### Modulo 3 - Dispositivos móviles

| Tema | Estado actual | Veredicto | Imagen que deberia quedar |
| --- | --- | --- | --- |
| 3.0.2 ¿Qué aprenderé en este módulo? | Tabla de resultados de aprendizaje | Mantener | La tabla actual cumple su funcion. |
| 3.1.2 Movilidad | Foto cenital de personas con dispositivos | Reemplazar | Escena de uso movil real: acceso a servicios desde smartphone/tableta fuera de oficina o hogar. |
| 3.1.3 Características del teléfono inteligente | Sin imagen | Agregar | Imagen de smartphone frontal y posterior o interfaz del sistema operativo destacando camara, sensores y apps. |
| 3.1.4 Funciones del teléfono inteligente | Foto generica de telefono y laptop | Reemplazar | Imagen mas especifica con GPS, NFC, tethering, aplicaciones y servicios de ubicacion. |
| 3.1.6 Tabletas y lectores electrónicos | Imagen actual | Mantener | La figura actual representa bien el uso de lector/tableta. |
| 3.1.8 Dispositivos vestibles | Sin imagen | Agregar | Foto comparativa de smartwatch y banda fitness mostrando sensores o monitoreo de salud. |
| 3.1.9 Realidad virtual y aumentada | Dos imagenes actuales | Mantener | La pareja AR/VR esta bien elegida y es pertinente. |
| 3.2.1 Partes del teléfono celular | Sin imagen | Agregar | Vista explotada o esquema etiquetado con SIM, bateria, memoria/SD, camara y placa interna. |
| 3.2.3 Conectividad por cable del teléfono celular | Sin imagen | Agregar | Comparativa clara de mini-USB, micro-USB, USB-C y Lightning. |
| 3.2.5 Conexiones Inalámbricas e Internet Compartido | Imagen de intercambio telefono a telefono | Reemplazar o complementar | La imagen actual sugiere transferencia de archivos; es mejor una captura de hotspot/tethering o un esquema telefono-compartiendo-internet. |
| 3.2.7 Mantenimiento preventivo de dispositivos móviles | Sin imagen | Agregar | Imagen de limpieza de pantalla, funda/protector, respaldo en nube y actualizacion del sistema. |

Diagnostico del modulo 3:

- El modulo tiene una cobertura visual intermedia.
- Los temas de hardware y mantenimiento movil estan subrepresentados.
- Dos imagenes conviene reemplazarlas por ser demasiado genericas para el concepto explicado.

## Priorizacion recomendada

### Prioridad 1

- Completar el modulo 1 casi por entero.
- Agregar imagen en 2.3.3, 3.2.1, 3.2.3 y 3.2.7.
- Reemplazar 2.2.2 y 3.2.5 por imagenes mas tecnicas.

### Prioridad 2

- Reemplazar 3.1.2 y 3.1.4 por imagenes menos genericas y mas instructivas.
- Agregar imagenes introductorias en 2.1.1, 2.1.2 y 2.1.4.

## Conclusión

- La maquetacion actual no presenta problemas de recorte ni de visualizacion.
- El problema real del curso 1 es editorial: faltan imagenes tecnicas en temas clave, sobre todo en el modulo 1.
- Antes de editar el `.docx`, ya queda definido qué figuras conservar, cuáles reemplazar y qué nuevas imagenes agregar por cada tema principal.
