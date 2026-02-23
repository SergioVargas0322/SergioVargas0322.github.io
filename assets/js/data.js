(() => {
  window.CATALOG_DATA = {
    title: "Catálogo de Cursos Cisco",
    subtitle: "Consulta personal para reforzar contenidos por curso, módulo y tema.",
    courses: [
      {
        id: "hardware-basics",
        title: "Conceptos Básicos de Hardware de Computadora",
        provider: "Cisco Networking Academy",
        level: "Fundamentos",
        status: "En curso",
        estimatedHours: 24,
        summary:
          "Curso base para soporte técnico de computadoras personales, portátiles y dispositivos móviles, con enfoque en seguridad, montaje y mantenimiento preventivo.",
        tags: ["hardware", "soporte", "seguridad", "mantenimiento"],
        modules: [
          {
            key: "M1",
            title: "Computadoras personales",
            topics: [
              {
                code: "1.1",
                title: "Seguridad general y contra incendios",
                summary:
                  "Normas de seguridad para prevenir lesiones, daños eléctricos y respuesta inicial ante incendios.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_1.1.png",
                    alt: "Ilustración de seguridad general en laboratorio de hardware."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Retirar joyas, asegurar ropa suelta y trabajar con orden.",
                      "Desconectar energía antes de abrir o intervenir equipos.",
                      "No abrir fuentes de alimentación ni monitores con alto voltaje interno."
                    ]
                  },
                  {
                    title: "Checklist operativo",
                    items: [
                      "Identificar rutas de evacuación y extintor más cercano.",
                      "Verificar condiciones del extintor antes de cualquier práctica.",
                      "Aplicar protocolo PASS: Pull, Aim, Squeeze, Sweep."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Intervenir equipos con seguridad personal y control de riesgos eléctricos."
                    ]
                  }
                ]
              },
              {
                code: "1.2",
                title: "Computadoras personales y seguridad eléctrica/ESD",
                summary:
                  "Reconocer componentes internos y prevenir daños por alto voltaje y descarga electrostática.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_1.2.jpg",
                    alt: "Ejemplo de descarga electrostática en componente electrónico."
                  }
                ],
                sections: [
                  {
                    title: "Arquitectura base",
                    items: [
                      "Entrada, procesamiento, memoria temporal y salida.",
                      "Relación entre placa base, CPU, RAM, almacenamiento y tarjetas de expansión."
                    ]
                  },
                  {
                    title: "Factores de riesgo",
                    items: [
                      "Componentes pueden retener voltaje aún estando apagados.",
                      "Intercambiar adaptadores de energía incompatibles puede dañar equipos.",
                      "Menos de 30V de estática pueden afectar hardware sensible."
                    ]
                  },
                  {
                    title: "Checklist ESD",
                    items: [
                      "Usar pulsera y alfombrilla antiestática conectada a tierra.",
                      "Mantener componentes en bolsas antiestáticas hasta su instalación.",
                      "Tocar superficie conectada a tierra antes de manipular piezas."
                    ]
                  }
                ]
              },
              {
                code: "1.3",
                title: "Desmontaje del equipo",
                summary:
                  "Proceso ordenado de desmontaje, uso de herramientas y registro de piezas.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_1.3.png",
                    alt: "Desmontaje técnico de computadora de escritorio."
                  }
                ],
                sections: [
                  {
                    title: "Herramientas clave",
                    items: [
                      "Pulsera y tapete antiestático.",
                      "Aire comprimido, destornilladores Phillips/Torx/plano.",
                      "Extractor magnético y probador de cableado."
                    ]
                  },
                  {
                    title: "Pasos críticos",
                    items: [
                      "Apagar, desconectar y descargar energía residual.",
                      "Retirar panel y desmontar por capas, documentando conexiones.",
                      "Organizar tornillos y piezas para montaje posterior."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Desmontaje seguro con trazabilidad para diagnóstico y reensamblaje."
                    ]
                  }
                ]
              },
              {
                code: "1.4",
                title: "Gabinete y fuente de alimentación",
                summary:
                  "Montaje de gabinete y PSU con conexión correcta y validación eléctrica inicial.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_1.4.png",
                    alt: "Instalación de fuente de alimentación dentro del gabinete."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Verificar posición y fijación mecánica de la PSU.",
                      "Conectar líneas principales y auxiliares sin forzar conectores.",
                      "Mantener flujo de aire libre para evitar sobrecalentamiento."
                    ]
                  },
                  {
                    title: "Factores",
                    items: [
                      "Compatibilidad física del gabinete.",
                      "Capacidad de potencia y eficiencia de la fuente.",
                      "Calidad del cableado interno."
                    ]
                  }
                ]
              },
              {
                code: "1.5",
                title: "Componentes de placa base",
                summary:
                  "Instalación de CPU, RAM y componentes base respetando compatibilidad y control térmico.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_1.5.png",
                    alt: "Montaje de CPU y memoria en placa base."
                  }
                ],
                sections: [
                  {
                    title: "Checklist técnico",
                    items: [
                      "Confirmar socket/chipset compatible con CPU.",
                      "Instalar RAM en canales correctos y con firmeza uniforme.",
                      "Aplicar solución térmica y fijar disipador sin exceso de presión."
                    ]
                  },
                  {
                    title: "Resultados",
                    items: [
                      "POST estable, memoria detectada y temperaturas dentro de rango."
                    ]
                  }
                ]
              },
              {
                code: "1.6",
                title: "Unidades y tarjetas adaptadoras",
                summary:
                  "Integración de almacenamiento y expansión según rendimiento, espacio y consumo.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_1.6.png",
                    alt: "Instalación de unidad de almacenamiento y tarjetas adaptadoras."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Elegir interfaces correctas: SATA, M.2, PCIe.",
                      "Asegurar fijación física y cableado de energía/datos.",
                      "Validar detección en BIOS/UEFI y sistema operativo."
                    ]
                  },
                  {
                    title: "Factores",
                    items: [
                      "Ancho de banda requerido.",
                      "Disponibilidad de ranuras y conectores.",
                      "Compatibilidad por generación del hardware."
                    ]
                  }
                ]
              },
              {
                code: "1.7",
                title: "Cableado y cierre del ensamble",
                summary:
                  "Cierre de ensamblaje con cableado ordenado, pruebas básicas y validación final.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_1.7.png",
                    alt: "Organización de cableado interno antes del cierre de gabinete."
                  }
                ],
                sections: [
                  {
                    title: "Checklist de cierre",
                    items: [
                      "Revisar conectores de panel frontal, ventiladores y periféricos.",
                      "Confirmar ausencia de cables sueltos o bloqueando ventiladores.",
                      "Verificar tornillos y fijaciones de componentes."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Equipo estable, limpio y listo para pruebas de funcionamiento."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M2",
            title: "Computadoras portátiles",
            topics: [
              {
                code: "2.1",
                title: "Componentes de computadoras portátiles",
                summary:
                  "Comparación de arquitectura portátil vs escritorio y sus límites de mantenimiento.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_2.1.jpg",
                    alt: "Componentes internos de una computadora portátil."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Diseño compacto con menor margen térmico.",
                      "Componentes más integrados y menos reemplazables.",
                      "Dependencia de partes específicas por fabricante."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Diagnóstico y mantenimiento considerando restricciones físicas y de compatibilidad."
                    ]
                  }
                ]
              },
              {
                code: "2.2",
                title: "Configuración inalámbrica en portátiles",
                summary:
                  "Configuración segura de Wi-Fi y Bluetooth, adaptadores y acceso compartido.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_2.2.jpg",
                    alt: "Configuración de conectividad inalámbrica en laptop."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Seleccionar SSID correcto y autenticar clave de seguridad.",
                      "Definir si el equipo debe ser detectable en redes públicas.",
                      "Validar conectividad y perfil de red al finalizar."
                    ]
                  },
                  {
                    title: "Factores técnicos",
                    items: [
                      "Adaptadores mini-PCIe/M.2 según modelo del equipo.",
                      "Versiones y clases de Bluetooth para alcance y velocidad.",
                      "Uso de anclaje por USB, Bluetooth o zona Wi-Fi portátil."
                    ]
                  }
                ]
              },
              {
                code: "2.3",
                title: "Mantenimiento preventivo de portátiles",
                summary:
                  "Rutinas para reducir fallas por polvo, golpes, humedad y sobrecalentamiento.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_2.3.jpg",
                    alt: "Mantenimiento preventivo de laptop con limpieza segura."
                  }
                ],
                sections: [
                  {
                    title: "Checklist preventivo",
                    items: [
                      "Mantener líquidos y alimentos lejos del equipo.",
                      "Realizar limpieza con materiales no abrasivos.",
                      "Desconectar energía y retirar batería antes de limpiar."
                    ]
                  },
                  {
                    title: "Resultados",
                    items: [
                      "Mayor vida útil del equipo y menor frecuencia de fallas."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M3",
            title: "Otros dispositivos móviles",
            topics: [
              {
                code: "3.1",
                title: "Descripción general de dispositivos móviles",
                summary:
                  "Panorama de smartphone, tablet, lector electrónico y wearables en contexto de movilidad.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_3.1.png",
                    alt: "Ecosistema de dispositivos móviles para productividad y conectividad."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Movilidad depende de conectividad celular o redes de datos disponibles.",
                      "Sistemas operativos móviles con aplicaciones de tiendas específicas.",
                      "Servicios de ubicación, GPS y uso compartido de red."
                    ]
                  },
                  {
                    title: "Tendencias",
                    items: [
                      "Crecimiento de wearables, realidad aumentada y realidad virtual.",
                      "Mayor integración de sensores de salud y actividad."
                    ]
                  }
                ]
              },
              {
                code: "3.2",
                title: "Hardware y mantenimiento de dispositivos móviles",
                summary:
                  "Partes reemplazables, conectividad por cable/inalámbrica y mantenimiento básico.",
                images: [
                  {
                    src: "./assets/images/hardware-basics/C1_3.2.png",
                    alt: "Conectividad y mantenimiento de teléfonos y dispositivos móviles."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "FRP comunes: memoria SD, SIM y batería (según equipo).",
                      "Conectores: mini-USB, micro-USB, USB-C, Lightning y propietarios.",
                      "Conectividad: NFC, IR, Bluetooth, Wi-Fi, anclaje y zona portátil."
                    ]
                  },
                  {
                    title: "Mantenimiento mínimo",
                    items: [
                      "Limpieza de pantalla con productos adecuados.",
                      "Copias de respaldo periódicas de datos.",
                      "Actualización de sistema operativo y aplicaciones."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Dispositivo funcional, protegido y con menor riesgo de pérdida de información."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "operating-systems-basics",
        title: "Operating Systems Basics",
        provider: "Cisco Networking Academy",
        level: "Fundamentos",
        status: "En curso",
        estimatedHours: 40,
        summary:
          "Fundamentos de sistemas operativos con enfoque en Windows, Linux, conectividad móvil y seguridad.",
        tags: ["sistemas operativos", "windows", "linux", "movil", "seguridad"],
        modules: [
          {
            key: "M1",
            title: "The Windows Operating System",
            topics: [
              {
                code: "1.1",
                title: "Historia de Windows, versiones y entorno gráfico",
                summary:
                  "Evolución desde MS-DOS hacia Windows moderno, con énfasis en Desktop, Taskbar, menú Inicio y productividad en GUI.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.1.png",
                    alt: "Interfaz gráfica de Windows y elementos clave del escritorio."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "DOS introdujo gestión de archivos por comandos; Windows la llevó a una experiencia visual completa.",
                      "El escritorio centraliza accesos, archivos y utilidades para el trabajo diario.",
                      "Los menús contextuales aceleran operaciones de copia, administración y soporte."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Operar con fluidez el entorno Windows y ubicar rápidamente funciones esenciales."
                    ]
                  }
                ]
              },
              {
                code: "1.2",
                title: "Arquitectura de Windows: HAL, kernel mode y user mode",
                summary:
                  "Relación entre hardware, HAL y kernel; diferencias operativas entre modo usuario y modo kernel para estabilidad del sistema.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.2.png",
                    alt: "Arquitectura de Windows con interacción entre hardware, HAL y kernel."
                  }
                ],
                sections: [
                  {
                    title: "Factores técnicos",
                    items: [
                      "HAL reduce dependencia directa del hardware y mejora portabilidad del sistema.",
                      "Kernel mode tiene acceso total a memoria y dispositivos; errores allí pueden tumbar el sistema completo.",
                      "User mode aísla fallas de aplicaciones para evitar impacto global."
                    ]
                  },
                  {
                    title: "Checklist de análisis",
                    items: [
                      "Diferenciar si una falla viene de aplicación, driver o núcleo.",
                      "Validar firma y compatibilidad de controladores antes de su despliegue.",
                      "Priorizar diagnóstico por capas para reducir tiempo de resolución."
                    ]
                  }
                ]
              },
              {
                code: "1.3",
                title: "Sistemas de archivos en Windows: NTFS y ADS",
                summary:
                  "Uso de NTFS, estructura de particiones y riesgos asociados a Alternate Data Streams (ADS) para seguridad y forensia.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.3.png",
                    alt: "Sistema de archivos NTFS y almacenamiento de metadatos en Windows."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "NTFS permite permisos granulares, ownership y auditoría de actividad.",
                      "Los timestamps MACE apoyan investigaciones y línea de tiempo de incidentes.",
                      "ADS puede usarse para ocultar información o código malicioso."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Aplicar criterios de seguridad y análisis forense básico sobre archivos en Windows."
                    ]
                  }
                ]
              },
              {
                code: "1.4",
                title: "Arranque y apagado seguro en Windows",
                summary:
                  "Proceso de inicio con BIOS/UEFI, Bootmgr y BCD; además de prácticas de apagado seguro para proteger integridad.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.4.png",
                    alt: "Secuencia de arranque y ciclo de apagado en el sistema operativo Windows."
                  }
                ],
                sections: [
                  {
                    title: "Checklist técnico",
                    items: [
                      "Verificar firmware y configuración de arranque al diagnosticar fallas de inicio.",
                      "Revisar BCD y estado de controladores críticos en problemas de boot.",
                      "Evitar apagados forzados para prevenir corrupción de archivos y servicios."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Reducir incidentes de inicio/apagado y preservar estabilidad del sistema."
                    ]
                  }
                ]
              },
              {
                code: "1.5",
                title: "Procesos, hilos, servicios y uso del registro",
                summary:
                  "Gestión de ejecución en Windows con procesos, threads y servicios; impacto de claves de inicio en el registro.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.3.png",
                    alt: "Administración de procesos y servicios de Windows para monitoreo operativo."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Cada proceso ejecuta uno o más hilos con aislamiento de memoria.",
                      "Servicios sostienen funciones persistentes del sistema y aplicaciones.",
                      "Claves Run/RunOnce y configuraciones de startup afectan rendimiento y seguridad."
                    ]
                  },
                  {
                    title: "Checklist operativo",
                    items: [
                      "Analizar consumo de recursos en Task Manager y Resource Monitor.",
                      "Verificar dependencias antes de deshabilitar servicios.",
                      "Documentar cambios en inicio para facilitar rollback."
                    ]
                  }
                ]
              },
              {
                code: "1.6",
                title: "Configuración, monitoreo y seguridad del endpoint Windows",
                summary:
                  "Administración con cuentas locales/dominio, CLI/PowerShell y controles de seguridad con netstat, Event Viewer, Defender y Firewall.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.4.png",
                    alt: "Herramientas de seguridad y monitoreo para endpoints Windows."
                  }
                ],
                sections: [
                  {
                    title: "Checklist de hardening",
                    items: [
                      "Usar principio de mínimo privilegio y cuentas separadas para administración.",
                      "Auditar puertos/conexiones con netstat y eventos con Event Viewer.",
                      "Mantener Windows Update, Defender y Firewall correctamente configurados."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Establecer una línea base de seguridad operativa para equipos Windows."
                    ]
                  }
                ]
              },
              {
                code: "1.7",
                title: "Línea de comandos y recursos de red en Windows",
                summary:
                  "Uso práctico de comandos net, recursos compartidos y resolución básica de problemas de conectividad y acceso.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.2.png",
                    alt: "Administración de recursos de red en Windows desde CLI."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "CLI y PowerShell permiten soporte más rápido y repetible.",
                      "El comando net facilita administración de usuarios, sesiones y recursos.",
                      "La validación de permisos evita errores de acceso en recursos compartidos."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Resolver incidencias de acceso y red con procedimientos técnicos consistentes."
                    ]
                  }
                ]
              },
              {
                code: "1.8",
                title: "Políticas locales y defensa en capas",
                summary:
                  "Aplicación de políticas de seguridad local y defensa del host mediante controles preventivos y de monitoreo.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.4.png",
                    alt: "Políticas de seguridad, antivirus y firewall en Windows."
                  }
                ],
                sections: [
                  {
                    title: "Factores",
                    items: [
                      "Local Security Policy define parámetros críticos de autenticación y control.",
                      "Windows Defender protege contra amenazas conocidas y sospechosas.",
                      "Firewall segmenta tráfico y reduce exposición a conexiones no autorizadas."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Fortalecer la postura de seguridad del endpoint con controles coordinados."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M2",
            title: "Linux: shell y operación de servicios",
            topics: [
              {
                code: "2.1",
                title: "Fundamentos de Linux y valor en SOC",
                summary:
                  "Conceptos base de Linux, su relevancia en servidores e infraestructura de seguridad.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-linux.svg",
                    alt: "Linux en entornos de administración y seguridad."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Linux es clave en servidores y operaciones de ciberseguridad.",
                      "Permite control granular y automatización mediante CLI.",
                      "Su adopción masiva lo vuelve esencial en perfiles técnicos."
                    ]
                  }
                ]
              },
              {
                code: "2.2",
                title: "Comandos de shell, archivos y texto",
                summary:
                  "Uso de comandos básicos, navegación de directorios, edición de texto y piping para análisis.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-linux.svg",
                    alt: "Terminal Linux para comandos, texto y flujo con pipes."
                  }
                ],
                sections: [
                  {
                    title: "Checklist técnico",
                    items: [
                      "Dominar navegación con cd, pwd, ls y permisos básicos.",
                      "Inspeccionar archivos de configuración y logs de forma segura.",
                      "Combinar comandos con pipes para filtrar información útil."
                    ]
                  }
                ]
              },
              {
                code: "2.3",
                title: "Servicios, puertos, permisos y hardening",
                summary:
                  "Modelo cliente-servidor, puertos de servicios, control de permisos y prácticas de endurecimiento.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-linux.svg",
                    alt: "Servicios Linux, puertos y controles de seguridad."
                  }
                ],
                sections: [
                  {
                    title: "Resultado esperado",
                    items: [
                      "Validar exposición de servicios, aplicar mínimo privilegio y mantener el host actualizado."
                    ]
                  }
                ]
              },
              {
                code: "2.4",
                title: "Administración de servicios y revisión de logs",
                summary:
                  "Configuración de servicios en Linux, seguimiento de registros y acciones de hardening para operación estable.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-linux.svg",
                    alt: "Administración de servicios y logs en servidores Linux."
                  }
                ],
                sections: [
                  {
                    title: "Checklist operativo",
                    items: [
                      "Identificar archivos de configuración clave por servicio.",
                      "Monitorear logs para detectar errores y eventos de seguridad.",
                      "Deshabilitar servicios no requeridos para reducir superficie de ataque."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Mantener servicios críticos con disponibilidad y trazabilidad adecuadas."
                    ]
                  }
                ]
              },
              {
                code: "2.5",
                title: "Sistema de archivos Linux, roles y enlaces",
                summary:
                  "Uso de permisos rwx, ownership, enlaces duros/simbólicos y organización segura del sistema de archivos.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-linux.svg",
                    alt: "Permisos y estructura del sistema de archivos Linux."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Permisos y grupos determinan el control de acceso en Linux.",
                      "Hard links y symbolic links tienen implicaciones distintas en administración.",
                      "Aplicar mínimo privilegio evita accesos y cambios no autorizados."
                    ]
                  }
                ]
              },
              {
                code: "2.6",
                title: "Host Linux: actualizaciones, procesos y detección de rootkits",
                summary:
                  "Mantenimiento del host con parches, control de procesos, verificación anti-rootkit y uso de piping en análisis.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-linux.svg",
                    alt: "Mantenimiento de host Linux y defensa contra amenazas."
                  }
                ],
                sections: [
                  {
                    title: "Checklist de seguridad",
                    items: [
                      "Aplicar actualizaciones periódicas del sistema y paquetes.",
                      "Revisar procesos anómalos y consumo de recursos.",
                      "Usar herramientas de detección y comandos encadenados para investigación rápida."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M3",
            title: "Conectividad en dispositivos móviles",
            topics: [
              {
                code: "3.1",
                title: "Wi-Fi, datos celulares y Bluetooth",
                summary:
                  "Conectividad inalámbrica y celular, configuración de redes y emparejamiento seguro de periféricos.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-connectivity.svg",
                    alt: "Conectividad móvil con Wi-Fi, datos y Bluetooth."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "La calidad de red depende de cobertura, interferencia y configuración.",
                      "Bluetooth debe usarse con visibilidad controlada y dispositivos confiables.",
                      "Modo avión y hotspot son funciones clave para escenarios específicos."
                    ]
                  }
                ]
              },
              {
                code: "3.2",
                title: "Configuración de correo y sincronización",
                summary:
                  "Parámetros de email en Android/iOS y sincronización de datos personales o corporativos.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-connectivity.svg",
                    alt: "Configuración de correo y sincronización de datos móviles."
                  }
                ],
                sections: [
                  {
                    title: "Checklist operativo",
                    items: [
                      "Configurar servidor entrante/saliente y métodos de autenticación.",
                      "Validar sincronización de correo, contactos y calendario.",
                      "Elegir tipo de sincronización según el riesgo de la información."
                    ]
                  }
                ]
              },
              {
                code: "3.3",
                title: "Funciones avanzadas de conectividad",
                summary:
                  "Uso de Wi-Fi Calling, GPS y conexiones seguras para continuidad de comunicación.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-connectivity.svg",
                    alt: "Funciones avanzadas de conectividad en sistemas móviles."
                  }
                ],
                sections: [
                  {
                    title: "Resultado esperado",
                    items: [
                      "Mantener comunicación y acceso a red con configuraciones adecuadas según el contexto."
                    ]
                  }
                ]
              },
              {
                code: "3.4",
                title: "Configuración de correo en Android e iOS",
                summary:
                  "Alta de cuentas de correo, validación de parámetros y sincronización de datos para uso académico y productivo.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-connectivity.svg",
                    alt: "Configuración de correo electrónico en plataformas móviles."
                  }
                ],
                sections: [
                  {
                    title: "Checklist operativo",
                    items: [
                      "Configurar protocolos y puertos correctos para envío/recepción.",
                      "Verificar autenticación y cifrado de la cuenta.",
                      "Comprobar entrega, recepción y sincronización de bandejas."
                    ]
                  }
                ]
              },
              {
                code: "3.5",
                title: "Sincronización móvil y tipos de conexión",
                summary:
                  "Tipos de datos a sincronizar y elección del medio (USB, Wi-Fi, nube) según disponibilidad y seguridad.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-connectivity.svg",
                    alt: "Sincronización de datos entre dispositivos y servicios."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Sincronizar contactos, calendario y archivos evita pérdida operativa.",
                      "Elegir el tipo de conexión según velocidad y riesgo de exposición.",
                      "Mantener consistencia de datos requiere validar conflictos y versiones."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Sostener información actualizada en múltiples dispositivos sin afectar integridad."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M4",
            title: "Sistemas móviles y seguridad",
            topics: [
              {
                code: "4.1",
                title: "Android vs iOS y controles de acceso",
                summary:
                  "Comparación de plataformas, orígenes de aplicaciones y seguridad de acceso mediante passcode.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-security.svg",
                    alt: "Comparativa de plataformas móviles y controles de acceso."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "La fuente de apps impacta directamente el riesgo de malware.",
                      "Passcodes y políticas de intentos fallidos reducen accesos no autorizados.",
                      "La experiencia de seguridad depende de configuración y disciplina de uso."
                    ]
                  }
                ]
              },
              {
                code: "4.2",
                title: "Backup, localización y borrado remoto",
                summary:
                  "Estrategias para proteger información mediante respaldo en nube, localizador, bloqueo y wipe remoto.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-security.svg",
                    alt: "Protección de datos móviles con respaldo y control remoto."
                  }
                ],
                sections: [
                  {
                    title: "Checklist de respuesta",
                    items: [
                      "Activar respaldos automáticos y verificar su restauración.",
                      "Configurar localización remota antes de incidentes.",
                      "Aplicar lock o wipe remoto cuando el dispositivo se comprometa."
                    ]
                  }
                ]
              },
              {
                code: "4.3",
                title: "Antivirus, rooting/jailbreaking y actualizaciones",
                summary:
                  "Medidas de defensa en móviles, riesgos de elevar privilegios y necesidad de mantener parches al día.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-security.svg",
                    alt: "Seguridad móvil con antivirus, parches y control de privilegios."
                  }
                ],
                sections: [
                  {
                    title: "Resultado esperado",
                    items: [
                      "Sostener dispositivos móviles actualizados y con menor superficie de ataque."
                    ]
                  }
                ]
              },
              {
                code: "4.4",
                title: "Interfaz táctil y funciones comunes del dispositivo",
                summary:
                  "Elementos de pantalla en Android/iOS, calibración, orientación y ajustes de uso diario en movilidad.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-security.svg",
                    alt: "Interfaz táctil y ajustes comunes en dispositivos móviles."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "La calibración y orientación correctas mejoran experiencia de usuario.",
                      "El brillo y el uso de sensores impactan directamente la batería.",
                      "La personalización debe equilibrar usabilidad y seguridad."
                    ]
                  }
                ]
              },
              {
                code: "4.5",
                title: "Passcodes, intentos fallidos y borrado automático",
                summary:
                  "Controles de acceso local y respuesta de seguridad ante múltiples intentos de autenticación fallidos.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-security.svg",
                    alt: "Políticas de bloqueo y protección de datos ante intentos fallidos."
                  }
                ],
                sections: [
                  {
                    title: "Checklist de protección",
                    items: [
                      "Configurar bloqueo por PIN, contraseña o biometría.",
                      "Definir umbral de intentos fallidos según política de seguridad.",
                      "Validar que existan respaldos antes de habilitar borrado automático."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Minimizar acceso no autorizado y proteger datos ante pérdida o robo del dispositivo."
                    ]
                  }
                ]
              },
              {
                code: "4.6",
                title: "Servicios en la nube, localización y bloqueo remoto",
                summary:
                  "Respaldo remoto, localización de equipos y acciones de lock/wipe para respuesta a incidentes móviles.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-security.svg",
                    alt: "Servicios cloud para respaldo y control remoto de dispositivos."
                  }
                ],
                sections: [
                  {
                    title: "Checklist operativo",
                    items: [
                      "Activar backup automático con verificación periódica de restauración.",
                      "Configurar herramientas de localización antes de incidentes.",
                      "Aplicar bloqueo o borrado remoto cuando la recuperación no sea posible."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
})();
