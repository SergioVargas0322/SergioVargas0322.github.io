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
        tags: ["sistemas operativos", "windows", "linux", "móvil", "seguridad"],
        modules: [
          {
            key: "M1",
            title: "Sistema operativo Windows",
            topics: [
              {
                code: "1.1",
                title: "Historia de Windows",
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
                    title: "1.1.2 Versiones de Windows",
                    items: [
                      "Desde 1993, las versiones de Windows se basan en la arquitectura NT.",
                      "Con Windows XP se consolidó la adopción de 64 bits en equipos de usuario.",
                      "Las ediciones (Home, Pro, Enterprise, Server, Datacenter) responden a necesidades específicas."
                    ]
                  },
                  {
                    title: "1.1.3 Interfaz gráfica de Windows",
                    items: [
                      "El escritorio (Desktop) es personalizable por usuario e incluye accesos, archivos y papelera de reciclaje.",
                      "La barra de tareas (Taskbar) integra menú Inicio/búsqueda, accesos rápidos y área de notificaciones.",
                      "El menú contextual (Context Menu) y el Explorador de archivos (File Explorer) facilitan operaciones frecuentes de administración."
                    ]
                  },
                  {
                    title: "1.1.4 Vulnerabilidades del sistema operativo",
                    items: [
                      "Millones de líneas de código en SO y aplicaciones incrementan la superficie de falla.",
                      "Una vulnerabilidad puede explotarse para escalar privilegios, alterar permisos o robar información.",
                      "El atacante requiere técnica/herramienta de explotación para forzar comportamiento no previsto."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Entender la transición de DOS a Windows moderno y relacionarla con riesgos de seguridad en el equipo final (endpoint)."
                    ]
                  }
                ]
              },
              {
                code: "1.2",
                title: "Arquitectura y operación de Windows",
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
                    title: "1.2.2 Modo usuario y modo kernel",
                    items: [
                      "Aplicaciones de usuario corren en user mode con restricciones de hardware y memoria.",
                      "Código en kernel mode tiene acceso total; errores de drivers en este modo pueden detener todo el sistema.",
                      "El aislamiento por proceso en user mode evita que una app corrompa memoria de otra aplicación."
                    ]
                  },
                  {
                    title: "1.2.3 Sistemas de archivos en Windows",
                    items: [
                      "exFAT y FAT son simples y compatibles, pero FAT presenta límites de tamaño y particiones.",
                      "HFS+ (macOS) y EXT (Linux) pueden leerse en Windows con software adicional.",
                      "NTFS es el estándar en Windows por confiabilidad, permisos, cifrado y soporte forense (MACE).",
                      "Estructuras clave de NTFS: Partition Boot Sector, MFT, System Files y File Area.",
                      "Formatear no siempre elimina datos: para reutilización segura se recomienda un borrado seguro (secure wipe)."
                    ]
                  },
                  {
                    title: "1.2.4 Flujos de datos alternos (ADS)",
                    items: [
                      "NTFS permite asociar flujos alternos de datos a un archivo (ej.: Testfile.txt:ADS).",
                      "ADS puede ocultar información o código malicioso sin ser visible en un dir estándar.",
                      "El modificador dir /r permite evidenciar ADS en auditorías técnicas."
                    ]
                  },
                  {
                    title: "1.2.5 y 1.2.6 - Proceso de arranque e inicio",
                    items: [
                      "BIOS inicia con POST/MBR; UEFI utiliza archivos .efi en la EFI System Partition.",
                      "Bootmgr.exe carga BCD y decide ruta de hibernación (Winresume.exe) o arranque frío (Winload.exe).",
                      "Winload valida drivers (KMCS), inicia Ntoskrnl, HAL y SMSS para preparar el logon.",
                      "Claves HKLM y HKCU definen elementos de inicio; Msconfig facilita su gestión segura."
                    ]
                  },
                  {
                    title: "1.2.7 y 1.2.8 - Apagado, procesos, hilos y servicios",
                    items: [
                      "Un apagado correcto cierra apps/servicios en orden y reduce riesgo de corrupción.",
                      "Opciones de apagado: Shutdown, Restart e Hibernate según necesidad operativa.",
                      "Cada proceso contiene uno o más hilos; los servicios sostienen funciones permanentes del sistema.",
                      "Task Manager y Services son base para diagnóstico de rendimiento y disponibilidad."
                    ]
                  },
                  {
                    title: "1.2.9 Asignación de memoria y handles",
                    items: [
                      "Windows usa direcciones virtuales traducidas a direcciones físicas mediante tablas de páginas.",
                      "Procesos de 32 bits direccionan hasta 4 GB; en 64 bits el espacio virtual se amplía drásticamente.",
                      "Los handles permiten a procesos en user mode acceder a recursos del kernel sin acceso directo.",
                      "RAMMap (Sysinternals) permite analizar cómo se distribuye la memoria entre kernel, drivers y apps."
                    ]
                  },
                  {
                    title: "1.2.10 Registro de Windows",
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
                      "Comprender la operación interna de Windows para diagnosticar fallas, endurecer la configuración y mejorar la seguridad del equipo final (endpoint)."
                    ]
                  }
                ]
              },
              {
                code: "1.3",
                title: "Configuración y monitoreo de Windows",
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
                    alt: "Conexión a Escritorio remoto (Remote Desktop Connection) para acceso remoto por RDP."
                  }
                ],
                sections: [
                  {
                    title: "1.3.1 Ejecutar como administrador",
                    items: [
                      "No se recomienda trabajar siempre con cuenta Administrador por riesgo de heredar privilegios a software malicioso.",
                      "Para tareas puntuales, usar Run as Administrator sobre ejecutable o consola específica.",
                      "El uso controlado de elevación reduce superficie de ataque y errores críticos."
                    ]
                  },
                  {
                    title: "1.3.2 Usuarios locales y dominios",
                    items: [
                      "Las cuentas locales almacenan configuración y permisos específicos del equipo.",
                      "Cuentas Guest/Administrator vienen deshabilitadas por seguridad y no deben activarse sin justificación.",
                      "Los grupos simplifican permisos; la denegación explícita prevalece sobre permisos heredados.",
                      "En dominio, el Domain Controller define autenticación y políticas de sesión para usuarios/equipos."
                    ]
                  },
                  {
                    title: "1.3.3 CLI y PowerShell",
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
                    title: "1.3.5 Comando net",
                    items: [
                      "El comando net centraliza administración de cuentas, sesiones, recursos compartidos y servicios.",
                      "Subcomandos clave: net accounts, net session, net share, net start/stop, net use, net view.",
                      "net help y net help <subcomando> facilitan administración guiada por sintaxis oficial."
                    ]
                  },
                  {
                    title: "1.3.6 Administrador de tareas y Monitor de recursos",
                    items: [
                      "Task Manager ofrece visibilidad por pestañas: Processes, Performance, Startup, Users, Details y Services.",
                      "Resource Monitor profundiza análisis de CPU, memoria, disco y red por proceso.",
                      "Ambas herramientas ayudan a identificar cuellos de botella, servicios atascados y actividad sospechosa."
                    ]
                  },
                  {
                    title: "1.3.7 Redes",
                    items: [
                      "Network and Sharing Center permite crear conexiones y ajustar propiedades del adaptador.",
                      "Configurar IPv4/IPv6 por DHCP o manual según diseño de red.",
                      "nslookup valida DNS y netstat permite revisar conexiones y estado de puertos."
                    ]
                  },
                  {
                    title: "1.3.8 Acceso a recursos de red",
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
                title: "Seguridad en Windows",
                summary:
                  "Controles de seguridad en Windows para detectar actividad sospechosa, mantener el sistema actualizado y reforzar políticas locales del equipo final (endpoint).",
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
                    title: "1.4.1 Comando netstat",
                    items: [
                      "El comando netstat ayuda a detectar conexiones entrantes/salientes no autorizadas.",
                      "Con netstat -abno puedes ver puertos, estado, proceso asociado y PID para correlación con Task Manager.",
                      "Para usar opciones avanzadas se requiere consola con privilegios de administrador.",
                      "Si hay procesos sospechosos, se valida su legitimidad y se procede a contención y limpieza."
                    ]
                  },
                  {
                    title: "1.4.2 Visor de eventos",
                    items: [
                      "Event Viewer registra eventos de aplicaciones, seguridad y sistema para diagnóstico y auditoría.",
                      "Cada evento incluye nivel (información, advertencia, error, crítico), origen, fecha/hora e ID.",
                      "La vista Administrative Events centraliza eventos críticos y suele ser el mejor punto de partida."
                    ]
                  },
                  {
                    title: "1.4.3 Gestión de Windows Update",
                    items: [
                      "Mantener Windows actualizado reduce exposición a vulnerabilidades y zero-day exploits.",
                      "Los parches corrigen fallas específicas y los service packs agrupan mejoras y correcciones.",
                      "Windows Update permite revisar historial, ejecutar búsqueda manual y definir horas activas/reinicio."
                    ]
                  },
                  {
                    title: "1.4.4 Política de seguridad local",
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
                    title: "1.4.6 Firewall de Windows Defender",
                    items: [
                      "Un firewall implementa control de tráfico mediante reglas de entrada y salida por puertos/aplicaciones.",
                      "Una postura restrictiva (permitir solo lo necesario) reduce la superficie de ataque.",
                      "En Advanced settings se pueden crear, importar/exportar y monitorear reglas específicas."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Aplicar controles de monitoreo, actualización y endurecimiento (hardening) para fortalecer la seguridad de equipos Windows."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M2",
            title: "Linux: Shell y operación de servicios",
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
                    title: "2.1.4 Herramientas Linux y pentesting",
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
                title: "Trabajo en la Shell de Linux",
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
                    title: "2.2.1 La shell de Linux",
                    items: [
                      "En Linux, la interacción con el sistema puede hacerse por GUI o por CLI; la CLI se accede con emuladores de terminal.",
                      "Terminales comunes: Terminator, eterm, xterm, konsole y gnome-terminal.",
                      "La shell permite ejecutar comandos locales y remotos de forma eficiente, especialmente en administración por SSH.",
                      "Términos como shell, consola, CLI terminal y terminal window suelen usarse de forma equivalente."
                    ]
                  },
                  {
                    title: "2.2.2 Comandos básicos",
                    items: [
                      "Comandos fundamentales: pwd, ps, su, sudo, passwd, shutdown y man para documentación.",
                      "Comandos de red y gestión: ifconfig, iwconfig y apt-get para configuración o mantenimiento.",
                      "Comandos de procesamiento y búsqueda: cat, grep, mv, chmod, chown y dd.",
                      "La ejecución depende de permisos del usuario; sin privilegios adecuados algunos comandos no se pueden aplicar."
                    ]
                  },
                  {
                    title: "2.2.3 Comandos de archivos y directorios",
                    items: [
                      "Comandos clave para sistema de archivos: ls, cd, mkdir, cp, mv, rm, grep y cat.",
                      "Parámetros y switches permiten ajustar el comportamiento de cada comando según la tarea.",
                      "El uso correcto de estas utilidades acelera diagnóstico, organización y mantenimiento del host Linux."
                    ]
                  },
                  {
                    title: "2.2.4 Trabajo con archivos de texto",
                    items: [
                      "Linux ofrece editores gráficos y de línea de comandos; ambos cumplen roles distintos en operación diaria.",
                      "En administración remota (ej. por SSH), los editores CLI son esenciales porque no siempre hay interfaz gráfica.",
                      "nano es una opción común: CTRL+O guarda, CTRL+W busca y CTRL+G abre ayuda."
                    ]
                  },
                  {
                    title: "2.2.5 Importancia de los archivos de texto en Linux",
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
                title: "Servidores y clientes en Linux",
                summary:
                  "Modelo cliente-servidor, puertos de servicio y uso de Nmap para identificar exposición y riesgo operativo en un host.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.3_download.png",
                    alt: "Flujo de descarga de archivos desde servidor hacia cliente en una red."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.3_ports.png",
                    alt: "Tabla de puertos comunes y servicios asociados en Linux."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.3_upload.png",
                    alt: "Flujo de carga de archivos desde cliente hacia servidor en una red."
                  }
                ],
                sections: [
                  {
                    title: "2.3.1 Introducción a la comunicación cliente-servidor",
                    items: [
                      "Un servidor es un equipo con software que ofrece recursos o funciones a clientes a través de la red.",
                      "Existen servicios de negocio (archivos, correo, web) y servicios de mantenimiento (logs, memoria, disco).",
                      "Cada servicio requiere software específico y puede coexistir con otros en el mismo servidor."
                    ]
                  },
                  {
                    title: "2.3.2 Servidores, servicios y puertos",
                    items: [
                      "Un puerto es un recurso de red asociado a un servicio; cuando está activo se dice que el servicio está listening.",
                      "Aunque el administrador puede cambiar puertos, muchos clientes usan puertos por defecto para interoperabilidad.",
                      "Puertos comunes: 20/21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 67/68 DHCP, 69 TFTP, 80 HTTP, 110 POP3, 123 NTP, 143 IMAP, 161/162 SNMP y 443 HTTPS."
                    ]
                  },
                  {
                    title: "2.3.3 Clientes",
                    items: [
                      "Un cliente es una aplicación que habla un protocolo específico con un servidor.",
                      "Ejemplos: navegador web con HTTP para servidores web y cliente FTP para transferencia de archivos.",
                      "En operación diaria, los clientes realizan acciones de descarga y carga según permisos y servicio disponible."
                    ]
                  },
                  {
                    title: "2.3.4 Detección de puertos con Nmap (lab)",
                    items: [
                      "Nmap permite discovery y auditoría para identificar hosts, servicios, puertos abiertos y posibles vectores de ataque.",
                      "Comandos útiles: nmap localhost, sudo nmap -sU localhost, nmap -sV localhost y nmap -A localhost.",
                      "El análisis de puertos abiertos ayuda a detectar superficies de ataque como accesos remotos inseguros o servicios no gestionados.",
                      "La documentación de opciones se consulta con man nmap para profundizar en escaneos y evidencias."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Relacionar servicios y puertos con riesgo real, y usar Nmap para validar exposición técnica en Linux."
                    ]
                  }
                ]
              },
              {
                code: "2.4",
                title: "Administración básica de servidores",
                summary:
                  "Gestión de archivos de configuración, endurecimiento (hardening) del host y monitoreo de logs para mantener servicios Linux seguros y estables.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.4_logs_intro.png",
                    alt: "Descripción de categorías de logs en Linux y su valor operativo."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.4_logs_table.png",
                    alt: "Tabla de archivos de log comunes en Linux y su función."
                  }
                ],
                sections: [
                  {
                    title: "2.4.1 Archivos de configuración de servicios",
                    items: [
                      "En Linux, los servicios cargan parámetros desde archivos de configuración al iniciar.",
                      "Campos comunes: puerto, ubicación de recursos y criterios de autorización de clientes.",
                      "Cambios en configuración suelen requerir reinicio del servicio para aplicar ajustes.",
                      "Por seguridad, estos archivos suelen requerir privilegios de superusuario para edición."
                    ]
                  },
                  {
                    title: "Ejemplos de configuración en Linux",
                    items: [
                      "Nginx usa nginx.conf para definir comportamiento del servicio web.",
                      "NTP usa ntp.conf para sincronización de tiempo y reglas de restricción.",
                      "Snort usa snort.conf para variables de red, reglas y parámetros IDS.",
                      "Un patrón frecuente es option = value; el símbolo # se utiliza para comentarios."
                    ]
                  },
                  {
                    title: "2.4.2 Endurecimiento de dispositivos",
                    items: [
                      "El endurecimiento (hardening) reduce riesgo con controles sobre acceso administrativo, servicios y superficie expuesta.",
                      "Prácticas clave: minimizar paquetes instalados y deshabilitar servicios innecesarios al arranque.",
                      "Usar SSH para administración remota y evitar login directo de root sobre SSH.",
                      "Mantener sistema actualizado con parches disminuye probabilidad de compromiso por vulnerabilidades conocidas."
                    ]
                  },
                  {
                    title: "Checklist de endurecimiento",
                    items: [
                      "Asegurar control físico del equipo y puertos de acceso.",
                      "Enforzar contraseñas fuertes, cambios periódicos y no reutilización de claves.",
                      "Desactivar auto-detección USB cuando la política lo requiera.",
                      "Definir roles administrativos con privilegios diferenciados según función."
                    ]
                  },
                  {
                    title: "2.4.3 Monitoreo de logs de servicios",
                    items: [
                      "Los logs registran eventos de kernel, servicios y aplicaciones para diagnóstico y auditoría.",
                      "Revisar periódicamente archivos como /var/log/messages permite detectar anomalías tempranas.",
                      "El timestamp en cada línea ayuda a reconstruir secuencias de eventos durante investigación técnica."
                    ]
                  },
                  {
                    title: "Archivos de log comunes",
                    items: [
                      "/var/log/messages o /var/log/syslog para actividad general del sistema.",
                      "/var/log/auth.log o /var/log/secure para autenticación, sudo y accesos SSH.",
                      "/var/log/boot.log, /var/log/dmesg y /var/log/kern.log para arranque y eventos del kernel.",
                      "/var/log/cron y logs de aplicaciones (ej. MySQL) para tareas programadas y servicios específicos."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Administrar servicios Linux con configuración controlada, endurecimiento aplicado y monitoreo de logs orientado a seguridad."
                    ]
                  }
                ]
              },
              {
                code: "2.5",
                title: "Sistema de archivos Linux, roles y enlaces",
                summary:
                  "Tipos de file system en Linux, permisos por rol y diferencias entre hard links y symbolic links para administración segura.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.5_permissions.png",
                    alt: "Desglose de permisos de archivo en Linux para usuario, grupo y otros."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.5_octal.png",
                    alt: "Tabla de equivalencias octales de permisos en Linux."
                  }
                ],
                sections: [
                  {
                    title: "2.5.1 Tipos de sistemas de archivos en Linux",
                    items: [
                      "Linux soporta múltiples sistemas de archivos; el administrador elige según rendimiento, flexibilidad, tamaño y seguridad.",
                      "Familia ext: ext2 (sin journal), ext3 (con journaling) y ext4 (mejoras de rendimiento y escalabilidad).",
                      "Otros tipos relevantes: NFS para acceso por red, CDFS para medios ópticos, swap para apoyo de memoria, HFS+ y APFS para compatibilidad con entornos Apple.",
                      "MBR y proceso de montaje (mount) son claves para que una partición quede accesible en un punto de montaje dentro del árbol Linux."
                    ]
                  },
                  {
                    title: "2.5.2 Roles de Linux y permisos de archivos",
                    items: [
                      "Los permisos se aplican por archivo en el orden usuario, grupo y otros con derechos r, w y x.",
                      "El comando ls -l muestra permisos, enlaces, propietario, grupo, tamaño, fecha y nombre del archivo.",
                      "El usuario root puede sobreescribir restricciones y por eso sus credenciales deben protegerse con máxima rigurosidad.",
                      "La notación octal (0-7) simplifica la asignación de permisos y facilita administración masiva."
                    ]
                  },
                  {
                    title: "2.5.3 Enlaces duros y enlaces simbólicos",
                    items: [
                      "Un hard link apunta al mismo inode que el archivo original; cambios en uno se reflejan en ambos.",
                      "Un symbolic link apunta por ruta; si el archivo origen desaparece, el enlace queda roto.",
                      "Hard links no cruzan file systems ni se usan para directorios; symbolic links sí permiten esos escenarios.",
                      "Para creación: ln archivo_origen hardlink y ln -s archivo_origen symlink."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Administrar almacenamiento Linux con criterio técnico, aplicando permisos correctos y enlaces adecuados para cada caso."
                    ]
                  }
                ]
              },
              {
                code: "2.6",
                title: "Trabajo con la GUI de Linux",
                summary:
                  "Arquitectura gráfica basada en X Window System, gestores de ventanas y componentes clave de la interfaz de Ubuntu/GNOME.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.6_gnome.png",
                    alt: "Ejemplo de entorno gráfico GNOME en Linux."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.6_kde.jpg",
                    alt: "Ejemplo de entorno gráfico KDE en Linux."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.6_ubuntu_ui.png",
                    alt: "Componentes de interfaz de Ubuntu con GNOME 3."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_2.6_ui_table.png",
                    alt: "Tabla de componentes principales de la UI en Ubuntu GNOME."
                  }
                ],
                sections: [
                  {
                    title: "2.6.1 Sistema X Window",
                    items: [
                      "X Window System (X11) provee el framework base para dibujar ventanas y gestionar interacción con teclado y mouse.",
                      "X permite ejecutar aplicaciones de forma remota y mostrar su interfaz gráfica en otro equipo conectado por red.",
                      "La capa X no define por sí sola el look and feel final, lo que habilita gran personalización del entorno."
                    ]
                  },
                  {
                    title: "Gestores de ventanas: GNOME y KDE",
                    items: [
                      "Window managers como GNOME y KDE definen iconos, menús, fuentes, bordes y estilo visual del escritorio.",
                      "Aunque cambie la apariencia entre distribuciones, los componentes funcionales principales se mantienen.",
                      "Esa separación entre motor gráfico y presentación aporta flexibilidad operativa en Linux."
                    ]
                  },
                  {
                    title: "2.6.2 Interfaz gráfica de Linux",
                    items: [
                      "La GUI no es obligatoria para que Linux funcione, pero mejora usabilidad para perfiles no avanzados en CLI.",
                      "Ubuntu usa GNOME 3 como interfaz por defecto con enfoque en simplicidad y experiencia de usuario.",
                      "El entorno gráfico puede reemplazarse según necesidades, políticas de soporte o recursos del equipo."
                    ]
                  },
                  {
                    title: "Componentes clave de la interfaz Ubuntu",
                    items: [
                      "Apps Menu para lanzar aplicaciones y acceder a búsqueda del sistema.",
                      "Ubuntu Dock para acceso rápido y cambio entre aplicaciones activas.",
                      "Top Bar y bandeja de fecha/mensajes para estado del sistema y agenda.",
                      "Status Menu para red, usuario, energía, bloqueo y apagado del equipo."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Navegar y administrar Linux desde GUI entendiendo su arquitectura y su relación con la operación por terminal."
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
                title: "Red inalámbrica y datos celulares",
                summary:
                  "Conectividad móvil por Wi-Fi y red celular, con enfoque en seguridad de configuración, estándares de comunicación y uso de hotspot.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_3.1_airplane_cellular.png",
                    alt: "Pantallas de iOS para modo avión y opciones de datos celulares."
                  },
                  {
                    src: "./assets/images/operating-systems-basics/C2_3.1_hotspot.png",
                    alt: "Configuración de Personal Hotspot en iOS para compartir internet."
                  }
                ],
                sections: [
                  {
                    title: "3.1.1 Redes de datos inalámbricas",
                    items: [
                      "Los dispositivos móviles se conectan a internet principalmente por Wi-Fi o por red celular.",
                      "Wi-Fi suele preferirse por costo y consumo de batería, mientras que celular depende del plan del operador.",
                      "IMEI identifica el dispositivo e IMSI identifica al abonado (normalmente asociado a la SIM).",
                      "La cobertura celular se construye con torres y satélites, habilitando conectividad en movilidad."
                    ]
                  },
                  {
                    title: "3.1.2 Configuración manual de Wi-Fi",
                    items: [
                      "Buenas prácticas: usar seguridad robusta (WPA2 o superior), evitar texto claro para credenciales y preferir VPN.",
                      "Configuración manual requiere SSID, tipo de seguridad y contraseña en Android o iOS.",
                      "La conexión puede ser automática o manual según la política y el entorno de red."
                    ]
                  },
                  {
                    title: "3.1.4 Estándares de comunicación celular",
                    items: [
                      "Evolución de estándares: 1G analógico, 2G digital, 3G con internet móvil, 4G/LTE de alta velocidad y 5G de muy alta capacidad.",
                      "No todos los estándares se adoptan igual en todos los países; esto puede afectar compatibilidad internacional.",
                      "Muchos equipos soportan múltiples generaciones y cambian automáticamente entre ellas según cobertura."
                    ]
                  },
                  {
                    title: "3.1.5 Modo avión",
                    items: [
                      "Airplane Mode desactiva radios celulares, Wi-Fi y Bluetooth para cumplir restricciones operativas.",
                      "Tras activarlo, pueden habilitarse selectivamente algunas interfaces (como Wi-Fi o Bluetooth) si la política lo permite.",
                      "También sirve para ahorrar energía o evitar consumo de datos en escenarios con cargos elevados."
                    ]
                  },
                  {
                    title: "3.1.6 Punto de acceso (hotspot)",
                    items: [
                      "Un hotspot (tethering) permite compartir internet celular con otros dispositivos por Wi-Fi, Bluetooth o USB.",
                      "Es útil cuando no existe red fija o Wi-Fi disponible para el equipo que necesita conectividad.",
                      "Herramientas como analizadores Wi-Fi o de celdas ayudan a diagnosticar problemas de radio en movilidad."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Configurar conectividad móvil segura y entender el impacto técnico de estándares celulares, modo avión y hotspot."
                    ]
                  }
                ]
              },
              {
                code: "3.2",
                title: "Bluetooth",
                summary:
                  "Uso de Bluetooth en dispositivos móviles, tipos de periféricos compatibles y proceso de emparejamiento seguro en Android e iOS.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_3.2_bluetooth_settings.png",
                    alt: "Pantalla de configuración móvil con opción Bluetooth activa."
                  }
                ],
                sections: [
                  {
                    title: "3.2.1 Bluetooth en dispositivos móviles",
                    items: [
                      "Bluetooth permite conectar parlantes, audífonos, teclados, mouse y controles de juego.",
                      "Estos periféricos mejoran productividad y experiencia multimedia sin cableado adicional."
                    ]
                  },
                  {
                    title: "3.2.2 Emparejamiento Bluetooth",
                    items: [
                      "El emparejamiento Bluetooth es el proceso por el cual dos dispositivos acuerdan parámetros de comunicación y autenticación.",
                      "Uno de los equipos debe estar en modo discoverable/visible para ser detectado.",
                      "Durante el pairing puede solicitarse PIN o passkey, que luego queda almacenado para futuras conexiones."
                    ]
                  },
                  {
                    title: "Procedimiento operativo (Android e iOS)",
                    items: [
                      "Activar Bluetooth en ajustes del sistema y seleccionar el dispositivo detectado.",
                      "Ingresar el PIN si es requerido por el periférico.",
                      "Verificar que el dispositivo quede enlazado y disponible dentro del rango de cobertura."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Emparejar periféricos Bluetooth de forma estable y segura, minimizando errores de visibilidad o autenticación."
                    ]
                  }
                ]
              },
              {
                code: "3.3",
                title: "Configuración de correo electrónico",
                summary:
                  "Configuración de correo en Android e iOS, protocolos de correo y diferencias entre servicios locales e internet email.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_3.3_email_setup.png",
                    alt: "Tabla de información requerida para configurar una cuenta de correo."
                  }
                ],
                sections: [
                  {
                    title: "3.3.1 Introducción al correo electrónico",
                    items: [
                      "El correo electrónico se basa en la interacción entre servidores de email y clientes de correo.",
                      "Los servidores reenvían y almacenan mensajes; los clientes permiten redactar, leer y administrar el buzón.",
                      "Los clientes pueden ser web o aplicaciones instaladas, y dependen de protocolos estándar para comunicarse."
                    ]
                  },
                  {
                    title: "Protocolos y estándares de correo",
                    items: [
                      "POP3 (TCP 110): descarga correos del servidor y normalmente no mantiene copia remota.",
                      "IMAP4 (TCP 143): sincroniza carpetas entre cliente y servidor, con mayor uso de recursos.",
                      "SMTP (TCP 25): se usa para el envío entre cliente-servidor y servidor-servidor.",
                      "MIME extiende SMTP para adjuntos y formatos no ASCII; SSL/TLS aporta cifrado en tránsito."
                    ]
                  },
                  {
                    title: "3.3.3 Configuración de correo en Android",
                    items: [
                      "Android integra servicios de Google y sincroniza correo, contactos y ajustes al iniciar sesión.",
                      "Para agregar cuenta: abrir Gmail/Email, elegir tipo de cuenta, ingresar credenciales y guardar configuración.",
                      "Si se requiere restaurar configuración desde backup, el acceso a la cuenta debe hacerse durante el setup inicial."
                    ]
                  },
                  {
                    title: "3.3.4 Configuración de correo en iOS",
                    items: [
                      "iOS incluye Mail y soporta iCloud, Exchange, Google, Yahoo, AOL y Outlook.",
                      "El Apple ID habilita App Store, iTunes e iCloud, incluyendo correo y almacenamiento remoto de respaldo.",
                      "Para agregar cuenta: Settings > Passwords & Accounts > Add Account, seleccionar proveedor e ingresar datos."
                    ]
                  },
                  {
                    title: "3.3.5 Correo en internet",
                    items: [
                      "Un usuario puede operar correo local (gestionado por TI interno) o internet email (gestionado por proveedor externo).",
                      "El acceso puede hacerse desde app nativa del SO, cliente web o app dedicada (por ejemplo Gmail).",
                      "Las apps de correo suelen ofrecer mejor experiencia de uso que la interfaz web para operación diaria."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Configurar cuentas de correo en Android e iOS entendiendo protocolos, seguridad y tipo de servicio utilizado."
                    ]
                  }
                ]
              },
              {
                code: "3.4",
                title: "Sincronización de dispositivos móviles",
                summary:
                  "Sincronización de datos entre dispositivos, diferencias entre Android e iOS, y tipos de conexión para respaldos y consistencia de información.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-connectivity.svg",
                    alt: "Sincronización de datos entre dispositivos móviles y servicios en la nube."
                  }
                ],
                sections: [
                  {
                    title: "3.4.1 Tipos de datos para sincronizar",
                    items: [
                      "La sincronización mantiene información consistente entre múltiples equipos (móvil, tablet, laptop, desktop).",
                      "Datos comunes: contactos, apps, correo, fotos, música, videos, calendario, documentos, marcadores, contraseñas y más.",
                      "Métodos habituales: nube, sincronización con equipo local y escenarios integrados (como automóvil)."
                    ]
                  },
                  {
                    title: "3.4.2 Habilitar sincronización",
                    items: [
                      "En Android, Sync y Auto Sync permiten elegir qué datos sincronizar y si se hace de forma automática.",
                      "En iOS hay dos conceptos: Backup (copia integral) y Sync (sincronización de contenido definido).",
                      "Buenas prácticas en iOS: realizar Backup antes de Sync y definir ubicación de respaldo (local o iCloud)."
                    ]
                  },
                  {
                    title: "3.4.3 Tipos de conexión para sincronización",
                    items: [
                      "La sincronización puede realizarse por USB o Wi-Fi, según plataforma y configuración del entorno.",
                      "Android suele apoyarse en servicios en la nube de Google para continuidad de datos entre dispositivos.",
                      "iOS permite Wi-Fi Sync con iTunes tras una primera conexión por cable y configuración previa.",
                      "Servicios como OneDrive también permiten sincronizar información entre móviles y PCs."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Mantener datos coherentes entre dispositivos aplicando el método de sincronización adecuado para cada plataforma."
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
                title: "Android versus iOS",
                summary:
                  "Diferencias entre Android e iOS en modelo de código, ecosistema de aplicaciones y control de contenido.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_4.1_android_vs_ios.svg",
                    alt: "Comparativa visual entre Android de código abierto e iOS de código cerrado."
                  }
                ],
                sections: [
                  {
                    title: "4.1.1 Código abierto versus código cerrado",
                    items: [
                      "Android es un sistema operativo móvil basado en Linux y de enfoque abierto; iOS es propietario y de código cerrado.",
                      "El código fuente abierto facilita auditoría y personalización; el código cerrado prioriza control del fabricante sobre plataforma y distribución.",
                      "Además de Android e iOS, Microsoft desarrolló ediciones móviles como Windows Phone y Windows 10 Mobile."
                    ]
                  },
                  {
                    title: "4.1.2 Fuentes de aplicaciones y contenido",
                    items: [
                      "Las apps sustituyen a los programas tradicionales de escritorio y se descargan desde tiendas o fuentes autorizadas.",
                      "En iOS, Apple usa un modelo de revisión centralizada y ecosistema cerrado (walled garden) en App Store para filtrar contenido malicioso.",
                      "En Android, además de Google Play, se permite instalación desde terceros mediante archivos APK (sideloading), lo que exige mayor criterio de seguridad."
                    ]
                  },
                  {
                    title: "Desarrollo y distribución de apps",
                    items: [
                      "iOS usa Xcode y Swift dentro del ecosistema Apple.",
                      "Android usa Android Studio y un modelo de permisos por aplicación (sandbox + autorizaciones).",
                      "La procedencia de la app impacta directamente el riesgo operativo del dispositivo."
                    ]
                  },
                  {
                    title: "Integración con vehículos",
                    items: [
                      "Android Auto y Apple CarPlay extienden funciones del móvil al sistema del automóvil.",
                      "Casos típicos: navegación, música, llamadas manos libres, asistentes digitales y calendario.",
                      "El enlace suele realizarse por USB o Bluetooth, por lo que también requiere controles de seguridad y privacidad."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Comparar Android e iOS con criterio técnico para elegir plataforma, fuente de apps y controles de seguridad adecuados al entorno."
                    ]
                  }
                ]
              },
              {
                code: "4.2",
                title: "Interfaz táctil móvil",
                summary:
                  "Componentes de interfaz en Android e iOS: navegación, notificaciones, centro de control y búsqueda del sistema.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_4.2_touch_interface.svg",
                    alt: "Elementos de la interfaz táctil en móviles: barra superior, área de apps, navegación y notificaciones."
                  }
                ],
                sections: [
                  {
                    title: "4.2.1 Elementos de la pantalla de inicio en Android",
                    items: [
                      "Android organiza apps y widgets en varias pantallas con una pantalla principal (inicio).",
                      "El indicador de pantalla muestra qué escritorio está activo y permite navegación horizontal por deslizamiento.",
                      "La barra del sistema se mantiene visible para navegación y acciones globales del dispositivo."
                    ]
                  },
                  {
                    title: "Iconos de navegación y área de notificaciones",
                    items: [
                      "Los iconos de navegación permiten volver, ir al inicio y gestionar aplicaciones recientes.",
                      "El área de estado incluye reloj, batería, red Wi-Fi, datos móviles y alertas de apps.",
                      "Al deslizar desde la parte superior se abre el panel de notificaciones para responder, descartar o ajustar configuraciones rápidas."
                    ]
                  },
                  {
                    title: "4.2.3 Elementos de la pantalla de inicio en iOS",
                    items: [
                      "iOS también organiza apps por pantallas táctiles, pero con diferencias clave frente a Android.",
                      "No usa el mismo esquema de iconos de navegación y, según el modelo, privilegia botón físico o gestos.",
                      "En iOS cada icono representa la app real; no se maneja el mismo enfoque de widgets y atajos que Android."
                    ]
                  },
                  {
                    title: "Botón de inicio (Home), centro de control y notificaciones",
                    items: [
                      "En iPhone con botón Home, este concentra acciones como desbloquear, volver a inicio y activar Siri.",
                      "En modelos sin botón Home, esas funciones migran a gestos táctiles y botón lateral.",
                      "El Centro de notificaciones (Notification Center) y el Centro de control (Control Center) centralizan alertas y ajustes frecuentes incluso con el equipo bloqueado."
                    ]
                  },
                  {
                    title: "Búsqueda con Spotlight",
                    items: [
                      "Spotlight permite buscar apps, ajustes, contenido local y resultados web desde cualquier pantalla.",
                      "La búsqueda se actualiza en tiempo real y acelera acceso a funciones sin navegar por múltiples menús."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Identificar y usar correctamente los componentes táctiles principales de Android e iOS para una operación móvil más rápida y segura."
                    ]
                  }
                ]
              },
              {
                code: "4.3",
                title: "Antivirus, rooteo/jailbreak y actualizaciones",
                summary:
                  "Defensas de software en móviles: antimalware, control de permisos, riesgo de rooteo/jailbreak y gestión de parches.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-security.svg",
                    alt: "Seguridad móvil con antivirus, parches y control de privilegios."
                  }
                ],
                sections: [
                  {
                    title: "4.3.1 Protección antimalware y sandbox",
                    items: [
                      "Los dispositivos móviles también son objetivos de malware: spyware, troyanos, adware y robo de credenciales.",
                      "Android e iOS aíslan aplicaciones con sandbox para limitar accesos no autorizados entre apps.",
                      "Las soluciones antimalware deben complementar, no sustituir, el control de permisos y la higiene de uso."
                    ]
                  },
                  {
                    title: "4.3.2 Fuentes confiables y permisos de aplicaciones",
                    items: [
                      "Instalar aplicaciones solo desde fuentes confiables reduce el riesgo de código manipulado o malicioso.",
                      "Cada permiso solicitado debe revisarse con criterio: acceso a cámara, micrófono, ubicación, contactos y archivos.",
                      "Una app con permisos excesivos incrementa superficie de ataque y exposición de datos personales o corporativos."
                    ]
                  },
                  {
                    title: "4.3.3 Riesgos de rooteo y jailbreak",
                    items: [
                      "El rooteo (Android) y jailbreak (iOS) eliminan restricciones del fabricante para obtener privilegios elevados.",
                      "Este cambio debilita controles nativos de seguridad, rompe garantías y facilita persistencia de malware.",
                      "En entornos académicos o empresariales, se recomienda evitar dispositivos modificados para uso operativo."
                    ]
                  },
                  {
                    title: "4.3.4 Gestión de actualizaciones y parches",
                    items: [
                      "Mantener sistema operativo y aplicaciones actualizadas corrige vulnerabilidades conocidas y fallos críticos.",
                      "No todos los equipos reciben parches al mismo ritmo; revisar versión, soporte del fabricante y fin de vida útil.",
                      "Aplicar actualizaciones en ventanas controladas reduce interrupciones y mejora continuidad operativa."
                    ]
                  },
                  {
                    title: "Checklist de seguridad de software",
                    items: [
                      "Activar protección antimalware y escaneo periódico según la política del dispositivo.",
                      "Revisar permisos sensibles en cada app instalada y desinstalar aplicaciones sin uso.",
                      "Verificar estado de actualización del SO y de aplicaciones al menos una vez por semana."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Sostener dispositivos móviles actualizados y con menor superficie de ataque mediante controles de software consistentes."
                    ]
                  }
                ]
              },
              {
                code: "4.4",
                title: "Interfaz táctil y funciones comunes del dispositivo",
                summary:
                  "Elementos comunes en Android e iOS: orientación, calibración, ubicación, conectividad avanzada y asistentes virtuales.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/C2_4.2_touch_interface.svg",
                    alt: "Interfaz táctil y componentes comunes en dispositivos móviles."
                  }
                ],
                sections: [
                  {
                    title: "4.4.1 Orientación y sensores",
                    items: [
                      "La orientación automática usa acelerómetro y giroscopio para adaptar la pantalla a modo vertical u horizontal.",
                      "Una configuración adecuada mejora legibilidad, escritura y experiencia en apps multimedia.",
                      "Cuando el contexto lo requiera, bloquear orientación evita cambios no deseados durante el uso."
                    ]
                  },
                  {
                    title: "4.4.2 Calibración y brillo",
                    items: [
                      "El brillo de pantalla impacta directamente batería, fatiga visual y visibilidad en exteriores.",
                      "El brillo adaptativo usa sensores de luz ambiente para ajustar nivel de forma automática.",
                      "Calibrar correctamente la pantalla mejora precisión táctil y accesibilidad para distintos usuarios."
                    ]
                  },
                  {
                    title: "4.4.3 Ubicación, GPS y servicios contextuales",
                    items: [
                      "Los servicios de ubicación combinan GPS, Wi-Fi y red celular para estimar posición del dispositivo.",
                      "Aplicaciones de mapas, transporte y seguridad dependen de esta función para operar correctamente.",
                      "Se recomienda otorgar ubicación solo a apps necesarias y preferir el permiso 'Mientras se usa'."
                    ]
                  },
                  {
                    title: "4.4.4 Funciones comunes de conectividad",
                    items: [
                      "Wi-Fi Calling permite cursar llamadas sobre redes Wi-Fi cuando la señal celular es débil.",
                      "VPN protege tráfico en redes públicas y es clave cuando se accede a recursos institucionales.",
                      "Pagos móviles y servicios NFC deben usarse con bloqueo de pantalla y verificación biométrica activa."
                    ]
                  },
                  {
                    title: "4.4.5 Asistentes virtuales y automatización",
                    items: [
                      "Asistentes como Siri o Google Assistant ejecutan tareas por voz y aumentan productividad diaria.",
                      "Su uso implica tratamiento de datos de voz y contexto, por lo que requiere revisar privacidad.",
                      "Desactivar activación por voz en entornos sensibles reduce riesgo de acciones no autorizadas."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Configurar funciones comunes del dispositivo equilibrando usabilidad, autonomía y seguridad operativa."
                    ]
                  }
                ]
              },
              {
                code: "4.5",
                title: "Códigos de acceso, intentos fallidos y borrado automático",
                summary:
                  "Controles de autenticación local para prevenir acceso no autorizado y proteger datos ante pérdida o robo del equipo.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-security.svg",
                    alt: "Políticas de bloqueo y protección de datos ante intentos fallidos."
                  }
                ],
                sections: [
                  {
                    title: "4.5.1 Tipos de bloqueo de pantalla",
                    items: [
                      "Métodos comunes: PIN, contraseña, patrón, huella y reconocimiento facial según plataforma.",
                      "La biometría mejora usabilidad, pero debe combinarse con código de respaldo robusto.",
                      "Evitar códigos triviales (1234, fechas personales) reduce ataques por adivinación."
                    ]
                  },
                  {
                    title: "4.5.2 Restricciones por intentos fallidos",
                    items: [
                      "Tras múltiples intentos erróneos, el sistema aplica retardo progresivo o bloqueo temporal.",
                      "Estas políticas mitigan fuerza bruta y reducen riesgo de acceso por prueba masiva.",
                      "El umbral debe definirse según perfil de riesgo y política institucional."
                    ]
                  },
                  {
                    title: "4.5.3 Borrado automático y recuperación",
                    items: [
                      "Algunos dispositivos permiten borrar datos tras un número de intentos fallidos configurable.",
                      "Antes de habilitar esta opción, validar respaldo reciente y probado para evitar pérdida irreversible.",
                      "El plan de recuperación debe contemplar restauración de cuentas, apps y datos críticos."
                    ]
                  },
                  {
                    title: "Checklist de protección",
                    items: [
                      "Configurar bloqueo por PIN/contraseña robusta y habilitar biometría como segundo factor local.",
                      "Definir umbral de intentos fallidos y comportamiento posterior (retardo o borrado).",
                      "Comprobar que exista respaldo actualizado antes de activar borrado automático."
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
                  "Uso de servicios cloud para respaldo, localización de dispositivos y respuesta remota ante incidentes de seguridad móvil.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-security.svg",
                    alt: "Servicios en la nube para respaldo y control remoto de dispositivos."
                  }
                ],
                sections: [
                  {
                    title: "4.6.1 Respaldo en la nube",
                    items: [
                      "Servicios como iCloud o Google permiten respaldar datos, ajustes y aplicaciones de forma automática.",
                      "La estrategia de respaldo debe definir frecuencia, cifrado y verificación de restauración.",
                      "Un respaldo no validado no garantiza continuidad; probar restauración es parte del control."
                    ]
                  },
                  {
                    title: "4.6.2 Localización de dispositivos",
                    items: [
                      "Herramientas tipo Find My Device/Find My iPhone permiten ubicar equipos extraviados en mapa.",
                      "La localización requiere configuración previa, cuenta activa y conectividad del dispositivo.",
                      "En escenarios corporativos, la geolocalización debe alinearse con políticas de privacidad."
                    ]
                  },
                  {
                    title: "4.6.3 Bloqueo remoto y modo perdido",
                    items: [
                      "El bloqueo remoto impide acceso local y permite mostrar mensajes de contacto al recuperar el equipo.",
                      "El modo perdido reduce exposición de datos mientras se gestiona la recuperación del dispositivo.",
                      "Estas acciones deben ejecutarse tan pronto se confirme pérdida o robo."
                    ]
                  },
                  {
                    title: "4.6.4 Borrado remoto",
                    items: [
                      "Si no es posible recuperar el equipo, el borrado remoto elimina datos y reduce riesgo de fuga de información.",
                      "Tras el borrado, el procedimiento incluye alta de nuevo dispositivo y restauración segura desde respaldo.",
                      "La decisión de borrar debe seguir un protocolo definido por criticidad de la información."
                    ]
                  },
                  {
                    title: "Checklist operativo",
                    items: [
                      "Activar respaldo automático y verificar restauración periódicamente.",
                      "Configurar localización y bloqueo remoto antes de cualquier incidente.",
                      "Aplicar bloqueo o borrado remoto cuando la recuperación no sea viable."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Responder incidentes de pérdida/robo con controles remotos efectivos y continuidad de la información."
                    ]
                  }
                ]
              },
            ]
          }
        ]
      }
    ]
  };
})();
