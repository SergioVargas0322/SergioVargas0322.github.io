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
      },
      {
        id: "packet-tracer-intro",
        title: "Introducción a Cisco Packet Tracer",
        provider: "Cisco Networking Academy",
        level: "Inicial",
        status: "En curso",
        estimatedHours: 8,
        summary:
          "Curso introductorio para aprender la interfaz, los tipos de archivo y el flujo de trabajo básico para crear y probar topologías en Cisco Packet Tracer.",
        tags: ["packet tracer", "simulación", "redes", "cisco"],
        modules: [
          {
            key: "M1",
            title: "Descargue y use Cisco Packet Tracer",
            topics: [
              {
                code: "1.0",
                title: "Instalación y puesta en marcha de Cisco Packet Tracer",
                summary:
                  "Introducción al curso, descarga oficial, alcance formativo y preparación inicial del entorno para comenzar prácticas.",
                images: [
                  {
                    src: "./assets/images/packet-tracer-basics/C3_1.0.png",
                    alt: "Portada del módulo de introducción a Cisco Packet Tracer."
                  }
                ],
                sections: [
                  {
                    title: "Qué es y para qué sirve",
                    items: [
                      "Packet Tracer permite practicar redes, IoT y ciberseguridad sin hardware físico.",
                      "Es un entorno de simulación para construir, configurar y analizar topologías desde una computadora personal.",
                      "Su objetivo en este curso es preparar al estudiante para laboratorios y actividades de evaluación."
                    ]
                  },
                  {
                    title: "Primera vez en el curso",
                    items: [
                      "Está dirigido a usuarios nuevos o con experiencia inicial que necesiten familiarizarse con la herramienta.",
                      "Se recomienda contar con cuenta activa en Cisco Networking Academy para acceder a recursos y laboratorios.",
                      "El curso es autoguiado y establece la base para módulos posteriores de creación y análisis de redes."
                    ]
                  },
                  {
                    title: "Descarga e instalación",
                    items: [
                      "La descarga oficial se realiza desde: https://www.netacad.com/resources/lab-downloads",
                      "Packet Tracer está disponible para Windows, macOS y Linux.",
                      "Tras instalar, se debe iniciar sesión y verificar que la aplicación abra sin errores."
                    ]
                  },
                  {
                    title: "Ruta de aprendizaje",
                    items: [
                      "Módulo 1: familiarización con instalación, interfaz y navegación.",
                      "Módulo 2: creación de red en Packet Tracer y manejo de tipos de archivo.",
                      "Esta secuencia permite pasar de reconocimiento de herramienta a práctica aplicada."
                    ]
                  },
                  {
                    title: "Checklist inicial",
                    items: [
                      "Crear o verificar cuenta activa en Cisco Networking Academy.",
                      "Descargar e instalar la versión compatible con el sistema operativo.",
                      "Abrir la aplicación y validar que inicia correctamente."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Disponer de Packet Tracer instalado y listo para comenzar prácticas de topologías."
                    ]
                  }
                ]
              },
              {
                code: "1.1",
                title: "Interfaz y flujo de trabajo inicial en Packet Tracer",
                summary:
                  "Uso de interfaz, despliegue de dispositivos, configuración GUI/CLI y trabajo guiado en actividades PTTA con vistas lógica y física.",
                images: [
                  {
                    src: "./assets/images/packet-tracer-basics/C3_1.1.png",
                    alt: "Interfaz principal de Cisco Packet Tracer en vista lógica."
                  }
                ],
                sections: [
                  {
                    title: "Componentes de la interfaz",
                    items: [
                      "Barra de menús y barras de herramientas para crear, guardar, editar y explorar topologías.",
                      "Panel de dispositivos para agregar routers, switches, hosts y conexiones.",
                      "Zona de escenario y controles de simulación para observar el flujo de paquetes.",
                      "La barra del espacio de trabajo permite alternar entre vista lógica y vista física."
                    ]
                  },
                  {
                    title: "Implementación de dispositivos y conexiones",
                    items: [
                      "Se pueden arrastrar equipos al espacio de trabajo y eliminarlos/recuperarlos con herramientas de edición.",
                      "La conexión automática selecciona cable y puerto adecuados según el tipo de dispositivo.",
                      "También es posible elegir manualmente cables directos, cruzados o consola según la práctica."
                    ]
                  },
                  {
                    title: "Pestañas de configuración del dispositivo",
                    items: [
                      "Física (Physical): encendido/apagado e instalación de módulos.",
                      "Configuración (Config): ajustes por GUI con comandos IOS equivalentes.",
                      "CLI, Escritorio (Desktop) y Servicios (Services): terminal, utilidades del host y roles de servidor."
                    ]
                  },
                  {
                    title: "Actividades PTTA y niveles de pistas",
                    items: [
                      "Las actividades PTTA guían paso a paso con lista de tareas y porcentaje de avance.",
                      "Los niveles de sugerencias (todas, más, críticas o ninguna) ajustan el soporte durante la práctica.",
                      "Al finalizar, incluyen resumen y reflexión para reforzar el aprendizaje."
                    ]
                  },
                  {
                    title: "Modo lógico/físico e inspección",
                    items: [
                      "La vista lógica facilita analizar conectividad y ruta de paquetes.",
                      "La vista física permite inspeccionar frente/parte trasera de equipos y ubicar puertos con precisión.",
                      "Estas funciones mejoran la calidad de cableado y reducen errores en laboratorios."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Navegar con fluidez por Packet Tracer e iniciar configuraciones básicas de dispositivos en GUI y CLI."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M2",
            title: "Creación de una red Cisco Packet Tracer",
            topics: [
              {
                code: "2.0",
                title: "Tipos de archivo y evaluaciones en Packet Tracer",
                summary:
                  "Uso correcto de formatos .pka, .pkt, .pksz y .pkz, junto con su relación con evaluaciones PTMO y PTSA.",
                images: [
                  {
                    src: "./assets/images/packet-tracer-basics/C3_2.0.png",
                    alt: "Listado de tipos de archivo de Cisco Packet Tracer: .pka, .pkt, .pksz y .pkz."
                  }
                ],
                sections: [
                  {
                    title: "2.0.1 Tipos de archivo de Packet Tracer",
                    items: [
                      ".pka: archivo de actividad evaluable con ventana de instrucciones, puntuación y función de comprobación de resultados.",
                      "Un .pka incluye red inicial (visible al estudiante) y red de respuesta (ejecutada en segundo plano para validar).",
                      ".pkt: topología guardada para práctica libre; no incorpora puntuación ni instrucciones de actividad.",
                      ".pksz: formato de actividades PTTA que integra un .pka más recursos multimedia y scripts de pistas.",
                      ".pkz: formato heredado; actualmente su uso es limitado frente a los formatos modernos."
                    ]
                  },
                  {
                    title: "2.0.2 Evaluaciones con Packet Tracer",
                    items: [
                      "PTMO (Packet Tracer Media Object): pregunta dentro de un examen/cuestionario que abre un .pkt o .pka.",
                      "PTSA (Packet Tracer Skills Assessment): evaluación práctica sumativa e independiente para demostrar competencias.",
                      "En PTSA, los resultados pueden incluir retroalimentación por componente según la configuración del curso."
                    ]
                  },
                  {
                    title: "Guía rápida de uso",
                    items: [
                      "Usa .pkt cuando quieras construir, probar o compartir una topología sin calificación.",
                      "Usa .pka cuando necesites actividad guiada, criterios de cumplimiento y puntuación.",
                      "Usa .pksz cuando el laboratorio requiera tutoría contextual con sistema de sugerencias PTTA."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Seleccionar y abrir el tipo de archivo correcto según el objetivo: práctica, actividad guiada o evaluación."
                    ]
                  }
                ]
              },
              {
                code: "2.1",
                title: "Construye una red doméstica",
                summary:
                  "Construcción de una topología doméstica con direccionamiento IP, conexiones cableadas/inalámbricas y ajustes de productividad visual.",
                images: [
                  {
                    src: "./assets/images/packet-tracer-basics/C3_2.1.png",
                    alt: "Topología de red doméstica en Packet Tracer con enlaces cableados e inalámbricos."
                  }
                ],
                sections: [
                  {
                    title: "2.1.1 Direccionamiento IP en hosts",
                    items: [
                      "La IP se puede verificar por dos rutas: pestaña Configuración del host y pestaña Escritorio con comando ipconfig.",
                      "En PCs con direccionamiento estático, se validan IP, máscara y gateway configurados manualmente.",
                      "En laptops con DHCP, la IP y gateway aparecen asignados automáticamente por el servidor."
                    ]
                  },
                  {
                    title: "2.1.2 Conexiones de dispositivos",
                    items: [
                      "Packet Tracer permite conexión automática o selección manual de cable (directo, cruzado y consola).",
                      "Se pueden administrar enlaces entre PC-switch, switch-switch, switch-router y consola RS-232 para administración.",
                      "Las luces de enlace guían el diagnóstico: verde operativo, naranja en convergencia y rojo cuando la interfaz requiere habilitación."
                    ]
                  },
                  {
                    title: "2.1.3 Funciones avanzadas para prácticas",
                    items: [
                      "Es posible personalizar fondos para representar edificios, campus o ciudad y contextualizar la topología.",
                      "También se pueden personalizar iconos de dispositivos para mejorar documentación y lectura visual.",
                      "Estas mejoras no cambian la lógica de red, pero facilitan análisis, presentación y mantenimiento del laboratorio."
                    ]
                  },
                  {
                    title: "Checklist de verificación",
                    items: [
                      "Confirmar direccionamiento de cada host (IP, máscara y gateway) antes de pruebas de conectividad.",
                      "Revisar puertos y tipo de cable en cada enlace para evitar errores de capa física.",
                      "Guardar el progreso de la topología para repetir pruebas y comparar cambios."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Implementar y validar una red doméstica funcional con criterios técnicos de direccionamiento y cableado."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "packet-tracer-network-exploration",
        title: "Exploración de redes con Cisco Packet Tracer",
        provider: "Cisco Networking Academy",
        level: "Inicial",
        status: "En curso",
        estimatedHours: 10,
        summary:
          "Curso práctico para configurar una red de oficina pequeña, simular tráfico, documentar topologías y monitorear cambios con un controlador de red.",
        tags: ["packet tracer", "topologías", "simulación", "controlador de red"],
        modules: [
          {
            key: "M1",
            title: "Configure su Red de Oficina Pequeña",
            topics: [
              {
                code: "1.0",
                title: "Introducción al curso y alcance de trabajo",
                summary:
                  "Panorama del curso, perfil recomendado, recursos de apoyo y metas de aprendizaje para trabajar redes de oficina pequeña en Packet Tracer.",
                images: [
                  {
                    src: "./assets/images/packet-tracer-network-exploration/C4_1.1.png",
                    alt: "Escenario de oficina pequeña en vista física de Packet Tracer."
                  }
                ],
                sections: [
                  {
                    title: "1.0.1 Bienvenida y contexto",
                    items: [
                      "Las redes forman parte de entornos cotidianos y empresariales; este curso aterriza esos conceptos en un caso de oficina pequeña.",
                      "Se usa Cisco Packet Tracer para configurar, administrar y monitorear dispositivos de red sin depender de hardware físico.",
                      "El objetivo es avanzar desde prácticas básicas hacia una visión operativa de sucursal."
                    ]
                  },
                  {
                    title: "1.0.2 Perfil de entrada",
                    items: [
                      "Está dirigido a estudiantes que completaron Introducción a Cisco Packet Tracer o que tienen bases equivalentes.",
                      "También resulta útil para quienes inician en redes y desean desarrollar habilidades prácticas progresivas.",
                      "El curso fortalece competencias de conectividad, administración y resolución de problemas."
                    ]
                  },
                  {
                    title: "1.0.3 Recursos disponibles",
                    items: [
                      "Soporte general y preguntas frecuentes: https://www.netacad.com/help",
                      "Descarga y recursos de Packet Tracer: https://www.netacad.com/resources/lab-downloads",
                      "Asistente virtual Morgan para dudas sobre plataforma, insignias y uso del entorno."
                    ]
                  },
                  {
                    title: "Estructura de aprendizaje",
                    items: [
                      "Módulo 1: configuración inicial de red de oficina pequeña (videos + actividades guiadas).",
                      "Módulo 2: administración y monitoreo con simulación, anotación de topologías y controlador de red.",
                      "La secuencia combina teoría breve, práctica supervisada y verificación de resultados."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Comprender el alcance del curso y preparar un entorno de trabajo adecuado para las prácticas de la sucursal."
                    ]
                  }
                ]
              },
              {
                code: "1.1",
                title: "Topología, cableado estructurado y configuración inicial",
                summary:
                  "Exploración de la topología física/lógica, organización de cableado, conexión de dispositivos y configuración básica por consola CLI.",
                images: [
                  {
                    src: "./assets/images/packet-tracer-network-exploration/C4_1.1.png",
                    alt: "Vista física de la oficina con puntos de red y dispositivos finales."
                  },
                  {
                    src: "./assets/images/packet-tracer-network-exploration/C4_1.2.png",
                    alt: "Rack de comunicaciones con paneles de parcheo y gestión de cables en Packet Tracer."
                  },
                  {
                    src: "./assets/images/packet-tracer-network-exploration/C4_1.4.png",
                    alt: "Consola CLI con ejemplo de guardado de running-config a startup-config."
                  }
                ],
                sections: [
                  {
                    title: "1.1.1 Descripción general de la topología",
                    items: [
                      "La topología del curso se organiza en ubicaciones como hogar, oficina, biblioteca e ISP.",
                      "En vista física se observa la distribución realista de equipos; en vista lógica, conectividad y flujo de datos.",
                      "Navegar entre niveles permite entender relación entre ubicación física y diseño de red."
                    ]
                  },
                  {
                    title: "1.1.2-1.1.3 Cableado estructurado en oficina",
                    items: [
                      "Packet Tracer permite modelar paneles de parcheo, soportes de pared y cableado de cobre/fibra.",
                      "Los cables pueden ordenarse por color, trayecto y puntos de curvatura para simular instalaciones reales.",
                      "La gestión del rack mejora trazabilidad entre puerto de switch, panel de conexión y punto de red."
                    ]
                  },
                  {
                    title: "1.1.5 Conexiones cableadas e inalámbricas",
                    items: [
                      "Se combinan enlaces Ethernet y conectividad inalámbrica según el rol de cada dispositivo.",
                      "La práctica incluye preparación de red Wi-Fi y nociones de tecnologías inalámbricas como Bluetooth y datos móviles.",
                      "Elegir correctamente medio y puerto reduce errores de capa física en el despliegue."
                    ]
                  },
                  {
                    title: "1.1.7 Configuración por GUI y CLI",
                    items: [
                      "Las pestañas Física, Configuración, CLI, Escritorio y Servicios cambian según el tipo de equipo.",
                      "La pestaña Config facilita ajustes básicos y muestra comandos IOS equivalentes como apoyo didáctico.",
                      "Desde CLI se aplican tareas clave como cambio de hostname y guardado con copy running-config startup-config."
                    ]
                  },
                  {
                    title: "Checklist operativo",
                    items: [
                      "Confirmar puertos y tipo de cable antes de validar conectividad.",
                      "Comprobar organización del cableado en rack y puntos de red del área de trabajo.",
                      "Guardar configuración de dispositivos para evitar pérdida de cambios tras reinicio."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Integrar topología, cableado y configuración inicial para dejar una red de oficina pequeña lista para pruebas."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M2",
            title: "Administre y Supervise su Red de Sucursal",
            topics: [
              {
                code: "2.0",
                title: "Modo simulación, clústeres y anotación de topologías",
                summary:
                  "Uso del modo Simulación para inspeccionar PDUs, creación de clústeres para escalar escenarios y técnicas de anotación para documentar topologías.",
                images: [
                  {
                    src: "./assets/images/packet-tracer-network-exploration/C4_2.1.png",
                    alt: "Panel de Simulación de Packet Tracer con lista de eventos ICMP y controles de reproducción."
                  },
                  {
                    src: "./assets/images/packet-tracer-network-exploration/C4_2.3.png",
                    alt: "Topología de sucursal organizada por clústeres para segmentar áreas de red."
                  }
                ],
                sections: [
                  {
                    title: "2.0.1 Modo de simulación de Packet Tracer",
                    items: [
                      "Cambiar de Realtime a Simulation permite detener el tiempo de la red y observar cada evento de extremo a extremo.",
                      "Event List, Edit Filters y el control de velocidad ayudan a aislar protocolos (por ejemplo ICMP, ARP o DNS) durante el diagnóstico.",
                      "Las vistas de PDU y modelo OSI facilitan identificar en qué capa se produce una falla de conectividad."
                    ]
                  },
                  {
                    title: "2.0.4 Clústeres para organizar redes complejas",
                    items: [
                      "Un clúster agrupa equipos en una sola entidad visual, útil para representar edificios, pisos o áreas funcionales.",
                      "Desde la vista física se pueden crear, renombrar, desagrupar y eliminar clústeres sin perder la lógica de conectividad.",
                      "Al conectar un clúster con otros segmentos, conviene registrar interfaz origen/destino para mantener trazabilidad del cableado."
                    ]
                  },
                  {
                    title: "2.0.5 Edición y anotación de topología",
                    items: [
                      "Las herramientas de notas, formas, texto y fondos convierten la topología en un diagrama operativo listo para soporte o auditoría.",
                      "Etiquetar enlaces críticos, puertas de enlace y equipos de borde reduce errores al aplicar cambios.",
                      "La descripción general de la red debe incluir propósito del laboratorio, supuestos y fecha de última actualización."
                    ]
                  },
                  {
                    title: "Checklist de verificación",
                    items: [
                      "Filtrar solo los protocolos relevantes antes de capturar tráfico para evitar ruido analítico.",
                      "Comprobar que cada clúster tenga nombre semántico y límites claros.",
                      "Guardar el archivo .pkt después de cada ronda de anotación y pruebas."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Diagnosticar tráfico con evidencia, mantener topologías legibles y dejar documentación reutilizable para la operación."
                    ]
                  }
                ]
              },
              {
                code: "2.1",
                title: "Controlador de red y monitoreo de cambios",
                summary:
                  "Aplicación del Network Controller de Packet Tracer para descubrir equipos, consolidar inventario y validar cambios en una sucursal.",
                images: [
                  {
                    src: "./assets/images/packet-tracer-network-exploration/C4_2.4.png",
                    alt: "Topología corporativa que integra sucursal, ISP y centro de datos para análisis de cambios."
                  },
                  {
                    src: "./assets/images/packet-tracer-network-exploration/C4_2.5.png",
                    alt: "Panel principal del Network Controller con indicadores de estado de red."
                  },
                  {
                    src: "./assets/images/packet-tracer-network-exploration/C4_2.6.png",
                    alt: "Vista de Discovery del controlador con resultados de dispositivos y alcanzabilidad."
                  }
                ],
                sections: [
                  {
                    title: "2.1.1 El controlador de red en Packet Tracer",
                    items: [
                      "Actúa como plano central de gestión para inventario, provisión, monitoreo y políticas de dispositivos.",
                      "Desde el dashboard se visualizan métricas de salud, disponibilidad y estado de administración.",
                      "Su utilidad principal es reducir operación manual y acelerar la detección de desviaciones en la red."
                    ]
                  },
                  {
                    title: "Descubrimiento e inventario",
                    items: [
                      "En la pestaña Discovery se define alcance IP, método de descubrimiento y credenciales para incorporar equipos automáticamente.",
                      "El inventario resultante muestra hostname, tipo, IP y estado de alcanzabilidad para priorizar incidencias.",
                      "Cada redescubrimiento actualiza el inventario después de altas, bajas o cambios físicos en la sucursal."
                    ]
                  },
                  {
                    title: "2.1.4 Monitoreo de cambios con el controlador",
                    items: [
                      "Después de modificar topología o servicios, se ejecuta Discovery y se validan variaciones en estado, rutas y visibilidad.",
                      "Las vistas de Assurance y Path Trace ayudan a correlacionar fallas con segmentos específicos de la red.",
                      "Comparar resultados antes y después del cambio reduce riesgo de regresiones y acelera la remediación."
                    ]
                  },
                  {
                    title: "Buenas prácticas operativas",
                    items: [
                      "Restringir credenciales administrativas por rol y registrar quién ejecuta descubrimientos o cambios.",
                      "Mantener nomenclatura consistente de sitios y dispositivos para facilitar búsquedas y reportes.",
                      "Revisar el dashboard al inicio y al cierre de cada ventana de mantenimiento."
                    ]
                  },
                  {
                    title: "Resultado esperado",
                    items: [
                      "Gestionar la sucursal desde una consola central, con inventario actualizado y validación objetiva de cada cambio."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "networking-basics",
        title: "Conceptos básicos de redes",
        provider: "Cisco Networking Academy",
        level: "Fundamentos",
        status: "En curso",
        estimatedHours: 70,
        summary:
          "Curso base para comprender cómo se comunican los dispositivos en red, desde protocolos y estándares hasta direccionamiento, acceso y servicios de aplicación.",
        tags: ["redes", "protocolos", "tcp/ip", "osi", "estándares"],
        modules: [
          {
            key: "M1",
            title: "Comunicaciones en un Mundo Conectado",
            topics: [
              {
                code: "1.1",
                title: "Tipos de red y ecosistema conectado",
                summary:
                  "Panorama de Internet como red de redes, tipos de redes locales y variedad de dispositivos que hoy dependen de conectividad permanente.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_1.1.png",
                    alt: "Mapa de conectividad global con ejemplos de interacción en línea entre personas y servicios."
                  }
                ],
                sections: [
                  {
                    title: "1.1.2 Todo está en línea",
                    items: [
                      "Para usuarios y empresas, la conexión constante dejó de ser opcional: mensajería, compras, trabajo y aprendizaje dependen de Internet.",
                      "Aunque solemos pensar Internet como un “lugar”, técnicamente es infraestructura física y lógica distribuida a escala global.",
                      "La disponibilidad de red afecta actividades críticas, desde comunicación cotidiana hasta operación de servicios esenciales."
                    ]
                  },
                  {
                    title: "1.1.3-1.1.4 Internet y redes locales",
                    items: [
                      "Internet no pertenece a una única entidad: es una colección de redes interconectadas que operan con estándares comunes.",
                      "Las redes SOHO conectan hogares y oficinas pequeñas; redes empresariales escalan a cientos o miles de hosts.",
                      "La 'red de redes' integra segmentos locales por medio de proveedores y enlaces de transporte de mayor alcance."
                    ]
                  },
                  {
                    title: "1.1.5-1.1.7 Dispositivos conectados",
                    items: [
                      "La red ya no conecta solo PCs: móviles, wearables, IoT doméstico, automóviles, sensores industriales y equipos médicos también participan.",
                      "Cada nuevo tipo de dispositivo incrementa superficie de gestión, seguridad y troubleshooting.",
                      "Comprender el contexto de uso de cada dispositivo ayuda a elegir topología, políticas y prioridad de tráfico."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Diferenciar tipos de red y justificar por qué la conectividad continua es un requisito operativo en entornos modernos."
                    ]
                  }
                ]
              },
              {
                code: "1.2",
                title: "Transmisión de datos: del bit al medio físico",
                summary:
                  "Cómo los datos se representan en binario y se convierten en señales eléctricas, ópticas o inalámbricas para viajar por la red.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_1.2_data_flow.png",
                    alt: "Diagrama del flujo de transmisión: datos, bits, señales y medios de red."
                  }
                ],
                sections: [
                  {
                    title: "1.2.1 Tipos de datos personales",
                    items: [
                      "Los datos voluntarios son los que compartimos conscientemente (formularios, mensajes, archivos).",
                      "Los datos deducidos y observados se generan por actividad y telemetría (ubicación, patrones de consumo, uso de apps).",
                      "El análisis de red debe considerar el ciclo de vida del dato: creación, transmisión, almacenamiento y exposición."
                    ]
                  },
                  {
                    title: "1.2.2 El bit y el byte",
                    items: [
                      "El bit (0 o 1) es la unidad mínima de información digital; ocho bits conforman un byte.",
                      "Codificaciones como ASCII representan letras, números y símbolos mediante combinaciones binarias.",
                      "Dispositivos de entrada y salida traducen entre lenguaje humano y representación binaria."
                    ]
                  },
                  {
                    title: "1.2.3 Métodos comunes de transmisión",
                    items: [
                      "Cobre: transporta pulsos eléctricos, muy usado en redes de acceso y cableado estructurado.",
                      "Fibra óptica: transporta pulsos de luz, ideal para mayor distancia y mayor capacidad agregada.",
                      "Inalámbrico: transporta ondas de radio, flexible para movilidad y despliegues rápidos."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar cómo un dato pasa de contenido digital a señal transportada por un medio de red."
                    ]
                  }
                ]
              },
              {
                code: "1.3",
                title: "Ancho de banda, rendimiento y latencia",
                summary:
                  "Diferencia entre capacidad teórica y desempeño real de una conexión, y factores que degradan la experiencia del usuario.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_1.3.png",
                    alt: "Tabla de unidades de ancho de banda en bits por segundo y sus equivalencias."
                  }
                ],
                sections: [
                  {
                    title: "1.3.1 Ancho de banda",
                    items: [
                      "Es la capacidad máxima teórica del medio para transportar datos por unidad de tiempo.",
                      "Se expresa en bps y múltiplos como Kbps, Mbps, Gbps y Tbps.",
                      "Está condicionado por tecnología, calidad del medio físico y límites de diseño."
                    ]
                  },
                  {
                    title: "1.3.2 Rendimiento real",
                    items: [
                      "El rendimiento es la tasa efectiva observada durante transferencia real; normalmente es menor que el ancho de banda nominal.",
                      "La latencia, congestión, tipo de tráfico y cantidad de saltos intermedios influyen directamente en ese valor.",
                      "En rutas multipunto, el segmento más lento impone el techo de rendimiento extremo a extremo."
                    ]
                  },
                  {
                    title: "1.3.3 Interpretación de pruebas de velocidad",
                    items: [
                      "Download mide velocidad de recepción; upload mide velocidad de envío; ambos deben analizarse junto con la latencia.",
                      "En enlaces residenciales es común que download sea superior a upload por diseño comercial del servicio.",
                      "Una prueba puntual orienta, pero la tendencia en distintos horarios refleja mejor la salud de la conexión."
                    ]
                  },
                  {
                    title: "Checklist técnico",
                    items: [
                      "Validar capacidad contratada vs. rendimiento medido en varios momentos del día.",
                      "Distinguir problemas de medio local (Wi-Fi/cable) de problemas del proveedor.",
                      "Correlacionar métricas de rendimiento con tipo de aplicación (video, voz, juegos, nube)."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M2",
            title: "Componentes, tipos y conexiones de red",
            topics: [
              {
                code: "2.1",
                title: "Clientes y servidores",
                summary:
                  "Diferencias entre roles de cliente y servidor, funcionamiento de redes entre pares (P2P) y escenarios donde un host puede cumplir múltiples funciones.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_2.1_1.png",
                    alt: "Esquema básico cliente-servidor conectado por Internet."
                  },
                  {
                    src: "./assets/images/network-basics/C5_2.1_3.png",
                    alt: "Ejemplo de red entre pares para compartir impresora y archivos."
                  },
                  {
                    src: "./assets/images/network-basics/C5_2.1_5.png",
                    alt: "Servidor que atiende múltiples clientes con distintos servicios de red."
                  },
                  {
                    src: "./assets/images/network-basics/C5_2.1_4.png",
                    alt: "Aplicación de mensajería donde cada extremo actúa como cliente y servidor."
                  }
                ],
                sections: [
                  {
                    title: "2.1.2 Roles de cliente y servidor",
                    items: [
                      "Un host cliente solicita recursos; un host servidor los ofrece mediante software de servicio específico.",
                      "Cada servicio requiere su software correspondiente: por ejemplo, web, correo o archivos.",
                      "En redes modernas, el rol depende del software instalado y del flujo de comunicación en cada momento."
                    ]
                  },
                  {
                    title: "2.1.3 Redes entre pares (P2P)",
                    items: [
                      "En un modelo P2P, los equipos pueden compartir recursos entre sí sin un servidor dedicado central.",
                      "Es fácil de implementar y de bajo costo en entornos pequeños (hogar o microoficina).",
                      "Sus límites aparecen en seguridad, administración centralizada y escalabilidad."
                    ]
                  },
                  {
                    title: "2.1.4 Aplicaciones P2P e híbridas",
                    items: [
                      "En aplicaciones P2P puras, cada nodo puede enviar y recibir recursos al mismo tiempo.",
                      "En modelos híbridos, el intercambio se distribuye, pero existe un índice central para ubicar recursos.",
                      "Este enfoque mejora descubrimiento de contenido, pero introduce dependencia parcial del servidor de índice."
                    ]
                  },
                  {
                    title: "2.1.5 Múltiples roles por host",
                    items: [
                      "Un mismo equipo puede ejecutar varios clientes y varios servicios simultáneamente.",
                      "En pymes, un host puede actuar como servidor web, correo y archivos a la vez.",
                      "A mayor mezcla de roles, mayor necesidad de monitoreo de rendimiento y endurecimiento de seguridad."
                    ]
                  }
                ]
              },
              {
                code: "2.2",
                title: "Componentes de la red",
                summary:
                  "Identificación de infraestructura de red y sus tres bloques de hardware: dispositivos finales, dispositivos intermedios y medios de transmisión.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_2.2_1.png",
                    alt: "Símbolos de infraestructura de red: dispositivos finales, intermedios y medios."
                  },
                  {
                    src: "./assets/images/network-basics/C5_2.2_2.png",
                    alt: "Topología LAN interconectada por routers en una red de mayor alcance."
                  }
                ],
                sections: [
                  {
                    title: "2.2.2 Infraestructura de red",
                    items: [
                      "La infraestructura es la plataforma física y lógica que permite transportar mensajes de origen a destino.",
                      "Puede ir desde un enlace simple entre dos equipos hasta redes de escala global.",
                      "La confiabilidad de la red depende de cómo se diseñan y operan estos componentes base."
                    ]
                  },
                  {
                    title: "Categorías de hardware",
                    items: [
                      "Dispositivos finales: hosts que generan o consumen información (PC, móvil, impresora, cámara, teléfono IP).",
                      "Dispositivos intermedios: conectan y dirigen tráfico (switches, routers, AP, firewall).",
                      "Medios de red: transportan señales por cobre, fibra o inalámbrico."
                    ]
                  },
                  {
                    title: "2.2.3 Hosts y direccionamiento",
                    items: [
                      "Todo host es origen o destino de mensajes y requiere identificación única en la red.",
                      "El direccionamiento permite determinar a qué equipo se envía cada paquete.",
                      "Sin direccionamiento consistente, no hay entrega fiable de datos ni segmentación funcional."
                    ]
                  }
                ]
              },
              {
                code: "2.3",
                title: "Opciones de conectividad al ISP",
                summary:
                  "Cómo un hogar u oficina pequeña se conecta al proveedor de Internet y qué criterios técnicos comparar entre tecnologías de acceso.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_2.3_1.png",
                    alt: "Servicios adicionales que puede ofrecer un proveedor de servicios de Internet."
                  },
                  {
                    src: "./assets/images/network-basics/C5_2.3_2.png",
                    alt: "Comparación entre conexión directa por módem y conexión protegida con router integrado."
                  },
                  {
                    src: "./assets/images/network-basics/C5_2.3_3.png",
                    alt: "Opciones de acceso por DSL, cable, red celular, satélite y dial-up."
                  },
                  {
                    src: "./assets/images/network-basics/C5_2.3_4.png",
                    alt: "Esquema de conectividad satelital entre usuario e ISP."
                  }
                ],
                sections: [
                  {
                    title: "2.3.1 Servicios del ISP",
                    items: [
                      "El ISP conecta la red local con Internet y, además, puede ofrecer correo, hosting, VoIP y soporte técnico.",
                      "Los ISP se interconectan jerárquicamente para enrutar tráfico por rutas eficientes.",
                      "La red troncal global se apoya principalmente en enlaces de fibra óptica terrestres y submarinos."
                    ]
                  },
                  {
                    title: "2.3.2 Conexión segura al ISP",
                    items: [
                      "Conectar una PC directamente al módem expone el host y no es una práctica recomendada.",
                      "La opción estándar es usar router integrado (switch + AP + funciones de seguridad y direccionamiento interno).",
                      "El router doméstico también simplifica conectar múltiples equipos cableados e inalámbricos."
                    ]
                  },
                  {
                    title: "2.3.3 Cable y DSL",
                    items: [
                      "Cable usa red coaxial y suele ofrecer conexión permanente con buen ancho de banda residencial.",
                      "DSL usa línea telefónica y separa voz/datos mediante canales, con desempeño dependiente de distancia y calidad de línea.",
                      "Ambas tecnologías requieren módem específico para convertir señal del proveedor a Ethernet local."
                    ]
                  },
                  {
                    title: "2.3.4 Conectividad adicional",
                    items: [
                      "Celular es útil para movilidad y zonas sin acceso fijo, pero suele tener límites por plan de datos.",
                      "Satélite permite cobertura en áreas remotas, con costo de instalación mayor y dependencia de línea de vista.",
                      "Dial-up es alternativa de baja velocidad, válida solo cuando no existen opciones de mayor capacidad."
                    ]
                  },
                  {
                    title: "Criterios de selección",
                    items: [
                      "Comparar latencia, estabilidad, velocidad real y costo total (equipo + mensualidad).",
                      "Evaluar disponibilidad por ubicación geográfica antes de decidir tecnología.",
                      "Priorizar seguridad de la red local y capacidad de crecimiento del enlace."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M3",
            title: "Redes inalámbricas y móviles",
            topics: [
              {
                code: "3.1",
                title: "Redes inalámbricas en dispositivos móviles",
                summary:
                  "Cómo un teléfono integra tecnologías celulares, Wi-Fi, Bluetooth, NFC y GPS para soportar voz, datos, ubicación y pagos.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_3.1_wireless_types.png",
                    alt: "Resumen de tecnologías inalámbricas que conviven en un smartphone: 4G/5G, Wi-Fi, Bluetooth, NFC y GPS."
                  },
                  {
                    src: "./assets/images/network-basics/C5_3.1.png",
                    alt: "Tabla de objetivos del módulo de redes inalámbricas y móviles."
                  }
                ],
                sections: [
                  {
                    title: "3.1.1-3.1.2 Un teléfono, múltiples redes",
                    items: [
                      "Un smartphone moderno combina varias radios y protocolos en paralelo para cubrir distintos servicios.",
                      "Las llamadas y datos móviles usan red celular; la navegación en casa u oficina suele usar Wi-Fi.",
                      "Pagos de proximidad, audio inalámbrico y ubicación satelital operan sobre tecnologías distintas pero coordinadas."
                    ]
                  },
                  {
                    title: "3.1.3 Tecnologías inalámbricas clave",
                    items: [
                      "4G/5G: conectividad de amplia cobertura para acceso a Internet y servicios móviles del operador.",
                      "Wi-Fi: acceso local de alta velocidad mediante punto de acceso, ideal para reducir consumo de datos móviles.",
                      "Bluetooth: enlace de corto alcance y bajo consumo para periféricos y accesorios.",
                      "NFC: intercambio de datos a centímetros, útil para pagos y emparejamientos rápidos.",
                      "GPS: posicionamiento por satélite para navegación y servicios basados en ubicación."
                    ]
                  },
                  {
                    title: "Criterio técnico de uso",
                    items: [
                      "Elegir tecnología según alcance, consumo de batería, latencia, seguridad y costo del enlace.",
                      "Entender estas diferencias mejora diseño de políticas móviles y resolución de incidencias.",
                      "En operación real, varias tecnologías pueden estar activas simultáneamente sin intervención del usuario."
                    ]
                  }
                ]
              },
              {
                code: "3.2",
                title: "Conectividad de dispositivos móviles",
                summary:
                  "Configuración práctica de Wi-Fi, datos celulares y Bluetooth, con enfoque en seguridad, continuidad de servicio y diagnóstico de fallos comunes.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_3.2.png",
                    alt: "Escenario de fallo por clave Wi-Fi incorrecta durante el intento de conexión móvil."
                  },
                  {
                    src: "./assets/images/network-basics/C5_3.2_bluetooth_flow.png",
                    alt: "Flujo recomendado para emparejar dispositivos Bluetooth de forma segura."
                  }
                ],
                sections: [
                  {
                    title: "3.2.1 Wi-Fi en movilidad: valor y seguridad",
                    items: [
                      "Conectarse por Wi-Fi cuando está disponible reduce consumo del plan celular y ahorro de batería.",
                      "No se debe enviar información sensible por canales sin cifrado; para datos críticos conviene usar VPN.",
                      "En red doméstica, aplicar WPA2 o superior y contraseña robusta para minimizar riesgos de intrusión."
                    ]
                  },
                  {
                    title: "3.2.2-3.2.4 Configuración de Wi-Fi y datos móviles",
                    items: [
                      "Si la red no aparece, revisar difusión SSID, conexión automática y coincidencia exacta de frase de contraseña.",
                      "Cuando no hay Wi-Fi, el dispositivo cambia a datos móviles; este cambio suele ser transparente para el usuario.",
                      "Conviene gestionar activación de datos móviles según cobertura, plan contratado y prioridad de tráfico."
                    ]
                  },
                  {
                    title: "3.2.6-3.2.7 Bluetooth y emparejamiento",
                    items: [
                      "Bluetooth permite conectar hasta varios accesorios con bajo consumo (audio, teclado, control y tethering).",
                      "El emparejamiento exige modo detectable, selección del dispositivo correcto y validación por PIN cuando aplica.",
                      "Como práctica de seguridad, desactivar modo visible al finalizar y eliminar dispositivos no confiables."
                    ]
                  },
                  {
                    title: "3.2.8 Escenario integrado de uso",
                    items: [
                      "Un móvil puede usar Bluetooth para audio, Wi-Fi para Internet y red celular para mensajería en paralelo.",
                      "Comprender esta coexistencia facilita diagnosticar fallos de conectividad intermitente.",
                      "Ante error de conexión, verificar primero credenciales, cobertura, perfil guardado y compatibilidad de protocolo."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M4",
            title: "Crear una red doméstica",
            topics: [
              {
                code: "4.1",
                title: "Conceptos básicos de redes domésticas",
                summary:
                  "Estructura típica de una red del hogar: relación ISP-módem-router, dispositivos conectados y función de puertos LAN/WAN.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_4.1_1.png",
                    alt: "Diagrama de red doméstica con router, ISP y dispositivos conectados en distintas áreas del hogar."
                  },
                  {
                    src: "./assets/images/network-basics/C5_4.1_2.png",
                    alt: "Router doméstico con identificación de puertos Ethernet LAN y puerto de Internet WAN."
                  }
                ],
                sections: [
                  {
                    title: "4.1.1 Arquitectura típica del hogar",
                    items: [
                      "Una red doméstica suele separar dos ámbitos: la red local interna y la red externa del proveedor de Internet.",
                      "El módem traduce la señal del operador (por ejemplo cable o DSL) para entregarla al router del hogar.",
                      "El router integra funciones de conmutación LAN, punto de acceso inalámbrico y salida hacia Internet."
                    ]
                  },
                  {
                    title: "4.1.2 Componentes de la red doméstica",
                    items: [
                      "Además de PCs y móviles, hoy se conectan TVs, consolas, cámaras, impresoras y sensores del hogar.",
                      "A mayor cantidad de dispositivos, más importante es planificar cobertura Wi-Fi y capacidad de la LAN.",
                      "La red del hogar pasa de ser solo acceso a Internet a ser plataforma de servicios y automatización."
                    ]
                  },
                  {
                    title: "4.1.3 Puertos y segmentación básica",
                    items: [
                      "Los puertos LAN conectan equipos internos dentro de la misma red local.",
                      "El puerto WAN/Internet enlaza con una red distinta: el proveedor de servicios.",
                      "La separación LAN-WAN permite aplicar control de tráfico y funciones de seguridad de borde."
                    ]
                  },
                  {
                    title: "Práctica recomendada",
                    items: [
                      "Cambiar credenciales predeterminadas del router y documentar configuración inicial.",
                      "Etiquetar dispositivos críticos para facilitar soporte y troubleshooting.",
                      "Priorizar enlaces cableados para equipos fijos de alto consumo de ancho de banda."
                    ]
                  }
                ]
              },
              {
                code: "4.2",
                title: "Tecnologías de red en el hogar",
                summary:
                  "Comparación entre tecnologías inalámbricas (2.4/5 GHz, Wi-Fi, Bluetooth) y tecnologías cableadas (UTP, coaxial y fibra óptica) en redes residenciales.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_4.2_1.png",
                    alt: "Espectro y frecuencias inalámbricas usadas en redes domésticas, incluyendo bandas de 2.4 GHz y 5 GHz."
                  },
                  {
                    src: "./assets/images/network-basics/C5_4.2_wired_media.png",
                    alt: "Comparación de tecnologías cableadas para LAN doméstica: UTP, coaxial y fibra óptica."
                  }
                ],
                sections: [
                  {
                    title: "4.2.1 Frecuencias inalámbricas LAN",
                    items: [
                      "En el hogar predominan bandas de 2.4 GHz y 5 GHz para conectividad Wi-Fi.",
                      "Bluetooth opera en 2.4 GHz, con menor alcance y consumo, ideal para periféricos y audio.",
                      "Wi-Fi (familia IEEE 802.11) entrega mayor cobertura y rendimiento para acceso de red general."
                    ]
                  },
                  {
                    title: "4.2.2 Tecnologías cableadas",
                    items: [
                      "Ethernet sobre par trenzado (Cat5e/Cat6) es la opción más común para conexiones fijas en LAN.",
                      "El cable coaxial se usa ampliamente en acceso del ISP y ciertos escenarios de distribución.",
                      "Fibra óptica ofrece mayor capacidad y distancia, con mayor costo inicial de despliegue."
                    ]
                  },
                  {
                    title: "Cuándo usar cada medio",
                    items: [
                      "Wi-Fi: movilidad y facilidad de instalación en áreas con múltiples dispositivos móviles.",
                      "Ethernet: baja latencia y estabilidad para streaming 4K, trabajo remoto y gaming competitivo.",
                      "Fibra en tramos críticos: backbone interno o enlace hacia equipos que demandan alto throughput sostenido."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Seleccionar tecnologías inalámbricas y cableadas según rendimiento requerido, alcance, costo y seguridad."
                    ]
                  }
                ]
              },
              {
                code: "4.3",
                title: "Estándares inalámbricos Wi-Fi",
                summary:
                  "Fundamentos de los estándares IEEE 802.11, elección de banda/canal y parámetros clave para configurar una WLAN compatible, estable y segura.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_4.2_1.png",
                    alt: "Frecuencias y bandas de operación inalámbrica usadas en redes de hogar."
                  },
                  {
                    src: "./assets/images/network-basics/C5_4.3_wifi_standards.png",
                    alt: "Resumen comparativo de estándares Wi-Fi y buenas prácticas de configuración."
                  }
                ],
                sections: [
                  {
                    title: "4.3.1 Redes Wi-Fi e IEEE 802.11",
                    items: [
                      "IEEE define las especificaciones técnicas que permiten que equipos de distintos fabricantes se comuniquen en una WLAN.",
                      "Las familias 802.11 evolucionan para mejorar velocidad, eficiencia y capacidad en escenarios con más dispositivos simultáneos.",
                      "La certificación de la Wi-Fi Alliance valida interoperabilidad práctica entre productos comerciales."
                    ]
                  },
                  {
                    title: "Bandas, canales y desempeño real",
                    items: [
                      "2.4 GHz ofrece más alcance, pero suele tener más interferencia por alta ocupación del espectro.",
                      "5 GHz y 6 GHz ofrecen mayor capacidad y menos congestión, con menor alcance relativo según obstáculos y potencia.",
                      "Seleccionar canal y ancho de canal de forma correcta mejora estabilidad y reduce retransmisiones."
                    ]
                  },
                  {
                    title: "4.3.2 Parámetros de configuración WLAN",
                    items: [
                      "Modo de red: define qué estándares se permiten (por ejemplo, mixto o solo estándares recientes).",
                      "SSID: identifica la red; debe ser claro para administración, sin exponer marca/modelo del equipo.",
                      "Canal y difusión de SSID: conviene ajustar según entorno para facilitar conexión legítima sin sacrificar seguridad."
                    ]
                  },
                  {
                    title: "Compatibilidad y seguridad",
                    items: [
                      "Si existen equipos antiguos, el modo mixto facilita conexión; en redes modernas, limitar estándares puede optimizar rendimiento.",
                      "Desactivar solo la difusión del SSID no protege por sí mismo la red inalámbrica.",
                      "La medida crítica es usar cifrado robusto (WPA2/WPA3), clave fuerte y segmentación por perfiles de uso."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Configurar una WLAN doméstica equilibrando compatibilidad, rendimiento y seguridad de acceso."
                    ]
                  }
                ]
              },
              {
                code: "4.4",
                title: "Configurar un enrutador doméstico",
                summary:
                  "Procedimiento práctico para configurar un router residencial: conexión inicial, ajustes LAN/WAN, seguridad mínima y validación operativa.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_4.1_2.png",
                    alt: "Panel trasero de un router doméstico con puertos LAN y puerto WAN/Internet."
                  },
                  {
                    src: "./assets/images/network-basics/C5_4.4_router_setup_flow.png",
                    alt: "Flujo recomendado de configuración segura para un enrutador doméstico."
                  }
                ],
                sections: [
                  {
                    title: "4.4.1 Configuración inicial",
                    items: [
                      "Para la puesta en marcha, conecta temporalmente una PC por cable a un puerto LAN del router, no al puerto WAN.",
                      "Luego conecta la interfaz WAN/Internet hacia el módem o medio del ISP y verifica estado de enlace.",
                      "La PC debe recibir IP por DHCP del router; si no ocurre, revisar cableado, NIC y alcance DHCP."
                    ]
                  },
                  {
                    title: "Acceso administrativo y parámetros base",
                    items: [
                      "Ingresa al panel web de administración (habitualmente mediante la puerta de enlace local).",
                      "Cambia credenciales predeterminadas en la primera sesión y documenta los cambios en un registro seguro.",
                      "Define direccionamiento LAN, rango DHCP, DNS y ajustes WAN según los requisitos del proveedor."
                    ]
                  },
                  {
                    title: "4.4.2 Consideraciones de diseño",
                    items: [
                      "El nombre de red (SSID) debe evitar datos que revelen fabricante o modelo del equipo.",
                      "Verifica compatibilidad de los clientes inalámbricos para decidir si usar modo mixto o estándar específico.",
                      "Si habrá usuarios externos, habilita red de invitados aislada para limitar acceso a recursos internos."
                    ]
                  },
                  {
                    title: "Seguridad y validación operativa",
                    items: [
                      "Habilita WPA2/WPA3, desactiva funciones inseguras que no uses y actualiza firmware a una versión estable.",
                      "Valida navegación, resolución DNS, conectividad entre equipos y estabilidad en distintos puntos del hogar.",
                      "Guarda respaldo de la configuración y programa revisiones periódicas para mantener la red protegida."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Desplegar un router doméstico funcional, seguro y preparado para crecimiento de dispositivos."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M5",
            title: "Principios de comunicaci\u00f3n",
            topics: [
              {
                code: "5.1",
                title: "Protocolos de comunicaci\u00f3n",
                summary:
                  "Reglas de intercambio de datos en red: formato de mensaje, temporizaci\u00f3n, confirmaci\u00f3n y confiabilidad.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_5.1.png",
                    alt: "Elementos principales de un protocolo de comunicaci\u00f3n en red."
                  }
                ],
                sections: [
                  {
                    title: "5.1.1 Reglas para comunicarse",
                    items: [
                      "En redes, igual que en la comunicaci\u00f3n humana, se requiere un conjunto de reglas compartidas.",
                      "Sin protocolo com\u00fan, los equipos no pueden interpretar correctamente lo que reciben.",
                      "Un protocolo define c\u00f3mo iniciar, mantener y finalizar una comunicaci\u00f3n."
                    ]
                  },
                  {
                    title: "Elementos que define un protocolo",
                    items: [
                      "Formato y tama\u00f1o del mensaje para que el receptor pueda procesarlo.",
                      "Temporizaci\u00f3n y secuencia para evitar p\u00e9rdida o desorden de datos.",
                      "Mecanismos de encapsulaci\u00f3n, control y verificaci\u00f3n para entrega confiable."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar por qu\u00e9 los protocolos son la base de toda comunicaci\u00f3n de red."
                    ]
                  }
                ]
              },
              {
                code: "5.2",
                title: "Est\u00e1ndares de comunicaci\u00f3n",
                summary:
                  "Rol de los est\u00e1ndares de Internet para asegurar interoperabilidad entre equipos, aplicaciones y servicios.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_5.2_1.png",
                    alt: "Vista de protocolos y dispositivos colaborando bajo reglas comunes de comunicaci\u00f3n."
                  },
                  {
                    src: "./assets/images/network-basics/C5_5.2_2.png",
                    alt: "Organizaciones y documentos t\u00e9cnicos usados para estandarizaci\u00f3n en redes."
                  }
                ],
                sections: [
                  {
                    title: "5.2.2 Internet y est\u00e1ndares",
                    items: [
                      "Un est\u00e1ndar define c\u00f3mo se implementa una tecnolog\u00eda para que sea compatible con otras.",
                      "Permite que dispositivos de diferentes fabricantes intercambien datos sin conflictos.",
                      "Gracias a esto, servicios globales como web y correo operan de forma consistente."
                    ]
                  },
                  {
                    title: "5.2.3 Organizaciones de est\u00e1ndares",
                    items: [
                      "La IETF publica RFC que documentan protocolos y mejores pr\u00e1cticas de Internet.",
                      "IEEE, ISO y otros organismos aportan normas t\u00e9cnicas para distintas capas de red.",
                      "La estandarizaci\u00f3n reduce riesgos de incompatibilidad y facilita evoluci\u00f3n tecnol\u00f3gica."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Justificar por qu\u00e9 los est\u00e1ndares son esenciales para la estabilidad y crecimiento de Internet."
                    ]
                  }
                ]
              },
              {
                code: "5.3",
                title: "Modelos de comunicaci\u00f3n de red",
                summary:
                  "Aplicaci\u00f3n de modelos por capas (TCP/IP y OSI) para comprender protocolos y mejorar el troubleshooting.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_5.3_1.png",
                    alt: "Representaci\u00f3n de funciones de red organizadas por capas."
                  },
                  {
                    src: "./assets/images/network-basics/C5_5.3_2.png",
                    alt: "Comparaci\u00f3n conceptual entre el modelo TCP/IP y el modelo OSI."
                  }
                ],
                sections: [
                  {
                    title: "5.3.1-5.3.2 Pila de protocolos",
                    items: [
                      "Una comunicaci\u00f3n real usa varios protocolos al mismo tiempo, cada uno en su capa.",
                      "Ejemplo t\u00edpico: Ethernet, IP, TCP y HTTP trabajando de forma coordinada.",
                      "Este enfoque modular simplifica dise\u00f1o, operaci\u00f3n y mantenimiento."
                    ]
                  },
                  {
                    title: "5.3.3 Modelo TCP/IP",
                    items: [
                      "Organiza funciones en capas de acceso, Internet, transporte y aplicaci\u00f3n.",
                      "Describe el funcionamiento pr\u00e1ctico de la suite de protocolos usada en Internet.",
                      "Permite mapear de forma directa servicios reales y flujo de datos."
                    ]
                  },
                  {
                    title: "5.3.4-5.3.5 Modelo OSI y comparaci\u00f3n",
                    items: [
                      "OSI es un modelo de referencia para entender funciones generales de comunicaci\u00f3n.",
                      "TCP/IP es un modelo aplicado, enfocado en protocolos en uso real.",
                      "Usar ambos modelos mejora an\u00e1lisis t\u00e9cnico y diagn\u00f3stico por capas."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M6",
            title: "Tipos de medios de red",
            topics: [
              {
                code: "6.1",
                title: "Medios de red: cobre, coaxial y fibra \u00f3ptica",
                summary:
                  "Comparaci\u00f3n t\u00e9cnica de los medios f\u00edsicos de transmisi\u00f3n para elegir correctamente seg\u00fan distancia, entorno y rendimiento.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_6.1_media_types.png",
                    alt: "Comparativa visual de medios de red: par trenzado, cable coaxial y fibra \u00f3ptica."
                  }
                ],
                sections: [
                  {
                    title: "6.1.1 Importancia del medio f\u00edsico",
                    items: [
                      "El medio condiciona alcance, velocidad efectiva, estabilidad y susceptibilidad al ruido.",
                      "Una elecci\u00f3n incorrecta del cable puede degradar enlaces aunque los equipos sean de buena capacidad.",
                      "En dise\u00f1o de red, el medio se define junto con topolog\u00eda, puertos y requerimientos de tr\u00e1fico."
                    ]
                  },
                  {
                    title: "6.1.2 Criterios de selecci\u00f3n",
                    items: [
                      "Distancia m\u00e1xima: cada tecnolog\u00eda tiene l\u00edmites f\u00edsicos antes de requerir repetici\u00f3n o cambio de medio.",
                      "Entorno de instalaci\u00f3n: interferencia electromagn\u00e9tica, temperatura, humedad y riesgos mec\u00e1nicos.",
                      "Capacidad requerida: volumen de datos, latencia esperada y crecimiento del tr\u00e1fico en el tiempo.",
                      "Costo total: precio del cable, conectores, obra civil, mantenimiento y ciclo de vida."
                    ]
                  },
                  {
                    title: "6.1.3 Par trenzado (UTP/STP)",
                    items: [
                      "Es el medio m\u00e1s com\u00fan en LAN de usuario final por costo moderado y facilidad de instalaci\u00f3n.",
                      "Usa conectores RJ-45 y categor\u00edas de cableado (p. ej., Cat5e/Cat6/Cat6a) con distintas prestaciones.",
                      "Es sensible a ruido y distancia; requiere buenas pr\u00e1cticas de canalizaci\u00f3n y certificaci\u00f3n."
                    ]
                  },
                  {
                    title: "Coaxial y fibra \u00f3ptica",
                    items: [
                      "El coaxial ofrece buen blindaje y fue clave en redes y acceso de ISP; hoy es com\u00fan en escenarios espec\u00edficos.",
                      "La fibra \u00f3ptica transmite por luz, permite mayor ancho de banda y largas distancias con baja atenuaci\u00f3n.",
                      "La fibra es inmune a interferencias electromagn\u00e9ticas y recomendable para troncales y enlaces cr\u00edticos."
                    ]
                  },
                  {
                    title: "Decisi\u00f3n r\u00e1pida por escenario",
                    items: [
                      "LAN de oficina: UTP/FTP bien instalado suele equilibrar costo y desempe\u00f1o.",
                      "Backbone entre cuartos o edificios: priorizar fibra por distancia, capacidad y confiabilidad.",
                      "Entornos con ruido el\u00e9ctrico o alta exigencia: usar medio blindado o fibra seg\u00fan el caso."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Seleccionar el medio de red adecuado con criterios t\u00e9cnicos y de costo, evitando cuellos de botella y retrabajos."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M7",
            title: "La capa de acceso",
            topics: [
              {
                code: "7.1",
                title: "Encapsulaci\u00f3n y trama de Ethernet",
                summary:
                  "C\u00f3mo se encapsulan los datos en tramas Ethernet y qu\u00e9 funci\u00f3n cumple cada campo para transportar informaci\u00f3n en una LAN.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_7.1_ethernet_frame.png",
                    alt: "Infograf\u00eda de encapsulaci\u00f3n y campos principales de una trama Ethernet."
                  }
                ],
                sections: [
                  {
                    title: "7.1.1 Campos de la trama Ethernet",
                    items: [
                      "La trama Ethernet incluye pre\u00e1mbulo, delimitador de inicio (SFD), MAC de destino, MAC de origen, tipo/longitud, datos y FCS.",
                      "Las direcciones MAC identifican el emisor y receptor en la red local para decidir el reenv\u00edo de tramas.",
                      "El campo FCS permite detectar errores de transmisi\u00f3n antes de procesar el contenido."
                    ]
                  },
                  {
                    title: "7.1.2 Encapsulaci\u00f3n y desencapsulaci\u00f3n",
                    items: [
                      "El host de origen toma datos de capas superiores y los encapsula en una trama Ethernet para enviarlos por el medio.",
                      "El host receptor valida integridad, elimina la envoltura Ethernet y entrega el payload a la capa correspondiente.",
                      "Si el formato de la trama no es v\u00e1lido o hay errores detectados, la informaci\u00f3n se descarta."
                    ]
                  },
                  {
                    title: "Analog\u00eda de la carta y el sobre",
                    items: [
                      "Como en una carta, el contenido viaja dentro de una envoltura con direcciones de origen y destino.",
                      "El sobre equivale a la trama; el mensaje interno equivale a los datos encapsulados.",
                      "El direccionamiento correcto y el formato adecuado son imprescindibles para una entrega exitosa."
                    ]
                  },
                  {
                    title: "Punto clave para troubleshooting",
                    items: [
                      "Cuando falla la comunicaci\u00f3n local, conviene revisar primero Capa 2: formato de trama, direcciones MAC y estado de enlace.",
                      "Diferenciar errores de encapsulaci\u00f3n frente a problemas de Capa 3 acelera el diagn\u00f3stico.",
                      "Una base s\u00f3lida de Ethernet evita interpretar como 'problema IP' lo que en realidad es falla de acceso."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar una trama Ethernet y explicar el proceso completo de encapsulaci\u00f3n/desencapsulaci\u00f3n en LAN."
                    ]
                  }
                ]
              },
              {
                code: "7.2",
                title: "La capa de acceso y conmutaci\u00f3n Ethernet",
                summary:
                  "Funcionamiento de switches de Capa 2, uso de tablas MAC y diferencia entre inundaci\u00f3n y reenv\u00edo selectivo.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_7.2_switch_mac_learning.png",
                    alt: "Diagrama del aprendizaje de tabla MAC y reenv\u00edo de tramas en un switch Ethernet."
                  }
                ],
                sections: [
                  {
                    title: "7.2.1 Conmutadores Ethernet",
                    items: [
                      "Un switch opera en Capa 2 y toma decisiones de reenv\u00edo analizando la cabecera Ethernet.",
                      "En enlaces locales, el switch no enruta por IP; reenv\u00eda seg\u00fan la MAC de destino de cada trama.",
                      "Esto reduce tr\u00e1fico innecesario y mejora el rendimiento de la red LAN."
                    ]
                  },
                  {
                    title: "7.2.2 Aprendizaje de direcciones MAC",
                    items: [
                      "Cada vez que recibe una trama, el switch aprende la MAC de origen y la asocia al puerto de entrada.",
                      "Si la MAC de destino no est\u00e1 en la tabla, realiza flooding por todos los puertos excepto el de origen.",
                      "Cuando la tabla ya conoce destino y puerto, el reenv\u00edo se vuelve unicast selectivo."
                    ]
                  },
                  {
                    title: "Comportamiento operativo",
                    items: [
                      "Las entradas de tabla MAC envejecen con el tiempo y se eliminan si no hay tr\u00e1fico asociado.",
                      "Un aprendizaje correcto permite que tramas posteriores se entreguen solo al puerto requerido.",
                      "Este mecanismo hace la conmutaci\u00f3n m\u00e1s eficiente que una difusi\u00f3n permanente."
                    ]
                  },
                  {
                    title: "Implicaciones de seguridad b\u00e1sica",
                    items: [
                      "Controlar acceso f\u00edsico y puertos reduce riesgos de inserci\u00f3n de dispositivos no autorizados.",
                      "Monitorear cambios an\u00f3malos en tablas MAC puede ayudar a detectar comportamientos sospechosos.",
                      "Una capa de acceso bien administrada mejora disponibilidad y confianza de la LAN."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar c\u00f3mo un switch aprende MAC y c\u00f3mo decide entre flooding o reenv\u00edo dirigido."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M8",
            title: "Protocolo de Internet (IPv4)",
            topics: [
              {
                code: "8.1",
                title: "Prop\u00f3sito de una direcci\u00f3n IPv4",
                summary:
                  "Funci\u00f3n de la direcci\u00f3n IPv4 para identificar hosts, permitir comunicaci\u00f3n local/remota y soportar respuesta de extremo a extremo.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_8.1_ipv4_purpose.png",
                    alt: "Diagrama del prop\u00f3sito de IPv4 con flujo de paquetes entre red local e Internet."
                  }
                ],
                sections: [
                  {
                    title: "8.1.1 La direcci\u00f3n IPv4 en la red",
                    items: [
                      "Cada host necesita una direcci\u00f3n IPv4 para participar en la mayor\u00eda de LAN e Internet.",
                      "La direcci\u00f3n IPv4 identifica l\u00f3gicamente al dispositivo en su red y en comunicaciones remotas.",
                      "En cada paquete viajan direcciones de origen y destino para permitir ida y retorno de la informaci\u00f3n."
                    ]
                  },
                  {
                    title: "Asignaci\u00f3n en interfaces",
                    items: [
                      "La direcci\u00f3n se configura en la interfaz de red (NIC) del host o del enrutador.",
                      "Un servidor con varias NIC puede tener varias direcciones IPv4, una por interfaz activa.",
                      "Sin direccionamiento correcto, el equipo no puede enviar tr\u00e1fico a su red ni recibir respuestas."
                    ]
                  },
                  {
                    title: "8.1.2 Octetos y notaci\u00f3n decimal con puntos",
                    items: [
                      "IPv4 tiene 32 bits, agrupados en 4 octetos de 8 bits cada uno.",
                      "Para facilitar lectura y configuraci\u00f3n, se usa notaci\u00f3n decimal con puntos (ej.: 209.165.200.1).",
                      "Este formato simplifica operaci\u00f3n diaria sin trabajar directamente con 32 bits binarios."
                    ]
                  },
                  {
                    title: "Errores comunes a evitar",
                    items: [
                      "Duplicar direcciones en la misma LAN provoca conflictos y p\u00e9rdida intermitente de conectividad.",
                      "Configurar red, m\u00e1scara o gateway incorrectos impide llegar a redes remotas.",
                      "No documentar direccionamiento dificulta troubleshooting y escalamiento."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar por qu\u00e9 IPv4 es esencial para identificar hosts y transportar paquetes entre redes."
                    ]
                  }
                ]
              },
              {
                code: "8.2",
                title: "Estructura de la direcci\u00f3n IPv4",
                summary:
                  "Composici\u00f3n jer\u00e1rquica de IPv4 en porci\u00f3n de red y host, y su impacto en comunicaci\u00f3n dentro y fuera de la LAN.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_8.2_network_host_structure.png",
                    alt: "Infograf\u00eda de estructura IPv4 con separaci\u00f3n de red y host usando m\u00e1scara de subred."
                  }
                ],
                sections: [
                  {
                    title: "8.2.1 Componente de red y componente de host",
                    items: [
                      "Toda direcci\u00f3n IPv4 combina una parte de red y una parte de host.",
                      "La m\u00e1scara de subred define qu\u00e9 bits pertenecen a red y cu\u00e1les identifican al host.",
                      "Ejemplo /24: los primeros 3 octetos representan la red y el \u00faltimo octeto al host."
                    ]
                  },
                  {
                    title: "8.2.2 Direccionamiento jer\u00e1rquico",
                    items: [
                      "Los hosts de una misma LAN deben compartir porci\u00f3n de red y tener host \u00fanico.",
                      "Si cambia la porci\u00f3n de red (p. ej., 192.168.5.x a 192.168.8.x), ya es otra red l\u00f3gica.",
                      "Para comunicar redes l\u00f3gicas diferentes se requiere enrutamiento."
                    ]
                  },
                  {
                    title: "Implicaciones de dise\u00f1o",
                    items: [
                      "Una estructura IP clara facilita segmentaci\u00f3n, seguridad y crecimiento de la infraestructura.",
                      "La jerarqu\u00eda reduce carga operativa porque los routers encaminan por red, no por host individual.",
                      "Planificar subredes evita solapamientos y simplifica cambios de sede o departamentos."
                    ]
                  },
                  {
                    title: "Checklist de validaci\u00f3n",
                    items: [
                      "Verificar que el host est\u00e9 en el rango correcto de su subred.",
                      "Confirmar que no exista otra interfaz con la misma IPv4 en la LAN.",
                      "Comprobar que gateway y m\u00e1scara sean coherentes con la red asignada."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar una direcci\u00f3n IPv4 y distinguir correctamente su parte de red y host."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M9",
            title: "IPv4 y segmentaci\u00f3n de redes",
            topics: [
              {
                code: "9.1",
                title: "Unidifusi\u00f3n, difusi\u00f3n y multidifusi\u00f3n IPv4",
                summary:
                  "Diferencias entre tr\u00e1fico uno a uno, uno a todos y uno a grupo, y su impacto sobre recursos de la LAN.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_9.1_unicast_broadcast_multicast.png",
                    alt: "Comparaci\u00f3n visual de unidifusi\u00f3n, difusi\u00f3n y multidifusi\u00f3n en IPv4."
                  }
                ],
                sections: [
                  {
                    title: "9.1.2 Unidifusi\u00f3n",
                    items: [
                      "En unidifusi\u00f3n, un host env\u00eda un paquete a un \u00fanico destino (comunicaci\u00f3n uno a uno).",
                      "La direcci\u00f3n IP de origen siempre es unicast porque el paquete solo puede salir de un emisor.",
                      "Es el patr\u00f3n m\u00e1s com\u00fan en tr\u00e1fico de aplicaciones entre cliente y servidor."
                    ]
                  },
                  {
                    title: "9.1.4 Difusi\u00f3n",
                    items: [
                      "La difusi\u00f3n IPv4 env\u00eda un paquete a todos los hosts del dominio de broadcast local.",
                      "Puede ser limitada (255.255.255.255) o dirigida (por ejemplo, 172.16.4.255 en /24).",
                      "Los routers no reenv\u00edan broadcast de forma predeterminada, por lo que su alcance se limita al segmento."
                    ]
                  },
                  {
                    title: "9.1.6 Multidifusi\u00f3n",
                    items: [
                      "La multidifusi\u00f3n permite que un origen env\u00ede a un grupo suscrito de receptores.",
                      "IPv4 reserva 224.0.0.0 a 239.255.255.255 para direcciones multicast.",
                      "Reduce tr\u00e1fico comparado con m\u00faltiples unicast cuando varios receptores consumen el mismo flujo."
                    ]
                  },
                  {
                    title: "Impacto operativo en la LAN",
                    items: [
                      "Exceso de broadcast consume CPU en hosts y recursos de switching, aunque el contenido no sea relevante para todos.",
                      "Multicast bien dise\u00f1ado optimiza distribuci\u00f3n a grupos espec\u00edficos.",
                      "Segmentar dominios de broadcast mejora rendimiento general y estabilidad."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Distinguir cu\u00e1ndo usar unicast, broadcast o multicast y evaluar su impacto en red."
                    ]
                  }
                ]
              },
              {
                code: "9.2",
                title: "Tipos de direcciones IPv4",
                summary:
                  "Clasificaci\u00f3n de direcciones IPv4 (p\u00fablicas, privadas y especiales), uso de NAT y asignaci\u00f3n por organismos globales.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_9.2_ipv4_types_nat.png",
                    alt: "Resumen de direcciones IPv4 p\u00fablicas/privadas, NAT y bloques especiales."
                  }
                ],
                sections: [
                  {
                    title: "9.2.1 Direcciones p\u00fablicas y privadas",
                    items: [
                      "Las direcciones p\u00fablicas son enrutables globalmente entre ISP y deben ser \u00fanicas en Internet.",
                      "Las privadas (RFC 1918) se usan en redes internas y no se enrutan directamente en Internet.",
                      "Rangos privados frecuentes: 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16."
                    ]
                  },
                  {
                    title: "9.2.2 NAT para salida a Internet",
                    items: [
                      "NAT traduce direcciones privadas de origen a direcciones p\u00fablicas antes de salir al ISP.",
                      "Se implementa normalmente en el router de borde entre intranet e Internet.",
                      "Permite conservar espacio IPv4 p\u00fablico y mantener direccionamiento interno reutilizable."
                    ]
                  },
                  {
                    title: "9.2.4 Direcciones IPv4 de uso especial",
                    items: [
                      "Loopback: 127.0.0.0/8 (com\u00fanmente 127.0.0.1) para pruebas locales de pila TCP/IP.",
                      "Link-local/APIPA: 169.254.0.0/16 cuando un host no obtiene direcci\u00f3n por DHCP.",
                      "Direcci\u00f3n de red y direcci\u00f3n de broadcast no se asignan a hosts finales."
                    ]
                  },
                  {
                    title: "9.2.5-9.2.6 Contexto y asignaci\u00f3n",
                    items: [
                      "El direccionamiento con clase (A/B/C) fue reemplazado por enfoque sin clase para usar mejor el espacio IPv4.",
                      "IANA administra bloques globales y delega a RIR como ARIN, LACNIC, RIPE NCC, APNIC y AfriNIC.",
                      "La asignaci\u00f3n jer\u00e1rquica facilita gobernanza de recursos y crecimiento ordenado de Internet."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Seleccionar tipo de direcci\u00f3n IPv4 seg\u00fan contexto y explicar por qu\u00e9 NAT es necesario en redes privadas."
                    ]
                  }
                ]
              },
              {
                code: "9.3",
                title: "Segmentaci\u00f3n de red y dominios de difusi\u00f3n",
                summary:
                  "Uso de routers y subredes para limitar broadcast, mejorar desempe\u00f1o y aplicar pol\u00edticas de seguridad por segmentos.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_9.3_network_segmentation.png",
                    alt: "Diagrama de reducci\u00f3n de dominio de difusi\u00f3n mediante segmentaci\u00f3n de red."
                  }
                ],
                sections: [
                  {
                    title: "9.3.1-9.3.2 Dominios de difusi\u00f3n",
                    items: [
                      "En LAN Ethernet, protocolos como ARP y DHCP usan broadcast para descubrir informaci\u00f3n local.",
                      "Los switches propagan broadcast por sus puertos (excepto entrada).",
                      "Los routers separan dominios de broadcast al no reenviar estas tramas entre interfaces."
                    ]
                  },
                  {
                    title: "9.3.3 Problemas en dominios grandes",
                    items: [
                      "Un dominio con demasiados hosts puede generar tr\u00e1fico de difusi\u00f3n excesivo.",
                      "Esto provoca operaciones lentas en red y mayor carga de procesamiento en los dispositivos finales.",
                      "La soluci\u00f3n es dividir en subredes m\u00e1s peque\u00f1as y controlables."
                    ]
                  },
                  {
                    title: "9.3.4 Razones para segmentar",
                    items: [
                      "Mejorar rendimiento reduciendo tr\u00e1fico irrelevante para cada segmento.",
                      "Aplicar seguridad por pol\u00edticas entre subredes (qu\u00e9 se comunica y qu\u00e9 no).",
                      "Limitar impacto de incidentes, fallas o configuraciones err\u00f3neas."
                    ]
                  },
                  {
                    title: "Criterios pr\u00e1cticos de segmentaci\u00f3n",
                    items: [
                      "Por ubicaci\u00f3n (sedes, pisos, edificios).",
                      "Por funci\u00f3n o grupo (administraci\u00f3n, operaciones, invitados).",
                      "Por tipo de dispositivo (usuarios, IoT, servidores, infraestructura)."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Justificar una estrategia de subredes para optimizar rendimiento, control y seguridad operativa."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M10",
            title: "Formatos y reglas de direccionamiento IPv6",
            topics: [
              {
                code: "10.1",
                title: "Problemas con IPv4 y necesidad de IPv6",
                summary:
                  "Motivos t\u00e9cnicos y operativos para migrar a IPv6: agotamiento IPv4, l\u00edmites de NAT y estrategias de coexistencia.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_10.1_ipv6_need_transition.png",
                    alt: "Infograf\u00eda sobre agotamiento IPv4, l\u00edmites de NAT y t\u00e9cnicas de transici\u00f3n hacia IPv6."
                  }
                ],
                sections: [
                  {
                    title: "10.1.1 Necesidad de IPv6",
                    items: [
                      "IPv4 se agota frente al crecimiento de usuarios, servicios y dispositivos conectados.",
                      "IPv6 usa 128 bits y provee un espacio de direcciones muy superior para escalabilidad global.",
                      "La migraci\u00f3n tambi\u00e9n permite superar limitaciones funcionales heredadas del uso intensivo de NAT."
                    ]
                  },
                  {
                    title: "Presi\u00f3n de crecimiento e IoT",
                    items: [
                      "La masificaci\u00f3n de dispositivos m\u00f3viles y del Internet de las cosas incrementa demanda de direccionamiento \u00fanico.",
                      "El modelo de Internet actual va m\u00e1s all\u00e1 de web/correo: sensores, salud, industria y hogares conectados.",
                      "IPv6 reduce dependencia de soluciones paliativas y mejora sostenibilidad a largo plazo."
                    ]
                  },
                  {
                    title: "10.1.2 Coexistencia IPv4/IPv6",
                    items: [
                      "Doble pila (dual-stack): IPv4 e IPv6 operan en paralelo en equipos y enlaces.",
                      "Tunelizaci\u00f3n: encapsula tr\u00e1fico IPv6 sobre infraestructura IPv4 existente.",
                      "Traducci\u00f3n (NAT64): habilita interacci\u00f3n entre nodos solo IPv6 y recursos IPv4."
                    ]
                  },
                  {
                    title: "Criterio de transici\u00f3n",
                    items: [
                      "T\u00faneles y traducci\u00f3n son mecanismos temporales de migraci\u00f3n, no el estado objetivo final.",
                      "La meta recomendada es conectividad IPv6 nativa extremo a extremo donde sea posible.",
                      "Un plan por fases evita interrupciones y permite validar compatibilidad de aplicaciones."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Justificar por qu\u00e9 IPv6 es necesario y seleccionar una estrategia de coexistencia adecuada."
                    ]
                  }
                ]
              },
              {
                code: "10.2",
                title: "Direccionamiento IPv6: formato y compresi\u00f3n",
                summary:
                  "Representaci\u00f3n hexadecimal de direcciones IPv6 y aplicaci\u00f3n correcta de reglas de compresi\u00f3n para lectura y configuraci\u00f3n.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_10.2_ipv6_format_rules.png",
                    alt: "Reglas de formato IPv6: hextetos, omisi\u00f3n de ceros iniciales y uso de doble dos puntos."
                  }
                ],
                sections: [
                  {
                    title: "10.2.1 Sistema hexadecimal",
                    items: [
                      "IPv6 se expresa en hexadecimal (0-9 y A-F) para representar direcciones largas de forma legible.",
                      "Cada d\u00edgito hexadecimal equivale a 4 bits.",
                      "La notaci\u00f3n es insensible a may\u00fasculas/min\u00fasculas."
                    ]
                  },
                  {
                    title: "10.2.2 Formato de direcci\u00f3n IPv6",
                    items: [
                      "Una direcci\u00f3n IPv6 tiene 128 bits y se escribe como 8 hextetos separados por dos puntos.",
                      "Cada hexteto representa 16 bits (4 d\u00edgitos hexadecimales).",
                      "El formato preferido usa los 32 d\u00edgitos hexadecimales completos."
                    ]
                  },
                  {
                    title: "10.2.4 Regla 1: omitir ceros iniciales",
                    items: [
                      "Se pueden omitir solo los ceros a la izquierda dentro de un hexteto.",
                      "No se deben omitir ceros finales porque la direcci\u00f3n se vuelve ambigua.",
                      "Ejemplo: 00ab -> ab, 01ab -> 1ab."
                    ]
                  },
                  {
                    title: "10.2.5 Regla 2: doble dos puntos (::)",
                    items: [
                      ":: reemplaza una sola secuencia contigua de hextetos en cero.",
                      "Solo puede usarse una vez por direcci\u00f3n IPv6.",
                      "Si existen varias secuencias de ceros, se recomienda comprimir la m\u00e1s larga."
                    ]
                  },
                  {
                    title: "Checklist de validaci\u00f3n",
                    items: [
                      "Verificar que una direcci\u00f3n comprimida con :: pueda expandirse de forma \u00fanica.",
                      "Confirmar que no se eliminaron ceros finales por error.",
                      "Estandarizar estilo de escritura para evitar confusiones en operaciones."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Escribir y leer direcciones IPv6 en formato preferido y comprimido sin ambig\u00fcedad."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M11",
            title: "Direccionamiento dinamico con DHCP",
            topics: [
              {
                code: "11.1",
                title: "Direccionamiento estatico y dinamico",
                summary:
                  "Comparacion entre configuracion manual y asignacion automatica de IPv4 para optimizar control operativo y escalabilidad.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_11.1_static_vs_dhcpv4.png",
                    alt: "Comparativa de direccionamiento IPv4 estatico frente a direccionamiento dinamico con DHCP."
                  }
                ],
                sections: [
                  {
                    title: "11.1.1 Asignacion estatica de IPv4",
                    items: [
                      "En modo estatico, el administrador configura manualmente IP, mascara y gateway en cada host.",
                      "Es apropiado para servidores, impresoras y dispositivos que deben mantener direccion estable.",
                      "Aporta control fino, pero incrementa tiempo operativo y riesgo de errores de captura."
                    ]
                  },
                  {
                    title: "11.1.2 Asignacion dinamica con DHCP",
                    items: [
                      "DHCP entrega automaticamente parametros de red: IPv4, mascara, gateway y opciones adicionales.",
                      "Reduce trabajo manual del soporte y disminuye conflictos por direccion duplicada.",
                      "Las direcciones se asignan por arrendamiento (lease) y regresan al pool cuando expiran."
                    ]
                  },
                  {
                    title: "11.1.3 Roles de servidor DHCP",
                    items: [
                      "Puede ejecutarse en servidor dedicado, router empresarial o router domestico.",
                      "En redes domesticas, el router suele actuar como cliente DHCP hacia ISP y servidor para LAN interna.",
                      "El servicio DHCP debe dimensionarse segun cantidad de clientes y politicas de renovacion."
                    ]
                  },
                  {
                    title: "Criterio de implementacion",
                    items: [
                      "Usar estatico para infraestructura critica y dinamico para estaciones de usuario.",
                      "Mantener inventario de reservas y excluir rangos para evitar solapamientos.",
                      "Documentar pools, tiempos de lease y parametros entregados por segmento."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Elegir correctamente entre direccionamiento estatico y DHCP segun tipo de dispositivo y contexto operativo."
                    ]
                  }
                ]
              },
              {
                code: "11.2",
                title: "Configuracion y operacion de DHCPv4",
                summary:
                  "Funcionamiento del intercambio DORA, parametros distribuidos por DHCP y validacion basica de conectividad en clientes.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_11.2_dhcpv4_dora_flow.png",
                    alt: "Flujo DHCPv4 DORA entre cliente y servidor con parametros de configuracion entregados."
                  }
                ],
                sections: [
                  {
                    title: "11.2.1 Operacion DHCPv4 (DORA)",
                    items: [
                      "Discover: el cliente emite broadcast para localizar servidores DHCP.",
                      "Offer: el servidor propone direccion y parametros de configuracion.",
                      "Request: el cliente solicita formalmente la oferta seleccionada; ACK: el servidor confirma y registra lease."
                    ]
                  },
                  {
                    title: "11.2.2 Configuracion del servicio",
                    items: [
                      "Definir rango de direcciones (pool), mascara, gateway y DNS para la red objetivo.",
                      "Verificar que el rango no incluya IP reservadas para infraestructura o servicios estaticos.",
                      "En routers domesticos/SMB, DHCP suele venir habilitado por defecto y debe ajustarse al plan de direccionamiento."
                    ]
                  },
                  {
                    title: "Validacion posterior",
                    items: [
                      "Confirmar que cada cliente reciba IP unica dentro del rango esperado.",
                      "Probar conectividad local y hacia gateway con ping una vez asignada la configuracion.",
                      "Revisar tabla de leases para asociacion correcta entre MAC y direccion entregada."
                    ]
                  },
                  {
                    title: "Errores frecuentes",
                    items: [
                      "Pool agotado por lease demasiado largo o falta de capacidad planificada.",
                      "Gateway/DNS mal configurados en servidor DHCP, aun con IP valida en clientes.",
                      "Solapamiento entre direccionamiento estatico y dinamico en la misma subred."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Implementar y verificar DHCPv4 para entregar configuracion consistente y reducir incidencias en usuarios finales."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M12",
            title: "Puertas de enlace a otras redes",
            topics: [
              {
                code: "12.1",
                title: "Limites de red y puerta de enlace predeterminada",
                summary:
                  "Como un host decide si enviar trafico localmente o reenviarlo al gateway para alcanzar redes remotas.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_12.1_default_gateway_limits.png",
                    alt: "Diagrama de decision del host para trafico local y remoto usando puerta de enlace predeterminada."
                  }
                ],
                sections: [
                  {
                    title: "12.1.1 Puerta de enlace a otras redes",
                    items: [
                      "La puerta de enlace predeterminada es la salida del host hacia destinos fuera de su subred local.",
                      "El host compara red local y red destino usando IP + mascara; si no coinciden, envia al gateway.",
                      "Si gateway o mascara estan mal configurados, no habra conectividad hacia redes remotas."
                    ]
                  },
                  {
                    title: "12.1.2 Enrutadores como gateways",
                    items: [
                      "Cada interfaz del router conecta una red distinta y puede ser gateway de los hosts de ese segmento.",
                      "La IP del gateway puede configurarse de forma estatica o recibirse dinamicamente por DHCP.",
                      "En redes domesticas, el router inalambrico suele entregar su IP LAN como gateway predeterminado."
                    ]
                  },
                  {
                    title: "12.1.3 Router como limite entre redes",
                    items: [
                      "El router separa red interna (privada) y red externa (ISP/Internet).",
                      "Hacia adentro puede actuar como servidor DHCP; hacia afuera suele actuar como cliente DHCP del ISP.",
                      "Este limite mejora control de trafico y evita exposicion directa de hosts internos."
                    ]
                  },
                  {
                    title: "Checklist de host",
                    items: [
                      "IP y gateway deben pertenecer a la misma subred local del host.",
                      "Verificar mascara correcta antes de diagnosticar problemas de salida a Internet.",
                      "Validar primero alcance al gateway (ping) y luego a destino remoto."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Configurar correctamente el gateway predeterminado para habilitar comunicacion fuera de la LAN."
                    ]
                  }
                ]
              },
              {
                code: "12.2",
                title: "Traduccion de direcciones de red (NAT)",
                summary:
                  "Principio de operacion de NAT para permitir que redes privadas accedan a Internet mediante direcciones publicas.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_12.2_nat_intro_flow.png",
                    alt: "Flujo de traduccion NAT entre host privado, router de borde e Internet publica."
                  }
                ],
                sections: [
                  {
                    title: "12.2.1 Introduccion a NAT",
                    items: [
                      "Las redes privadas RFC1918 funcionan internamente pero no son enrutable globalmente en Internet.",
                      "NAT traduce direcciones privadas a publicas en el router de borde para permitir salida externa.",
                      "Sin esta traduccion, un host privado no podria comunicarse con servicios publicos en Internet."
                    ]
                  },
                  {
                    title: "Flujo basico de traduccion",
                    items: [
                      "Salida: el router reemplaza IP origen privada por una IP publica registrada y guarda el mapeo.",
                      "Retorno: la respuesta llega a IP publica; el router consulta tabla NAT y restaura destino privado.",
                      "El proceso permite sesiones bidireccionales sin exponer direccionamiento interno real."
                    ]
                  },
                  {
                    title: "Rangos privados usados con NAT",
                    items: [
                      "10.0.0.0/8 para despliegues amplios empresariales.",
                      "172.16.0.0/12 para segmentacion intermedia.",
                      "192.168.0.0/16 frecuente en entornos domesticos y pymes."
                    ]
                  },
                  {
                    title: "Consideraciones operativas",
                    items: [
                      "NAT simplifica consumo de IP publicas, pero agrega estado y complejidad en troubleshooting.",
                      "Documentar politicas de traduccion es clave para auditoria y soporte.",
                      "Una mala configuracion de NAT puede bloquear servicios o romper conectividad de aplicaciones."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar como NAT habilita acceso a Internet desde direccionamiento privado y su impacto operativo."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M13",
            title: "El proceso ARP",
            topics: [
              {
                code: "13.1",
                title: "MAC e IP en comunicaciones locales y remotas",
                summary:
                  "Relacion entre direccion logica (IP) y direccion fisica (MAC), y como cambia la encapsulacion en cada salto.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_13.1_mac_ip_local_remote.png",
                    alt: "Comparacion de direccionamiento MAC e IP para destino local y destino en red remota."
                  }
                ],
                sections: [
                  {
                    title: "13.1.1 Destino en la misma red",
                    items: [
                      "En una LAN, la trama Ethernet usa como MAC destino la del host final dentro del mismo segmento.",
                      "La IP identifica origen y destino logicos; la MAC permite entrega NIC a NIC en el enlace local.",
                      "Ejemplo local: IP destino 192.168.10.11 y MAC destino 55-55-55."
                    ]
                  },
                  {
                    title: "13.1.2 Destino en red remota",
                    items: [
                      "Si la IP destino esta fuera de la subred, la MAC destino inicial es la del gateway predeterminado.",
                      "El router desencapsula Capa 2, evalua IP destino y reencapsula para el siguiente salto.",
                      "En cada enlace cambian MAC origen/destino, pero la IP destino final se mantiene."
                    ]
                  },
                  {
                    title: "Encapsulacion por salto",
                    items: [
                      "Cada medio de enlace exige una nueva trama de Capa 2 apropiada para esa interfaz.",
                      "La decision de forwarding depende de capa 3; la entrega fisica se realiza en capa 2.",
                      "Este desacople permite atravesar multiples redes con tecnologias de enlace distintas."
                    ]
                  },
                  {
                    title: "Relacion practica MAC-IP",
                    items: [
                      "IP responde al 'donde va' en la red logica; MAC responde al 'a quien entrego' en el enlace actual.",
                      "Sin resolucion MAC correcta, el paquete IP no puede salir como trama valida.",
                      "Comprender esta relacion acelera troubleshooting de conectividad local y de primer salto."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Diferenciar claramente el rol de IP y MAC al enviar trafico dentro de la LAN o hacia redes remotas."
                    ]
                  }
                ]
              },
              {
                code: "13.2",
                title: "Contencion de difusiones y funcionamiento de ARP",
                summary:
                  "Impacto del broadcast en dominios Ethernet y uso de ARP para resolver direcciones MAC a partir de IPv4.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_13.2_broadcast_arp.png",
                    alt: "Difusion Ethernet, dominio de broadcast y flujo ARP de solicitud/respuesta."
                  }
                ],
                sections: [
                  {
                    title: "13.2.1 Difusion Ethernet",
                    items: [
                      "Una trama broadcast usa MAC destino FF-FF-FF-FF-FF-FF y alcanza todos los hosts del dominio local.",
                      "El switch hace flooding por todos los puertos excepto el de entrada.",
                      "Los routers reciben broadcast local pero no lo reenvian a otras redes."
                    ]
                  },
                  {
                    title: "13.2.2 Dominios de difusion",
                    items: [
                      "Una LAN con switches forma un dominio de broadcast donde todos procesan difusiones.",
                      "Al crecer el numero de hosts, aumenta trafico broadcast y puede degradar rendimiento.",
                      "Dividir la red con routers reduce alcance de difusion y mejora escalabilidad."
                    ]
                  },
                  {
                    title: "13.2.3-13.2.5 ARP",
                    items: [
                      "ARP resuelve la MAC cuando el host conoce la IPv4 destino en su red local.",
                      "Proceso: solicitud ARP en broadcast, respuesta del host correcto, almacenamiento en tabla ARP.",
                      "Con la entrada ARP aprendida, los siguientes envios pueden ser unicast sin nueva solicitud inmediata."
                    ]
                  },
                  {
                    title: "Contencion operativa",
                    items: [
                      "ARP y otros broadcast deben mantenerse controlados para evitar consumo excesivo en acceso.",
                      "Segmentacion adecuada y disenio de subredes limitan impacto de difusion masiva.",
                      "Revisar tablas ARP y comportamiento de flooding ayuda a detectar anomalias de red."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar como ARP funciona dentro del dominio de broadcast y por que la segmentacion lo contiene."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M14",
            title: "Necesidad del enrutamiento",
            topics: [
              {
                code: "14.1",
                title: "La necesidad del enrutamiento",
                summary:
                  "Por que una red grande se divide en segmentos y como el router permite comunicar redes distintas de forma controlada.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_14.1_routing_need.png",
                    alt: "Diagrama de segmentacion de red por seguridad, difusion y crecimiento con un router entre subredes."
                  }
                ],
                sections: [
                  {
                    title: "14.1.1 Division de la red local",
                    items: [
                      "Dividir una red reduce el trafico de difusion y evita que todos los hosts procesen mensajes irrelevantes.",
                      "La segmentacion mejora seguridad al limitar acceso entre departamentos, equipos y servicios sensibles.",
                      "Tambien responde a necesidades fisicas: sedes, pisos o edificios con alcances de red diferentes."
                    ]
                  },
                  {
                    title: "14.1.2 Cuando se necesita enrutamiento",
                    items: [
                      "Si la red de origen y la red de destino no coinciden, el host debe usar un router para llegar al destino remoto.",
                      "El switch reenvia por direccion MAC (capa 2), mientras el router decide por direccion IP (capa 3).",
                      "Cada interfaz del router define una red independiente y separa dominios de difusion."
                    ]
                  },
                  {
                    title: "Encapsulacion y reenvio",
                    items: [
                      "El host encapsula el paquete IP en una trama de enlace y lo entrega al gateway predeterminado.",
                      "El router desencapsula, consulta destino IP, selecciona interfaz de salida y reencapsula para el siguiente salto.",
                      "Este proceso se repite hasta alcanzar la red donde esta el host final."
                    ]
                  },
                  {
                    title: "Criterios de diseno",
                    items: [
                      "Separar redes por funcion, criticidad y volumen de trafico para simplificar operacion y crecimiento.",
                      "Contener difusion y aplicar politicas de acceso reduce riesgo y mejora rendimiento.",
                      "Planificar direccionamiento por segmentos facilita enrutamiento y troubleshooting."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Justificar tecnicamente por que segmentar y como el enrutamiento habilita comunicacion segura entre redes."
                    ]
                  }
                ]
              },
              {
                code: "14.2",
                title: "La tabla de enrutamiento",
                summary:
                  "Como el router usa su tabla para reenviar paquetes a redes conocidas, descartar trafico invalido y usar ruta predeterminada cuando aplica.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_14.2_routing_table_forwarding.png",
                    alt: "Proceso de decision del router con tabla de enrutamiento, ruta especifica y ruta por defecto."
                  }
                ],
                sections: [
                  {
                    title: "14.2.1 Reenvio de paquetes del router",
                    items: [
                      "El host envia al gateway cuando detecta que la IP destino esta fuera de su subred local.",
                      "El router busca la red destino en su tabla y reenvia por la interfaz asociada a esa ruta.",
                      "Las difusiones de capa 2 no se reenvian entre redes, por lo que quedan contenidas en su segmento."
                    ]
                  },
                  {
                    title: "14.2.2-14.2.3 Mensajes dentro y entre redes",
                    items: [
                      "Dentro de la misma red, el host usa ARP para resolver MAC del destino y envia directo por switch.",
                      "Entre redes, el host resuelve la MAC del gateway; el router cambia trama por salto y conserva el destino IP final.",
                      "La tabla ARP y la tabla de enrutamiento cooperan para entrega correcta en LAN y entre LANs."
                    ]
                  },
                  {
                    title: "14.2.4 Entradas de la tabla de enrutamiento",
                    items: [
                      "Cada entrada representa una red destino, su tipo de ruta y la interfaz o siguiente salto.",
                      "Las rutas pueden ser conectadas, estaticas o aprendidas dinamicamente desde otros routers.",
                      "Si no existe coincidencia y tampoco ruta predeterminada, el paquete se descarta."
                    ]
                  },
                  {
                    title: "14.2.5 Puerta de enlace predeterminada",
                    items: [
                      "Cada host debe tener configurada la IP del gateway local para salir a redes remotas.",
                      "Un gateway ausente o incorrecto impide acceso fuera de la LAN aunque exista conectividad local.",
                      "El host usa ARP sobre la IP del gateway para obtener la MAC que ira en la trama de salida."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar la logica de forwarding del router y validar rutas para resolver fallas de conectividad entre redes."
                    ]
                  }
                ]
              },
              {
                code: "14.3",
                title: "Crear una LAN",
                summary:
                  "Diseno basico de LAN: una sola red local frente a segmentos multiples, con sus ventajas, riesgos y criterio de uso.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_14.3_lan_design_segments.png",
                    alt: "Comparacion de diseno LAN en un solo segmento frente a segmentacion por redes locales y remotas."
                  }
                ],
                sections: [
                  {
                    title: "14.3.1 Redes de area local",
                    items: [
                      "Una LAN es una red local o conjunto de redes locales bajo el mismo control administrativo.",
                      "Las LAN modernas pueden abarcar multiples edificios y cientos de hosts interconectados.",
                      "Una intranet es una LAN privada de organizacion con acceso restringido a usuarios autorizados."
                    ]
                  },
                  {
                    title: "14.3.2 Segmentos locales y remotos",
                    items: [
                      "Un solo segmento simplifica la operacion inicial, pero incrementa dominio de difusion al crecer.",
                      "Separar hosts en redes distintas reduce broadcast y puede mejorar rendimiento por segmento.",
                      "La segmentacion exige enrutamiento, mas planificacion y mayor costo de implementacion."
                    ]
                  },
                  {
                    title: "Comparacion de enfoques",
                    items: [
                      "Segmento unico: menos complejidad y menor costo, adecuado para redes pequenas.",
                      "Segmentado: mayor control, mejor seguridad y organizacion para redes medianas o grandes.",
                      "La decision depende de escala, politicas de acceso, criticidad de servicios y presupuesto."
                    ]
                  },
                  {
                    title: "Checklist de diseno LAN",
                    items: [
                      "Definir que hosts deben comunicarse directamente y cuales deben aislarse por seguridad.",
                      "Estimar crecimiento de dispositivos, trafico esperado y necesidad de QoS.",
                      "Alinear direccionamiento IP, gateways y politicas de enrutamiento con el diseno elegido."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Elegir entre LAN plana o segmentada con criterios tecnicos de rendimiento, seguridad y escalabilidad."
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
