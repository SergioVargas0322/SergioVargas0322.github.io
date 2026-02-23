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
                title: "Windows History",
                summary:
                  "Evolución desde MS-DOS hacia Windows moderno, incluyendo versiones, entorno gráfico y vulnerabilidades del sistema operativo.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.1.png",
                    alt: "Transición de MS-DOS a Windows y comandos básicos de consola."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.2.png",
                    alt: "Evolución de versiones de Windows basadas en NT."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.3.png",
                    alt: "Elementos principales de la interfaz gráfica de Windows."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_1.4.png",
                    alt: "Ejemplo de menú contextual y explorador de archivos en Windows."
                  }
                ],
                sections: [
                  {
                    title: "1.1.1 Disk Operating System (DOS)",
                    items: [
                      "Los primeros sistemas usaban tarjetas perforadas, cinta de papel y cinta magnética antes de los discos modernos.",
                      "DOS habilitó lectura/escritura en discos y organización de archivos por sistema de archivos.",
                      "MS-DOS operaba por línea de comandos para crear programas y manipular datos."
                    ]
                  },
                  {
                    title: "Comandos MS-DOS de referencia",
                    items: [
                      "dir: lista archivos en el directorio actual.",
                      "cd y cd..: cambia de directorio y sube un nivel.",
                      "copy, del, ren, mkdir, find y help para administración básica de archivos."
                    ]
                  },
                  {
                    title: "1.1.2 Windows Versions",
                    items: [
                      "Desde 1993, las versiones de Windows se basan en la arquitectura NT.",
                      "Con Windows XP se consolidó la adopción de 64 bits en equipos de usuario.",
                      "Las ediciones (Home, Pro, Enterprise, Server, Datacenter) responden a necesidades específicas."
                    ]
                  },
                  {
                    title: "1.1.3 Windows GUI",
                    items: [
                      "El Desktop es personalizable por usuario e incluye accesos, archivos y papelera de reciclaje.",
                      "La Task Bar integra menú Inicio/búsqueda, accesos rápidos y área de notificaciones.",
                      "El Context Menu y File Explorer facilitan operaciones frecuentes de administración."
                    ]
                  },
                  {
                    title: "1.1.4 Operating System Vulnerabilities",
                    items: [
                      "Millones de líneas de código en SO y aplicaciones incrementan la superficie de falla.",
                      "Una vulnerabilidad puede explotarse para escalar privilegios, alterar permisos o robar información.",
                      "El atacante requiere técnica/herramienta de explotación para forzar comportamiento no previsto."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Entender la transición de DOS a Windows moderno y relacionarla con riesgos de seguridad en el endpoint."
                    ]
                  }
                ]
              },
              {
                code: "1.2",
                title: "Windows Architecture and Operations",
                summary:
                  "Funcionamiento interno de Windows: HAL, modos de ejecución, sistemas de archivos, arranque, procesos, memoria y registro.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.1.png",
                    alt: "Arquitectura de Windows con HAL, kernel, API y modos de ejecución."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.2.jpg",
                    alt: "Flujo del proceso de arranque de Windows con BIOS/UEFI y Bootmgr."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.3.png",
                    alt: "Panel de servicios de Windows para administración de procesos en segundo plano."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.4.png",
                    alt: "Vista de RAMMap para análisis de asignación de memoria en Windows."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.5.png",
                    alt: "Editor del registro de Windows con hives, claves y valores."
                  }
                ],
                sections: [
                  {
                    title: "1.2.1 Hardware Abstraction Layers (HAL)",
                    items: [
                      "La HAL intermedia entre hardware y kernel para aislar diferencias entre plataformas físicas.",
                      "El kernel mantiene control global de E/S, memoria y periféricos conectados.",
                      "Aunque HAL abstrae, existen funciones donde el kernel aún interactúa de forma directa con hardware."
                    ]
                  },
                  {
                    title: "1.2.2 User Mode y Kernel Mode",
                    items: [
                      "Aplicaciones de usuario corren en user mode con restricciones de hardware y memoria.",
                      "Código en kernel mode tiene acceso total; errores de drivers en este modo pueden detener todo el sistema.",
                      "El aislamiento por proceso en user mode evita que una app corrompa memoria de otra aplicación."
                    ]
                  },
                  {
                    title: "1.2.3 Windows File Systems",
                    items: [
                      "exFAT y FAT son simples y compatibles, pero FAT presenta límites de tamaño y particiones.",
                      "HFS+ (macOS) y EXT (Linux) pueden leerse en Windows con software adicional.",
                      "NTFS es el estándar en Windows por confiabilidad, permisos, cifrado y soporte forense (MACE).",
                      "Estructuras clave de NTFS: Partition Boot Sector, MFT, System Files y File Area.",
                      "Formatear no siempre elimina datos: para reutilización segura se recomienda secure wipe."
                    ]
                  },
                  {
                    title: "1.2.4 Alternate Data Streams (ADS)",
                    items: [
                      "NTFS permite asociar flujos alternos de datos a un archivo (ej.: Testfile.txt:ADS).",
                      "ADS puede ocultar información o código malicioso sin ser visible en un dir estándar.",
                      "El modificador dir /r permite evidenciar ADS en auditorías técnicas."
                    ]
                  },
                  {
                    title: "1.2.5 y 1.2.6 - Boot Process y Startup",
                    items: [
                      "BIOS inicia con POST/MBR; UEFI utiliza archivos .efi en la EFI System Partition.",
                      "Bootmgr.exe carga BCD y decide ruta de hibernación (Winresume.exe) o arranque frío (Winload.exe).",
                      "Winload valida drivers (KMCS), inicia Ntoskrnl, HAL y SMSS para preparar el logon.",
                      "Claves HKLM y HKCU definen elementos de inicio; Msconfig facilita su gestión segura."
                    ]
                  },
                  {
                    title: "1.2.7 y 1.2.8 - Shutdown, Procesos, Hilos y Servicios",
                    items: [
                      "Un apagado correcto cierra apps/servicios en orden y reduce riesgo de corrupción.",
                      "Opciones de apagado: Shutdown, Restart e Hibernate según necesidad operativa.",
                      "Cada proceso contiene uno o más hilos; los servicios sostienen funciones permanentes del sistema.",
                      "Task Manager y Services son base para diagnóstico de rendimiento y disponibilidad."
                    ]
                  },
                  {
                    title: "1.2.9 Memory Allocation and Handles",
                    items: [
                      "Windows usa direcciones virtuales traducidas a direcciones físicas mediante tablas de páginas.",
                      "Procesos de 32 bits direccionan hasta 4 GB; en 64 bits el espacio virtual se amplía drásticamente.",
                      "Los handles permiten a procesos en user mode acceder a recursos del kernel sin acceso directo.",
                      "RAMMap (Sysinternals) permite analizar cómo se distribuye la memoria entre kernel, drivers y apps."
                    ]
                  },
                  {
                    title: "1.2.10 Windows Registry",
                    items: [
                      "El registro almacena configuración de hardware, software, usuarios y comportamiento del sistema.",
                      "Hives clave: HKCU, HKU, HKCR, HKLM y HKCC.",
                      "El uso de regedit requiere extremo cuidado; cambios menores pueden afectar estabilidad total.",
                      "El registro es fuente valiosa para auditoría de seguridad y análisis forense."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Comprender la operación interna de Windows para diagnosticar fallas, endurecer configuración y mejorar la seguridad del endpoint."
                    ]
                  }
                ]
              },
              {
                code: "1.3",
                title: "Windows Configuration and Monitoring",
                summary:
                  "Configuración y monitoreo operativo de Windows con enfoque en privilegios, administración de usuarios, red y diagnóstico de rendimiento.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.7.png",
                    alt: "Administración de usuarios y grupos locales en Windows."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.6.png",
                    alt: "Consola de Windows Management Instrumentation (WMI)."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_3.4.jpg",
                    alt: "Task Manager para monitoreo de procesos y rendimiento."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_3.3.jpg",
                    alt: "Resource Monitor para análisis detallado de recursos."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_3.2.png",
                    alt: "Network and Sharing Center para configuración de red en Windows."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_3.1.jpg",
                    alt: "Remote Desktop Connection para acceso remoto por RDP."
                  }
                ],
                sections: [
                  {
                    title: "1.3.1 Run as Administrator",
                    items: [
                      "No se recomienda trabajar siempre con cuenta Administrador por riesgo de heredar privilegios a software malicioso.",
                      "Para tareas puntuales, usar Run as Administrator sobre ejecutable o consola específica.",
                      "El uso controlado de elevación reduce superficie de ataque y errores críticos."
                    ]
                  },
                  {
                    title: "1.3.2 Local Users and Domains",
                    items: [
                      "Las cuentas locales almacenan configuración y permisos específicos del equipo.",
                      "Cuentas Guest/Administrator vienen deshabilitadas por seguridad y no deben activarse sin justificación.",
                      "Los grupos simplifican permisos; la denegación explícita prevalece sobre permisos heredados.",
                      "En dominio, el Domain Controller define autenticación y políticas de sesión para usuarios/equipos."
                    ]
                  },
                  {
                    title: "1.3.3 CLI and PowerShell",
                    items: [
                      "CLI (cmd) permite navegación, ejecución de comandos y scripts batch.",
                      "PowerShell amplía automatización con cmdlets, scripts .ps1 y funciones reutilizables.",
                      "Ejecutar consola con privilegios administrativos solo cuando sea necesario.",
                      "Comandos de ayuda (help, Get-Help, Update-Help) son esenciales para operación segura."
                    ]
                  },
                  {
                    title: "1.3.4 Windows Management Instrumentation (WMI)",
                    items: [
                      "WMI permite inventario, monitoreo y administración remota de sistemas Windows.",
                      "La consola WMI Control expone opciones de resumen, respaldo, seguridad y configuración avanzada.",
                      "WMI también puede ser abusado por atacantes para ejecutar acciones remotas con baja visibilidad.",
                      "Se recomienda restringir acceso WMI y monitorear su uso."
                    ]
                  },
                  {
                    title: "1.3.5 The net Command",
                    items: [
                      "El comando net centraliza administración de cuentas, sesiones, recursos compartidos y servicios.",
                      "Subcomandos clave: net accounts, net session, net share, net start/stop, net use, net view.",
                      "net help y net help <subcomando> facilitan administración guiada por sintaxis oficial."
                    ]
                  },
                  {
                    title: "1.3.6 Task Manager and Resource Monitor",
                    items: [
                      "Task Manager ofrece visibilidad por pestañas: Processes, Performance, Startup, Users, Details y Services.",
                      "Resource Monitor profundiza análisis de CPU, memoria, disco y red por proceso.",
                      "Ambas herramientas ayudan a identificar cuellos de botella, servicios atascados y actividad sospechosa."
                    ]
                  },
                  {
                    title: "1.3.7 Networking",
                    items: [
                      "Network and Sharing Center permite crear conexiones y ajustar propiedades del adaptador.",
                      "Configurar IPv4/IPv6 por DHCP o manual según diseño de red.",
                      "nslookup valida DNS y netstat permite revisar conexiones y estado de puertos."
                    ]
                  },
                  {
                    title: "1.3.8 Accessing Network Resources",
                    items: [
                      "SMB usa formato UNC (\\\\servidor\\recurso\\archivo) para acceso a recursos remotos.",
                      "Los administrative shares (C$, admin$, print$) requieren privilegios elevados.",
                      "RDP permite administración remota, pero debe limitarse y protegerse con políticas de acceso robustas."
                    ]
                  },
                  {
                    title: "1.3.9 Windows Server",
                    items: [
                      "Windows Server orienta su uso a centros de datos y roles empresariales.",
                      "Servicios comunes: DNS, DHCP, AD DS, SMB/NFS/DFS, HTTP/HTTPS/FTP y virtualización (Hyper-V).",
                      "Su administración requiere controles de seguridad y segmentación acorde al rol del servidor."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Configurar y monitorear Windows de forma segura, aplicando herramientas nativas para administración, red y diagnóstico."
                    ]
                  }
                ]
              },
              {
                code: "1.4",
                title: "Windows Security",
                summary:
                  "Controles de seguridad en Windows para detectar actividad sospechosa, mantener el sistema actualizado y reforzar políticas locales del endpoint.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_4.1.png",
                    alt: "Salida de netstat -abno con conexiones activas y PID en Windows."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_4.2.png",
                    alt: "Visor de eventos de Windows con vista de eventos administrativos."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_4.3.png",
                    alt: "Panel de Windows Update para revisar estado e historial de actualizaciones."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_4.4.png",
                    alt: "Consola de Local Security Policy en Windows."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_4.5.png",
                    alt: "Windows Defender Security Center con estado general de protección."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_4.6.png",
                    alt: "Windows Defender Firewall con perfiles de red y reglas activas."
                  }
                ],
                sections: [
                  {
                    title: "1.4.1 The netstat Command",
                    items: [
                      "El comando netstat ayuda a detectar conexiones entrantes/salientes no autorizadas.",
                      "Con netstat -abno puedes ver puertos, estado, proceso asociado y PID para correlación con Task Manager.",
                      "Para usar opciones avanzadas se requiere consola con privilegios de administrador.",
                      "Si hay procesos sospechosos, se valida su legitimidad y se procede a contención y limpieza."
                    ]
                  },
                  {
                    title: "1.4.2 Event Viewer",
                    items: [
                      "Event Viewer registra eventos de aplicaciones, seguridad y sistema para diagnóstico y auditoría.",
                      "Cada evento incluye nivel (información, advertencia, error, crítico), origen, fecha/hora e ID.",
                      "La vista Administrative Events centraliza eventos críticos y suele ser el mejor punto de partida."
                    ]
                  },
                  {
                    title: "1.4.3 Windows Update Management",
                    items: [
                      "Mantener Windows actualizado reduce exposición a vulnerabilidades y zero-day exploits.",
                      "Los parches corrigen fallas específicas y los service packs agrupan mejoras y correcciones.",
                      "Windows Update permite revisar historial, ejecutar búsqueda manual y definir horas activas/reinicio."
                    ]
                  },
                  {
                    title: "1.4.4 Local Security Policy",
                    items: [
                      "La política local aplica en equipos fuera de dominio y define reglas de cuenta y seguridad del host.",
                      "Password Policy y Account Lockout Policy ayudan a mitigar intentos de fuerza bruta.",
                      "Se recomienda bloqueo de sesión automático, mínimo privilegio y uso de AppLocker cuando aplique.",
                      "Las políticas pueden exportarse para replicar configuraciones entre equipos stand-alone."
                    ]
                  },
                  {
                    title: "1.4.5 Windows Defender",
                    items: [
                      "Windows Defender ofrece protección en tiempo real contra virus, spyware y otras formas de malware.",
                      "Permite escaneos manuales, actualización de definiciones y revisión de historial de detecciones.",
                      "La higiene operativa recomienda usar una sola solución antimalware activa a la vez."
                    ]
                  },
                  {
                    title: "1.4.6 Windows Defender Firewall",
                    items: [
                      "Un firewall implementa control de tráfico mediante reglas de entrada y salida por puertos/aplicaciones.",
                      "Una postura restrictiva (permitir solo lo necesario) reduce la superficie de ataque.",
                      "En Advanced settings se pueden crear, importar/exportar y monitorear reglas específicas."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Aplicar controles de monitoreo, actualización y hardening para fortalecer la seguridad de endpoints Windows."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M2",
            title: "Linux: shell y operacion de servicios",
            topics: [
              {
                code: "2.1",
                title: "Fundamentos de Linux y valor en SOC",
                summary:
                  "Base conceptual de Linux, su arquitectura abierta y su valor operativo para analistas y administradores en un SOC.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.1.png",
                    alt: "Logotipo de Linux y mascota Tux."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.1_soc.png",
                    alt: "Consola Sguil de Security Onion para análisis de eventos de seguridad."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.1_kali.png",
                    alt: "Menú de categorías de herramientas de Kali Linux para pruebas de penetración."
                  }
                ],
                sections: [
                  {
                    title: "2.1.1 Qué es Linux",
                    items: [
                      "Linux es un sistema operativo creado en 1991, de código abierto, ligero y altamente configurable.",
                      "Está diseñado para operar en red, lo que facilita el desarrollo y uso de aplicaciones orientadas a servicios.",
                      "Al ser open source, el kernel puede inspeccionarse, modificarse y recompilarse según necesidades técnicas.",
                      "Las distribuciones (distros) empaquetan kernel + herramientas; ejemplos: Debian, Red Hat, Ubuntu, CentOS y SUSE."
                    ]
                  },
                  {
                    title: "2.1.2 Valor de Linux en ciberseguridad",
                    items: [
                      "La flexibilidad del código abierto permite construir entornos específicos para análisis de seguridad.",
                      "La CLI de Linux es potente para tareas locales y remotas, con menor consumo de recursos que un entorno gráfico completo.",
                      "El usuario root tiene control total del sistema, útil para funciones de bajo nivel como la pila de red.",
                      "Ese control detallado favorece la creación y ajuste de herramientas de monitoreo e investigación."
                    ]
                  },
                  {
                    title: "2.1.3 Linux en el SOC",
                    items: [
                      "En un Security Operations Center, Linux permite montar plataformas ligeras con solo los paquetes necesarios.",
                      "Las herramientas pueden integrarse en flujos de trabajo coordinados para detección, análisis y respuesta.",
                      "Security Onion es un ejemplo de suite Linux orientada al análisis de seguridad de red, con consola Sguil."
                    ]
                  },
                  {
                    title: "Herramientas SOC comunes en Linux",
                    items: [
                      "Captura de paquetes (ej. Wireshark) para observar transacciones y protocolos en detalle.",
                      "Análisis de malware en entornos controlados para estudiar comportamiento sin comprometer el host.",
                      "Sistemas IDS para inspección de tráfico en tiempo real y activación de reglas de alerta.",
                      "Firewalls, gestores de logs, plataformas SIEM y sistemas de ticketing para operación continua del SOC."
                    ]
                  },
                  {
                    title: "2.1.4 Linux Tools y PenTesting",
                    items: [
                      "El penetration testing busca vulnerabilidades atacando de forma controlada un sistema o red.",
                      "Linux concentra múltiples herramientas técnicas: generadores de paquetes, escáneres de puertos y exploits de prueba.",
                      "Kali Linux agrupa una amplia colección de utilidades de pentesting en una sola distribución."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Explicar por qué Linux es una plataforma estratégica para monitoreo, análisis y defensa en ciberseguridad."
                    ]
                  }
                ]
              },
              {
                code: "2.2",
                title: "Trabajo en la shell de Linux",
                summary:
                  "Uso práctico de la CLI en Linux: terminales, comandos base, manejo de archivos y edición de texto para administración local y remota.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.2_shell.png",
                    alt: "Terminal Linux con ejecución de uname y comandos ls/grep."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.2_commands.png",
                    alt: "Tabla de comandos básicos de Linux y su descripción."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.2_path.png",
                    alt: "Explicación del comando man y del concepto de path en Linux."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.2_files.png",
                    alt: "Comandos de archivos y directorios en Linux (ls, cd, mkdir, cp, mv, rm)."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.2_nano_firewall.png",
                    alt: "Editor nano modificando reglas de firewall en Linux."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.2_nano_hosts.png",
                    alt: "Editor nano modificando el archivo /etc/hosts en Linux."
                  }
                ],
                sections: [
                  {
                    title: "2.2.1 The Linux Shell",
                    items: [
                      "En Linux, la interacción con el sistema puede hacerse por GUI o por CLI; la CLI se accede con emuladores de terminal.",
                      "Terminales comunes: Terminator, eterm, xterm, konsole y gnome-terminal.",
                      "La shell permite ejecutar comandos locales y remotos de forma eficiente, especialmente en administración por SSH.",
                      "Términos como shell, consola, CLI terminal y terminal window suelen usarse de forma equivalente."
                    ]
                  },
                  {
                    title: "2.2.2 Basic Commands",
                    items: [
                      "Comandos fundamentales: pwd, ps, su, sudo, passwd, shutdown y man para documentación.",
                      "Comandos de red y gestión: ifconfig, iwconfig y apt-get para configuración o mantenimiento.",
                      "Comandos de procesamiento y búsqueda: cat, grep, mv, chmod, chown y dd.",
                      "La ejecución depende de permisos del usuario; sin privilegios adecuados algunos comandos no se pueden aplicar."
                    ]
                  },
                  {
                    title: "2.2.3 File and Directory Commands",
                    items: [
                      "Comandos clave para sistema de archivos: ls, cd, mkdir, cp, mv, rm, grep y cat.",
                      "Parámetros y switches permiten ajustar el comportamiento de cada comando según la tarea.",
                      "El uso correcto de estas utilidades acelera diagnóstico, organización y mantenimiento del host Linux."
                    ]
                  },
                  {
                    title: "2.2.4 Working with Text Files",
                    items: [
                      "Linux ofrece editores gráficos y de línea de comandos; ambos cumplen roles distintos en operación diaria.",
                      "En administración remota (ej. por SSH), los editores CLI son esenciales porque no siempre hay interfaz gráfica.",
                      "nano es una opción común: CTRL+O guarda, CTRL+W busca y CTRL+G abre ayuda."
                    ]
                  },
                  {
                    title: "2.2.5 The Importance of Text Files in Linux",
                    items: [
                      "En Linux, casi todo se representa como archivo, incluyendo gran parte de la configuración del sistema.",
                      "Los servicios y aplicaciones leen archivos de configuración para definir su comportamiento al iniciar.",
                      "Con permisos adecuados, el administrador puede editar archivos críticos como /etc/hosts.",
                      "El comando sudo eleva privilegios para tareas administrativas, por ejemplo: sudo nano /etc/hosts."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Operar con soltura la shell de Linux para administrar archivos, editar configuraciones y ejecutar tareas técnicas de soporte y seguridad."
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
