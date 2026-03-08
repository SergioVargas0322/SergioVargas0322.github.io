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
                    title: "Disk Operating System (DOS)",
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
                    title: "Versiones de Windows",
                    items: [
                      "Desde 1993, las versiones de Windows se basan en la arquitectura NT.",
                      "Con Windows XP se consolidó la adopción de 64 bits en equipos de usuario.",
                      "Las ediciones (Home, Pro, Enterprise, Server, Datacenter) responden a necesidades específicas."
                    ]
                  },
                  {
                    title: "Interfaz gráfica de Windows",
                    items: [
                      "El escritorio (Desktop) es personalizable por usuario e incluye accesos, archivos y papelera de reciclaje.",
                      "La barra de tareas (Taskbar) integra menú Inicio/búsqueda, accesos rápidos y área de notificaciones.",
                      "El menú contextual (Context Menu) y el Explorador de archivos (File Explorer) facilitan operaciones frecuentes de administración."
                    ]
                  },
                  {
                    title: "Vulnerabilidades del sistema operativo",
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
                    title: "Hardware Abstraction Layers (HAL)",
                    items: [
                      "La HAL intermedia entre hardware y kernel para aislar diferencias entre plataformas físicas.",
                      "El kernel mantiene control global de E/S, memoria y periféricos conectados.",
                      "Aunque HAL abstrae, existen funciones donde el kernel aún interactúa de forma directa con hardware."
                    ]
                  },
                  {
                    title: "Modo usuario y modo kernel",
                    items: [
                      "Aplicaciones de usuario corren en user mode con restricciones de hardware y memoria.",
                      "Código en kernel mode tiene acceso total; errores de drivers en este modo pueden detener todo el sistema.",
                      "El aislamiento por proceso en user mode evita que una app corrompa memoria de otra aplicación."
                    ]
                  },
                  {
                    title: "Sistemas de archivos en Windows",
                    items: [
                      "exFAT y FAT son simples y compatibles, pero FAT presenta límites de tamaño y particiones.",
                      "HFS+ (macOS) y EXT (Linux) pueden leerse en Windows con software adicional.",
                      "NTFS es el estándar en Windows por confiabilidad, permisos, cifrado y soporte forense (MACE).",
                      "Estructuras clave de NTFS: Partition Boot Sector, MFT, System Files y File Area.",
                      "Formatear no siempre elimina datos: para reutilización segura se recomienda un borrado seguro (secure wipe)."
                    ]
                  },
                  {
                    title: "Flujos de datos alternos (ADS)",
                    items: [
                      "NTFS permite asociar flujos alternos de datos a un archivo (ej.: Testfile.txt:ADS).",
                      "ADS puede ocultar información o código malicioso sin ser visible en un dir estándar.",
                      "El modificador dir /r permite evidenciar ADS en auditorías técnicas."
                    ]
                  },
                  {
                    title: "- Proceso de arranque e inicio",
                    items: [
                      "BIOS inicia con POST/MBR; UEFI utiliza archivos .efi en la EFI System Partition.",
                      "Bootmgr.exe carga BCD y decide ruta de hibernación (Winresume.exe) o arranque frío (Winload.exe).",
                      "Winload valida drivers (KMCS), inicia Ntoskrnl, HAL y SMSS para preparar el logon.",
                      "Claves HKLM y HKCU definen elementos de inicio; Msconfig facilita su gestión segura."
                    ]
                  },
                  {
                    title: "- Apagado, procesos, hilos y servicios",
                    items: [
                      "Un apagado correcto cierra apps/servicios en orden y reduce riesgo de corrupción.",
                      "Opciones de apagado: Shutdown, Restart e Hibernate según necesidad operativa.",
                      "Cada proceso contiene uno o más hilos; los servicios sostienen funciones permanentes del sistema.",
                      "Task Manager y Services son base para diagnóstico de rendimiento y disponibilidad."
                    ]
                  },
                  {
                    title: "Asignación de memoria y handles",
                    items: [
                      "Windows usa direcciones virtuales traducidas a direcciones físicas mediante tablas de páginas.",
                      "Procesos de 32 bits direccionan hasta 4 GB; en 64 bits el espacio virtual se amplía drásticamente.",
                      "Los handles permiten a procesos en user mode acceder a recursos del kernel sin acceso directo.",
                      "RAMMap (Sysinternals) permite analizar cómo se distribuye la memoria entre kernel, drivers y apps."
                    ]
                  },
                  {
                    title: "Registro de Windows",
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
                    title: "Ejecutar como administrador",
                    items: [
                      "No se recomienda trabajar siempre con cuenta Administrador por riesgo de heredar privilegios a software malicioso.",
                      "Para tareas puntuales, usar Run as Administrator sobre ejecutable o consola específica.",
                      "El uso controlado de elevación reduce superficie de ataque y errores críticos."
                    ]
                  },
                  {
                    title: "Usuarios locales y dominios",
                    items: [
                      "Las cuentas locales almacenan configuración y permisos específicos del equipo.",
                      "Cuentas Guest/Administrator vienen deshabilitadas por seguridad y no deben activarse sin justificación.",
                      "Los grupos simplifican permisos; la denegación explícita prevalece sobre permisos heredados.",
                      "En dominio, el Domain Controller define autenticación y políticas de sesión para usuarios/equipos."
                    ]
                  },
                  {
                    title: "CLI y PowerShell",
                    items: [
                      "CLI (cmd) permite navegación, ejecución de comandos y scripts batch.",
                      "PowerShell amplía automatización con cmdlets, scripts .ps1 y funciones reutilizables.",
                      "Ejecutar consola con privilegios administrativos solo cuando sea necesario.",
                      "Comandos de ayuda (help, Get-Help, Update-Help) son esenciales para operación segura."
                    ]
                  },
                  {
                    title: "Windows Management Instrumentation (WMI)",
                    items: [
                      "WMI permite inventario, monitoreo y administración remota de sistemas Windows.",
                      "La consola WMI Control expone opciones de resumen, respaldo, seguridad y configuración avanzada.",
                      "WMI también puede ser abusado por atacantes para ejecutar acciones remotas con baja visibilidad.",
                      "Se recomienda restringir acceso WMI y monitorear su uso."
                    ]
                  },
                  {
                    title: "Comando net",
                    items: [
                      "El comando net centraliza administración de cuentas, sesiones, recursos compartidos y servicios.",
                      "Subcomandos clave: net accounts, net session, net share, net start/stop, net use, net view.",
                      "net help y net help <subcomando> facilitan administración guiada por sintaxis oficial."
                    ]
                  },
                  {
                    title: "Administrador de tareas y Monitor de recursos",
                    items: [
                      "Task Manager ofrece visibilidad por pestañas: Processes, Performance, Startup, Users, Details y Services.",
                      "Resource Monitor profundiza análisis de CPU, memoria, disco y red por proceso.",
                      "Ambas herramientas ayudan a identificar cuellos de botella, servicios atascados y actividad sospechosa."
                    ]
                  },
                  {
                    title: "Redes",
                    items: [
                      "Network and Sharing Center permite crear conexiones y ajustar propiedades del adaptador.",
                      "Configurar IPv4/IPv6 por DHCP o manual según diseño de red.",
                      "nslookup valida DNS y netstat permite revisar conexiones y estado de puertos."
                    ]
                  },
                  {
                    title: "Acceso a recursos de red",
                    items: [
                      "SMB usa formato UNC (\\\\servidor\\recurso\\archivo) para acceso a recursos remotos.",
                      "Los administrative shares (C$, admin$, print$) requieren privilegios elevados.",
                      "RDP permite administración remota, pero debe limitarse y protegerse con políticas de acceso robustas."
                    ]
                  },
                  {
                    title: "Windows Server",
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
                    title: "Comando netstat",
                    items: [
                      "El comando netstat ayuda a detectar conexiones entrantes/salientes no autorizadas.",
                      "Con netstat -abno puedes ver puertos, estado, proceso asociado y PID para correlación con Task Manager.",
                      "Para usar opciones avanzadas se requiere consola con privilegios de administrador.",
                      "Si hay procesos sospechosos, se valida su legitimidad y se procede a contención y limpieza."
                    ]
                  },
                  {
                    title: "Visor de eventos",
                    items: [
                      "Event Viewer registra eventos de aplicaciones, seguridad y sistema para diagnóstico y auditoría.",
                      "Cada evento incluye nivel (información, advertencia, error, crítico), origen, fecha/hora e ID.",
                      "La vista Administrative Events centraliza eventos críticos y suele ser el mejor punto de partida."
                    ]
                  },
                  {
                    title: "Gestión de Windows Update",
                    items: [
                      "Mantener Windows actualizado reduce exposición a vulnerabilidades y zero-day exploits.",
                      "Los parches corrigen fallas específicas y los service packs agrupan mejoras y correcciones.",
                      "Windows Update permite revisar historial, ejecutar búsqueda manual y definir horas activas/reinicio."
                    ]
                  },
                  {
                    title: "Política de seguridad local",
                    items: [
                      "La política local aplica en equipos fuera de dominio y define reglas de cuenta y seguridad del host.",
                      "Password Policy y Account Lockout Policy ayudan a mitigar intentos de fuerza bruta.",
                      "Se recomienda bloqueo de sesión automático, mínimo privilegio y uso de AppLocker cuando aplique.",
                      "Las políticas pueden exportarse para replicar configuraciones entre equipos stand-alone."
                    ]
                  },
                  {
                    title: "Windows Defender",
                    items: [
                      "Windows Defender ofrece protección en tiempo real contra virus, spyware y otras formas de malware.",
                      "Permite escaneos manuales, actualización de definiciones y revisión de historial de detecciones.",
                      "La higiene operativa recomienda usar una sola solución antimalware activa a la vez."
                    ]
                  },
                  {
                    title: "Firewall de Windows Defender",
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
                    title: "Qué es Linux",
                    items: [
                      "Linux es un sistema operativo creado en 1991, de código abierto, ligero y altamente configurable.",
                      "Está diseñado para operar en red, lo que facilita el desarrollo y uso de aplicaciones orientadas a servicios.",
                      "Al ser open source, el kernel puede inspeccionarse, modificarse y recompilarse según necesidades técnicas.",
                      "Las distribuciones (distros) empaquetan kernel + herramientas; ejemplos: Debian, Red Hat, Ubuntu, CentOS y SUSE."
                    ]
                  },
                  {
                    title: "Valor de Linux en ciberseguridad",
                    items: [
                      "La flexibilidad del código abierto permite construir entornos específicos para análisis de seguridad.",
                      "La CLI de Linux es potente para tareas locales y remotas, con menor consumo de recursos que un entorno gráfico completo.",
                      "El usuario root tiene control total del sistema, útil para funciones de bajo nivel como la pila de red.",
                      "Ese control detallado favorece la creación y ajuste de herramientas de monitoreo e investigación."
                    ]
                  },
                  {
                    title: "Linux en el SOC",
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
                    title: "Herramientas Linux y pentesting",
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
                    title: "La shell de Linux",
                    items: [
                      "En Linux, la interacción con el sistema puede hacerse por GUI o por CLI; la CLI se accede con emuladores de terminal.",
                      "Terminales comunes: Terminator, eterm, xterm, konsole y gnome-terminal.",
                      "La shell permite ejecutar comandos locales y remotos de forma eficiente, especialmente en administración por SSH.",
                      "Términos como shell, consola, CLI terminal y terminal window suelen usarse de forma equivalente."
                    ]
                  },
                  {
                    title: "Comandos básicos",
                    items: [
                      "Comandos fundamentales: pwd, ps, su, sudo, passwd, shutdown y man para documentación.",
                      "Comandos de red y gestión: ifconfig, iwconfig y apt-get para configuración o mantenimiento.",
                      "Comandos de procesamiento y búsqueda: cat, grep, mv, chmod, chown y dd.",
                      "La ejecución depende de permisos del usuario; sin privilegios adecuados algunos comandos no se pueden aplicar."
                    ]
                  },
                  {
                    title: "Comandos de archivos y directorios",
                    items: [
                      "Comandos clave para sistema de archivos: ls, cd, mkdir, cp, mv, rm, grep y cat.",
                      "Parámetros y switches permiten ajustar el comportamiento de cada comando según la tarea.",
                      "El uso correcto de estas utilidades acelera diagnóstico, organización y mantenimiento del host Linux."
                    ]
                  },
                  {
                    title: "Trabajo con archivos de texto",
                    items: [
                      "Linux ofrece editores gráficos y de línea de comandos; ambos cumplen roles distintos en operación diaria.",
                      "En administración remota (ej. por SSH), los editores CLI son esenciales porque no siempre hay interfaz gráfica.",
                      "nano es una opción común: CTRL+O guarda, CTRL+W busca y CTRL+G abre ayuda."
                    ]
                  },
                  {
                    title: "Importancia de los archivos de texto en Linux",
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
                    title: "Introducción a la comunicación cliente-servidor",
                    items: [
                      "Un servidor es un equipo con software que ofrece recursos o funciones a clientes a través de la red.",
                      "Existen servicios de negocio (archivos, correo, web) y servicios de mantenimiento (logs, memoria, disco).",
                      "Cada servicio requiere software específico y puede coexistir con otros en el mismo servidor."
                    ]
                  },
                  {
                    title: "Servidores, servicios y puertos",
                    items: [
                      "Un puerto es un recurso de red asociado a un servicio; cuando está activo se dice que el servicio está listening.",
                      "Aunque el administrador puede cambiar puertos, muchos clientes usan puertos por defecto para interoperabilidad.",
                      "Puertos comunes: 20/21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 67/68 DHCP, 69 TFTP, 80 HTTP, 110 POP3, 123 NTP, 143 IMAP, 161/162 SNMP y 443 HTTPS."
                    ]
                  },
                  {
                    title: "Clientes",
                    items: [
                      "Un cliente es una aplicación que habla un protocolo específico con un servidor.",
                      "Ejemplos: navegador web con HTTP para servidores web y cliente FTP para transferencia de archivos.",
                      "En operación diaria, los clientes realizan acciones de descarga y carga según permisos y servicio disponible."
                    ]
                  },
                  {
                    title: "Detección de puertos con Nmap (lab)",
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
                    title: "Archivos de configuración de servicios",
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
                    title: "Endurecimiento de dispositivos",
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
                    title: "Monitoreo de logs de servicios",
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
                    title: "Tipos de sistemas de archivos en Linux",
                    items: [
                      "Linux soporta múltiples sistemas de archivos; el administrador elige según rendimiento, flexibilidad, tamaño y seguridad.",
                      "Familia ext: ext2 (sin journal), ext3 (con journaling) y ext4 (mejoras de rendimiento y escalabilidad).",
                      "Otros tipos relevantes: NFS para acceso por red, CDFS para medios ópticos, swap para apoyo de memoria, HFS+ y APFS para compatibilidad con entornos Apple.",
                      "MBR y proceso de montaje (mount) son claves para que una partición quede accesible en un punto de montaje dentro del árbol Linux."
                    ]
                  },
                  {
                    title: "Roles de Linux y permisos de archivos",
                    items: [
                      "Los permisos se aplican por archivo en el orden usuario, grupo y otros con derechos r, w y x.",
                      "El comando ls -l muestra permisos, enlaces, propietario, grupo, tamaño, fecha y nombre del archivo.",
                      "El usuario root puede sobreescribir restricciones y por eso sus credenciales deben protegerse con máxima rigurosidad.",
                      "La notación octal (0-7) simplifica la asignación de permisos y facilita administración masiva."
                    ]
                  },
                  {
                    title: "Enlaces duros y enlaces simbólicos",
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
                    title: "Sistema X Window",
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
                    title: "Interfaz gráfica de Linux",
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
                    title: "Redes de datos inalámbricas",
                    items: [
                      "Los dispositivos móviles se conectan a internet principalmente por Wi-Fi o por red celular.",
                      "Wi-Fi suele preferirse por costo y consumo de batería, mientras que celular depende del plan del operador.",
                      "IMEI identifica el dispositivo e IMSI identifica al abonado (normalmente asociado a la SIM).",
                      "La cobertura celular se construye con torres y satélites, habilitando conectividad en movilidad."
                    ]
                  },
                  {
                    title: "Configuración manual de Wi-Fi",
                    items: [
                      "Buenas prácticas: usar seguridad robusta (WPA2 o superior), evitar texto claro para credenciales y preferir VPN.",
                      "Configuración manual requiere SSID, tipo de seguridad y contraseña en Android o iOS.",
                      "La conexión puede ser automática o manual según la política y el entorno de red."
                    ]
                  },
                  {
                    title: "Estándares de comunicación celular",
                    items: [
                      "Evolución de estándares: 1G analógico, 2G digital, 3G con internet móvil, 4G/LTE de alta velocidad y 5G de muy alta capacidad.",
                      "No todos los estándares se adoptan igual en todos los países; esto puede afectar compatibilidad internacional.",
                      "Muchos equipos soportan múltiples generaciones y cambian automáticamente entre ellas según cobertura."
                    ]
                  },
                  {
                    title: "Modo avión",
                    items: [
                      "Airplane Mode desactiva radios celulares, Wi-Fi y Bluetooth para cumplir restricciones operativas.",
                      "Tras activarlo, pueden habilitarse selectivamente algunas interfaces (como Wi-Fi o Bluetooth) si la política lo permite.",
                      "También sirve para ahorrar energía o evitar consumo de datos en escenarios con cargos elevados."
                    ]
                  },
                  {
                    title: "Punto de acceso (hotspot)",
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
                    title: "Bluetooth en dispositivos móviles",
                    items: [
                      "Bluetooth permite conectar parlantes, audífonos, teclados, mouse y controles de juego.",
                      "Estos periféricos mejoran productividad y experiencia multimedia sin cableado adicional."
                    ]
                  },
                  {
                    title: "Emparejamiento Bluetooth",
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
                    title: "Introducción al correo electrónico",
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
                    title: "Configuración de correo en Android",
                    items: [
                      "Android integra servicios de Google y sincroniza correo, contactos y ajustes al iniciar sesión.",
                      "Para agregar cuenta: abrir Gmail/Email, elegir tipo de cuenta, ingresar credenciales y guardar configuración.",
                      "Si se requiere restaurar configuración desde backup, el acceso a la cuenta debe hacerse durante el setup inicial."
                    ]
                  },
                  {
                    title: "Configuración de correo en iOS",
                    items: [
                      "iOS incluye Mail y soporta iCloud, Exchange, Google, Yahoo, AOL y Outlook.",
                      "El Apple ID habilita App Store, iTunes e iCloud, incluyendo correo y almacenamiento remoto de respaldo.",
                      "Para agregar cuenta: Settings > Passwords & Accounts > Add Account, seleccionar proveedor e ingresar datos."
                    ]
                  },
                  {
                    title: "Correo en internet",
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
                    title: "Tipos de datos para sincronizar",
                    items: [
                      "La sincronización mantiene información consistente entre múltiples equipos (móvil, tablet, laptop, desktop).",
                      "Datos comunes: contactos, apps, correo, fotos, música, videos, calendario, documentos, marcadores, contraseñas y más.",
                      "Métodos habituales: nube, sincronización con equipo local y escenarios integrados (como automóvil)."
                    ]
                  },
                  {
                    title: "Habilitar sincronización",
                    items: [
                      "En Android, Sync y Auto Sync permiten elegir qué datos sincronizar y si se hace de forma automática.",
                      "En iOS hay dos conceptos: Backup (copia integral) y Sync (sincronización de contenido definido).",
                      "Buenas prácticas en iOS: realizar Backup antes de Sync y definir ubicación de respaldo (local o iCloud)."
                    ]
                  },
                  {
                    title: "Tipos de conexión para sincronización",
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
                    title: "Código abierto versus código cerrado",
                    items: [
                      "Android es un sistema operativo móvil basado en Linux y de enfoque abierto; iOS es propietario y de código cerrado.",
                      "El código fuente abierto facilita auditoría y personalización; el código cerrado prioriza control del fabricante sobre plataforma y distribución.",
                      "Además de Android e iOS, Microsoft desarrolló ediciones móviles como Windows Phone y Windows 10 Mobile."
                    ]
                  },
                  {
                    title: "Fuentes de aplicaciones y contenido",
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
                    title: "Elementos de la pantalla de inicio en Android",
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
                    title: "Elementos de la pantalla de inicio en iOS",
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
                    title: "Protección antimalware y sandbox",
                    items: [
                      "Los dispositivos móviles también son objetivos de malware: spyware, troyanos, adware y robo de credenciales.",
                      "Android e iOS aíslan aplicaciones con sandbox para limitar accesos no autorizados entre apps.",
                      "Las soluciones antimalware deben complementar, no sustituir, el control de permisos y la higiene de uso."
                    ]
                  },
                  {
                    title: "Fuentes confiables y permisos de aplicaciones",
                    items: [
                      "Instalar aplicaciones solo desde fuentes confiables reduce el riesgo de código manipulado o malicioso.",
                      "Cada permiso solicitado debe revisarse con criterio: acceso a cámara, micrófono, ubicación, contactos y archivos.",
                      "Una app con permisos excesivos incrementa superficie de ataque y exposición de datos personales o corporativos."
                    ]
                  },
                  {
                    title: "Riesgos de rooteo y jailbreak",
                    items: [
                      "El rooteo (Android) y jailbreak (iOS) eliminan restricciones del fabricante para obtener privilegios elevados.",
                      "Este cambio debilita controles nativos de seguridad, rompe garantías y facilita persistencia de malware.",
                      "En entornos académicos o empresariales, se recomienda evitar dispositivos modificados para uso operativo."
                    ]
                  },
                  {
                    title: "Gestión de actualizaciones y parches",
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
                    title: "Orientación y sensores",
                    items: [
                      "La orientación automática usa acelerómetro y giroscopio para adaptar la pantalla a modo vertical u horizontal.",
                      "Una configuración adecuada mejora legibilidad, escritura y experiencia en apps multimedia.",
                      "Cuando el contexto lo requiera, bloquear orientación evita cambios no deseados durante el uso."
                    ]
                  },
                  {
                    title: "Calibración y brillo",
                    items: [
                      "El brillo de pantalla impacta directamente batería, fatiga visual y visibilidad en exteriores.",
                      "El brillo adaptativo usa sensores de luz ambiente para ajustar nivel de forma automática.",
                      "Calibrar correctamente la pantalla mejora precisión táctil y accesibilidad para distintos usuarios."
                    ]
                  },
                  {
                    title: "Ubicación, GPS y servicios contextuales",
                    items: [
                      "Los servicios de ubicación combinan GPS, Wi-Fi y red celular para estimar posición del dispositivo.",
                      "Aplicaciones de mapas, transporte y seguridad dependen de esta función para operar correctamente.",
                      "Se recomienda otorgar ubicación solo a apps necesarias y preferir el permiso 'Mientras se usa'."
                    ]
                  },
                  {
                    title: "Funciones comunes de conectividad",
                    items: [
                      "Wi-Fi Calling permite cursar llamadas sobre redes Wi-Fi cuando la señal celular es débil.",
                      "VPN protege tráfico en redes públicas y es clave cuando se accede a recursos institucionales.",
                      "Pagos móviles y servicios NFC deben usarse con bloqueo de pantalla y verificación biométrica activa."
                    ]
                  },
                  {
                    title: "Asistentes virtuales y automatización",
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
                    title: "Tipos de bloqueo de pantalla",
                    items: [
                      "Métodos comunes: PIN, contraseña, patrón, huella y reconocimiento facial según plataforma.",
                      "La biometría mejora usabilidad, pero debe combinarse con código de respaldo robusto.",
                      "Evitar códigos triviales (1234, fechas personales) reduce ataques por adivinación."
                    ]
                  },
                  {
                    title: "Restricciones por intentos fallidos",
                    items: [
                      "Tras múltiples intentos erróneos, el sistema aplica retardo progresivo o bloqueo temporal.",
                      "Estas políticas mitigan fuerza bruta y reducen riesgo de acceso por prueba masiva.",
                      "El umbral debe definirse según perfil de riesgo y política institucional."
                    ]
                  },
                  {
                    title: "Borrado automático y recuperación",
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
                    title: "Respaldo en la nube",
                    items: [
                      "Servicios como iCloud o Google permiten respaldar datos, ajustes y aplicaciones de forma automática.",
                      "La estrategia de respaldo debe definir frecuencia, cifrado y verificación de restauración.",
                      "Un respaldo no validado no garantiza continuidad; probar restauración es parte del control."
                    ]
                  },
                  {
                    title: "Localización de dispositivos",
                    items: [
                      "Herramientas tipo Find My Device/Find My iPhone permiten ubicar equipos extraviados en mapa.",
                      "La localización requiere configuración previa, cuenta activa y conectividad del dispositivo.",
                      "En escenarios corporativos, la geolocalización debe alinearse con políticas de privacidad."
                    ]
                  },
                  {
                    title: "Bloqueo remoto y modo perdido",
                    items: [
                      "El bloqueo remoto impide acceso local y permite mostrar mensajes de contacto al recuperar el equipo.",
                      "El modo perdido reduce exposición de datos mientras se gestiona la recuperación del dispositivo.",
                      "Estas acciones deben ejecutarse tan pronto se confirme pérdida o robo."
                    ]
                  },
                  {
                    title: "Borrado remoto",
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
                    title: "Tipos de archivo de Packet Tracer",
                    items: [
                      ".pka: archivo de actividad evaluable con ventana de instrucciones, puntuación y función de comprobación de resultados.",
                      "Un .pka incluye red inicial (visible al estudiante) y red de respuesta (ejecutada en segundo plano para validar).",
                      ".pkt: topología guardada para práctica libre; no incorpora puntuación ni instrucciones de actividad.",
                      ".pksz: formato de actividades PTTA que integra un .pka más recursos multimedia y scripts de pistas.",
                      ".pkz: formato heredado; actualmente su uso es limitado frente a los formatos modernos."
                    ]
                  },
                  {
                    title: "Evaluaciones con Packet Tracer",
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
                    title: "Direccionamiento IP en hosts",
                    items: [
                      "La IP se puede verificar por dos rutas: pestaña Configuración del host y pestaña Escritorio con comando ipconfig.",
                      "En PCs con direccionamiento estático, se validan IP, máscara y gateway configurados manualmente.",
                      "En laptops con DHCP, la IP y gateway aparecen asignados automáticamente por el servidor."
                    ]
                  },
                  {
                    title: "Conexiones de dispositivos",
                    items: [
                      "Packet Tracer permite conexión automática o selección manual de cable (directo, cruzado y consola).",
                      "Se pueden administrar enlaces entre PC-switch, switch-switch, switch-router y consola RS-232 para administración.",
                      "Las luces de enlace guían el diagnóstico: verde operativo, naranja en convergencia y rojo cuando la interfaz requiere habilitación."
                    ]
                  },
                  {
                    title: "Funciones avanzadas para prácticas",
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
                    title: "Bienvenida y contexto",
                    items: [
                      "Las redes forman parte de entornos cotidianos y empresariales; este curso aterriza esos conceptos en un caso de oficina pequeña.",
                      "Se usa Cisco Packet Tracer para configurar, administrar y monitorear dispositivos de red sin depender de hardware físico.",
                      "El objetivo es avanzar desde prácticas básicas hacia una visión operativa de sucursal."
                    ]
                  },
                  {
                    title: "Perfil de entrada",
                    items: [
                      "Está dirigido a estudiantes que completaron Introducción a Cisco Packet Tracer o que tienen bases equivalentes.",
                      "También resulta útil para quienes inician en redes y desean desarrollar habilidades prácticas progresivas.",
                      "El curso fortalece competencias de conectividad, administración y resolución de problemas."
                    ]
                  },
                  {
                    title: "Recursos disponibles",
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
                    title: "Descripción general de la topología",
                    items: [
                      "La topología del curso se organiza en ubicaciones como hogar, oficina, biblioteca e ISP.",
                      "En vista física se observa la distribución realista de equipos; en vista lógica, conectividad y flujo de datos.",
                      "Navegar entre niveles permite entender relación entre ubicación física y diseño de red."
                    ]
                  },
                  {
                    title: "Cableado estructurado en oficina",
                    items: [
                      "Packet Tracer permite modelar paneles de parcheo, soportes de pared y cableado de cobre/fibra.",
                      "Los cables pueden ordenarse por color, trayecto y puntos de curvatura para simular instalaciones reales.",
                      "La gestión del rack mejora trazabilidad entre puerto de switch, panel de conexión y punto de red."
                    ]
                  },
                  {
                    title: "Conexiones cableadas e inalámbricas",
                    items: [
                      "Se combinan enlaces Ethernet y conectividad inalámbrica según el rol de cada dispositivo.",
                      "La práctica incluye preparación de red Wi-Fi y nociones de tecnologías inalámbricas como Bluetooth y datos móviles.",
                      "Elegir correctamente medio y puerto reduce errores de capa física en el despliegue."
                    ]
                  },
                  {
                    title: "Configuración por GUI y CLI",
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
                    title: "Modo de simulación de Packet Tracer",
                    items: [
                      "Cambiar de Realtime a Simulation permite detener el tiempo de la red y observar cada evento de extremo a extremo.",
                      "Event List, Edit Filters y el control de velocidad ayudan a aislar protocolos (por ejemplo ICMP, ARP o DNS) durante el diagnóstico.",
                      "Las vistas de PDU y modelo OSI facilitan identificar en qué capa se produce una falla de conectividad."
                    ]
                  },
                  {
                    title: "Clústeres para organizar redes complejas",
                    items: [
                      "Un clúster agrupa equipos en una sola entidad visual, útil para representar edificios, pisos o áreas funcionales.",
                      "Desde la vista física se pueden crear, renombrar, desagrupar y eliminar clústeres sin perder la lógica de conectividad.",
                      "Al conectar un clúster con otros segmentos, conviene registrar interfaz origen/destino para mantener trazabilidad del cableado."
                    ]
                  },
                  {
                    title: "Edición y anotación de topología",
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
                    title: "El controlador de red en Packet Tracer",
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
                    title: "Monitoreo de cambios con el controlador",
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
                    title: "Todo está en línea",
                    items: [
                      "Para usuarios y empresas, la conexión constante dejó de ser opcional: mensajería, compras, trabajo y aprendizaje dependen de Internet.",
                      "Aunque solemos pensar Internet como un “lugar”, técnicamente es infraestructura física y lógica distribuida a escala global.",
                      "La disponibilidad de red afecta actividades críticas, desde comunicación cotidiana hasta operación de servicios esenciales."
                    ]
                  },
                  {
                    title: "Internet y redes locales",
                    items: [
                      "Internet no pertenece a una única entidad: es una colección de redes interconectadas que operan con estándares comunes.",
                      "Las redes SOHO conectan hogares y oficinas pequeñas; redes empresariales escalan a cientos o miles de hosts.",
                      "La 'red de redes' integra segmentos locales por medio de proveedores y enlaces de transporte de mayor alcance."
                    ]
                  },
                  {
                    title: "Dispositivos conectados",
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
                    title: "Tipos de datos personales",
                    items: [
                      "Los datos voluntarios son los que compartimos conscientemente (formularios, mensajes, archivos).",
                      "Los datos deducidos y observados se generan por actividad y telemetría (ubicación, patrones de consumo, uso de apps).",
                      "El análisis de red debe considerar el ciclo de vida del dato: creación, transmisión, almacenamiento y exposición."
                    ]
                  },
                  {
                    title: "El bit y el byte",
                    items: [
                      "El bit (0 o 1) es la unidad mínima de información digital; ocho bits conforman un byte.",
                      "Codificaciones como ASCII representan letras, números y símbolos mediante combinaciones binarias.",
                      "Dispositivos de entrada y salida traducen entre lenguaje humano y representación binaria."
                    ]
                  },
                  {
                    title: "Métodos comunes de transmisión",
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
                    title: "Ancho de banda",
                    items: [
                      "Es la capacidad máxima teórica del medio para transportar datos por unidad de tiempo.",
                      "Se expresa en bps y múltiplos como Kbps, Mbps, Gbps y Tbps.",
                      "Está condicionado por tecnología, calidad del medio físico y límites de diseño."
                    ]
                  },
                  {
                    title: "Rendimiento real",
                    items: [
                      "El rendimiento es la tasa efectiva observada durante transferencia real; normalmente es menor que el ancho de banda nominal.",
                      "La latencia, congestión, tipo de tráfico y cantidad de saltos intermedios influyen directamente en ese valor.",
                      "En rutas multipunto, el segmento más lento impone el techo de rendimiento extremo a extremo."
                    ]
                  },
                  {
                    title: "Interpretación de pruebas de velocidad",
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
                    title: "Roles de cliente y servidor",
                    items: [
                      "Un host cliente solicita recursos; un host servidor los ofrece mediante software de servicio específico.",
                      "Cada servicio requiere su software correspondiente: por ejemplo, web, correo o archivos.",
                      "En redes modernas, el rol depende del software instalado y del flujo de comunicación en cada momento."
                    ]
                  },
                  {
                    title: "Redes entre pares (P2P)",
                    items: [
                      "En un modelo P2P, los equipos pueden compartir recursos entre sí sin un servidor dedicado central.",
                      "Es fácil de implementar y de bajo costo en entornos pequeños (hogar o microoficina).",
                      "Sus límites aparecen en seguridad, administración centralizada y escalabilidad."
                    ]
                  },
                  {
                    title: "Aplicaciones P2P e híbridas",
                    items: [
                      "En aplicaciones P2P puras, cada nodo puede enviar y recibir recursos al mismo tiempo.",
                      "En modelos híbridos, el intercambio se distribuye, pero existe un índice central para ubicar recursos.",
                      "Este enfoque mejora descubrimiento de contenido, pero introduce dependencia parcial del servidor de índice."
                    ]
                  },
                  {
                    title: "Múltiples roles por host",
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
                    title: "Infraestructura de red",
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
                    title: "Hosts y direccionamiento",
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
                    title: "Servicios del ISP",
                    items: [
                      "El ISP conecta la red local con Internet y, además, puede ofrecer correo, hosting, VoIP y soporte técnico.",
                      "Los ISP se interconectan jerárquicamente para enrutar tráfico por rutas eficientes.",
                      "La red troncal global se apoya principalmente en enlaces de fibra óptica terrestres y submarinos."
                    ]
                  },
                  {
                    title: "Conexión segura al ISP",
                    items: [
                      "Conectar una PC directamente al módem expone el host y no es una práctica recomendada.",
                      "La opción estándar es usar router integrado (switch + AP + funciones de seguridad y direccionamiento interno).",
                      "El router doméstico también simplifica conectar múltiples equipos cableados e inalámbricos."
                    ]
                  },
                  {
                    title: "Cable y DSL",
                    items: [
                      "Cable usa red coaxial y suele ofrecer conexión permanente con buen ancho de banda residencial.",
                      "DSL usa línea telefónica y separa voz/datos mediante canales, con desempeño dependiente de distancia y calidad de línea.",
                      "Ambas tecnologías requieren módem específico para convertir señal del proveedor a Ethernet local."
                    ]
                  },
                  {
                    title: "Conectividad adicional",
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
                    title: "Un teléfono, múltiples redes",
                    items: [
                      "Un smartphone moderno combina varias radios y protocolos en paralelo para cubrir distintos servicios.",
                      "Las llamadas y datos móviles usan red celular; la navegación en casa u oficina suele usar Wi-Fi.",
                      "Pagos de proximidad, audio inalámbrico y ubicación satelital operan sobre tecnologías distintas pero coordinadas."
                    ]
                  },
                  {
                    title: "Tecnologías inalámbricas clave",
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
                    title: "Wi-Fi en movilidad: valor y seguridad",
                    items: [
                      "Conectarse por Wi-Fi cuando está disponible reduce consumo del plan celular y ahorro de batería.",
                      "No se debe enviar información sensible por canales sin cifrado; para datos críticos conviene usar VPN.",
                      "En red doméstica, aplicar WPA2 o superior y contraseña robusta para minimizar riesgos de intrusión."
                    ]
                  },
                  {
                    title: "Configuración de Wi-Fi y datos móviles",
                    items: [
                      "Si la red no aparece, revisar difusión SSID, conexión automática y coincidencia exacta de frase de contraseña.",
                      "Cuando no hay Wi-Fi, el dispositivo cambia a datos móviles; este cambio suele ser transparente para el usuario.",
                      "Conviene gestionar activación de datos móviles según cobertura, plan contratado y prioridad de tráfico."
                    ]
                  },
                  {
                    title: "Bluetooth y emparejamiento",
                    items: [
                      "Bluetooth permite conectar hasta varios accesorios con bajo consumo (audio, teclado, control y tethering).",
                      "El emparejamiento exige modo detectable, selección del dispositivo correcto y validación por PIN cuando aplica.",
                      "Como práctica de seguridad, desactivar modo visible al finalizar y eliminar dispositivos no confiables."
                    ]
                  },
                  {
                    title: "Escenario integrado de uso",
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
                    title: "Arquitectura típica del hogar",
                    items: [
                      "Una red doméstica suele separar dos ámbitos: la red local interna y la red externa del proveedor de Internet.",
                      "El módem traduce la señal del operador (por ejemplo cable o DSL) para entregarla al router del hogar.",
                      "El router integra funciones de conmutación LAN, punto de acceso inalámbrico y salida hacia Internet."
                    ]
                  },
                  {
                    title: "Componentes de la red doméstica",
                    items: [
                      "Además de PCs y móviles, hoy se conectan TVs, consolas, cámaras, impresoras y sensores del hogar.",
                      "A mayor cantidad de dispositivos, más importante es planificar cobertura Wi-Fi y capacidad de la LAN.",
                      "La red del hogar pasa de ser solo acceso a Internet a ser plataforma de servicios y automatización."
                    ]
                  },
                  {
                    title: "Puertos y segmentación básica",
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
                    title: "Frecuencias inalámbricas LAN",
                    items: [
                      "En el hogar predominan bandas de 2.4 GHz y 5 GHz para conectividad Wi-Fi.",
                      "Bluetooth opera en 2.4 GHz, con menor alcance y consumo, ideal para periféricos y audio.",
                      "Wi-Fi (familia IEEE 802.11) entrega mayor cobertura y rendimiento para acceso de red general."
                    ]
                  },
                  {
                    title: "Tecnologías cableadas",
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
                    title: "Redes Wi-Fi e IEEE 802.11",
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
                    title: "Parámetros de configuración WLAN",
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
                    title: "Configuración inicial",
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
                    title: "Consideraciones de diseño",
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
                    title: "Reglas para comunicarse",
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
                    title: "Internet y est\u00e1ndares",
                    items: [
                      "Un est\u00e1ndar define c\u00f3mo se implementa una tecnolog\u00eda para que sea compatible con otras.",
                      "Permite que dispositivos de diferentes fabricantes intercambien datos sin conflictos.",
                      "Gracias a esto, servicios globales como web y correo operan de forma consistente."
                    ]
                  },
                  {
                    title: "Organizaciones de est\u00e1ndares",
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
                    title: "Pila de protocolos",
                    items: [
                      "Una comunicaci\u00f3n real usa varios protocolos al mismo tiempo, cada uno en su capa.",
                      "Ejemplo t\u00edpico: Ethernet, IP, TCP y HTTP trabajando de forma coordinada.",
                      "Este enfoque modular simplifica dise\u00f1o, operaci\u00f3n y mantenimiento."
                    ]
                  },
                  {
                    title: "Modelo TCP/IP",
                    items: [
                      "Organiza funciones en capas de acceso, Internet, transporte y aplicaci\u00f3n.",
                      "Describe el funcionamiento pr\u00e1ctico de la suite de protocolos usada en Internet.",
                      "Permite mapear de forma directa servicios reales y flujo de datos."
                    ]
                  },
                  {
                    title: "Modelo OSI y comparaci\u00f3n",
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
                    title: "Importancia del medio f\u00edsico",
                    items: [
                      "El medio condiciona alcance, velocidad efectiva, estabilidad y susceptibilidad al ruido.",
                      "Una elecci\u00f3n incorrecta del cable puede degradar enlaces aunque los equipos sean de buena capacidad.",
                      "En dise\u00f1o de red, el medio se define junto con topolog\u00eda, puertos y requerimientos de tr\u00e1fico."
                    ]
                  },
                  {
                    title: "Criterios de selecci\u00f3n",
                    items: [
                      "Distancia m\u00e1xima: cada tecnolog\u00eda tiene l\u00edmites f\u00edsicos antes de requerir repetici\u00f3n o cambio de medio.",
                      "Entorno de instalaci\u00f3n: interferencia electromagn\u00e9tica, temperatura, humedad y riesgos mec\u00e1nicos.",
                      "Capacidad requerida: volumen de datos, latencia esperada y crecimiento del tr\u00e1fico en el tiempo.",
                      "Costo total: precio del cable, conectores, obra civil, mantenimiento y ciclo de vida."
                    ]
                  },
                  {
                    title: "Par trenzado (UTP/STP)",
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
                    title: "Campos de la trama Ethernet",
                    items: [
                      "La trama Ethernet incluye pre\u00e1mbulo, delimitador de inicio (SFD), MAC de destino, MAC de origen, tipo/longitud, datos y FCS.",
                      "Las direcciones MAC identifican el emisor y receptor en la red local para decidir el reenv\u00edo de tramas.",
                      "El campo FCS permite detectar errores de transmisi\u00f3n antes de procesar el contenido."
                    ]
                  },
                  {
                    title: "Encapsulaci\u00f3n y desencapsulaci\u00f3n",
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
                    title: "Conmutadores Ethernet",
                    items: [
                      "Un switch opera en Capa 2 y toma decisiones de reenv\u00edo analizando la cabecera Ethernet.",
                      "En enlaces locales, el switch no enruta por IP; reenv\u00eda seg\u00fan la MAC de destino de cada trama.",
                      "Esto reduce tr\u00e1fico innecesario y mejora el rendimiento de la red LAN."
                    ]
                  },
                  {
                    title: "Aprendizaje de direcciones MAC",
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
                    title: "La direcci\u00f3n IPv4 en la red",
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
                    title: "Octetos y notaci\u00f3n decimal con puntos",
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
                    title: "Componente de red y componente de host",
                    items: [
                      "Toda direcci\u00f3n IPv4 combina una parte de red y una parte de host.",
                      "La m\u00e1scara de subred define qu\u00e9 bits pertenecen a red y cu\u00e1les identifican al host.",
                      "Ejemplo /24: los primeros 3 octetos representan la red y el \u00faltimo octeto al host."
                    ]
                  },
                  {
                    title: "Direccionamiento jer\u00e1rquico",
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
                    title: "Unidifusi\u00f3n",
                    items: [
                      "En unidifusi\u00f3n, un host env\u00eda un paquete a un \u00fanico destino (comunicaci\u00f3n uno a uno).",
                      "La direcci\u00f3n IP de origen siempre es unicast porque el paquete solo puede salir de un emisor.",
                      "Es el patr\u00f3n m\u00e1s com\u00fan en tr\u00e1fico de aplicaciones entre cliente y servidor."
                    ]
                  },
                  {
                    title: "Difusi\u00f3n",
                    items: [
                      "La difusi\u00f3n IPv4 env\u00eda un paquete a todos los hosts del dominio de broadcast local.",
                      "Puede ser limitada (255.255.255.255) o dirigida (por ejemplo, 172.16.4.255 en /24).",
                      "Los routers no reenv\u00edan broadcast de forma predeterminada, por lo que su alcance se limita al segmento."
                    ]
                  },
                  {
                    title: "Multidifusi\u00f3n",
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
                    title: "Direcciones p\u00fablicas y privadas",
                    items: [
                      "Las direcciones p\u00fablicas son enrutables globalmente entre ISP y deben ser \u00fanicas en Internet.",
                      "Las privadas (RFC 1918) se usan en redes internas y no se enrutan directamente en Internet.",
                      "Rangos privados frecuentes: 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16."
                    ]
                  },
                  {
                    title: "NAT para salida a Internet",
                    items: [
                      "NAT traduce direcciones privadas de origen a direcciones p\u00fablicas antes de salir al ISP.",
                      "Se implementa normalmente en el router de borde entre intranet e Internet.",
                      "Permite conservar espacio IPv4 p\u00fablico y mantener direccionamiento interno reutilizable."
                    ]
                  },
                  {
                    title: "Direcciones IPv4 de uso especial",
                    items: [
                      "Loopback: 127.0.0.0/8 (com\u00fanmente 127.0.0.1) para pruebas locales de pila TCP/IP.",
                      "Link-local/APIPA: 169.254.0.0/16 cuando un host no obtiene direcci\u00f3n por DHCP.",
                      "Direcci\u00f3n de red y direcci\u00f3n de broadcast no se asignan a hosts finales."
                    ]
                  },
                  {
                    title: "Contexto y asignaci\u00f3n",
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
                    title: "Dominios de difusi\u00f3n",
                    items: [
                      "En LAN Ethernet, protocolos como ARP y DHCP usan broadcast para descubrir informaci\u00f3n local.",
                      "Los switches propagan broadcast por sus puertos (excepto entrada).",
                      "Los routers separan dominios de broadcast al no reenviar estas tramas entre interfaces."
                    ]
                  },
                  {
                    title: "Problemas en dominios grandes",
                    items: [
                      "Un dominio con demasiados hosts puede generar tr\u00e1fico de difusi\u00f3n excesivo.",
                      "Esto provoca operaciones lentas en red y mayor carga de procesamiento en los dispositivos finales.",
                      "La soluci\u00f3n es dividir en subredes m\u00e1s peque\u00f1as y controlables."
                    ]
                  },
                  {
                    title: "Razones para segmentar",
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
                    title: "Necesidad de IPv6",
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
                    title: "Coexistencia IPv4/IPv6",
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
                    title: "Sistema hexadecimal",
                    items: [
                      "IPv6 se expresa en hexadecimal (0-9 y A-F) para representar direcciones largas de forma legible.",
                      "Cada d\u00edgito hexadecimal equivale a 4 bits.",
                      "La notaci\u00f3n es insensible a may\u00fasculas/min\u00fasculas."
                    ]
                  },
                  {
                    title: "Formato de direcci\u00f3n IPv6",
                    items: [
                      "Una direcci\u00f3n IPv6 tiene 128 bits y se escribe como 8 hextetos separados por dos puntos.",
                      "Cada hexteto representa 16 bits (4 d\u00edgitos hexadecimales).",
                      "El formato preferido usa los 32 d\u00edgitos hexadecimales completos."
                    ]
                  },
                  {
                    title: "Regla 1: omitir ceros iniciales",
                    items: [
                      "Se pueden omitir solo los ceros a la izquierda dentro de un hexteto.",
                      "No se deben omitir ceros finales porque la direcci\u00f3n se vuelve ambigua.",
                      "Ejemplo: 00ab -> ab, 01ab -> 1ab."
                    ]
                  },
                  {
                    title: "Regla 2: doble dos puntos (::)",
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
                    title: "Asignacion estatica de IPv4",
                    items: [
                      "En modo estatico, el administrador configura manualmente IP, mascara y gateway en cada host.",
                      "Es apropiado para servidores, impresoras y dispositivos que deben mantener direccion estable.",
                      "Aporta control fino, pero incrementa tiempo operativo y riesgo de errores de captura."
                    ]
                  },
                  {
                    title: "Asignacion dinamica con DHCP",
                    items: [
                      "DHCP entrega automaticamente parametros de red: IPv4, mascara, gateway y opciones adicionales.",
                      "Reduce trabajo manual del soporte y disminuye conflictos por direccion duplicada.",
                      "Las direcciones se asignan por arrendamiento (lease) y regresan al pool cuando expiran."
                    ]
                  },
                  {
                    title: "Roles de servidor DHCP",
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
                    title: "Operacion DHCPv4 (DORA)",
                    items: [
                      "Discover: el cliente emite broadcast para localizar servidores DHCP.",
                      "Offer: el servidor propone direccion y parametros de configuracion.",
                      "Request: el cliente solicita formalmente la oferta seleccionada; ACK: el servidor confirma y registra lease."
                    ]
                  },
                  {
                    title: "Configuracion del servicio",
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
                    title: "Puerta de enlace a otras redes",
                    items: [
                      "La puerta de enlace predeterminada es la salida del host hacia destinos fuera de su subred local.",
                      "El host compara red local y red destino usando IP + mascara; si no coinciden, envia al gateway.",
                      "Si gateway o mascara estan mal configurados, no habra conectividad hacia redes remotas."
                    ]
                  },
                  {
                    title: "Enrutadores como gateways",
                    items: [
                      "Cada interfaz del router conecta una red distinta y puede ser gateway de los hosts de ese segmento.",
                      "La IP del gateway puede configurarse de forma estatica o recibirse dinamicamente por DHCP.",
                      "En redes domesticas, el router inalambrico suele entregar su IP LAN como gateway predeterminado."
                    ]
                  },
                  {
                    title: "Router como limite entre redes",
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
                    title: "Introduccion a NAT",
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
                    title: "Destino en la misma red",
                    items: [
                      "En una LAN, la trama Ethernet usa como MAC destino la del host final dentro del mismo segmento.",
                      "La IP identifica origen y destino logicos; la MAC permite entrega NIC a NIC en el enlace local.",
                      "Ejemplo local: IP destino 192.168.10.11 y MAC destino 55-55-55."
                    ]
                  },
                  {
                    title: "Destino en red remota",
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
                    title: "Difusion Ethernet",
                    items: [
                      "Una trama broadcast usa MAC destino FF-FF-FF-FF-FF-FF y alcanza todos los hosts del dominio local.",
                      "El switch hace flooding por todos los puertos excepto el de entrada.",
                      "Los routers reciben broadcast local pero no lo reenvian a otras redes."
                    ]
                  },
                  {
                    title: "Dominios de difusion",
                    items: [
                      "Una LAN con switches forma un dominio de broadcast donde todos procesan difusiones.",
                      "Al crecer el numero de hosts, aumenta trafico broadcast y puede degradar rendimiento.",
                      "Dividir la red con routers reduce alcance de difusion y mejora escalabilidad."
                    ]
                  },
                  {
                    title: "ARP",
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
                    title: "Division de la red local",
                    items: [
                      "Dividir una red reduce el trafico de difusion y evita que todos los hosts procesen mensajes irrelevantes.",
                      "La segmentacion mejora seguridad al limitar acceso entre departamentos, equipos y servicios sensibles.",
                      "Tambien responde a necesidades fisicas: sedes, pisos o edificios con alcances de red diferentes."
                    ]
                  },
                  {
                    title: "Cuando se necesita enrutamiento",
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
                    title: "Reenvio de paquetes del router",
                    items: [
                      "El host envia al gateway cuando detecta que la IP destino esta fuera de su subred local.",
                      "El router busca la red destino en su tabla y reenvia por la interfaz asociada a esa ruta.",
                      "Las difusiones de capa 2 no se reenvian entre redes, por lo que quedan contenidas en su segmento."
                    ]
                  },
                  {
                    title: "Mensajes dentro y entre redes",
                    items: [
                      "Dentro de la misma red, el host usa ARP para resolver MAC del destino y envia directo por switch.",
                      "Entre redes, el host resuelve la MAC del gateway; el router cambia trama por salto y conserva el destino IP final.",
                      "La tabla ARP y la tabla de enrutamiento cooperan para entrega correcta en LAN y entre LANs."
                    ]
                  },
                  {
                    title: "Entradas de la tabla de enrutamiento",
                    items: [
                      "Cada entrada representa una red destino, su tipo de ruta y la interfaz o siguiente salto.",
                      "Las rutas pueden ser conectadas, estaticas o aprendidas dinamicamente desde otros routers.",
                      "Si no existe coincidencia y tampoco ruta predeterminada, el paquete se descarta."
                    ]
                  },
                  {
                    title: "Puerta de enlace predeterminada",
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
                    title: "Redes de area local",
                    items: [
                      "Una LAN es una red local o conjunto de redes locales bajo el mismo control administrativo.",
                      "Las LAN modernas pueden abarcar multiples edificios y cientos de hosts interconectados.",
                      "Una intranet es una LAN privada de organizacion con acceso restringido a usuarios autorizados."
                    ]
                  },
                  {
                    title: "Segmentos locales y remotos",
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
          },
          {
            key: "M15",
            title: "TCP y UDP",
            topics: [
              {
                code: "15.1",
                title: "TCP y UDP en la capa de transporte",
                summary:
                  "Comparacion de comportamiento entre TCP y UDP para seleccionar el protocolo adecuado segun tipo de aplicacion y criticidad de datos.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_15.1_tcp_udp_comparison.png",
                    alt: "Comparacion visual entre TCP y UDP con caracteristicas de confiabilidad, latencia y casos de uso."
                  }
                ],
                sections: [
                  {
                    title: "Operacion de UDP",
                    items: [
                      "UDP envia segmentos con baja sobrecarga y sin confirmaciones, por lo que reduce latencia.",
                      "No garantiza entrega ni orden; algunos segmentos pueden perderse o llegar fuera de secuencia.",
                      "Es adecuado para voz, video en tiempo real y aplicaciones donde prima continuidad sobre precision absoluta."
                    ]
                  },
                  {
                    title: "Operacion de TCP",
                    items: [
                      "TCP utiliza numeros de secuencia y acuses de recibo (ACK) para entrega confiable y ordenada.",
                      "Si detecta perdida de segmentos, retransmite automaticamente para completar la conversacion.",
                      "Agrega mayor control y sobrecarga, por lo que suele introducir mas latencia que UDP."
                    ]
                  },
                  {
                    title: "Criterio de seleccion",
                    items: [
                      "Usar UDP cuando la aplicacion tolera perdida ocasional y requiere respuesta inmediata.",
                      "Usar TCP cuando la integridad de los datos es critica, por ejemplo web, banca o transferencia de archivos.",
                      "La eleccion depende de equilibrio entre velocidad, confiabilidad y experiencia de usuario."
                    ]
                  },
                  {
                    title: "Checklist de diagnostico",
                    items: [
                      "Verificar si la aplicacion espera entrega confiable o solo entrega de mejor esfuerzo.",
                      "Correlacionar sintomas (cortes, retrasos, retransmisiones) con el protocolo de transporte usado.",
                      "Evitar comparar rendimiento TCP y UDP sin considerar tipo de trafico y condiciones del enlace."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Distinguir el funcionamiento de TCP y UDP para justificar la seleccion del protocolo en cada servicio."
                    ]
                  }
                ]
              },
              {
                code: "15.2",
                title: "Numeros de puerto, sockets y netstat",
                summary:
                  "Uso de puertos TCP/UDP para identificar servicios y conversaciones, interpretacion de pares de sockets y verificacion de conexiones activas con netstat.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_15.2_ports_sockets_netstat.png",
                    alt: "Resumen de rangos de puertos, par de sockets cliente-servidor y uso operativo del comando netstat."
                  }
                ],
                sections: [
                  {
                    title: "Numeros de puerto en capa de transporte",
                    items: [
                      "Cada segmento TCP/UDP incluye puerto de origen y puerto de destino para identificar la conversacion.",
                      "Puertos bien conocidos (0-1023) representan servicios estandar como HTTP 80, HTTPS 443, FTP 21 y DNS 53.",
                      "En clientes, el puerto de origen suele asignarse de forma dinamica (efimero) para cada sesion."
                    ]
                  },
                  {
                    title: "Multiplexacion de aplicaciones",
                    items: [
                      "Un mismo host puede mantener varias sesiones simultaneas gracias a combinaciones IP:puerto distintas.",
                      "El servidor responde invirtiendo origen/destino para retornar datos al proceso correcto del cliente.",
                      "Este mecanismo evita confusiones cuando conviven navegador, correo, FTP y otros servicios a la vez."
                    ]
                  },
                  {
                    title: "Pares de sockets",
                    items: [
                      "Un socket combina direccion IP con numero de puerto, por ejemplo 192.168.1.5:5305.",
                      "La sesion completa se identifica con el par cliente-servidor, por ejemplo 192.168.1.5:5305 <-> 192.168.1.7:80.",
                      "Los pares de sockets permiten diferenciar conexiones concurrentes hacia el mismo servicio."
                    ]
                  },
                  {
                    title: "Comando netstat",
                    items: [
                      "Netstat muestra conexiones activas, puertos en escucha y estado de sesiones TCP en el host.",
                      "La opcion -n evita resolucion de nombres y facilita analisis rapido con IP:puerto numericos.",
                      "Conexiones no identificadas o inesperadas pueden indicar procesos anomalos y deben investigarse."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar puertos y sockets para analizar trafico y usar netstat como control basico de seguridad operativa."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M16",
            title: "Servicios de la capa de aplicacion",
            topics: [
              {
                code: "16.1",
                title: "Relacion cliente-servidor",
                summary:
                  "Como clientes y servidores cooperan para entregar servicios web, incluyendo resolucion DNS, sockets y solicitud/respuesta HTTP.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_16.1_client_server_flow.png",
                    alt: "Flujo cliente-servidor con pasos URL, consulta DNS, conexion TCP y respuesta del servidor web."
                  }
                ],
                sections: [
                  {
                    title: "Interaccion de cliente y servidor",
                    items: [
                      "Un servidor es un host que ejecuta software para ofrecer informacion o servicios a otros hosts de la red.",
                      "Las aplicaciones comunes (web, correo, redes sociales, banca, descargas) dependen de interacciones cliente-servidor.",
                      "Estas interacciones funcionan porque cliente y servidor comparten estandares y protocolos definidos."
                    ]
                  },
                  {
                    title: "Flujo IP en servicio web",
                    items: [
                      "El usuario escribe una URL y primero ocurre resolucion DNS para obtener la direccion IP del servidor.",
                      "Luego se establece una sesion TCP usando IP origen/destino y puertos origen/destino (socket).",
                      "El servidor recibe solicitud HTTP en su puerto de servicio y responde invirtiendo origen y destino."
                    ]
                  },
                  {
                    title: "URI, URN y URL",
                    items: [
                      "URI es el identificador general de recursos en red.",
                      "URN nombra el recurso dentro de un espacio de nombres sin indicar su ubicacion.",
                      "URL define ubicacion y acceso al recurso (esquema, host, ruta y otros componentes)."
                    ]
                  },
                  {
                    title: "Trafico web en Packet Tracer",
                    items: [
                      "En simulacion se observa encapsulacion de HTTP sobre TCP y direccionamiento IP extremo a extremo.",
                      "La solicitud viaja desde el cliente hasta el servidor; la respuesta retorna con direcciones invertidas.",
                      "El intercambio continua hasta completar transferencia de HTML y recursos asociados."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar con claridad la secuencia completa cliente-servidor en un acceso web real."
                    ]
                  }
                ]
              },
              {
                code: "16.2",
                title: "Servicios de aplicaciones de red comunes",
                summary:
                  "Panorama de servicios frecuentes de Internet y su dependencia de protocolos TCP/IP para comunicacion confiable entre clientes y servidores.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_16.2_common_app_services.png",
                    alt: "Resumen de servicios de aplicacion comunes y protocolos/puertos asociados."
                  }
                ],
                sections: [
                  {
                    title: "Servicios mas usados",
                    items: [
                      "Busqueda web, correo, streaming, mensajeria y comercio electronico son servicios consumidos diariamente.",
                      "Cada servicio se implementa con software de aplicacion en servidores especializados o plataformas distribuidas.",
                      "La entrega depende de la pila TCP/IP y de la coordinacion entre protocolos de aplicacion, transporte y red."
                    ]
                  },
                  {
                    title: "Mapa servicio-protocolo",
                    items: [
                      "Web: HTTP/HTTPS en puertos 80/443.",
                      "Resolucion de nombres: DNS en puerto 53 (UDP/TCP segun contexto).",
                      "Correo: SMTP, IMAP y POP3 para envio y recuperacion de mensajes."
                    ]
                  },
                  {
                    title: "Criterios operativos",
                    items: [
                      "Identificar servicios activos y puertos expuestos es parte de la higiene basica de red.",
                      "No todos los servicios deben estar publicados; aplicar principio de minimo privilegio.",
                      "Documentar dependencias entre aplicaciones evita interrupciones al cambiar infraestructura."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Relacionar servicios de aplicacion con sus protocolos para diagnostico y administracion eficiente."
                    ]
                  }
                ]
              },
              {
                code: "16.3",
                title: "Sistema de nombres de dominio (DNS)",
                summary:
                  "Funcionamiento de DNS para traducir nombres a IP y uso de herramientas de validacion como nslookup en escenarios reales y simulados.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_16.3_dns_resolution_flow.png",
                    alt: "Diagrama de resolucion DNS y ejemplo de validacion con comando nslookup."
                  }
                ],
                sections: [
                  {
                    title: "Funcion del servidor DNS",
                    items: [
                      "DNS asocia nombres de dominio legibles por humanos con direcciones IP utilizables por la red.",
                      "Sin DNS, el usuario tendria que recordar y escribir direcciones numericas para cada servicio.",
                      "El flujo habitual es consulta, busqueda en base de datos y respuesta con el registro correspondiente."
                    ]
                  },
                  {
                    title: "Entorno de practica y simuladores",
                    items: [
                      "El verificador de sintaxis exige comandos exactos para avanzar en practicas guiadas.",
                      "Herramientas como Packet Tracer permiten mas flexibilidad, incluyendo abreviaciones de comandos.",
                      "Practicar en simulacion reduce riesgo antes de aplicar cambios en equipos de produccion."
                    ]
                  },
                  {
                    title: "Comando nslookup",
                    items: [
                      "nslookup permite consultar manualmente registros DNS y confirmar resolucion de un dominio.",
                      "Si no hay resolucion, se debe revisar direccion DNS configurada en host/router y conectividad.",
                      "En redes domesticas, el router suele distribuir DNS via DHCP a clientes de la LAN."
                    ]
                  },
                  {
                    title: "Checklist de verificacion DNS",
                    items: [
                      "Validar que el cliente tenga DNS configurado correctamente (manual o por DHCP).",
                      "Probar resolucion con nslookup antes de diagnosticar navegacion o aplicaciones.",
                      "Confirmar que dominio, servidor DNS y ruta IP hacia el resolvedor sean alcanzables."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Comprobar y explicar el proceso DNS completo para resolver fallas de acceso por nombre."
                    ]
                  }
                ]
              },
              {
                code: "16.4",
                title: "Clientes y servidores web",
                summary:
                  "Funcionamiento de HTTP y HTML en la publicacion de contenido web, y transicion a HTTPS para proteger datos durante la navegacion.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_16.4_http_html_https_flow.png",
                    alt: "Flujo web con DNS, solicitud HTTP/HTTPS, entrega de HTML y comparacion de seguridad entre HTTP y HTTPS."
                  }
                ],
                sections: [
                  {
                    title: "HTTP y HTML en la experiencia web",
                    items: [
                      "HTTP define reglas de intercambio entre cliente y servidor para solicitar y entregar recursos web.",
                      "HTML es el lenguaje de marcado que estructura texto, imagenes, enlaces y elementos de interfaz.",
                      "El navegador interpreta el HTML recibido para construir la pagina visible al usuario."
                    ]
                  },
                  {
                    title: "Flujo operativo de una solicitud web",
                    items: [
                      "El cliente resuelve primero el nombre de dominio a una direccion IP usando DNS.",
                      "Con la IP obtenida, envia solicitud al servicio web en puerto 80 (HTTP) o 443 (HTTPS).",
                      "El servidor responde con contenido HTML y recursos asociados para renderizado completo."
                    ]
                  },
                  {
                    title: "Seguridad y estandares",
                    items: [
                      "HTTP sin cifrado puede ser interceptado por terceros durante el transito de datos.",
                      "HTTPS agrega cifrado TLS para proteger confidencialidad e integridad de la comunicacion.",
                      "Los estandares HTTP/HTML permiten interoperabilidad entre clientes y servidores de distintos fabricantes."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar como colaboran HTTP y HTML, y por que HTTPS es requisito para navegacion segura."
                    ]
                  }
                ]
              },
              {
                code: "16.5",
                title: "Clientes y servidores FTP",
                summary:
                  "Uso de FTP para transferir y administrar archivos remotos, diferenciando canal de control y canal de datos entre cliente y servidor.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_16.5_ftp_clients_servers.png",
                    alt: "Arquitectura FTP con cliente-servidor, canal de control TCP 21 y canal de datos TCP 20 para transferencia de archivos."
                  }
                ],
                sections: [
                  {
                    title: "Protocolo de transferencia de archivos",
                    items: [
                      "FTP permite subir y descargar archivos entre hosts a traves de una sesion cliente-servidor.",
                      "El canal de control usa TCP 21 para autenticacion y comandos de gestion de archivos.",
                      "El canal de datos suele usar TCP 20 para transportar contenido solicitado o cargado."
                    ]
                  },
                  {
                    title: "Gestion remota por comandos",
                    items: [
                      "Ademas de transferir, FTP permite listar, renombrar y eliminar archivos segun permisos.",
                      "Esta capacidad facilita mantenimiento remoto de repositorios y sitios web basicos.",
                      "Una mala configuracion de permisos puede exponer informacion sensible."
                    ]
                  },
                  {
                    title: "Software cliente FTP",
                    items: [
                      "Clientes GUI como FileZilla muestran panel local y remoto para transferencias por arrastre.",
                      "En servidores publicos puede usarse usuario anonymous; entornos privados exigen credenciales.",
                      "Antes de operar en produccion conviene validar destino, permisos y trazabilidad de cambios."
                    ]
                  },
                  {
                    title: "Consideracion de seguridad",
                    items: [
                      "FTP tradicional transmite credenciales en texto plano y no cifra el canal por defecto.",
                      "Para mayor seguridad en entornos reales se recomienda FTPS o SFTP segun politica organizacional.",
                      "Aplicar cifrado y control de acceso reduce riesgo de fuga o manipulacion de archivos."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Aplicar FTP con criterio tecnico, entendiendo su funcionamiento y limites de seguridad."
                    ]
                  }
                ]
              },
              {
                code: "16.6",
                title: "Terminales virtuales",
                summary:
                  "Acceso remoto a dispositivos y servidores mediante sesiones virtuales, comparando Telnet y SSH con enfoque en seguridad.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_16.6_virtual_terminals_telnet_ssh.png",
                    alt: "Comparacion entre Telnet y SSH para acceso remoto a CLI, con puertos y nivel de seguridad."
                  }
                ],
                sections: [
                  {
                    title: "Acceso remoto con Telnet o SSH",
                    items: [
                      "Clientes como Tera Term permiten abrir sesiones remotas hacia equipos de red y servidores.",
                      "La sesion remota emula una terminal local y habilita administracion por linea de comandos.",
                      "SSH se prioriza en entornos reales por su cifrado y proteccion de credenciales."
                    ]
                  },
                  {
                    title: "Telnet",
                    items: [
                      "Telnet es un protocolo historico de emulacion de terminal y usa TCP puerto 23.",
                      "Una conexion Telnet establece una sesion vty para ejecutar comandos en el host remoto.",
                      "Aunque util en laboratorios, su uso en produccion debe evitarse por falta de cifrado."
                    ]
                  },
                  {
                    title: "Problemas de seguridad con Telnet",
                    items: [
                      "Telnet transmite datos en texto plano, por lo que un atacante puede leer trafico capturado.",
                      "Con acceso a credenciales, un tercero podria ejecutar acciones administrativas no autorizadas.",
                      "SSH aporta autenticacion fuerte y cifrado de sesion, reduciendo riesgo operativo."
                    ]
                  },
                  {
                    title: "Checklist de operacion segura",
                    items: [
                      "Habilitar SSH y deshabilitar Telnet cuando el equipo y la politica lo permitan.",
                      "Aplicar usuarios/roles con privilegios minimos para administracion remota.",
                      "Registrar sesiones y auditar cambios para trazabilidad y respuesta a incidentes."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Justificar tecnicamente el uso de SSH sobre Telnet para administracion remota segura."
                    ]
                  }
                ]
              },
              {
                code: "16.7",
                title: "Correo electronico y mensajeria",
                summary:
                  "Arquitectura de correo, protocolos SMTP/POP3/IMAP4 y evolucion hacia mensajeria instantanea y llamadas VoIP.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_16.7_email_messaging_voip.png",
                    alt: "Resumen de protocolos de correo y servicios de mensajeria y llamadas por Internet."
                  }
                ],
                sections: [
                  {
                    title: "Clientes y servidores de correo",
                    items: [
                      "El correo es un servicio cliente-servidor donde los mensajes se almacenan en buzones remotos.",
                      "Los usuarios acceden con clientes web o aplicaciones dedicadas segun plataforma.",
                      "La direccion de buzon sigue formato usuario@empresa.dominio."
                    ]
                  },
                  {
                    title: "Protocolos de correo",
                    items: [
                      "SMTP envia correo desde cliente a servidor local y entre servidores (puerto 25).",
                      "POP3 descarga mensajes al cliente y normalmente no los conserva en servidor (puerto 110).",
                      "IMAP4 mantiene sincronizacion con buzon remoto y conserva mensajes en servidor (puerto 143)."
                    ]
                  },
                  {
                    title: "Mensajeria de texto",
                    items: [
                      "La mensajeria en tiempo real se integra en clientes web, moviles y plataformas colaborativas.",
                      "Ademas del texto, muchas aplicaciones soportan envio de archivos, audio y video.",
                      "Ejemplos frecuentes: Teams, Webex, WhatsApp y otros clientes de comunicacion empresarial y personal."
                    ]
                  },
                  {
                    title: "Llamadas telefonicas por Internet",
                    items: [
                      "VoIP convierte voz analogica en paquetes IP para transportar llamadas por la red.",
                      "Para comunicacion con telefonia tradicional se requiere gateway hacia la red PSTN.",
                      "Calidad de voz depende de latencia, perdida de paquetes y capacidad de la red."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Diferenciar servicios de correo, chat y VoIP para seleccionar protocolos y controles adecuados."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M17",
            title: "Utilidades de prueba de red",
            topics: [
              {
                code: "17.1",
                title: "Comandos de solucion de problemas",
                summary:
                  "Uso practico de utilidades CLI para aislar fallas de conectividad: ipconfig, ping, netstat, tracert y nslookup.",
                images: [
                  {
                    src: "./assets/images/network-basics/C5_17.1_troubleshooting_commands_flow.png",
                    alt: "Flujo de diagnostico de red con ipconfig y ping para identificar problemas locales, DNS o de ruta."
                  }
                ],
                sections: [
                  {
                    title: "Panorama de utilidades",
                    items: [
                      "ipconfig muestra configuracion IP local del host y estado del adaptador.",
                      "ping verifica alcance a hosts IP y mide tiempo de respuesta extremo a extremo.",
                      "netstat, tracert y nslookup amplian el diagnostico para sesiones, rutas y resolucion DNS."
                    ]
                  },
                  {
                    title: "Comando ipconfig",
                    items: [
                      "Con ipconfig se validan IPv4, mascara de subred y gateway predeterminado de forma rapida.",
                      "ipconfig /all incluye datos extendidos: MAC, DNS, DHCP, lease y detalles de interfaz.",
                      "Si hay direccionamiento desactualizado o invalido, usar ipconfig /release y luego ipconfig /renew."
                    ]
                  },
                  {
                    title: "Comando ping",
                    items: [
                      "El host envia solicitud de eco ICMP y espera respuesta para confirmar conectividad.",
                      "Secuencia recomendada: ping al gateway local, luego a IP externa y finalmente a nombre de dominio.",
                      "Si ping a IP funciona pero a nombre falla, el problema suele estar en DNS."
                    ]
                  },
                  {
                    title: "Interpretacion de resultados",
                    items: [
                      "Sin respuesta al gateway: posible falla local (NIC, cable, Wi-Fi, VLAN o configuracion IP).",
                      "Gateway responde pero destino externo no: revisar ruta WAN, ISP o politicas de filtrado.",
                      "Ping exitoso y aplicacion falla: investigar servicio especifico en host destino."
                    ]
                  },
                  {
                    title: "Checklist de troubleshooting",
                    items: [
                      "Confirmar capa fisica y estado de interfaz antes de concluir falla de capa 3 o superior.",
                      "Documentar cada prueba (comando, destino, resultado) para acotar causas sistematicamente.",
                      "Escalar con evidencia: salida de ipconfig /all, pruebas de ping y sintomas observados."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Aplicar una metodologia de diagnostico reproducible para localizar fallas de conectividad en menos tiempo."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "network-devices-initial-config",
        title: "Dispositivos de Red y Configuración Inicial",
        provider: "Cisco Networking Academy",
        level: "Intermedio",
        status: "En curso",
        estimatedHours: 70,
        summary:
          "Curso de transición a configuración de dispositivos Cisco: diseño de red, direccionamiento, transporte, IOS y pruebas de conectividad.",
        tags: ["redes", "switching", "routing", "ios", "troubleshooting"],
        modules: [
          {
            key: "M1",
            title: "Diseño de redes",
            topics: [
              {
                code: "1.1",
                title: "Redes confiables",
                summary:
                  "Una red confiable combina tolerancia a fallas, escalabilidad, calidad de servicio y seguridad para sostener la operación del negocio.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_1.1.png",
                    alt: "Topología con rutas redundantes entre segmentos LAN y salida a Internet."
                  }
                ],
                sections: [
                  {
                    title: "Arquitectura de red",
                    items: [
                      "La arquitectura de red define cómo se integran infraestructura física, servicios y protocolos para conectar usuarios, dispositivos y aplicaciones.",
                      "Diseñar con arquitectura estándar facilita interoperabilidad entre fabricantes, crecimiento ordenado y operación mantenible.",
                      "Una red moderna debe soportar tráfico convergente (datos, voz y video) sin perder estabilidad."
                    ]
                  },
                  {
                    title: "Tolerancia a fallas y redundancia",
                    items: [
                      "La tolerancia a fallas busca que la red siga operando aunque falle un enlace o un equipo.",
                      "La redundancia agrega rutas alternativas; si un camino cae, el tráfico puede reenrutarse por otro sin interrumpir el servicio.",
                      "La conmutación de paquetes permite que diferentes paquetes del mismo flujo tomen rutas distintas según el estado de la red."
                    ]
                  },
                  {
                    title: "Escalabilidad y calidad de servicio (QoS)",
                    items: [
                      "Escalabilidad significa crecer en usuarios, sedes y aplicaciones sin degradar de forma crítica el rendimiento existente.",
                      "QoS prioriza tráfico sensible al retardo, como voz y video en tiempo real, frente a tráfico menos urgente.",
                      "Cuando hay congestión, las políticas de QoS reducen impacto en experiencia de usuario y continuidad operativa."
                    ]
                  },
                  {
                    title: "Seguridad como requisito de confiabilidad",
                    items: [
                      "Una red confiable también debe ser segura: sin seguridad, la disponibilidad y el rendimiento pueden colapsar por incidentes.",
                      "La tríada CIA orienta controles básicos: confidencialidad, integridad y disponibilidad de la información.",
                      "Controles mínimos esperados: gestión de acceso administrativo, segmentación, actualizaciones, monitoreo y respaldos de configuración."
                    ]
                  },
                  {
                    title: "Checklist de diseño confiable",
                    items: [
                      "Definir enlaces o equipos redundantes en puntos críticos.",
                      "Separar tráfico por prioridad y aplicar políticas de QoS.",
                      "Planificar crecimiento de usuarios, sedes y aplicaciones.",
                      "Establecer controles de seguridad en infraestructura y datos.",
                      "Documentar topología, riesgos y procedimientos de recuperación."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar los cuatro pilares de una red confiable y justificar su impacto en disponibilidad, rendimiento y seguridad."
                    ]
                  }
                ]
              },
              {
                code: "1.2",
                title: "Diseño de redes jerárquico",
                summary:
                  "El diseño jerárquico organiza la red en capas para mejorar rendimiento, escalabilidad, administración y control del tráfico.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_1.2.png",
                    alt: "Dos redes IP conectadas por un router para ilustrar porción de red y porción de host en direccionamiento."
                  }
                ],
                sections: [
                  {
                    title: "Direcciones físicas y lógicas",
                    items: [
                      "La dirección MAC identifica de forma única la interfaz de red del host y se mantiene estable en el adaptador.",
                      "La dirección IP es lógica y depende de la red donde está conectado el host; puede cambiar entre ubicaciones.",
                      "Para comunicar correctamente en redes jerárquicas se usan ambas: MAC para entrega local e IP para encaminamiento entre redes."
                    ]
                  },
                  {
                    title: "Inspección de parámetros de red en el host",
                    items: [
                      "En equipos de usuario se debe validar estado del adaptador, dirección IP, máscara, gateway y DNS antes de escalar incidentes.",
                      "Comandos como ipconfig o ipconfig /all permiten corroborar rápidamente configuración, DHCP y dirección física.",
                      "Distinguir asignación estática y dinámica evita errores de configuración y facilita soporte."
                    ]
                  },
                  {
                    title: "Por qué segmentar con diseño jerárquico",
                    items: [
                      "Las redes grandes en un solo dominio de difusión degradan rendimiento y dificultan localizar fallas.",
                      "Segmentar reduce tráfico innecesario, mejora control operativo y limita el alcance de incidentes.",
                      "Un diseño jerárquico bien planificado facilita crecimiento ordenado y cambios sin interrupciones extensas."
                    ]
                  },
                  {
                    title: "Capas acceso, distribución y núcleo",
                    items: [
                      "Acceso: conecta dispositivos finales mediante switches y puntos de acceso.",
                      "Distribución: agrega redes de acceso, aplica políticas y enruta tráfico entre segmentos.",
                      "Núcleo: troncal de alta velocidad con alta disponibilidad para transportar grandes volúmenes de datos."
                    ]
                  },
                  {
                    title: "Buenas prácticas de diseño jerárquico",
                    items: [
                      "Mantener tráfico local en la capa de acceso cuando sea posible.",
                      "Aplicar segmentación por función, área o criticidad del servicio.",
                      "Evitar crecimiento orgánico sin plan de direccionamiento y topología.",
                      "Definir redundancia en enlaces de distribución y núcleo."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Relacionar direcciones MAC/IP con el modelo jerárquico y justificar cómo las capas de acceso, distribución y núcleo mejoran la red."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M2",
            title: "La Nube y Virtualizaci\u00f3n",
            topics: [
              {
                code: "2.1",
                title: "La nube y servicios en la nube",
                summary:
                  "La computaci\u00f3n en la nube entrega recursos de TI bajo demanda y permite escalar servicios sin depender de infraestructura local dedicada.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_2.1.png",
                    alt: "Proveedores de servicios en la nube como AWS, Azure, Cisco, Google Cloud e IBM Cloud."
                  }
                ],
                sections: [
                  {
                    title: "Fundamentos de nube",
                    items: [
                      "La nube combina centros de datos, virtualizaci\u00f3n y servicios remotos para ofrecer capacidad de c\u00f3mputo, almacenamiento y red.",
                      "En lugar de comprar todo el hardware por adelantado, una organizaci\u00f3n puede consumir recursos seg\u00fan demanda.",
                      "Este modelo mejora tiempo de despliegue y continuidad operativa cuando hay crecimiento o variaci\u00f3n de carga."
                    ]
                  },
                  {
                    title: "Modelos de despliegue",
                    items: [
                      "Nube p\u00fablica: servicios accesibles por Internet para m\u00faltiples clientes, normalmente con pago por uso.",
                      "Nube privada: recursos dedicados a una sola organizaci\u00f3n con mayor control sobre pol\u00edticas y cumplimiento.",
                      "Nube h\u00edbrida: combina entornos p\u00fablicos y privados para balancear costo, seguridad y flexibilidad.",
                      "Nube comunitaria: compartida por organizaciones con requisitos similares, por ejemplo salud o sector p\u00fablico."
                    ]
                  },
                  {
                    title: "Modelos de servicio",
                    items: [
                      "SaaS: aplicaciones listas para usar (correo, colaboraci\u00f3n, ofim\u00e1tica).",
                      "PaaS: plataforma para desarrollar y desplegar aplicaciones sin administrar la base de infraestructura.",
                      "IaaS: servidores, red y almacenamiento virtualizados para construir soluciones personalizadas."
                    ]
                  },
                  {
                    title: "Criterios para elegir servicios en la nube",
                    items: [
                      "Definir requisitos de seguridad, soberan\u00eda y clasificaci\u00f3n de datos.",
                      "Evaluar latencia, disponibilidad y ubicaci\u00f3n geogr\u00e1fica de las regiones del proveedor.",
                      "Revisar costos operativos: c\u00f3mputo, almacenamiento, transferencia y soporte.",
                      "Verificar integraci\u00f3n con la red local y estrategia de respaldo/recuperaci\u00f3n."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Comparar modelos de nube y seleccionar el enfoque m\u00e1s adecuado seg\u00fan necesidades t\u00e9cnicas y de negocio."
                    ]
                  }
                ]
              },
              {
                code: "2.2",
                title: "Virtualizaci\u00f3n",
                summary:
                  "La virtualizaci\u00f3n desacopla software y hardware para ejecutar m\u00faltiples sistemas o funciones en la misma plataforma f\u00edsica, con mejor aprovechamiento de recursos.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_2.2_1.png",
                    alt: "Esquema de hipervisor tipo 1 con m\u00faltiples sistemas operativos invitados sobre hardware del servidor."
                  },
                  {
                    src: "./assets/images/network-devices-initial-config/C6_2.2_2.png",
                    alt: "Esquema de hipervisor tipo 2 ejecut\u00e1ndose sobre un sistema operativo host."
                  }
                ],
                sections: [
                  {
                    title: "Qu\u00e9 es virtualizaci\u00f3n",
                    items: [
                      "Consiste en crear recursos l\u00f3gicos (m\u00e1quinas, redes o almacenamiento) sobre una base f\u00edsica compartida.",
                      "Permite consolidar servidores y reducir la proliferaci\u00f3n de equipos dedicados subutilizados.",
                      "Es una base tecnol\u00f3gica clave para operar servicios de nube de forma eficiente."
                    ]
                  },
                  {
                    title: "Hipervisores tipo 1 y tipo 2",
                    items: [
                      "Tipo 1 (bare-metal): se instala directamente sobre hardware; ofrece mejor rendimiento y aislamiento para producci\u00f3n.",
                      "Tipo 2 (hosted): corre sobre un sistema operativo anfitri\u00f3n; es pr\u00e1ctico para laboratorio, pruebas y aprendizaje.",
                      "La elecci\u00f3n depende de criticidad del servicio, capacidad del hardware y objetivos del entorno."
                    ]
                  },
                  {
                    title: "Ventajas y riesgos operativos",
                    items: [
                      "Ventajas: menor costo total, mejor uso de CPU/RAM, aprovisionamiento r\u00e1pido y mayor flexibilidad.",
                      "Riesgos: dependencia del host f\u00edsico, sobreasignaci\u00f3n de recursos y complejidad de administraci\u00f3n.",
                      "Buenas pr\u00e1cticas: monitoreo continuo, plantillas est\u00e1ndar, segmentaci\u00f3n y copias de seguridad de VMs."
                    ]
                  },
                  {
                    title: "Virtualizaci\u00f3n de red",
                    items: [
                      "No solo se virtualizan servidores; tambi\u00e9n es posible virtualizar switching, routing y funciones de seguridad.",
                      "Esto facilita laboratorios, automatizaci\u00f3n y despliegues consistentes entre entornos de desarrollo y producci\u00f3n.",
                      "La conectividad virtual debe dise\u00f1arse con el mismo rigor que la red f\u00edsica: direccionamiento, segmentaci\u00f3n y control de acceso."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Diferenciar hipervisores, justificar casos de uso y reconocer implicaciones de rendimiento, seguridad y continuidad."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M3",
            title: "Sistemas de Numeración",
            topics: [
              {
                code: "3.1",
                title: "Sistema Numérico Binario",
                summary:
                  "El sistema binario es la base del direccionamiento IPv4: permite representar direcciones de 32 bits y convertirlas entre binario y decimal punteado.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_3.1_1.png",
                    alt: "Topología con hosts y redes IPv4 expresadas en notación binaria."
                  },
                  {
                    src: "./assets/images/network-devices-initial-config/C6_3.1_2.png",
                    alt: "Ejemplo de equivalencia entre octetos decimales y octetos binarios en una dirección IPv4."
                  }
                ],
                sections: [
                  {
                    title: "Direcciones binarias e IPv4",
                    items: [
                      "IPv4 se representa internamente en binario: 32 bits divididos en 4 octetos de 8 bits.",
                      "Cada octeto binario se convierte a decimal para facilitar lectura humana en notación decimal punteada.",
                      "Comprender binario evita errores al interpretar red, host y puerta de enlace predeterminada."
                    ]
                  },
                  {
                    title: "Conversión binario a decimal",
                    items: [
                      "La conversión usa notación posicional en base 2: 128, 64, 32, 16, 8, 4, 2, 1.",
                      "Para pasar un octeto binario a decimal, se suman solo los valores donde el bit es 1.",
                      "Ejemplo: 10101000 = 128 + 32 + 8 = 168."
                    ]
                  },
                  {
                    title: "Conversión decimal a binario",
                    items: [
                      "Para cada octeto decimal, se determina qué potencias de 2 lo componen y se marca 1 en esas posiciones.",
                      "Ejemplo: 10 decimal = 00001010 binario; 11 decimal = 00001011 binario.",
                      "Dirección 192.168.10.11 en binario: 11000000.10101000.00001010.00001011."
                    ]
                  },
                  {
                    title: "Lectura práctica de una IPv4",
                    items: [
                      "Una dirección IPv4 en decimal punteado (por ejemplo 192.168.10.10) es la forma operativa para configuración.",
                      "El dispositivo trabaja realmente con el flujo binario de 32 bits equivalente.",
                      "Dominar ambas representaciones mejora análisis de subredes, ACL y troubleshooting."
                    ]
                  },
                  {
                    title: "Checklist rápido de conversión",
                    items: [
                      "Separar siempre la dirección en octetos antes de convertir.",
                      "Usar la tabla 128-64-32-16-8-4-2-1 para evitar omisiones.",
                      "Verificar que cada octeto decimal quede entre 0 y 255.",
                      "Confirmar resultado final en formato x.x.x.x."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Convertir direcciones IPv4 entre binario y decimal punteado con precisión para interpretar correctamente el direccionamiento de red."
                    ]
                  }
                ]
              },
              {
                code: "3.2",
                title: "Sistema Numérico Hexadecimal",
                summary:
                  "El sistema hexadecimal simplifica la representación binaria y es esencial para trabajar con direcciones IPv6 y direcciones MAC.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_3.2.png",
                    alt: "Relación entre hextetos IPv6, dígitos hexadecimales y grupos binarios de 4 bits."
                  }
                ],
                sections: [
                  {
                    title: "Hexadecimal e IPv6",
                    items: [
                      "Hexadecimal es base 16 y usa símbolos 0-9 y A-F.",
                      "Cada dígito hexadecimal representa exactamente 4 bits binarios (un nibble).",
                      "IPv6 tiene 128 bits y se escribe como 8 bloques (hextetos) de 16 bits."
                    ]
                  },
                  {
                    title: "Relación binario-hexadecimal",
                    items: [
                      "Dos dígitos hexadecimales equivalen a un byte (8 bits).",
                      "Esta equivalencia reduce complejidad visual frente a cadenas binarias largas.",
                      "También se utiliza en redes para direcciones MAC Ethernet."
                    ]
                  },
                  {
                    title: "Conversión entre hexadecimal y decimal",
                    items: [
                      "Para hex a decimal se aplica notación posicional en base 16.",
                      "Ejemplo: 2A(hex) = 2x16 + 10 = 42(dec).",
                      "Ejemplo: C5(hex) = 12x16 + 5 = 197(dec)."
                    ]
                  },
                  {
                    title: "Uso operativo en redes",
                    items: [
                      "IPv6 puede escribirse en mayúsculas o minúsculas sin cambiar su significado.",
                      "En configuración de red, leer correctamente hextetos evita errores de enrutamiento y de asignación.",
                      "La conversión rápida hex-bin facilita interpretar prefijos y estructuras IPv6."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Convertir valores entre hexadecimal, binario y decimal, y aplicar esa habilidad en direccionamiento IPv6 y análisis de red."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M4",
            title: "Comunicación Ethernet",
            topics: [
              {
                code: "4.1",
                title: "Ethernet",
                summary:
                  "Ethernet se consolidó como estándar de facto para LAN cableadas por su interoperabilidad, evolución sostenida y modelo de direccionamiento en capa 2.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_4.2.png",
                    alt: "Ejemplo de entrega de trama Ethernet basada en dirección MAC de destino dentro de una LAN."
                  }
                ],
                sections: [
                  {
                    title: "El auge de Ethernet",
                    items: [
                      "Al inicio de las redes, cada fabricante implementaba métodos y protocolos propios, dificultando la interconexión.",
                      "Los estándares permitieron compatibilidad entre equipos de distintos proveedores, mejor diseño y mayor competencia.",
                      "Ethernet se volvió estándar de facto para redes locales cableadas al definir reglas claras de formato y transmisión."
                    ]
                  },
                  {
                    title: "Evolución e IEEE 802.3",
                    items: [
                      "El IEEE mantiene los estándares de red; para Ethernet, la familia clave es IEEE 802.3.",
                      "La notación 100BASE-T indica velocidad, tipo de señal y medio (100 Mbps, banda base, par trenzado).",
                      "Ethernet evolucionó desde 10 Mbps hasta velocidades de 10 Gbps y superiores."
                    ]
                  },
                  {
                    title: "Direccionamiento Ethernet",
                    items: [
                      "Las tramas incluyen MAC de origen y MAC de destino para entrega dentro de la misma LAN.",
                      "Si un switch no conoce el destino, puede inundar la trama por varios puertos; solo el host con MAC coincidente la procesa.",
                      "La NIC de cada host descarta automáticamente tramas cuyo destino no coincide con su dirección física."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Explicar por qué los estándares son críticos para interoperabilidad.",
                      "Interpretar correctamente la notación de un estándar Ethernet.",
                      "Distinguir comportamiento de switch y NIC durante la entrega de una trama."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Relacionar estandarización, evolución tecnológica y direccionamiento MAC para entender por qué Ethernet domina las LAN cableadas."
                    ]
                  }
                ]
              },
              {
                code: "4.2",
                title: "Tramas de Ethernet",
                summary:
                  "La trama Ethernet y las subcapas LLC/MAC definen cómo se encapsulan datos, se accede al medio y se valida integridad en la capa de enlace.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_4.1.png",
                    alt: "Campos de una trama Ethernet con tamaños típicos: preámbulo, MAC destino, MAC origen, tipo/longitud, datos y FCS."
                  }
                ],
                sections: [
                  {
                    title: "Encapsulación Ethernet",
                    items: [
                      "Ethernet opera en capa física y capa de enlace de datos del modelo OSI.",
                      "Enlace de datos define estructura de trama y direccionamiento local; física define señal y medio.",
                      "Ethernet soporta múltiples anchos de banda, desde 10 Mbps hasta 100 Gbps y más."
                    ]
                  },
                  {
                    title: "Subcapas LLC y MAC",
                    items: [
                      "LLC (IEEE 802.2) identifica el protocolo de capa 3 usado por la trama, como IPv4 o IPv6.",
                      "MAC (IEEE 802.3) se enfoca en encapsulación, direccionamiento de capa 2 y control de acceso al medio.",
                      "Esta separación permite reutilizar la misma infraestructura con distintos protocolos de red."
                    ]
                  },
                  {
                    title: "Funciones de la subcapa MAC",
                    items: [
                      "Define formato de trama, MAC origen/destino y campo FCS para detección de errores.",
                      "En medios compartidos y semidúplex se empleó CSMA/CD para resolver colisiones.",
                      "En Ethernet conmutada en dúplex completo, CSMA/CD ya no es necesario."
                    ]
                  },
                  {
                    title: "Campos y tamaño de trama",
                    items: [
                      "Tamaño mínimo de trama Ethernet: 64 bytes; máximo estándar: 1518 bytes (sin considerar etiquetas adicionales).",
                      "Tramas menores al mínimo se descartan como inválidas; tramas mayores pueden considerarse jumbo según entorno.",
                      "El FCS ayuda a detectar corrupción de datos durante la transmisión."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar la estructura de una trama Ethernet y explicar cómo LLC/MAC colaboran para transportar datos con control básico de integridad."
                    ]
                  }
                ]
              },
              {
                code: "4.3",
                title: "Dirección MAC de Ethernet",
                summary:
                  "La dirección MAC identifica de forma única cada interfaz Ethernet en una LAN y permite que switches y NIC tomen decisiones de entrega en capa 2.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_4.3_1.png",
                    alt: "Representación de una dirección MAC en formato hexadecimal y su equivalencia binaria."
                  },
                  {
                    src: "./assets/images/network-devices-initial-config/C6_4.3_2.png",
                    alt: "Ejemplo de trama Ethernet con direcciones MAC de origen y destino."
                  },
                  {
                    src: "./assets/images/network-devices-initial-config/C6_4.3_3.png",
                    alt: "Comparación de tráfico unicast, multicast y broadcast en una red local."
                  }
                ],
                sections: [
                  {
                    title: "Identificación de dispositivos en capa 2",
                    items: [
                      "Una MAC (Media Access Control) pertenece a la interfaz de red, no al equipo completo.",
                      "Su longitud estándar es de 48 bits (6 bytes), representados en hexadecimal.",
                      "En Ethernet, el switch reenvía tramas con base en la MAC de destino."
                    ]
                  },
                  {
                    title: "Estructura hexadecimal y fabricante (OUI)",
                    items: [
                      "Los primeros 24 bits suelen identificar al fabricante (OUI: Organizationally Unique Identifier).",
                      "Los últimos 24 bits identifican de forma específica la interfaz dentro de ese fabricante.",
                      "Ejemplo de formato común: 00:1C:42:7E:91:AF."
                    ]
                  },
                  {
                    title: "Tipos de dirección MAC de destino",
                    items: [
                      "Unicast: trama dirigida a una sola NIC específica.",
                      "Broadcast: trama enviada a todos los hosts del mismo dominio de broadcast (FF:FF:FF:FF:FF:FF).",
                      "Multicast: trama enviada a un grupo específico de receptores."
                    ]
                  },
                  {
                    title: "Relación MAC e IP en la LAN",
                    items: [
                      "IP define el destino lógico extremo a extremo; MAC define la entrega local salto a salto.",
                      "Para enviar a un host local, el emisor necesita conocer su MAC y suele obtenerla con ARP (en IPv4).",
                      "Si el destino está en otra red, la trama Ethernet se envía a la MAC de la puerta de enlace."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Diferenciar dirección MAC de dirección IP y su función en la comunicación.",
                      "Reconocer formato hexadecimal de 48 bits y el concepto OUI.",
                      "Identificar cuándo se usa unicast, multicast o broadcast."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar direcciones MAC en tramas Ethernet y explicar su papel en la entrega de datos dentro de una LAN."
                    ]
                  }
                ]
              },
              {
                code: "4.4",
                title: "La Tabla de Direcciones MAC",
                summary:
                  "Los switches construyen y mantienen una tabla MAC para decidir por qué puerto reenviar tramas, optimizando rendimiento y reduciendo tráfico innecesario.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_4.4.png",
                    alt: "Switch con puertos y proceso de aprendizaje de direcciones MAC para conmutación."
                  }
                ],
                sections: [
                  {
                    title: "Aprendizaje dinámico en el switch",
                    items: [
                      "Cuando una trama entra por un puerto, el switch registra la MAC de origen y la asocia a ese puerto.",
                      "Esa asociación se guarda en la tabla de direcciones MAC (también llamada tabla CAM).",
                      "El proceso se repite continuamente mientras circula tráfico por la red."
                    ]
                  },
                  {
                    title: "Reenvío, filtrado e inundación",
                    items: [
                      "Si conoce la MAC de destino, reenvía solo por el puerto asociado (forwarding).",
                      "Si destino y origen están en el mismo puerto, descarta la trama (filtering).",
                      "Si desconoce la MAC de destino, inunda por todos los puertos de la VLAN excepto el de entrada (flooding)."
                    ]
                  },
                  {
                    title: "Temporización y actualización",
                    items: [
                      "Las entradas dinámicas caducan tras un tiempo de inactividad (aging) para evitar información obsoleta.",
                      "Cuando un host cambia de puerto, el switch actualiza la tabla con la nueva ubicación.",
                      "Una tabla bien actualizada mejora latencia y evita tráfico innecesario."
                    ]
                  },
                  {
                    title: "Operación y seguridad básica",
                    items: [
                      "Comandos de verificación en Cisco IOS: show mac address-table, show interface status.",
                      "Amenazas comunes: MAC spoofing y MAC flooding para forzar inundación de tráfico.",
                      "Controles recomendados: port-security, límites de MAC por puerto y segmentación por VLAN."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar cómo el switch aprende direcciones MAC y usa su tabla para conmutar tráfico de manera eficiente y segura."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M5",
            title: "La Capa de Red",
            topics: [
              {
                code: "5.1",
                title: "Características de la Capa de Red",
                summary:
                  "La capa de red proporciona direccionamiento lógico y enrutamiento entre redes, permitiendo que paquetes viajen de un host origen a un host destino a través de múltiples saltos.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_5.1.png",
                    alt: "Representación de hosts y routers que encaminan paquetes entre diferentes redes."
                  }
                ],
                sections: [
                  {
                    title: "Función principal de la capa 3",
                    items: [
                      "Define direcciones lógicas (IPv4/IPv6) para identificar origen y destino extremo a extremo.",
                      "Permite la comunicación entre redes distintas, no solo dentro de una misma LAN.",
                      "Entrega paquetes con modelo de mejor esfuerzo: no garantiza entrega, orden ni latencia fija."
                    ]
                  },
                  {
                    title: "Encapsulación y unidad de datos",
                    items: [
                      "La capa de red agrega un encabezado IP al segmento de capa de transporte y forma un paquete.",
                      "El paquete viaja por diferentes medios y tecnologías de enlace sin cambiar su dirección IP de destino final.",
                      "En cada salto cambia la trama de capa 2, pero se mantiene el paquete de capa 3."
                    ]
                  },
                  {
                    title: "Enrutamiento y selección de ruta",
                    items: [
                      "Los routers examinan la IP de destino y consultan su tabla de enrutamiento para decidir el siguiente salto.",
                      "La ruta elegida depende de prefijo, métrica y protocolos de enrutamiento configurados.",
                      "Si no existe ruta válida, el paquete se descarta y puede generarse un mensaje de error ICMP."
                    ]
                  },
                  {
                    title: "Escalabilidad y segmentación de red",
                    items: [
                      "Dividir la red en subredes reduce dominios de broadcast y mejora rendimiento.",
                      "El direccionamiento jerárquico facilita crecimiento ordenado y políticas de seguridad.",
                      "Diseñar correctamente la capa 3 mejora disponibilidad y operación en redes empresariales."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar cómo la capa de red direcciona y enruta paquetes entre redes, y por qué es clave para la escalabilidad de la infraestructura."
                    ]
                  }
                ]
              },
              {
                code: "5.2",
                title: "Paquete IPv4",
                summary:
                  "IPv4 utiliza un encabezado con campos de control para direccionamiento, vida útil del paquete, fragmentación y entrega al protocolo de capa superior correspondiente.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_5.2.png",
                    alt: "Campos principales de un encabezado IPv4 y su función durante el enrutamiento."
                  }
                ],
                sections: [
                  {
                    title: "Estructura del encabezado IPv4",
                    items: [
                      "Campos clave: versión, longitud de encabezado (IHL), longitud total, TTL, protocolo e IP origen/destino.",
                      "El campo Protocolo identifica la carga útil: por ejemplo, TCP (6), UDP (17) o ICMP (1).",
                      "El checksum de encabezado valida integridad del header en cada salto."
                    ]
                  },
                  {
                    title: "Fragmentación y MTU",
                    items: [
                      "Si un paquete supera la MTU del enlace de salida, IPv4 puede fragmentarlo (según banderas de fragmentación).",
                      "Los fragmentos se reensamblan en el host destino, usando identificación y offset.",
                      "La fragmentación excesiva afecta rendimiento; por eso se recomienda ajustar MTU/MSS cuando aplica."
                    ]
                  },
                  {
                    title: "TTL y control de bucles",
                    items: [
                      "TTL (Time To Live) se decrementa en cada router para evitar bucles infinitos.",
                      "Al llegar a cero, el router descarta el paquete y normalmente responde con ICMP Time Exceeded.",
                      "Herramientas como traceroute aprovechan este comportamiento para mapear saltos."
                    ]
                  },
                  {
                    title: "Buenas prácticas operativas",
                    items: [
                      "Verificar direccionamiento, máscara y gateway antes de diagnosticar fallas de capa superior.",
                      "Usar ping y traceroute para validar alcance y ruta efectiva.",
                      "Mantener un plan de direccionamiento documentado simplifica soporte y crecimiento."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar los campos más relevantes del paquete IPv4 y relacionarlos con decisiones de enrutamiento y diagnóstico."
                    ]
                  }
                ]
              },
              {
                code: "5.3",
                title: "Paquete IPv6",
                summary:
                  "IPv6 simplifica el encabezado base, amplía el espacio de direccionamiento y usa encabezados de extensión para funcionalidades adicionales, mejorando eficiencia y escalabilidad.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_5.3.png",
                    alt: "Estructura del encabezado IPv6 con campos base y referencia a encabezados de extensión."
                  }
                ],
                sections: [
                  {
                    title: "Encabezado base IPv6",
                    items: [
                      "Campos principales: versión, clase de tráfico, etiqueta de flujo, longitud de carga útil, siguiente encabezado y límite de saltos.",
                      "Dirección de origen y destino son de 128 bits, lo que amplía significativamente el espacio de direcciones.",
                      "El encabezado base tiene tamaño fijo, lo que simplifica procesamiento en routers."
                    ]
                  },
                  {
                    title: "Encabezados de extensión",
                    items: [
                      "Opciones como fragmentación, seguridad o ruteo especial se manejan en encabezados de extensión.",
                      "Esto evita sobrecargar el encabezado base y mejora eficiencia para tráfico común.",
                      "El campo Siguiente encabezado encadena el tipo de cabecera siguiente (otra extensión o capa 4)."
                    ]
                  },
                  {
                    title: "Diferencias operativas frente a IPv4",
                    items: [
                      "En IPv6, los routers intermedios no fragmentan paquetes; la fragmentación la realiza el host origen.",
                      "No existe broadcast como en IPv4; se usan multicast y anycast para comunicaciones grupales o selectivas.",
                      "IPv6 favorece autoconfiguración y diseño jerárquico más limpio en redes modernas."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Reconocer campos del encabezado base IPv6 y su función.",
                      "Explicar por qué IPv6 separa opciones avanzadas mediante encabezados de extensión.",
                      "Distinguir al menos tres diferencias operativas entre IPv4 e IPv6."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Relacionar la estructura del paquete IPv6 con sus ventajas de escalabilidad, eficiencia y operación en redes actuales."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M6",
            title: "Estructura de la dirección IPv4",
            topics: [
              {
                code: "6.1",
                title: "Estructura de la dirección IPv4",
                summary:
                  "Una dirección IPv4 tiene 32 bits divididos en cuatro octetos. Su interpretación junto con la máscara o prefijo define qué parte identifica la red y qué parte identifica al host.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_6.1.png",
                    alt: "Representación de una dirección IPv4 dividida en cuatro octetos y su conversión entre decimal y binario."
                  }
                ],
                sections: [
                  {
                    title: "Formato de una dirección IPv4",
                    items: [
                      "IPv4 usa 32 bits agrupados en 4 octetos de 8 bits, escritos en decimal punteado (ejemplo: 192.168.10.10).",
                      "Cada octeto puede tomar valores entre 0 y 255.",
                      "El sistema procesa esas direcciones en binario, aunque se administren en decimal."
                    ]
                  },
                  {
                    title: "Red y host: máscara y prefijo",
                    items: [
                      "La máscara de subred o longitud de prefijo (/24, /26, etc.) separa la porción de red de la porción de host.",
                      "Con /24, los primeros 24 bits identifican la red y los últimos 8 bits al host.",
                      "Conocer esta división permite determinar si dos equipos pertenecen a la misma red lógica."
                    ]
                  },
                  {
                    title: "Cálculos básicos de direccionamiento",
                    items: [
                      "Dirección de red: bits de host en 0.",
                      "Dirección de broadcast: bits de host en 1.",
                      "Hosts válidos: direcciones entre red y broadcast (excepto ambos extremos)."
                    ]
                  },
                  {
                    title: "Errores comunes y validación",
                    items: [
                      "Asignar la misma IP a dos hosts genera conflicto de direccionamiento.",
                      "Usar máscara incorrecta produce fallas de alcance aunque la IP parezca válida.",
                      "Validar configuración con ipconfig/ifconfig y pruebas de conectividad (ping) reduce tiempo de diagnóstico."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Convertir un octeto IPv4 entre decimal y binario.",
                      "Identificar red, broadcast y rango de hosts para un prefijo dado.",
                      "Detectar errores de IP/máscara que impiden comunicación."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar y calcular correctamente la estructura de una dirección IPv4 para diseñar y solucionar redes básicas."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M7",
            title: "Resolución de dirección",
            topics: [
              {
                code: "7.1",
                title: "ARP",
                summary:
                  "ARP (Address Resolution Protocol) permite encontrar la dirección MAC asociada a una dirección IPv4 dentro de la misma red local para que las tramas Ethernet puedan entregarse correctamente.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_7.1.png",
                    alt: "Flujo de solicitud y respuesta ARP para resolver una dirección MAC a partir de una dirección IPv4 en LAN."
                  }
                ],
                sections: [
                  {
                    title: "Propósito de ARP en redes IPv4",
                    items: [
                      "Un host puede conocer la IP de destino, pero para enviar en Ethernet necesita la MAC de destino local.",
                      "ARP resuelve la relación IPv4-MAC en la LAN y alimenta la tabla ARP del host.",
                      "Este proceso ocurre antes de encapsular y enviar datos a nivel de capa 2."
                    ]
                  },
                  {
                    title: "Flujo básico de resolución",
                    items: [
                      "Si no existe entrada en caché, el host emite una ARP Request en broadcast (FF:FF:FF:FF:FF:FF).",
                      "Solo el dispositivo con la IP consultada responde con ARP Reply en unicast, indicando su MAC.",
                      "Con la respuesta, el emisor actualiza la caché ARP y ya puede transmitir tramas de datos."
                    ]
                  },
                  {
                    title: "ARP y puerta de enlace predeterminada",
                    items: [
                      "Si el destino está fuera de la subred local, no se resuelve la MAC del destino final sino la MAC del gateway.",
                      "El host envía las tramas al router local, que luego reencamina el paquete a otras redes.",
                      "Por eso, una configuración correcta de gateway es crítica para alcance interred."
                    ]
                  },
                  {
                    title: "Caché ARP y operación diaria",
                    items: [
                      "Las entradas ARP se guardan temporalmente para evitar solicitudes repetitivas y reducir broadcast.",
                      "Cuando expiran o cambian dispositivos, las entradas se vuelven a aprender dinámicamente.",
                      "Comandos útiles: arp -a (Windows) o ip neigh / arp -n (Linux)."
                    ]
                  },
                  {
                    title: "Riesgos y controles básicos",
                    items: [
                      "ARP no tiene autenticación nativa, por lo que puede ser objetivo de suplantación (ARP spoofing).",
                      "Medidas defensivas en red empresarial: DHCP Snooping, Dynamic ARP Inspection y segmentación por VLAN.",
                      "Monitorear tablas ARP y cambios anómalos ayuda a detectar ataques de envenenamiento ARP."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar cómo ARP habilita la comunicación IPv4 sobre Ethernet y cómo su operación impacta conectividad y seguridad en la LAN."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M8",
            title: "Servicios de Direccionamiento IP",
            topics: [
              {
                code: "8.1",
                title: "Servicios de DNS",
                summary:
                  "DNS traduce nombres de dominio a direcciones IP para que usuarios y aplicaciones accedan a servicios sin memorizar direcciones numéricas.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_8.1.png",
                    alt: "Proceso de resolución DNS desde el cliente hacia servidor recursivo y servidores autoritativos."
                  }
                ],
                sections: [
                  {
                    title: "Función de DNS en la red",
                    items: [
                      "Permite usar nombres legibles (por ejemplo, www.ejemplo.com) en lugar de direcciones IPv4/IPv6.",
                      "Sin DNS, la navegación y la mayoría de aplicaciones dependerían de direcciones IP manuales.",
                      "Es un servicio crítico para operación de correo, web, autenticación y muchas plataformas corporativas."
                    ]
                  },
                  {
                    title: "Consulta DNS: flujo básico",
                    items: [
                      "El cliente consulta al resolvedor configurado (normalmente DNS del router o del ISP/empresa).",
                      "Si no hay respuesta en caché, el resolvedor consulta servidores raíz, TLD y autoritativos según corresponda.",
                      "La respuesta final regresa al cliente con la IP solicitada y se guarda temporalmente en caché."
                    ]
                  },
                  {
                    title: "Registros DNS más usados",
                    items: [
                      "A y AAAA: asocian nombre a dirección IPv4 o IPv6.",
                      "CNAME: define alias de un nombre canónico.",
                      "MX y NS: enrutan correo y delegan autoridad de zona."
                    ]
                  },
                  {
                    title: "Operación, rendimiento y seguridad",
                    items: [
                      "La caché DNS reduce latencia y tráfico, pero puede exponer problemas si hay datos obsoletos.",
                      "Herramientas de diagnóstico: nslookup, dig y resolución inversa por PTR.",
                      "Buenas prácticas: redundancia de servidores DNS, control de acceso y validación de registros."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar cómo DNS convierte nombres en direcciones IP y cómo su diseño afecta disponibilidad y rendimiento de los servicios."
                    ]
                  }
                ]
              },
              {
                code: "8.2",
                title: "Servicios de DHCP",
                summary:
                  "DHCP asigna parámetros IP de forma automática para reducir errores de configuración manual y acelerar la incorporación de hosts a la red.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_8.2.png",
                    alt: "Intercambio DHCP Discover, Offer, Request y Acknowledgment entre cliente y servidor."
                  }
                ],
                sections: [
                  {
                    title: "Propósito y beneficios de DHCP",
                    items: [
                      "Automatiza asignación de dirección IP, máscara, gateway y DNS.",
                      "Evita conflictos por IP duplicada y simplifica despliegues masivos de dispositivos.",
                      "Permite administrar políticas de direccionamiento centralizadas por subred."
                    ]
                  },
                  {
                    title: "Proceso DORA",
                    items: [
                      "Discover: el cliente solicita configuración IP en broadcast.",
                      "Offer: el servidor propone una dirección y parámetros de red.",
                      "Request/Ack: el cliente acepta la oferta y el servidor confirma la concesión (lease)."
                    ]
                  },
                  {
                    title: "Componentes de una concesión",
                    items: [
                      "Lease time: tiempo de validez de la asignación IP.",
                      "Opciones DHCP: DNS, dominio, NTP y otras configuraciones adicionales.",
                      "Reservas: asociación fija entre MAC e IP para equipos que requieren dirección estable."
                    ]
                  },
                  {
                    title: "DHCP relay y buenas prácticas",
                    items: [
                      "Cuando servidor y clientes están en redes distintas, se usa relay (ip helper-address en router).",
                      "Conviene excluir rangos estáticos (infraestructura, impresoras críticas, servidores).",
                      "Seguridad recomendada: DHCP Snooping para mitigar servidores DHCP no autorizados."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Describir correctamente las cuatro fases DORA.",
                      "Explicar por qué DHCP reduce errores operativos frente a configuración manual.",
                      "Identificar cuándo se requiere DHCP relay."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Aplicar DHCP de forma segura y eficiente para entregar direccionamiento IP escalable en redes empresariales."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M9",
            title: "La Capa de Transporte",
            topics: [
              {
                code: "9.1",
                title: "Transporte de Datos",
                summary:
                  "La capa de transporte segmenta datos, identifica aplicaciones mediante puertos y habilita comunicación extremo a extremo entre procesos en hosts distintos.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_9.1.png",
                    alt: "Flujo de datos entre aplicaciones usando capa de transporte y puertos de origen y destino."
                  }
                ],
                sections: [
                  {
                    title: "Rol de la capa de transporte",
                    items: [
                      "Recibe datos de aplicaciones, los divide en segmentos o datagramas y los entrega a la capa de red.",
                      "En el destino, reensambla información y la entrega al proceso correcto.",
                      "Opera de forma lógica extremo a extremo, independiente del medio físico intermedio."
                    ]
                  },
                  {
                    title: "Multiplexación y puertos",
                    items: [
                      "Los números de puerto permiten que múltiples aplicaciones compartan simultáneamente la red.",
                      "Cada flujo se identifica por IP origen/destino, puerto origen/destino y protocolo (TCP/UDP).",
                      "Esto evita mezclar sesiones entre servicios como web, correo, DNS o videollamadas."
                    ]
                  },
                  {
                    title: "Requisitos de las aplicaciones",
                    items: [
                      "Algunas aplicaciones priorizan confiabilidad (por ejemplo, transferencia de archivos).",
                      "Otras priorizan baja latencia y continuidad (por ejemplo, voz y video en tiempo real).",
                      "Por eso la capa de transporte ofrece dos enfoques: TCP orientado a conexión y UDP no orientado a conexión."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar cómo la capa de transporte conecta procesos de aplicación y por qué puertos y segmentación son esenciales para comunicación concurrente."
                    ]
                  }
                ]
              },
              {
                code: "9.2",
                title: "Descripción General de TCP",
                summary:
                  "TCP ofrece transporte confiable orientado a conexión con control de secuencia, acuses de recibo, retransmisión y mecanismos de control de flujo/congestión.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_9.2.png",
                    alt: "Comunicación TCP con establecimiento de sesión y confirmación de segmentos mediante ACK."
                  }
                ],
                sections: [
                  {
                    title: "Características de TCP",
                    items: [
                      "Es orientado a conexión: antes de transferir datos se establece una sesión lógica entre extremos.",
                      "Garantiza entrega ordenada mediante números de secuencia y acuses de recibo (ACK).",
                      "Si hay pérdida, retransmite segmentos para mantener integridad de la información."
                    ]
                  },
                  {
                    title: "Control de flujo y congestión",
                    items: [
                      "Usa ventana deslizante para ajustar cuántos datos se envían sin confirmación.",
                      "Reduce velocidad ante congestión detectada para proteger la red y estabilizar la comunicación.",
                      "Este comportamiento favorece precisión y confiabilidad sobre velocidad bruta."
                    ]
                  },
                  {
                    title: "Casos de uso típicos",
                    items: [
                      "HTTP/HTTPS, SSH, FTP, SMTP/IMAP y otras aplicaciones donde la pérdida de datos no es aceptable.",
                      "Transacciones críticas (banca, gestión empresarial, autenticación) dependen de su confiabilidad.",
                      "La sobrecarga adicional de TCP es un costo justificado cuando se requiere exactitud."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Describir por qué TCP se considera orientado a conexión.",
                      "Explicar función de secuencia, ACK y retransmisión.",
                      "Distinguir cuándo TCP es preferible frente a UDP."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Relacionar los mecanismos de TCP con la entrega confiable de datos en aplicaciones sensibles a errores."
                    ]
                  }
                ]
              },
              {
                code: "9.3",
                title: "Descripción General de UDP",
                summary:
                  "UDP es un protocolo de transporte no orientado a conexión y de baja sobrecarga, adecuado para aplicaciones que priorizan rapidez y continuidad sobre retransmisión estricta.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_9.3.png",
                    alt: "Comparación de flujo UDP sin establecimiento de sesión y con menor sobrecarga de control."
                  }
                ],
                sections: [
                  {
                    title: "Características de UDP",
                    items: [
                      "No establece conexión previa ni mantiene estado de sesión entre extremos.",
                      "No confirma recepción ni retransmite automáticamente segmentos perdidos.",
                      "Su encabezado es pequeño, lo que reduce latencia y consumo de recursos."
                    ]
                  },
                  {
                    title: "Ventajas operativas",
                    items: [
                      "Menor sobrecarga implica mayor eficiencia para tráfico sensible al retardo.",
                      "Permite a la aplicación decidir cómo manejar pérdida, jitter o corrección de errores.",
                      "Es ideal para comunicaciones donde un dato tardío vale menos que un dato oportuno."
                    ]
                  },
                  {
                    title: "Casos de uso frecuentes",
                    items: [
                      "DNS, DHCP, streaming en tiempo real, voz sobre IP y videojuegos en línea.",
                      "En estos escenarios se tolera cierta pérdida para mantener continuidad y baja latencia.",
                      "Cuando se necesita confiabilidad adicional, la aplicación puede implementarla a nivel superior."
                    ]
                  },
                  {
                    title: "Comparación rápida TCP vs UDP",
                    items: [
                      "TCP: confiable, orientado a conexión, más control y mayor sobrecarga.",
                      "UDP: rápido, sin conexión, menor control y menor sobrecarga.",
                      "La elección depende de los requisitos funcionales de la aplicación."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Evaluar cuándo UDP es la mejor opción de transporte según latencia, tolerancia a pérdida y naturaleza de la aplicación."
                    ]
                  }
                ]
              },
              {
                code: "9.4",
                title: "Números de Puerto",
                summary:
                  "Los números de puerto permiten identificar servicios y aplicaciones en un host, haciendo posible que múltiples comunicaciones ocurran en paralelo sobre la misma dirección IP.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_9.4.png",
                    alt: "Ejemplos de puertos de origen y destino utilizados por aplicaciones cliente y servidor."
                  }
                ],
                sections: [
                  {
                    title: "Puertos y sockets",
                    items: [
                      "Un puerto es un identificador lógico de 16 bits usado por TCP o UDP (rango 0-65535).",
                      "Un socket combina IP + puerto + protocolo para identificar de forma única un flujo.",
                      "Gracias a los sockets, un mismo host puede atender varios servicios al mismo tiempo."
                    ]
                  },
                  {
                    title: "Rangos de puertos",
                    items: [
                      "Bien conocidos (0-1023): reservados para servicios estándar como HTTP, HTTPS, DNS y SSH.",
                      "Registrados (1024-49151): usados por aplicaciones de fabricante o servicios empresariales.",
                      "Dinámicos/efímeros (49152-65535): usados temporalmente por clientes para iniciar sesiones."
                    ]
                  },
                  {
                    title: "Puertos comunes en operación",
                    items: [
                      "HTTP 80, HTTPS 443, DNS 53, DHCP 67/68, SSH 22.",
                      "El cliente abre un puerto efímero y se conecta al puerto de servicio del servidor.",
                      "Un mismo servidor puede exponer múltiples servicios, cada uno en su puerto correspondiente."
                    ]
                  },
                  {
                    title: "Seguridad y diagnóstico",
                    items: [
                      "Abrir solo puertos necesarios reduce superficie de ataque.",
                      "Comandos útiles: netstat, ss, lsof y herramientas de escaneo controlado para auditoría.",
                      "Filtrado en firewall por puerto/protocolo es base de la política de acceso."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar cómo los puertos direccionan el tráfico hacia el servicio correcto y aplicar controles de seguridad básicos sobre ellos."
                    ]
                  }
                ]
              },
              {
                code: "9.5",
                title: "Proceso de Comunicación TCP",
                summary:
                  "TCP establece, mantiene y cierra sesiones mediante un proceso ordenado que garantiza entrega confiable, control de secuencia y recuperación ante pérdida de segmentos.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_9.5.png",
                    alt: "Secuencia de establecimiento y finalización de una sesión TCP entre cliente y servidor."
                  }
                ],
                sections: [
                  {
                    title: "Establecimiento de sesión (three-way handshake)",
                    items: [
                      "SYN: el cliente inicia la conexión proponiendo número de secuencia inicial.",
                      "SYN-ACK: el servidor confirma recepción y envía su propio número de secuencia.",
                      "ACK: el cliente confirma y la sesión queda lista para intercambio de datos."
                    ]
                  },
                  {
                    title: "Transferencia de datos confiable",
                    items: [
                      "Cada segmento enviado espera confirmación (ACK) del receptor.",
                      "Si no llega ACK dentro del tiempo esperado, TCP retransmite el segmento.",
                      "La numeración de secuencia permite reordenar y detectar pérdidas o duplicados."
                    ]
                  },
                  {
                    title: "Control de flujo y ventanas",
                    items: [
                      "El receptor anuncia cuántos datos puede aceptar sin saturarse (window size).",
                      "El emisor ajusta ritmo de envío para evitar desbordamiento del búfer receptor.",
                      "Este mecanismo mantiene estabilidad de la sesión bajo distintas condiciones de red."
                    ]
                  },
                  {
                    title: "Cierre de sesión",
                    items: [
                      "FIN/ACK permite cerrar la conexión de forma ordenada cuando termina el intercambio.",
                      "TIME_WAIT ayuda a evitar confusión con segmentos retrasados de sesiones anteriores.",
                      "Un cierre abrupto (RST) puede indicar error, rechazo o interrupción inesperada."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Describir correctamente el three-way handshake.",
                      "Explicar qué ocurre cuando se pierde un segmento TCP.",
                      "Relacionar ventana TCP con control de flujo."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Analizar una sesión TCP de extremo a extremo y explicar cómo sus mecanismos sostienen comunicación confiable."
                    ]
                  }
                ]
              },
              {
                code: "9.6",
                title: "Confiabilidad y control de flujo",
                summary:
                  "La confiabilidad en TCP se sostiene con números de secuencia, acuses de recibo, retransmisión y control de flujo/congestión para adaptar el envío al estado real de la red.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_9.6.png",
                    alt: "Mecanismos TCP de confirmación, ventana deslizante y ajuste de envío para control de flujo."
                  }
                ],
                sections: [
                  {
                    title: "Confirmación y orden de datos",
                    items: [
                      "TCP asigna números de secuencia a cada byte transmitido para preservar orden lógico.",
                      "El receptor confirma con ACK el último byte recibido correctamente.",
                      "Si llegan segmentos fuera de orden, el receptor puede almacenarlos y reordenarlos antes de entregarlos a la aplicación."
                    ]
                  },
                  {
                    title: "Retransmisión ante pérdida",
                    items: [
                      "Cuando no llega un ACK esperado, el emisor asume pérdida y retransmite.",
                      "Los temporizadores (RTO) ajustan cuándo reenviar según latencia observada.",
                      "Este mecanismo compensa errores de medio o congestión sin intervención de la aplicación."
                    ]
                  },
                  {
                    title: "Ventana deslizante y control de flujo",
                    items: [
                      "El campo de ventana anuncia cuántos bytes puede recibir el host destino sin saturar su búfer.",
                      "El emisor limita el volumen de datos en tránsito según esa ventana anunciada.",
                      "Así se evita desbordamiento del receptor y se estabiliza la sesión en equipos con capacidades distintas."
                    ]
                  },
                  {
                    title: "Control de congestión en red",
                    items: [
                      "TCP reduce su ritmo al detectar señales de congestión (pérdidas o ACK duplicados).",
                      "Luego incrementa gradualmente la tasa de envío cuando la ruta vuelve a estabilizarse.",
                      "Esto protege enlaces compartidos y mejora el comportamiento global de múltiples sesiones simultáneas."
                    ]
                  },
                  {
                    title: "Diagnóstico operativo",
                    items: [
                      "Síntomas típicos: baja velocidad sostenida, muchas retransmisiones y latencia variable.",
                      "Herramientas de apoyo: capturas de tráfico, contadores de interfaz y pruebas con iperf/ping.",
                      "Ajustar MTU/MSS, QoS y capacidad de enlace puede mejorar confiabilidad y rendimiento."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar cómo TCP asegura entrega confiable y cómo control de flujo/congestión impacta el rendimiento extremo a extremo."
                    ]
                  }
                ]
              },
              {
                code: "9.7",
                title: "Comunicación UDP",
                summary:
                  "UDP entrega datagramas con mínima sobrecarga y sin estado de sesión, ideal para servicios de infraestructura y aplicaciones en tiempo real que toleran pérdidas parciales.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_9.7.png",
                    alt: "Flujo de comunicación UDP entre cliente y servidor con envío de datagramas sin conexión previa."
                  }
                ],
                sections: [
                  {
                    title: "Flujo de comunicación sin conexión",
                    items: [
                      "El emisor puede transmitir datagramas UDP sin handshake previo.",
                      "Cada datagrama se procesa de forma independiente, sin mantenimiento de estado en el transporte.",
                      "La aplicación receptora decide cómo tratar pérdida, duplicación o desorden."
                    ]
                  },
                  {
                    title: "Encabezado UDP y puertos",
                    items: [
                      "Campos básicos: puerto origen, puerto destino, longitud y checksum.",
                      "El checksum ayuda a detectar corrupción de datos en tránsito.",
                      "La multiplexación por puertos mantiene separadas sesiones de distintos servicios en el mismo host."
                    ]
                  },
                  {
                    title: "Aplicaciones típicas sobre UDP",
                    items: [
                      "Servicios como DNS y DHCP priorizan rapidez de respuesta con mensajes breves.",
                      "Voz y video en tiempo real usan UDP para minimizar retardo y jitter percibido.",
                      "Protocolos de streaming y juegos suelen agregar sus propios mecanismos de recuperación parcial."
                    ]
                  },
                  {
                    title: "Consideraciones de red y seguridad",
                    items: [
                      "En enlaces inestables pueden aparecer pérdidas; QoS ayuda a priorizar tráfico sensible.",
                      "Es importante filtrar puertos UDP expuestos y limitar servicios innecesarios en borde.",
                      "Monitorear tasa de datagramas y errores facilita detectar congestión o abuso."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Describir por qué UDP no requiere establecimiento de sesión.",
                      "Identificar campos principales del encabezado UDP.",
                      "Relacionar tipos de aplicación con ventajas y límites de UDP."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Aplicar criterios técnicos para decidir cuándo usar UDP y cómo operar ese tráfico de forma eficiente y segura."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M10",
            title: "La Línea de Comandos del IOS de Cisco",
            topics: [
              {
                code: "10.1",
                title: "Navegación del IOS",
                summary:
                  "La navegación en Cisco IOS se basa en modos jerárquicos y comandos contextuales que permiten configurar, verificar y mantener dispositivos de red de forma controlada.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_10.1.png",
                    alt: "Consola IOS mostrando transición entre modos de usuario, privilegiado y configuración."
                  }
                ],
                sections: [
                  {
                    title: "Acceso inicial al IOS",
                    items: [
                      "Se puede acceder al dispositivo por consola, SSH o Telnet (según políticas de seguridad).",
                      "Al iniciar, el prompt indica el modo actual y el alcance de los comandos permitidos.",
                      "Identificar el prompt correctamente evita ejecutar comandos en el contexto equivocado."
                    ]
                  },
                  {
                    title: "Modos principales del CLI",
                    items: [
                      "User EXEC (`>`): monitoreo básico, sin privilegios de configuración.",
                      "Privileged EXEC (`#`): verificación avanzada y acceso a configuración.",
                      "Global configuration (`(config)#`): cambios de configuración del dispositivo y submodos."
                    ]
                  },
                  {
                    title: "Navegación eficiente",
                    items: [
                      "Comandos clave: `enable`, `configure terminal`, `exit`, `end` y `disable`.",
                      "Ayuda contextual con `?`, autocompletado con Tab e historial con flechas.",
                      "Atajos como `Ctrl+Z` permiten volver rápidamente al modo privilegiado."
                    ]
                  },
                  {
                    title: "Buenas prácticas operativas",
                    items: [
                      "Confirmar modo antes de aplicar cambios y documentar comandos críticos ejecutados.",
                      "Realizar verificaciones antes y después de cada ajuste para validar impacto.",
                      "Evitar sesiones concurrentes sin coordinación para reducir conflictos de configuración."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Navegar con seguridad entre modos del IOS y usar la ayuda contextual para administrar dispositivos con mayor precisión."
                    ]
                  }
                ]
              },
              {
                code: "10.2",
                title: "La Estructura de Comandos",
                summary:
                  "Comprender la sintaxis de comandos IOS permite ejecutar configuraciones correctas, interpretar errores y acelerar tareas de operación diaria.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_10.2.png",
                    alt: "Ejemplo de sintaxis de comando IOS con palabras clave, parámetros y opciones."
                  }
                ],
                sections: [
                  {
                    title: "Sintaxis base de comandos",
                    items: [
                      "Un comando puede incluir palabra clave principal, subcomandos y argumentos.",
                      "La sintaxis exacta depende del modo actual; no todos los comandos existen en todos los modos.",
                      "La ayuda contextual (`?`) muestra opciones válidas en la posición actual del cursor."
                    ]
                  },
                  {
                    title: "Palabras clave y argumentos",
                    items: [
                      "Palabras clave: términos fijos definidos por el IOS (por ejemplo, `interface`, `ip address`).",
                      "Argumentos: valores variables como direcciones IP, máscaras o nombres de interfaz.",
                      "Distinguir ambos reduce errores de interpretación al leer documentación y guías."
                    ]
                  },
                  {
                    title: "Abreviación y edición de línea",
                    items: [
                      "IOS permite abreviar comandos si la abreviatura es única (`conf t`, `show ip int br`).",
                      "Teclas de edición (`Ctrl+A`, `Ctrl+E`, `Ctrl+U`) mejoran velocidad y precisión en CLI.",
                      "Ante ambigüedad, IOS devuelve error y requiere completar el comando."
                    ]
                  },
                  {
                    title: "Interpretación de errores",
                    items: [
                      "Mensajes de `Invalid input` suelen indicar palabra incorrecta o contexto no válido.",
                      "Errores de comando incompleto indican que faltan argumentos obligatorios.",
                      "Corregir primero el modo y luego la sintaxis acelera la solución."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Separar correctamente palabras clave de argumentos en un comando IOS.",
                      "Usar `?` para descubrir sintaxis válida sin salir del CLI.",
                      "Corregir errores comunes de modo y de comando incompleto."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Construir y validar comandos IOS con estructura correcta para reducir fallas de configuración."
                    ]
                  }
                ]
              },
              {
                code: "10.3",
                title: "Ver la Información del Dispositivo",
                summary:
                  "La verificación sistemática con comandos `show` permite conocer estado operativo, identificar fallas y confirmar que la configuración aplicada coincide con el comportamiento esperado.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_10.3.png",
                    alt: "Salida de comandos show en IOS para revisar interfaces, versión y configuración activa."
                  }
                ],
                sections: [
                  {
                    title: "Comandos show esenciales",
                    items: [
                      "`show running-config`: configuración activa en memoria RAM.",
                      "`show startup-config`: configuración guardada en NVRAM para arranque.",
                      "`show version` y `show ip interface brief`: versión del sistema y estado resumido de interfaces."
                    ]
                  },
                  {
                    title: "Interpretación del estado de interfaces",
                    items: [
                      "`up/up`: interfaz operativa física y lógicamente.",
                      "`administratively down`: interfaz deshabilitada por configuración (`shutdown`).",
                      "`up/down` o `down/down`: posible problema de capa física, negociación o conectividad remota."
                    ]
                  },
                  {
                    title: "Verificación de configuración aplicada",
                    items: [
                      "Comparar running-config con startup-config evita reinicios con cambios no guardados.",
                      "Usar `copy running-config startup-config` cuando los cambios ya fueron validados.",
                      "Revisar hostname, direccionamiento e interfaces reduce errores en prácticas y exámenes."
                    ]
                  },
                  {
                    title: "Diagnóstico rápido en CLI",
                    items: [
                      "Combinar comandos show en secuencia da una vista integral del estado del equipo.",
                      "Incluir hora, comandos y salidas relevantes facilita trazabilidad de incidentes.",
                      "La disciplina de verificación antes y después de cambios mejora confiabilidad operativa."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Aplicar una rutina de verificación IOS para confirmar estado del dispositivo y diagnosticar fallas de forma estructurada."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M11",
            title: "Crear una Pequeña Red de Cisco",
            topics: [
              {
                code: "11.1",
                title: "Configuración Básica del Conmutador",
                summary:
                  "La configuración básica de un switch establece identidad, acceso administrativo y parámetros mínimos para operar y administrar la red local de forma ordenada.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_11.1.svg",
                    alt: "Secuencia recomendada para configuración inicial de un switch Cisco."
                  }
                ],
                sections: [
                  {
                    title: "Preparación inicial",
                    items: [
                      "Conectar por consola y entrar al modo privilegiado con `enable`.",
                      "Pasar a configuración global con `configure terminal`.",
                      "Asignar `hostname` para identificar el equipo en topología y registros."
                    ]
                  },
                  {
                    title: "Seguridad mínima de administración",
                    items: [
                      "Configurar `enable secret` para proteger acceso privilegiado.",
                      "Establecer contraseña de consola (`line console 0`) y líneas VTY para acceso remoto controlado.",
                      "Aplicar cifrado básico de contraseñas y banner de aviso (`service password-encryption`, `banner motd`)."
                    ]
                  },
                  {
                    title: "Gestión y verificación",
                    items: [
                      "Configurar una interfaz VLAN de gestión (SVI) con dirección IP para administración remota.",
                      "Verificar estado con `show ip interface brief` y revisar configuración con `show running-config`.",
                      "Guardar cambios con `copy running-config startup-config` para persistencia tras reinicio."
                    ]
                  },
                  {
                    title: "Errores comunes",
                    items: [
                      "Olvidar `no shutdown` en la SVI o en puertos requeridos.",
                      "No guardar configuración y perder cambios al reiniciar.",
                      "Usar contraseñas débiles o repetidas entre dispositivos."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Aplicar una configuración base de switch segura y verificable para iniciar una red Cisco pequeña."
                    ]
                  }
                ]
              },
              {
                code: "11.2",
                title: "Configurar los Ajustes Iniciales del Enrutador",
                summary:
                  "El ajuste inicial de un router define parámetros de identidad, seguridad y direccionamiento de interfaces para habilitar conectividad entre redes.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_11.2.svg",
                    alt: "Checklist de pasos para configuración inicial de un router Cisco."
                  }
                ],
                sections: [
                  {
                    title: "Configuración base del router",
                    items: [
                      "Asignar `hostname` y desactivar búsquedas DNS accidentales (`no ip domain-lookup`).",
                      "Configurar `enable secret` y parámetros de acceso local según política.",
                      "Definir banner legal para acceso administrativo."
                    ]
                  },
                  {
                    title: "Direccionamiento de interfaces",
                    items: [
                      "Entrar a cada interfaz requerida (`interface g0/0/x`) y asignar IP/máscara.",
                      "Activar la interfaz con `no shutdown` y documentar con `description`.",
                      "Verificar estado operativo (`up/up`) en `show ip interface brief`."
                    ]
                  },
                  {
                    title: "Validación de conectividad",
                    items: [
                      "Probar conectividad local con `ping` hacia dispositivos conectados al mismo segmento.",
                      "Comprobar rutas y alcance interred una vez configurados gateway y rutas necesarias.",
                      "Registrar salidas clave de verificación para auditoría técnica."
                    ]
                  },
                  {
                    title: "Persistencia y control de cambios",
                    items: [
                      "Guardar configuración en NVRAM (`copy running-config startup-config`).",
                      "Comparar `running-config` y `startup-config` para evitar inconsistencias al reinicio.",
                      "Aplicar cambios de forma incremental para aislar fallos rápidamente."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Configurar interfaz con IP y estado operativo correcto.",
                      "Validar acceso y seguridad básica del router.",
                      "Guardar y verificar configuración antes de cerrar sesión."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Implementar ajustes iniciales de router con enfoque práctico, seguro y orientado a verificación."
                    ]
                  }
                ]
              },
              {
                code: "11.3",
                title: "Asegurar los Dispositivos",
                summary:
                  "Asegurar switches y routers desde la configuración inicial reduce superficie de ataque y protege la administración del equipo frente a accesos no autorizados.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_11.3.svg",
                    alt: "Controles básicos de seguridad para hardening inicial de dispositivos Cisco."
                  }
                ],
                sections: [
                  {
                    title: "Control de acceso administrativo",
                    items: [
                      "Definir `enable secret` robusto y credenciales locales con privilegios mínimos necesarios.",
                      "Preferir SSH sobre Telnet para cifrar autenticación y sesión remota.",
                      "Restringir acceso VTY con ACL y límites de tiempo de inactividad."
                    ]
                  },
                  {
                    title: "Endurecimiento de servicios",
                    items: [
                      "Deshabilitar servicios que no se usan (por ejemplo, HTTP inseguro o protocolos heredados).",
                      "Usar banners de advertencia para notificar uso autorizado y trazabilidad legal.",
                      "Aplicar `service password-encryption` como medida base para ocultar contraseñas en texto claro."
                    ]
                  },
                  {
                    title: "Protección de puertos y plano de control",
                    items: [
                      "Colocar puertos no utilizados en estado `shutdown` y, si aplica, en una VLAN aislada.",
                      "Implementar controles de capa 2 según entorno: port-security, BPDU Guard y DHCP Snooping.",
                      "Monitorear intentos de acceso fallidos y cambios de configuración en logs."
                    ]
                  },
                  {
                    title: "Operación segura continua",
                    items: [
                      "Guardar respaldo de configuraciones y mantener inventario de versiones de IOS.",
                      "Aplicar parches y actualizaciones de seguridad de forma planificada.",
                      "Validar periódicamente postura de seguridad con revisiones técnicas y pruebas de acceso."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Configurar acceso remoto seguro con SSH y autenticación.",
                      "Eliminar o desactivar servicios no requeridos.",
                      "Aplicar controles de puerto y registrar eventos relevantes."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Implementar una línea base de seguridad en dispositivos Cisco para operar con menor riesgo y mayor control administrativo."
                    ]
                  }
                ]
              },
              {
                code: "11.4",
                title: "Configuración de la Puerta de Enlace Predeterminada",
                summary:
                  "La puerta de enlace predeterminada permite que un host o dispositivo de capa 2 envíe tráfico hacia redes remotas cuando el destino no pertenece a su subred local.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_11.4.svg",
                    alt: "Flujo de tráfico desde un host local hacia red remota a través del gateway predeterminado."
                  }
                ],
                sections: [
                  {
                    title: "Función del gateway predeterminado",
                    items: [
                      "Si el destino está fuera de la red local, el host envía el paquete al gateway configurado.",
                      "El gateway suele ser una interfaz de router o firewall conectada al mismo segmento LAN.",
                      "Sin gateway correcto, solo hay comunicación dentro de la subred local."
                    ]
                  },
                  {
                    title: "Configuración en hosts y switches",
                    items: [
                      "En hosts, se configura junto con IP y máscara mediante DHCP o parámetros estáticos.",
                      "En switches de capa 2, el `ip default-gateway` habilita administración remota fuera de la VLAN local.",
                      "La dirección configurada debe pertenecer a la misma red que la interfaz de gestión del dispositivo."
                    ]
                  },
                  {
                    title: "Verificación y solución de fallas",
                    items: [
                      "Validar con `ping` al gateway local como primera prueba de conectividad.",
                      "Si hay respuesta local pero no remota, revisar rutas en el router y políticas de filtrado.",
                      "Usar `show ip route` en router y `ipconfig`/`show ip interface brief` para confirmar parámetros."
                    ]
                  },
                  {
                    title: "Errores comunes",
                    items: [
                      "Gateway en subred incorrecta respecto al host o SVI de gestión.",
                      "Interfaces del router en estado down o con IP mal configurada.",
                      "Confundir gateway del host final con ruta por defecto del router."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Configurar y validar correctamente la puerta de enlace predeterminada para asegurar conectividad entre redes locales y remotas."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M12",
            title: "ICMP",
            topics: [
              {
                code: "12.1",
                title: "Mensajes ICMP",
                summary:
                  "ICMP es un protocolo de control usado por IP para notificar errores y estado de conectividad, clave en tareas de diagnóstico y operación de red.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_12.1.svg",
                    alt: "Tipos comunes de mensajes ICMP y su función en monitoreo y resolución de problemas."
                  }
                ],
                sections: [
                  {
                    title: "Función de ICMP en redes IP",
                    items: [
                      "ICMP complementa a IPv4/IPv6 al reportar condiciones de red, no transporta datos de aplicación.",
                      "Se usa para notificar fallas, verificar alcance y apoyar descubrimiento de ruta.",
                      "Sin ICMP, el diagnóstico de conectividad sería mucho más limitado."
                    ]
                  },
                  {
                    title: "Mensajes ICMP más relevantes",
                    items: [
                      "Echo Request/Echo Reply: base de la herramienta ping para validar respuesta extremo a extremo.",
                      "Destination Unreachable: informa que no se puede llegar a red, host o puerto destino.",
                      "Time Exceeded: indica agotamiento de TTL y habilita funcionamiento de traceroute."
                    ]
                  },
                  {
                    title: "Interpretación operativa",
                    items: [
                      "Unreachable suele apuntar a rutas ausentes, ACL restrictivas o errores de direccionamiento.",
                      "Time Exceeded frecuente puede reflejar bucles de ruteo o rutas ineficientes.",
                      "Respuestas inconsistentes pueden indicar congestión, pérdida intermitente o filtrado selectivo."
                    ]
                  },
                  {
                    title: "Consideraciones de seguridad",
                    items: [
                      "Bloquear ICMP de forma total puede dificultar diagnóstico legítimo y operación diaria.",
                      "Se recomienda filtrar de forma granular según política, no deshabilitar ciegamente.",
                      "Monitorear tasas ICMP ayuda a detectar escaneos o abuso de tráfico de control."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar tipos de mensajes ICMP y usar su interpretación para identificar causas probables de fallas de red."
                    ]
                  }
                ]
              },
              {
                code: "12.2",
                title: "Pruebas de Ping y Traceroute",
                summary:
                  "Ping y traceroute permiten validar conectividad, medir latencia y localizar el salto donde se produce una interrupción de servicio.",
                images: [
                  {
                    src: "./assets/images/network-devices-initial-config/C6_12.2.svg",
                    alt: "Topología de ejemplo para ejecución secuencial de ping y traceroute en diagnóstico de red."
                  }
                ],
                sections: [
                  {
                    title: "Ping: alcance y latencia",
                    items: [
                      "Envía Echo Request al destino y espera Echo Reply para confirmar conectividad.",
                      "Métricas útiles: paquetes enviados/recibidos, pérdida y RTT promedio/máximo.",
                      "Debe probarse primero al gateway local y luego a destinos remotos."
                    ]
                  },
                  {
                    title: "Traceroute: visibilidad de ruta",
                    items: [
                      "Incrementa TTL progresivamente para descubrir cada salto hacia el destino.",
                      "Cada router intermedio responde con ICMP Time Exceeded, revelando la secuencia de hops.",
                      "Permite ubicar dónde aparece latencia elevada o pérdida de conectividad."
                    ]
                  },
                  {
                    title: "Metodología de diagnóstico",
                    items: [
                      "Paso 1: validar configuración IP local (IP, máscara, gateway, DNS).",
                      "Paso 2: ping local y remoto para delimitar el alcance de la falla.",
                      "Paso 3: traceroute para aislar el tramo problemático y correlacionar con rutas/ACL."
                    ]
                  },
                  {
                    title: "Limitaciones y buenas prácticas",
                    items: [
                      "Algunos equipos filtran ICMP; ausencia de respuesta no siempre implica caída total.",
                      "Comparar resultados desde varios puntos de la red mejora precisión del análisis.",
                      "Registrar hora, destino y salida de comandos facilita escalamiento y seguimiento."
                    ]
                  },
                  {
                    title: "Checklist de comprensión",
                    items: [
                      "Distinguir claramente qué valida ping y qué aporta traceroute.",
                      "Interpretar pérdida y variación de RTT como indicios operativos.",
                      "Aplicar secuencia de pruebas desde local hacia remoto para aislar fallas."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Ejecutar ping y traceroute de manera estructurada para diagnosticar conectividad y ubicar fallos con mayor rapidez."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "network-addressing-troubleshooting-basics",
        title: "Direccionamiento de red y solución de problemas básicos",
        provider: "Cisco Networking Academy",
        level: "Intermedio",
        status: "En curso",
        estimatedHours: 42,
        summary:
          "Curso centrado en medios, topologías, direccionamiento IPv6, operación de dispositivos Cisco y diagnóstico básico de conectividad.",
        tags: ["direccionamiento", "ipv6", "ios", "troubleshooting", "cisco"],
        modules: [
          {
            key: "M1",
            title: "Fundamentos de la capa física y medios",
            topics: [
              {
                code: "1.1",
                title: "Propósito de la capa física",
                summary:
                  "La capa física define cómo se representan y transportan bits por el medio. Establece conectores, señales, temporización y condiciones de transmisión para lograr enlaces estables.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_1.1.jpeg",
                    alt: "Referencia visual del tema 1.1: Propósito de la capa física."
                  }
                ],
                sections: [
                  {
                    title: "La conexión física",
                    items: [
                      "Antes de transmitir datos, dos dispositivos deben compartir un medio compatible: cobre, fibra o inalámbrico.",
                      "La conexión física incluye NIC, puertos, conectores, patch cords y un estándar común de enlace.",
                      "Si hay incompatibilidad de medio o de velocidad/dúplex, el enlace falla o degrada su rendimiento."
                    ]
                  },
                  {
                    title: "Función de la capa física",
                    items: [
                      "Convierte bits en señales eléctricas, luminosas o de radio, y realiza el proceso inverso en recepción.",
                      "Define sincronización, codificación básica y parámetros de transmisión para que el receptor interprete correctamente.",
                      "Opera junto a la capa de enlace: física transporta señales; enlace organiza tramas y direcciones MAC."
                    ]
                  },
                  {
                    title: "Buenas prácticas de instalación",
                    items: [
                      "Verificar integridad del cableado, distancia máxima por estándar y estado de conectores.",
                      "Evitar interferencia electromagnética, dobleces excesivos y tendidos sin etiquetado.",
                      "Confirmar indicadores de enlace/actividad en interfaces antes de iniciar troubleshooting lógico."
                    ]
                  },
                  {
                    title: "Checklist rápido",
                    items: [
                      "Identificar el medio adecuado para cada tramo del enlace.",
                      "Explicar la diferencia entre bit, señal y trama.",
                      "Diagnosticar por qué un enlace puede estar down aunque el equipo esté encendido."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar el propósito de la capa física y su impacto directo en la disponibilidad y calidad de la conectividad."
                    ]
                  }
                ]
              },
              {
                code: "1.2",
                title: "Características de la capa física",
                summary:
                  "Las características de la capa física determinan capacidad, alcance y confiabilidad del enlace mediante estándares, componentes, codificación, señalización y métricas de ancho de banda.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_1.2.png",
                    alt: "Referencia visual del tema 1.2: Características de la capa física."
                  }
                ],
                sections: [
                  {
                    title: "Estándares de la capa física",
                    items: [
                      "Los estándares (por ejemplo, IEEE 802.x) aseguran interoperabilidad entre equipos de distintos fabricantes.",
                      "Especifican medio, conectores, distancias máximas, velocidad y parámetros eléctricos u ópticos.",
                      "Trabajar fuera de estándar incrementa errores, pérdidas y problemas intermitentes."
                    ]
                  },
                  {
                    title: "Componentes físicos",
                    items: [
                      "Un enlace típico combina NIC, cableado o radio, conectores, patch panel y puertos de switch/router.",
                      "Cada componente agrega límites físicos: atenuación, ruido, pérdida de potencia o latencia.",
                      "La calidad del canal depende del eslabón más débil de la cadena física."
                    ]
                  },
                  {
                    title: "Codificación y señalización",
                    items: [
                      "La codificación convierte bits en patrones aptos para transmisión y recuperación de reloj.",
                      "La señalización define cómo se propagan esos patrones por el medio (voltaje, luz o modulación de radio).",
                      "Una mala relación señal-ruido incrementa retransmisiones y reduce el rendimiento efectivo."
                    ]
                  },
                  {
                    title: "Ancho de banda y terminología",
                    items: [
                      "El ancho de banda es la capacidad máxima teórica del medio; se expresa en bit/s (kbps, Mbps, Gbps).",
                      "Throughput y goodput representan rendimiento real observado, usualmente menor que el ancho de banda nominal.",
                      "Latencia, jitter y pérdida de paquetes afectan la experiencia final aunque exista buen ancho de banda."
                    ]
                  },
                  {
                    title: "Aplicación operativa",
                    items: [
                      "Seleccionar medio y estándar según distancia, ambiente y requerimiento de velocidad.",
                      "Medir el enlace para diferenciar límite físico de congestión lógica.",
                      "Documentar nomenclatura y capacidades para facilitar escalabilidad y soporte."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Evaluar un enlace físico con criterios técnicos y justificar decisiones de diseño basadas en capacidad, estabilidad y costo."
                    ]
                  }
                ]
              },
              {
                code: "1.3",
                title: "Cableado de cobre",
                summary:
                  "El cableado de cobre sigue siendo clave en LAN por costo y facilidad de despliegue. Su desempeño depende del tipo de cable, el entorno eléctrico y una instalación correcta.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_1.3.png",
                    alt: "Referencia visual del tema 1.3: Cableado de cobre."
                  }
                ],
                sections: [
                  {
                    title: "Características del cableado de cobre",
                    items: [
                      "Transporta señales eléctricas y es sensible a atenuación, interferencia electromagnética (EMI) y diafonía.",
                      "Su rendimiento real se ve afectado por distancia, calidad de terminación, curvatura y proximidad a fuentes de ruido.",
                      "En redes de acceso y usuario final, ofrece una relación costo-rendimiento muy favorable."
                    ]
                  },
                  {
                    title: "Tipos de cableado de cobre",
                    items: [
                      "Par trenzado: medio dominante en Ethernet LAN (categorías Cat5e, Cat6, Cat6A, entre otras).",
                      "Coaxial: mayor blindaje, más usado en entornos específicos (TV, CCTV, algunos accesos WAN).",
                      "La selección debe considerar velocidad objetivo, distancia y condiciones del sitio."
                    ]
                  },
                  {
                    title: "UTP y STP",
                    items: [
                      "UTP (Unshielded Twisted Pair): más económico y flexible, ideal para oficina con baja interferencia.",
                      "STP (Shielded Twisted Pair): añade blindaje para ambientes con alto ruido eléctrico industrial.",
                      "Un blindaje mal aterrizado puede generar problemas; no siempre STP será mejor opción."
                    ]
                  },
                  {
                    title: "Cable coaxial",
                    items: [
                      "Integra conductor central, dieléctrico, malla de blindaje y cubierta exterior.",
                      "Tiene buena inmunidad al ruido y se utiliza donde se requiere robustez o compatibilidad legacy.",
                      "En LAN modernas su uso es menor frente al par trenzado y la fibra óptica."
                    ]
                  },
                  {
                    title: "Criterios de selección en campo",
                    items: [
                      "Definir primero velocidad, distancia y ambiente (oficina, industrial, exterior).",
                      "Verificar cumplimiento de categoría de cable y conectividad extremo a extremo.",
                      "Documentar tipo de medio, ruta y pruebas para facilitar mantenimiento futuro."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Seleccionar y justificar el uso de medios de cobre según requisitos técnicos y condiciones reales de implementación."
                    ]
                  }
                ]
              },
              {
                code: "1.4",
                title: "Cableado UTP",
                summary:
                  "El UTP es el medio Ethernet más común en redes empresariales. Comprender sus categorías, conectores y patrones de terminación evita fallas físicas frecuentes.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_1.4.jpeg",
                    alt: "Referencia visual del tema 1.4: Cableado UTP."
                  }
                ],
                sections: [
                  {
                    title: "Propiedades del cableado UTP",
                    items: [
                      "Está compuesto por pares trenzados que reducen diafonía y mejoran la integridad de la señal.",
                      "La categoría del cable define capacidad de frecuencia y velocidades soportadas.",
                      "Respeta límites de distancia, radio de curvatura y tensión de tendido para conservar desempeño."
                    ]
                  },
                  {
                    title: "Conectores y estándares de cableado UTP",
                    items: [
                      "Se termina típicamente con conectores RJ-45 bajo estándares T568A o T568B.",
                      "La consistencia del esquema en ambos extremos es crítica para evitar errores de pinout.",
                      "Mala crimpación o pares abiertos generan baja velocidad, errores CRC o enlace inestable."
                    ]
                  },
                  {
                    title: "Cables UTP directos y cruzados",
                    items: [
                      "Cable directo: mismo estándar en ambos extremos; se usa entre dispositivos de tipo diferente.",
                      "Cable cruzado: intercambia pares TX/RX; tradicionalmente para dispositivos del mismo tipo.",
                      "Con Auto-MDI/MDIX muchos equipos modernos corrigen automáticamente, pero entender la lógica sigue siendo esencial."
                    ]
                  },
                  {
                    title: "Verificación operativa",
                    items: [
                      "Probar continuidad y mapa de pares con tester antes de poner en producción.",
                      "Revisar LEDs de enlace y negociación de velocidad/dúplex en switch y host.",
                      "Etiquetar ambos extremos para reducir tiempo de diagnóstico y cambios."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Aplicar buenas prácticas de terminación UTP y diferenciar correctamente cuándo usar cable directo o cruzado."
                    ]
                  }
                ]
              },
              {
                code: "1.5",
                title: "Cableado de fibra óptica",
                summary:
                  "La fibra óptica transmite datos por luz, ofreciendo gran capacidad, largas distancias e inmunidad a EMI. Es el medio preferido para troncales, backbone y enlaces de alta velocidad.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_1.5.png",
                    alt: "Referencia visual del tema 1.5: Cableado de fibra óptica."
                  }
                ],
                sections: [
                  {
                    title: "Propiedades del cableado de fibra óptica",
                    items: [
                      "Utiliza pulsos de luz, por lo que no sufre interferencia electromagnética como los medios de cobre.",
                      "Permite mayores distancias y anchos de banda altos con menor degradación de señal.",
                      "Su instalación exige mayor cuidado mecánico y limpieza en conectores."
                    ]
                  },
                  {
                    title: "Tipos de medios y usos",
                    items: [
                      "Multimodo (MMF): común en campus y centros de datos a distancias moderadas.",
                      "Monomodo (SMF): ideal para distancias largas y enlaces WAN/metro.",
                      "Se emplea en uplinks, interconexión entre switches, backbone y enlaces críticos."
                    ]
                  },
                  {
                    title: "Conectores y patch cords",
                    items: [
                      "Conectores comunes: LC, SC y otros, según módulo óptico y diseño de infraestructura.",
                      "La limpieza de férulas y control de radio de curvatura es obligatoria para evitar pérdidas.",
                      "La selección de transceptores (SFP/SFP+) y longitud de onda debe ser compatible en ambos extremos."
                    ]
                  },
                  {
                    title: "Comparación fibra versus cobre",
                    items: [
                      "Fibra: mayor velocidad y alcance, mejor inmunidad al ruido, costo inicial más alto.",
                      "Cobre: menor costo y complejidad en acceso, pero limitado en distancia y sensibilidad a EMI.",
                      "El diseño profesional combina ambos medios según rol del enlace y presupuesto."
                    ]
                  },
                  {
                    title: "Checklist de implementación",
                    items: [
                      "Validar tipo de fibra, transceptor y presupuesto óptico del enlace.",
                      "Inspeccionar/limpiar conectores antes de conectar equipos activos.",
                      "Registrar niveles ópticos y etiquetar fibras para operación y soporte."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Comparar fibra y cobre con criterio técnico y seleccionar la opción adecuada según capacidad, distancia y confiabilidad."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M2",
            title: "Topologías y acceso al medio",
            topics: [
              {
                code: "2.1",
                title: "Topologías",
                summary:
                  "Las topologías describen cómo se conectan los dispositivos y cómo fluye el tráfico. Comprender la relación entre topología física y lógica permite diseñar redes más estables y resolver fallas con mayor rapidez.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_2.1.png",
                    alt: "Referencia visual del tema 2.1: Topologías."
                  }
                ],
                sections: [
                  {
                    title: "Topologías física y lógica",
                    items: [
                      "La topología física representa el cableado y la disposición real de equipos y enlaces.",
                      "La topología lógica representa el camino que siguen los datos, que puede diferir del diseño físico.",
                      "Un mismo diseño físico puede presentar comportamientos lógicos distintos según VLAN, enrutamiento y políticas."
                    ]
                  },
                  {
                    title: "Topología lógica",
                    items: [
                      "Analizar topología lógica permite identificar dominios de broadcast y rutas de tráfico críticas.",
                      "En troubleshooting, ayuda a ubicar cuellos de botella, saltos innecesarios y puntos únicos de falla.",
                      "Herramientas de mapeo y tablas de switching/enrutamiento permiten validar la topología operativa."
                    ]
                  },
                  {
                    title: "Topologías WAN",
                    items: [
                      "Punto a punto: enlace directo entre dos nodos; simple y predecible para sucursales o troncales dedicadas.",
                      "Hub-and-spoke: centraliza conectividad en un nodo principal; facilita control, pero depende del hub.",
                      "Malla parcial o total: incrementa redundancia y resiliencia a costa de mayor complejidad y costo."
                    ]
                  },
                  {
                    title: "Topologías LAN",
                    items: [
                      "La topología estrella con switches es el modelo dominante por escalabilidad y facilidad de administración.",
                      "Diseños jerárquicos (acceso, distribución y núcleo) mejoran rendimiento y simplifican crecimiento.",
                      "Segmentar por VLAN y aplicar enlaces troncales evita dominios excesivos y reduce impacto de fallas."
                    ]
                  },
                  {
                    title: "Aplicación práctica",
                    items: [
                      "Elegir topología según criticidad del servicio, presupuesto y plan de crecimiento.",
                      "Documentar la topología física y la lógica para acelerar cambios y diagnóstico de incidentes.",
                      "Validar rutas de tráfico esperadas después de cada cambio de infraestructura."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Diferenciar topologías físicas y lógicas, y seleccionar estructuras LAN/WAN adecuadas para disponibilidad y rendimiento."
                    ]
                  }
                ]
              },
              {
                code: "2.2",
                title: "Métodos de control de acceso al medio",
                summary:
                  "El control de acceso al medio define cómo múltiples dispositivos comparten un canal de transmisión sin degradar la comunicación. Entender dúplex y mecanismos de contención es clave para interpretar rendimiento y colisiones.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_2.2.png",
                    alt: "Referencia visual del tema 2.2: Métodos de control de acceso al medio."
                  }
                ],
                sections: [
                  {
                    title: "Comunicación dúplex completo y semidúplex",
                    items: [
                      "Dúplex completo permite transmitir y recibir al mismo tiempo, eliminando colisiones en enlaces punto a punto con switch.",
                      "Semidúplex alterna transmisión/recepción y puede generar colisiones cuando varios nodos comparten el medio.",
                      "Un desajuste de dúplex entre extremos produce bajo rendimiento, errores y retransmisiones."
                    ]
                  },
                  {
                    title: "Métodos de control de acceso",
                    items: [
                      "Los métodos determinan cuándo un equipo puede transmitir para minimizar conflictos en el canal.",
                      "En medios compartidos se usan esquemas de contención y espera aleatoria.",
                      "La eficiencia depende del tipo de medio, carga de tráfico y cantidad de nodos activos."
                    ]
                  },
                  {
                    title: "CSMA/CD",
                    items: [
                      "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) se asocia a Ethernet compartida y semidúplex.",
                      "El nodo escucha el medio, transmite si está libre y, si detecta colisión, detiene envío y aplica backoff.",
                      "En Ethernet conmutada moderna en dúplex completo, CSMA/CD prácticamente no se utiliza."
                    ]
                  },
                  {
                    title: "CSMA/CA",
                    items: [
                      "CSMA/CA (Collision Avoidance) es común en redes inalámbricas IEEE 802.11.",
                      "El equipo intenta evitar colisiones escuchando el canal, esperando intervalos y usando temporización aleatoria.",
                      "El medio Wi-Fi es compartido por naturaleza; por eso la planificación de canales y potencia es crítica."
                    ]
                  },
                  {
                    title: "Comparación operativa",
                    items: [
                      "Ethernet con switch y dúplex completo ofrece latencia más predecible y mayor estabilidad bajo carga.",
                      "Wi-Fi aporta movilidad, pero su desempeño varía por interferencia, distancia, obstáculos y densidad de clientes.",
                      "Para tráfico crítico, prioriza enlaces cableados y reserva inalámbrico para movilidad y acceso flexible."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar correctamente el comportamiento del medio compartido y escoger el método de acceso más adecuado según el escenario."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M3",
            title: "Enrutamiento básico",
            topics: [
              {
                code: "3.1",
                title: "Cómo enruta un host",
                summary:
                  "Un host decide el siguiente salto comparando la IP destino con su propia red local. Si el destino está fuera de su subred, envía el tráfico a la puerta de enlace predeterminada.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_3.1.png",
                    alt: "Referencia visual del tema 3.1: Cómo enruta un host."
                  }
                ],
                sections: [
                  {
                    title: "Decisión de reenvío del host",
                    items: [
                      "El host aplica máscara o prefijo para determinar si la IP destino pertenece a su red local.",
                      "Si el destino está en la misma red, resuelve la MAC del destino y envía directamente.",
                      "Si el destino es remoto, encapsula hacia la MAC del gateway, no hacia la MAC final."
                    ]
                  },
                  {
                    title: "Puerta de enlace predeterminada",
                    items: [
                      "La puerta de enlace es la interfaz del router que conecta la LAN con otras redes.",
                      "Sin gateway correcto, el host puede comunicarse localmente pero falla hacia redes remotas.",
                      "En IPv6, la gateway suele aprenderse por RA; en IPv4 se configura manual o por DHCP."
                    ]
                  },
                  {
                    title: "Flujo local y remoto",
                    items: [
                      "Tráfico local: host -> switch -> host destino en la misma subred.",
                      "Tráfico remoto: host -> switch -> router (gateway) -> red de destino.",
                      "Aunque cambia el next-hop de capa 2, la IP destino de capa 3 se mantiene extremo a extremo."
                    ]
                  },
                  {
                    title: "Visualización de rutas en el host",
                    items: [
                      "La tabla de enrutamiento del host contiene ruta conectada, ruta local y ruta por defecto.",
                      "La ruta por defecto (0.0.0.0/0 o ::/0) se usa cuando no existe coincidencia más específica.",
                      "Comandos útiles: `ipconfig`, `route print`, `netstat -rn`, `ip route` según sistema operativo."
                    ]
                  },
                  {
                    title: "Diagnóstico rápido",
                    items: [
                      "Verificar IP, máscara/prefijo y gateway antes de revisar equipos de red.",
                      "Probar secuencia: ping a sí mismo, a vecino local, a gateway y a destino remoto.",
                      "Si falla solo lo remoto, el primer sospechoso es gateway/ruta por defecto."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar y verificar cómo un host decide el next-hop para destinos locales y remotos en IPv4/IPv6."
                    ]
                  }
                ]
              },
              {
                code: "3.2",
                title: "Tablas de enrutamiento",
                summary:
                  "La tabla de enrutamiento del router define por dónde reenviar cada paquete. Interpretar rutas conectadas, estáticas y dinámicas permite resolver pérdidas de conectividad con precisión.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_3.2.png",
                    alt: "Referencia visual del tema 3.2: Tablas de enrutamiento."
                  }
                ],
                sections: [
                  {
                    title: "Decisión de envío del router",
                    items: [
                      "El router busca coincidencia por prefijo más largo (longest prefix match).",
                      "Si hay varias rutas equivalentes, puede aplicar balanceo según plataforma/configuración.",
                      "Si no encuentra ruta válida y no existe ruta por defecto, descarta el paquete."
                    ]
                  },
                  {
                    title: "Estructura de la tabla de enrutamiento IP",
                    items: [
                      "Cada entrada define prefijo destino, siguiente salto o interfaz de salida, y métrica.",
                      "Las rutas conectadas aparecen automáticamente cuando una interfaz está up/up con IP válida.",
                      "La distancia administrativa y la métrica ayudan a elegir la mejor ruta cuando hay varias opciones."
                    ]
                  },
                  {
                    title: "Enrutamiento estático",
                    items: [
                      "Se configura manualmente y ofrece control total del camino de tráfico.",
                      "Es útil en topologías pequeñas, rutas de respaldo o segmentos con comportamiento predecible.",
                      "Escala de forma limitada: requiere mantenimiento manual ante cambios de topología."
                    ]
                  },
                  {
                    title: "Enrutamiento dinámico",
                    items: [
                      "Protocolos como OSPF, EIGRP o RIP intercambian rutas entre routers automáticamente.",
                      "Mejoran convergencia y adaptabilidad frente a fallas o cambios de red.",
                      "Exigen diseño y control para evitar inestabilidad, rutas subóptimas o sobrecarga."
                    ]
                  },
                  {
                    title: "Lectura de tabla IPv4",
                    items: [
                      "Interpretar códigos de origen de ruta (conectada, estática, dinámica) es básico para troubleshooting.",
                      "Verificar presencia de red destino, prefijo correcto y siguiente salto alcanzable.",
                      "Comandos clave: `show ip route`, `show ip interface brief`, `traceroute`."
                    ]
                  },
                  {
                    title: "Ruta de resolución de fallas",
                    items: [
                      "Confirmar estado de interfaces antes de analizar protocolos de routing.",
                      "Validar tabla del router origen y del router intermedio donde se interrumpe el tráfico.",
                      "Corregir por orden: direccionamiento, interfaz, ruta, y luego políticas/filtros."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar tablas de enrutamiento y justificar decisiones de reenvío para aislar y corregir fallas de conectividad."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M4",
            title: "Direccionamiento IPv6",
            topics: [
              {
                code: "4.1",
                title: "Tipos de direcciones IPv6",
                summary:
                  "IPv6 define distintos tipos de direcciones para resolver alcance, enrutamiento y servicios. Distinguir unidifusión, multidifusión, anycast, GUA y LLA es clave para configurar y diagnosticar redes modernas.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_4.1.png",
                    alt: "Referencia visual del tema 4.1: Tipos de direcciones IPv6."
                  }
                ],
                sections: [
                  {
                    title: "Unidifusión, multidifusión y anycast",
                    items: [
                      "Unidifusión identifica una única interfaz destino; es el caso más común en tráfico host a host.",
                      "Multidifusión entrega tráfico a un grupo de interfaces suscritas y reemplaza funciones históricas de broadcast en IPv4.",
                      "Anycast permite que varias interfaces compartan la misma dirección y el tráfico llegue al nodo más cercano según enrutamiento."
                    ]
                  },
                  {
                    title: "Longitud de prefijo IPv6",
                    items: [
                      "IPv6 usa prefijos, por ejemplo /64, para separar porción de red e identificador de interfaz.",
                      "La práctica recomendada en LAN es /64 para compatibilidad con SLAAC y descubrimiento de vecinos.",
                      "Prefijos mal definidos generan rutas incorrectas o falta de conectividad entre segmentos."
                    ]
                  },
                  {
                    title: "Unidifusión IPv6 y ULA",
                    items: [
                      "GUA (Global Unicast Address) es enrutable globalmente y se usa para comunicación entre redes.",
                      "ULA (Unique Local Address) se usa internamente; no está destinada a enrutamiento público en Internet.",
                      "LLA (Link-Local Address) es obligatoria en IPv6 y válida solo dentro del enlace local."
                    ]
                  },
                  {
                    title: "Estructura GUA y papel de LLA",
                    items: [
                      "Una GUA incluye prefijo global, subred e identificador de interfaz.",
                      "Las LLA (normalmente fe80::/10) se usan para control local: NDP, RA y vecindad en el mismo segmento.",
                      "Los routers y hosts dependen de LLA para operaciones básicas, incluso cuando también tienen GUA."
                    ]
                  },
                  {
                    title: "Aplicación y verificación",
                    items: [
                      "Identificar el tipo de dirección IPv6 de una interfaz antes de diagnosticar conectividad.",
                      "Verificar prefijos y alcance con comandos de inspección en host y router.",
                      "Diferenciar problemas de enrutamiento global (GUA) de problemas de enlace local (LLA)."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Clasificar direcciones IPv6 por tipo y alcance para tomar decisiones correctas de diseño, configuración y troubleshooting."
                    ]
                  }
                ]
              },
              {
                code: "4.2",
                title: "Configuración estática GUA y LLA",
                summary:
                  "La configuración estática IPv6 permite control preciso del direccionamiento en routers y hosts. Aplicar correctamente GUA y LLA reduce errores de vecindad, enrutamiento y administración.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_4.2.png",
                    alt: "Referencia visual del tema 4.2: Configuración estática GUA y LLA."
                  }
                ],
                sections: [
                  {
                    title: "GUA estática en un enrutador",
                    items: [
                      "Habilitar enrutamiento IPv6 y asignar la GUA por interfaz con su prefijo correcto.",
                      "Confirmar estado administrativo y operativo de la interfaz para evitar falsos positivos de configuración.",
                      "Documentar la asignación por enlace para mantener consistencia entre equipos y subredes."
                    ]
                  },
                  {
                    title: "GUA estática en un host Windows",
                    items: [
                      "Configurar dirección IPv6, longitud de prefijo y gateway predeterminado acordes al segmento.",
                      "Verificar que DNS IPv6 y gateway correspondan a la misma arquitectura de direccionamiento.",
                      "Evitar mezcla incoherente de parámetros manuales y automáticos en una misma interfaz."
                    ]
                  },
                  {
                    title: "LLA estática",
                    items: [
                      "La LLA puede configurarse manualmente para facilitar administración y troubleshooting en enlaces críticos.",
                      "Su alcance es local al enlace, por lo que no se enruta entre redes.",
                      "Una LLA consistente simplifica protocolos de control y lectura de tablas de vecinos."
                    ]
                  },
                  {
                    title: "Validación de configuración",
                    items: [
                      "Comprobar direcciones y estado con comandos de verificación en host y router.",
                      "Probar conectividad local (LLA) y remota (GUA) con ping/traceroute IPv6.",
                      "Revisar tabla de vecinos cuando exista conectividad parcial o intermitente."
                    ]
                  },
                  {
                    title: "Errores comunes",
                    items: [
                      "Prefijo incorrecto o gateway fuera del segmento.",
                      "Interfaz sin habilitar o con parámetros incompletos.",
                      "Confundir alcance de LLA con direccionamiento enrutable global."
                    ]
                  },
                  {
                    title: "Comandos sugeridos",
                    items: [
                      "Router Cisco: `show ipv6 interface brief`, `show ipv6 route`, `show ipv6 neighbors`.",
                      "Host Windows: `ipconfig /all` y `ping -6` para validar resolución y conectividad.",
                      "Pruebas por salto: `tracert -6` o `traceroute -6` para ubicar dónde se corta el tráfico."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Configurar y verificar direcciones IPv6 estáticas (GUA y LLA) con criterios operativos que permitan resolver fallas de conectividad rápidamente."
                    ]
                  }
                ]
              },
              {
                code: "4.3",
                title: "Direccionamiento dinámico para GUA IPv6",
                summary:
                  "El direccionamiento dinámico en IPv6 permite asignar GUA sin configuración manual por host. Entender RS/RA, SLAAC y DHCPv6 (sin estado o con estado) es fundamental para desplegar redes escalables.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_4.3.png",
                    alt: "Referencia visual del tema 4.3: Direccionamiento dinámico para GUA IPv6."
                  }
                ],
                sections: [
                  {
                    title: "Mensajes RS y RA",
                    items: [
                      "RS (Router Solicitation) acelera la obtención de parámetros IPv6 al solicitar anuncios de router.",
                      "RA (Router Advertisement) informa prefijo, gateway y banderas para definir método de asignación.",
                      "Las banderas M y O del RA indican si se debe usar DHCPv6 con estado o solo parámetros adicionales."
                    ]
                  },
                  {
                    title: "Método 1: SLAAC",
                    items: [
                      "El host construye su GUA usando el prefijo del RA más un identificador de interfaz (IID).",
                      "No requiere servidor DHCPv6 para dirección IP, por lo que reduce complejidad operativa.",
                      "Es común en redes donde se busca autoconfiguración rápida con administración central mínima."
                    ]
                  },
                  {
                    title: "SLAAC + DHCPv6 sin estado vs con estado",
                    items: [
                      "SLAAC + DHCPv6 sin estado: el host obtiene IP por SLAAC y parámetros extra (DNS, dominio) por DHCPv6.",
                      "DHCPv6 con estado: el servidor entrega la dirección y conserva control central de asignaciones.",
                      "La elección depende de trazabilidad requerida, políticas de seguridad y facilidad de operación."
                    ]
                  },
                  {
                    title: "Generación de identificador de interfaz (IID)",
                    items: [
                      "EUI-64 deriva IID desde la MAC y facilita unicidad, pero puede exponer información del hardware.",
                      "IID aleatorio o temporal mejora privacidad y reduce rastreo del dispositivo.",
                      "Muchos sistemas modernos priorizan direcciones temporales para tráfico saliente."
                    ]
                  },
                  {
                    title: "Verificación y troubleshooting",
                    items: [
                      "Comprobar recepción de RA y prefijos correctos en hosts del segmento.",
                      "Validar si el host tomó modo SLAAC, DHCPv6 sin estado o con estado según banderas RA.",
                      "Si no hay GUA, revisar gateway local, filtros ICMPv6 y estado del servicio DHCPv6."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Implementar direccionamiento dinámico IPv6 de forma controlada, diferenciando claramente SLAAC y DHCPv6 según el objetivo operativo."
                    ]
                  }
                ]
              },
              {
                code: "4.4",
                title: "Direccionamiento dinámico para LLA de IPv6",
                summary:
                  "Las direcciones link-local (LLA) se generan automáticamente en IPv6 y son imprescindibles para comunicación dentro del enlace y procesos de control como NDP. Su correcta validación evita fallas locales difíciles de detectar.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_4.4.png",
                    alt: "Referencia visual del tema 4.4: Direccionamiento dinámico para LLA de IPv6."
                  }
                ],
                sections: [
                  {
                    title: "LLA dinámicos",
                    items: [
                      "Toda interfaz IPv6 activa genera una LLA en el prefijo fe80::/10.",
                      "La LLA solo es válida en el segmento local y no se enruta entre redes.",
                      "Funciones críticas como descubrimiento de vecinos y next-hop IPv6 dependen de LLA."
                    ]
                  },
                  {
                    title: "LLA dinámicos en Windows",
                    items: [
                      "Windows asigna LLA automáticamente al habilitar IPv6 en una interfaz.",
                      "Puede coexistir con GUA/ULA, pero la conectividad local sigue resolviéndose mediante LLA.",
                      "Conviene validar la LLA antes de escalar incidentes de routing o DNS."
                    ]
                  },
                  {
                    title: "LLA dinámicos en enrutadores Cisco",
                    items: [
                      "Cisco IOS genera LLA automática por interfaz IPv6, usada para protocolos y vecindad.",
                      "Las adyacencias y rutas pueden referenciar next-hop link-local.",
                      "Una interfaz sin LLA funcional puede romper descubrimiento de vecinos y convergencia."
                    ]
                  },
                  {
                    title: "Verificación de configuración IPv6",
                    items: [
                      "Verificar LLA y GUA por interfaz con comandos de inspección en host y router.",
                      "Probar `ping` a la LLA usando el identificador de interfaz cuando aplique.",
                      "Revisar tabla de vecinos para confirmar resolución correcta entre nodos del enlace."
                    ]
                  },
                  {
                    title: "Fallas frecuentes",
                    items: [
                      "Filtrado indebido de ICMPv6 en firewalls locales o de borde.",
                      "Interfaz administrativamente down o con parámetros incompletos.",
                      "Confusión entre pruebas de alcance local (LLA) y pruebas de alcance global (GUA)."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Verificar y diagnosticar direccionamiento link-local IPv6 para asegurar operación local estable y soporte efectivo de NDP."
                    ]
                  }
                ]
              },
              {
                code: "4.5",
                title: "Direcciones Multicast de IPv6",
                summary:
                  "IPv6 usa multicast de forma nativa para operaciones de control y descubrimiento, eliminando broadcast tradicional. Comprender grupos bien conocidos y direcciones de nodo solicitado es esencial para interpretar NDP y tráfico de enlace.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_4.5.png",
                    alt: "Referencia visual del tema 4.5: Direcciones Multicast de IPv6."
                  }
                ],
                sections: [
                  {
                    title: "Direcciones IPv6 de multidifusión asignadas",
                    items: [
                      "Las direcciones multicast comienzan en ff00::/8 y se entregan a grupos específicos, no a todos los hosts.",
                      "Cada grupo representa una función o conjunto de receptores dentro de un alcance determinado.",
                      "Este modelo mejora eficiencia al reducir tráfico innecesario en comparación con mecanismos de difusión amplia."
                    ]
                  },
                  {
                    title: "Multicast IPv6 bien conocido",
                    items: [
                      "Ejemplos comunes: ff02::1 (todos los nodos) y ff02::2 (todos los routers) en alcance de enlace.",
                      "Los mensajes RS/RA y procesos NDP dependen de estos grupos para operación inicial de IPv6.",
                      "Bloquear multicast crítico puede impedir autoconfiguración y descubrimiento de vecinos."
                    ]
                  },
                  {
                    title: "Multicast de nodo solicitado",
                    items: [
                      "Cada unicast/anycast IPv6 genera una dirección solicitada de nodo asociada.",
                      "Se utiliza en Neighbor Solicitation para resolver direcciones de capa 2 de forma eficiente.",
                      "Reduce ruido de red porque la consulta llega a un grupo específico, no a todos los dispositivos."
                    ]
                  },
                  {
                    title: "Relación con NDP",
                    items: [
                      "NDP reemplaza funciones de ARP usando ICMPv6 y grupos multicast definidos.",
                      "La resolución de vecinos y detección de duplicados (DAD) dependen de multicast operativo.",
                      "Problemas en multicast local suelen reflejarse como pérdida de conectividad intermitente."
                    ]
                  },
                  {
                    title: "Guía de validación",
                    items: [
                      "Confirmar membresía a grupos multicast relevantes en host y router.",
                      "Verificar que switches y políticas de seguridad no bloqueen ICMPv6 esencial.",
                      "Correlacionar tabla de vecinos con pruebas de conectividad para aislar fallas de descubrimiento."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Interpretar y validar el uso de multicast IPv6 en procesos de control, especialmente en descubrimiento de vecinos y operación local de la red."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M5",
            title: "Descubrimiento de vecinos IPv6",
            topics: [
              {
                code: "5.1",
                title: "Operación de descubrimiento de vecinos",
                summary:
                  "Neighbor Discovery Protocol (NDP) permite que IPv6 descubra vecinos, resuelva direcciones de capa 2 y aprenda parámetros de red sin ARP. Su operación correcta es crítica para conectividad local y salida hacia otras redes.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_5.1.png",
                    alt: "Referencia visual del tema 5.1: Operación de descubrimiento de vecinos."
                  }
                ],
                sections: [
                  {
                    title: "Detección de vecinos IPv6",
                    items: [
                      "Cuando una interfaz IPv6 se activa, inicia procesos de descubrimiento con mensajes ICMPv6.",
                      "El host identifica routers locales, aprende prefijos y detecta vecinos en el mismo enlace.",
                      "NDP opera sobre direcciones multicast y reduce tráfico innecesario frente a mecanismos de difusión masiva."
                    ]
                  },
                  {
                    title: "Mensajes principales de NDP",
                    items: [
                      "NS/NA (Neighbor Solicitation/Advertisement): resuelven y confirman direcciones de vecinos.",
                      "RS/RA (Router Solicitation/Advertisement): permiten descubrir puerta de enlace y parámetros IPv6.",
                      "Redirect: un router puede sugerir un next-hop más eficiente para un destino."
                    ]
                  },
                  {
                    title: "Resolución de direcciones en IPv6",
                    items: [
                      "Para enviar en la misma red, el host usa NS hacia la multicast de nodo solicitado del destino.",
                      "El vecino responde con NA y su dirección MAC, permitiendo encapsulación de capa 2.",
                      "La información se guarda en caché de vecinos; si expira o cambia, el proceso se repite."
                    ]
                  },
                  {
                    title: "NDP y detección de direcciones duplicadas (DAD)",
                    items: [
                      "Antes de usar una IPv6, el host verifica que no exista otro nodo con la misma dirección.",
                      "Si hay conflicto, la dirección no debe activarse para evitar colisiones lógicas.",
                      "DAD evita errores silenciosos que degradan la red de forma intermitente."
                    ]
                  },
                  {
                    title: "Verificación y troubleshooting",
                    items: [
                      "Comprobar tabla de vecinos en host/router para validar aprendizaje de direcciones.",
                      "Verificar recepción de RA y estado de gateway cuando falle conectividad remota.",
                      "Si falla conectividad local, revisar ICMPv6 filtrado, VLAN, y estado de interfaz en ambos extremos."
                    ]
                  },
                  {
                    title: "Comandos sugeridos",
                    items: [
                      "Windows: `netsh interface ipv6 show neighbors`, `ipconfig /all`, `ping -6`.",
                      "Cisco IOS: `show ipv6 neighbors`, `show ipv6 interface`, `show ipv6 route`.",
                      "Pruebas de ruta: `tracert -6` o `traceroute -6` para ubicar el punto de falla."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar y validar la operación de NDP para resolver fallas de descubrimiento, vecindad y conectividad IPv6 de manera estructurada."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M6",
            title: "Conmutadores y enrutadores Cisco",
            topics: [
              {
                code: "6.1",
                title: "Conmutadores Cisco",
                summary:
                  "Los conmutadores Cisco son el núcleo de la conectividad LAN. Su función principal es interconectar dispositivos finales de forma eficiente mediante conmutación de tramas y aprendizaje de direcciones MAC.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_6.1.png",
                    alt: "Referencia visual del tema 6.1: Conmutadores Cisco."
                  }
                ],
                sections: [
                  {
                    title: "Conectar más dispositivos",
                    items: [
                      "Un switch permite ampliar la LAN agregando puertos para hosts, impresoras, teléfonos IP y puntos de acceso.",
                      "Cada puerto del switch crea un dominio de colisión independiente, mejorando rendimiento frente a medios compartidos.",
                      "La topología estrella con switches simplifica crecimiento, soporte y segmentación por VLAN."
                    ]
                  },
                  {
                    title: "Conmutadores LAN de Cisco",
                    items: [
                      "Los switches de acceso operan principalmente en capa 2 y conmutan usando tabla MAC.",
                      "Modelos multicapa integran funciones de capa 3 para inter-VLAN y políticas de enrutamiento local.",
                      "Seleccionar plataforma depende de densidad de puertos, PoE, uplinks y capacidad de switching."
                    ]
                  },
                  {
                    title: "Componentes del switch LAN",
                    items: [
                      "Hardware clave: CPU, RAM, flash, ASIC, backplane/switch fabric y fuentes de alimentación.",
                      "Interfaces físicas: puertos de acceso, troncales, puertos de administración y consola.",
                      "El plano de control gestiona protocolos; el plano de datos reenvía tramas a alta velocidad."
                    ]
                  },
                  {
                    title: "Operación del conmutador LAN",
                    items: [
                      "Aprende MAC de origen por puerto y usa esa información para reenviar de manera selectiva.",
                      "Si desconoce la MAC destino, inunda la trama dentro de la VLAN correspondiente.",
                      "La tabla MAC envejece entradas inactivas para adaptarse a cambios de topología."
                    ]
                  },
                  {
                    title: "Comandos de verificación",
                    items: [
                      "`show interfaces status` para validar estado y velocidad de puertos.",
                      "`show mac address-table` para verificar aprendizaje de direcciones.",
                      "`show vlan brief` para confirmar segmentación lógica en el switch."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Explicar cómo opera un conmutador Cisco y validar su funcionamiento básico en una LAN real o de laboratorio."
                    ]
                  }
                ]
              },
              {
                code: "6.2",
                title: "Velocidades del conmutador y métodos de reenvío",
                summary:
                  "El rendimiento de un switch depende del método de reenvío, la capacidad de búfer y la negociación de velocidad/dúplex. Estos factores impactan directamente latencia, pérdida y estabilidad de la red.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_6.2.png",
                    alt: "Referencia visual del tema 6.2: Velocidades del conmutador y métodos de reenvío."
                  }
                ],
                sections: [
                  {
                    title: "Métodos de reenvío en switches Cisco",
                    items: [
                      "Store-and-forward: verifica FCS antes de reenviar; mayor confiabilidad con algo más de latencia.",
                      "Cut-through: reenvía apenas lee MAC destino; menor latencia pero puede propagar tramas con errores.",
                      "Fragment-free (según plataforma) intenta balancear latencia y control de errores."
                    ]
                  },
                  {
                    title: "Conmutación cut-through",
                    items: [
                      "Es útil en escenarios sensibles a latencia, como ciertos tráficos de tiempo real.",
                      "Debe evaluarse junto con calidad de medio para no incrementar retransmisiones por tramas defectuosas.",
                      "No todos los modelos o condiciones operativas aplican el mismo comportamiento de forma idéntica."
                    ]
                  },
                  {
                    title: "Búfer de memoria en conmutadores",
                    items: [
                      "Los búferes absorben picos de tráfico cuando la salida está congestionada o a menor velocidad.",
                      "Arquitecturas comunes: memoria por puerto o memoria compartida, según diseño del equipo.",
                      "Búfer insuficiente puede causar drops y degradar aplicaciones sensibles a pérdida/jitter."
                    ]
                  },
                  {
                    title: "Velocidad y dúplex",
                    items: [
                      "La negociación automática define velocidad y dúplex entre interfaces compatibles.",
                      "Un desajuste de dúplex (full/half) provoca rendimiento bajo, colisiones tardías y errores.",
                      "Solo fija manualmente si existe requerimiento específico y controlado en ambos extremos."
                    ]
                  },
                  {
                    title: "Auto-MDIX",
                    items: [
                      "Auto-MDIX detecta y corrige automáticamente pares TX/RX, reduciendo dependencia del tipo de cable.",
                      "Simplifica implementación al minimizar errores entre cable directo y cruzado.",
                      "Si no está disponible o falla negociación, revisar pinout físico y configuración de puertos."
                    ]
                  },
                  {
                    title: "Diagnóstico de rendimiento",
                    items: [
                      "Revisar contadores de interfaz para detectar CRC, colisiones o drops.",
                      "Verificar coincidencia de velocidad/dúplex entre ambos extremos del enlace.",
                      "Correlacionar síntomas de aplicación con estado físico y estadísticas de switching."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Evaluar el comportamiento de reenvío del switch y ajustar parámetros de enlace para mejorar estabilidad y desempeño."
                    ]
                  }
                ]
              },
              {
                code: "6.3",
                title: "Proceso de Arranque del Conmutador",
                summary:
                  "El arranque de un switch Cisco sigue una secuencia definida: inicialización de hardware, carga del IOS y lectura de configuración. Entender este proceso permite diagnosticar fallas desde el primer encendido.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_6.3.png",
                    alt: "Referencia visual del tema 6.3: Proceso de Arranque del Conmutador."
                  }
                ],
                sections: [
                  {
                    title: "Encendido del conmutador",
                    items: [
                      "Al energizar, el switch ejecuta POST para validar memoria, CPU e interfaces básicas.",
                      "Si el hardware pasa validaciones, el boot loader localiza la imagen IOS en flash.",
                      "Una falla en POST o imagen IOS corrupta puede dejar el equipo en modo de recuperación."
                    ]
                  },
                  {
                    title: "Administración dentro de banda y fuera de banda",
                    items: [
                      "Dentro de banda: gestión por red (SSH/Telnet/SNMP) usando una interfaz SVI o ruta disponible.",
                      "Fuera de banda: acceso por consola o puerto dedicado de management, útil cuando no hay conectividad IP.",
                      "Para puesta en marcha segura, se recomienda habilitar primero acceso por consola y luego SSH."
                    ]
                  },
                  {
                    title: "Archivos de inicio del IOS",
                    items: [
                      "La imagen del sistema operativo se almacena normalmente en flash.",
                      "La configuración persistente se guarda en startup-config (NVRAM) y se carga al iniciar.",
                      "Si no existe startup-config, el equipo arranca con configuración por defecto y entra a setup inicial."
                    ]
                  },
                  {
                    title: "Secuencia de arranque resumida",
                    items: [
                      "1) POST e inicialización de hardware.",
                      "2) Carga del boot loader y localización del IOS.",
                      "3) Carga del IOS y aplicación de startup-config.",
                      "4) Disponibilidad operativa para administración y forwarding."
                    ]
                  },
                  {
                    title: "Comandos de verificación",
                    items: [
                      "`show version` para confirmar IOS, uptime y origen de arranque.",
                      "`show boot` para revisar variable de arranque y archivos configurados.",
                      "`dir flash:` y `show startup-config` para validar imagen y configuración persistente."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Describir y validar el proceso de arranque del switch Cisco para resolver incidencias de inicialización de forma estructurada."
                    ]
                  }
                ]
              },
              {
                code: "6.4",
                title: "Enrutadores Cisco",
                summary:
                  "El router Cisco interconecta redes distintas y toma decisiones de reenvío en capa 3. Conocer sus componentes y puertos es esencial para despliegue, administración y troubleshooting.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_6.4.png",
                    alt: "Referencia visual del tema 6.4: Enrutadores Cisco."
                  }
                ],
                sections: [
                  {
                    title: "Componentes del enrutador Cisco",
                    items: [
                      "CPU, RAM, NVRAM y flash sostienen ejecución del IOS, tablas y configuración persistente.",
                      "El router mantiene tablas de enrutamiento, ARP/vecinos y estados de protocolos.",
                      "Su arquitectura está orientada a decidir next-hop y aplicar políticas de tráfico."
                    ]
                  },
                  {
                    title: "Funciones y planos del router",
                    items: [
                      "Plano de control: ejecuta protocolos de routing y administración del dispositivo.",
                      "Plano de datos: reenvía paquetes según FIB/tabla de rutas con prioridad de rendimiento.",
                      "Plano de gestión: habilita monitoreo, acceso remoto y operación segura del equipo."
                    ]
                  },
                  {
                    title: "Puertos e interfaces de un enrutador",
                    items: [
                      "Interfaces WAN/LAN (físicas o lógicas) conectan segmentos y transportes distintos.",
                      "Puertos de consola/auxiliar/USB facilitan administración inicial o recuperación.",
                      "La correcta identificación de interfaces evita errores de direccionamiento y rutas."
                    ]
                  },
                  {
                    title: "Criterios de selección e instalación",
                    items: [
                      "Dimensionar por throughput, número de interfaces, servicios de seguridad y crecimiento esperado.",
                      "Planificar redundancia eléctrica y topológica para evitar puntos únicos de falla.",
                      "Documentar nomenclatura de interfaces y direccionamiento desde la puesta en producción."
                    ]
                  },
                  {
                    title: "Comandos de inspección inicial",
                    items: [
                      "`show ip interface brief` para revisar estado de interfaces y direccionamiento.",
                      "`show ip route` o `show ipv6 route` para validar rutas disponibles.",
                      "`show running-config` para confirmar parámetros activos y consistencia operativa."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Identificar componentes y puertos del router Cisco para implementar y validar conectividad entre redes."
                    ]
                  }
                ]
              },
              {
                code: "6.5",
                title: "Proceso de Arranque del Enrutador",
                summary:
                  "El router Cisco arranca siguiendo una cadena de inicialización que incluye ROM/ROMMON, carga del IOS y aplicación de startup-config. Comprender este ciclo es clave para recuperación y continuidad operativa.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_6.5.png",
                    alt: "Referencia visual del tema 6.5: Proceso de Arranque del Enrutador."
                  }
                ],
                sections: [
                  {
                    title: "Encendido del enrutador",
                    items: [
                      "En el encendido, se ejecuta POST y se inicializa hardware base del equipo.",
                      "ROM/ROMMON prepara el entorno de arranque y busca la imagen IOS definida.",
                      "Si no encuentra imagen válida, el equipo entra en modo de recuperación (ROMMON)."
                    ]
                  },
                  {
                    title: "Puertos de administración",
                    items: [
                      "Consola: acceso local inicial para configuración base o soporte de emergencia.",
                      "Gestión remota (SSH) se habilita después de direccionamiento y hardening mínimo.",
                      "Canales fuera de banda reducen tiempo de recuperación ante caída de la red de producción."
                    ]
                  },
                  {
                    title: "Secuencia de arranque del router Cisco",
                    items: [
                      "1) Inicialización y diagnóstico de hardware.",
                      "2) Carga del IOS desde flash/TFTP/USB según variables de boot.",
                      "3) Carga de startup-config desde NVRAM.",
                      "4) Activación de interfaces y servicios del plano de control."
                    ]
                  },
                  {
                    title: "Fallas comunes y recuperación",
                    items: [
                      "Imagen IOS ausente/corrupta o variable de arranque mal definida.",
                      "Startup-config inválida que bloquea gestión remota o interfaces.",
                      "Uso de ROMMON y transferencia de imagen como mecanismo de recuperación."
                    ]
                  },
                  {
                    title: "Checklist operativo inicial",
                    items: [
                      "Confirmar versión IOS, archivo de arranque y uptime tras reinicio.",
                      "Verificar interfaces críticas, rutas y acceso administrativo seguro.",
                      "Guardar configuración (`copy running-config startup-config`) tras cambios validados."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Diagnosticar el proceso de arranque del router y aplicar acciones de recuperación con impacto mínimo en la operación."
                    ]
                  }
                ]
              }
            ]
          },
          {
            key: "M7",
            title: "Solución de problemas básicos",
            topics: [
              {
                code: "7.1",
                title: "El Proceso para Solucionar Problemas",
                summary:
                  "La solución de problemas de red debe seguir un método estructurado para reducir tiempos de indisponibilidad y evitar cambios impulsivos. Un proceso consistente mejora precisión técnica y trazabilidad.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_7.1.png",
                    alt: "Referencia visual del tema 7.1: El Proceso para Solucionar Problemas."
                  }
                ],
                sections: [
                  {
                    title: "Descripción general del troubleshooting",
                    items: [
                      "El objetivo es identificar causa raíz y restaurar servicio sin generar efectos colaterales.",
                      "Debe combinarse observación técnica, hipótesis verificables y pruebas controladas.",
                      "La improvisación suele aumentar el tiempo de falla y dificultar auditoría posterior."
                    ]
                  },
                  {
                    title: "Recopilar información",
                    items: [
                      "Delimitar alcance: quiénes están afectados, desde cuándo y en qué servicios.",
                      "Levantar evidencias: estado de enlaces, IP/gateway, logs, eventos y cambios recientes.",
                      "Priorizar indicadores objetivos antes de realizar modificaciones en producción."
                    ]
                  },
                  {
                    title: "Métodos estructurados",
                    items: [
                      "Top-down: iniciar en capas altas y bajar cuando sea necesario.",
                      "Bottom-up: comenzar en físico/enlace y avanzar hacia capas superiores.",
                      "Follow-the-path: seguir el trayecto real del tráfico desde origen hasta destino.",
                      "Divide-and-conquer: probar en un punto intermedio para acotar rápidamente el problema."
                    ]
                  },
                  {
                    title: "Selección del método",
                    items: [
                      "Incidentes recurrentes de capa 1/2: normalmente conviene bottom-up.",
                      "Problemas de aplicación con enlace sano: suele ser más eficiente top-down.",
                      "Redes extensas o rutas complejas: follow-the-path reduce tiempo de aislamiento."
                    ]
                  },
                  {
                    title: "Ciclo operativo recomendado",
                    items: [
                      "1) Definir problema con evidencia.",
                      "2) Formular hipótesis y priorizar pruebas de menor riesgo.",
                      "3) Ejecutar corrección controlada y validar resultado.",
                      "4) Documentar causa raíz, cambio aplicado y prevención."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Aplicar un proceso de troubleshooting repetible, con decisiones técnicas justificadas y documentación útil para futuras incidencias."
                    ]
                  }
                ]
              },
              {
                code: "7.2",
                title: "Problema de Capa Física",
                summary:
                  "La capa física es la primera fuente de fallas de conectividad. Diagnosticar correctamente cableado, puertos, energía e indicadores permite resolver incidentes antes de escalar a capas superiores.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_7.2.png",
                    alt: "Referencia visual del tema 7.2: Problema de Capa Física."
                  }
                ],
                sections: [
                  {
                    title: "Problemas comunes de capa 1",
                    items: [
                      "Cables desconectados o dañados, conectores flojos y puertos defectuosos.",
                      "Interferencias electromagnéticas, exceso de distancia o mala calidad del medio.",
                      "Fuentes de energía inestables o dispositivos sin alimentación adecuada."
                    ]
                  },
                  {
                    title: "Indicadores LED en router/AP",
                    items: [
                      "LED de energía: confirma encendido y estado básico de hardware.",
                      "LED de enlace/actividad: indica sincronización y tráfico en interfaces.",
                      "Patrones de parpadeo o color anómalo suelen apuntar a velocidad/dúplex o autenticación."
                    ]
                  },
                  {
                    title: "Problemas de cableado",
                    items: [
                      "Verificar tipo de cable, pinout y longitud según estándar (cobre/fibra).",
                      "Revisar daños físicos, curvaturas excesivas y terminaciones defectuosas.",
                      "Confirmar negociación de velocidad/dúplex y compatibilidad transceptor/medio."
                    ]
                  },
                  {
                    title: "Pruebas rápidas de campo",
                    items: [
                      "Probar con cable conocido en buen estado y puerto alterno.",
                      "Validar `link up/down` en ambos extremos para descartar falso positivo local.",
                      "Aislar por segmentos: host -> switch -> gateway antes de revisar enrutamiento."
                    ]
                  },
                  {
                    title: "Comandos y herramientas útiles",
                    items: [
                      "Switch/router: `show interfaces`, `show interfaces status`, contadores CRC/drops.",
                      "Host: estado de NIC, renegociación de enlace y pruebas `ping` locales.",
                      "Herramientas físicas: tester de cable, certificador, OTDR (en fibra) según escenario."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Diagnosticar fallas de capa física con un procedimiento claro que minimice tiempo de indisponibilidad y cambios innecesarios."
                    ]
                  }
                ]
              },
              {
                code: "7.3",
                title: "Solución de Problemas de Conexión Inalámbrica",
                summary:
                  "Las fallas inalámbricas suelen combinar cobertura, interferencia y autenticación. Un diagnóstico por etapas permite aislar rápidamente si el problema está en radiofrecuencia, configuración o credenciales.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_7.3.png",
                    alt: "Referencia visual del tema 7.3: Solución de Problemas de Conexión Inalámbrica."
                  }
                ],
                sections: [
                  {
                    title: "Causas de problemas inalámbricos",
                    items: [
                      "Cobertura débil (RSSI bajo), interferencia de canales y obstáculos físicos.",
                      "Saturación de clientes en un AP o canal, especialmente en 2.4 GHz.",
                      "Incompatibilidades de estándar/banda o configuración de seguridad inconsistente."
                    ]
                  },
                  {
                    title: "Errores de autenticación y asociación",
                    items: [
                      "SSID correcto no garantiza acceso: clave, tipo de cifrado y políticas deben coincidir.",
                      "Errores WPA2/WPA3, filtrado MAC o portal cautivo mal configurado bloquean asociación.",
                      "Un cliente puede asociar al AP pero no obtener IP si DHCP falla en la red local."
                    ]
                  },
                  {
                    title: "Secuencia de diagnóstico recomendada",
                    items: [
                      "1) Verificar estado del radio y potencia del AP.",
                      "2) Confirmar asociación del cliente (SSID, seguridad, banda).",
                      "3) Validar direccionamiento IP, gateway y DNS obtenidos.",
                      "4) Probar conectividad local y luego salida a Internet."
                    ]
                  },
                  {
                    title: "Indicadores y herramientas",
                    items: [
                      "Revisar RSSI/SNR, tasa de datos, canal y nivel de utilización.",
                      "Usar análisis de espectro o escáner Wi-Fi para detectar solapamiento/interferencia.",
                      "Correlacionar eventos del AP/controlador con hora exacta del incidente."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Resolver incidentes Wi-Fi separando claramente problemas de radio, autenticación y servicios IP."
                    ]
                  }
                ]
              },
              {
                code: "7.4",
                title: "Problemas Comunes de Conectividad a Internet",
                summary:
                  "La conectividad a Internet depende de múltiples componentes: direccionamiento, gateway, DNS, firewall y rutas. Un método de verificación progresiva evita diagnósticos erróneos y reduce tiempo de resolución.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_7.4.png",
                    alt: "Referencia visual del tema 7.4: Problemas Comunes de Conectividad a Internet."
                  }
                ],
                sections: [
                  {
                    title: "Errores de configuración DHCP",
                    items: [
                      "Sin IP válida, máscara/prefijo correcto o gateway, no hay salida a Internet.",
                      "Pools agotados, exclusiones incorrectas o servidor DHCP inalcanzable afectan a múltiples usuarios.",
                      "Validar concesión DHCP es el primer filtro antes de revisar capas superiores."
                    ]
                  },
                  {
                    title: "Verificación de Internet y firewall",
                    items: [
                      "Comprobar parámetros locales: IP, gateway, DNS y estado de interfaz.",
                      "Revisar reglas de firewall/ACL/NAT que puedan bloquear tráfico saliente o de retorno.",
                      "Diferenciar fallo de acceso web (puertos 80/443) de fallo total de conectividad."
                    ]
                  },
                  {
                    title: "Divide y vencerás con ping",
                    items: [
                      "Probar por saltos: localhost -> gateway -> DNS público -> destino final.",
                      "Si falla en el primer salto externo, probable problema local o de borde inmediato.",
                      "Si llega a IP pero no por nombre, el problema suele estar en resolución DNS."
                    ]
                  },
                  {
                    title: "Comando tracert",
                    items: [
                      "`tracert`/`traceroute` muestra el camino y ayuda a ubicar dónde se interrumpe la ruta.",
                      "Permite diferenciar caída interna, problema del ISP o falla remota del destino.",
                      "Comparar trazas en distintos horarios ayuda a detectar congestión o rutas inestables."
                    ]
                  },
                  {
                    title: "netstat y nslookup",
                    items: [
                      "`netstat` permite revisar conexiones activas, puertos en escucha y estados anómalos.",
                      "`nslookup` valida si el DNS responde y qué dirección entrega para un dominio.",
                      "Combinados, ayudan a distinguir fallas de capa de transporte frente a fallas de resolución."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Diagnosticar conectividad a Internet con una secuencia lógica basada en evidencia y herramientas estándar."
                    ]
                  }
                ]
              },
              {
                code: "7.5",
                title: "Asistencia al cliente",
                summary:
                  "La asistencia técnica efectiva combina diagnóstico correcto y comunicación clara con el usuario. Una buena gestión del caso reduce reprocesos, mejora tiempos de atención y eleva calidad del servicio.",
                images: [
                  {
                    src: "./assets/images/network-addressing-troubleshooting-basics/C7_7.5.jpeg",
                    alt: "Referencia visual del tema 7.5: Asistencia al cliente."
                  }
                ],
                sections: [
                  {
                    title: "Fuentes de ayuda",
                    items: [
                      "Base de conocimiento interna, documentación del fabricante y runbooks del equipo.",
                      "Historial de incidentes similares para acelerar diagnóstico y evitar repetir errores.",
                      "Monitoreo y registros centralizados como evidencia objetiva del problema."
                    ]
                  },
                  {
                    title: "Cuándo escalar",
                    items: [
                      "Escalar cuando el incidente supera privilegios, alcance técnico o tiempos comprometidos.",
                      "Escalar con contexto completo: síntomas, pruebas realizadas, resultados y hora del evento.",
                      "Evitar escalaciones vacías que retrasan la atención y saturan niveles superiores."
                    ]
                  },
                  {
                    title: "Interacción con soporte",
                    items: [
                      "Comunicar en lenguaje claro: impacto, prioridad y acciones ya ejecutadas.",
                      "Alinear expectativas con el usuario sobre tiempos, ventanas de prueba y validación.",
                      "Mantener trazabilidad de cada contacto para continuidad entre turnos."
                    ]
                  },
                  {
                    title: "Resolución y validación",
                    items: [
                      "Confirmar recuperación técnica con pruebas objetivas antes de cerrar.",
                      "Validar con el usuario final que el servicio funciona según su caso real.",
                      "Registrar causa raíz y acción correctiva para prevenir reincidencia."
                    ]
                  },
                  {
                    title: "Casos y órdenes de trabajo",
                    items: [
                      "Abrir ticket con severidad adecuada y datos verificables del incidente.",
                      "Actualizar bitácora de actividades y cambios aplicados en cada intervención.",
                      "Cerrar con evidencia de solución, impacto final y recomendaciones preventivas."
                    ]
                  },
                  {
                    title: "Resultado del tema",
                    items: [
                      "Gestionar incidentes de red con enfoque técnico y de servicio, desde la apertura del caso hasta su cierre documentado."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "network-support-security",
        "title": "Soporte y Seguridad de red",
        "provider": "Cisco Networking Academy",
        "level": "Intermedio",
        "status": "En curso",
        "estimatedHours": 30,
        "summary": "Curso enfocado en diagn\u00f3stico, documentaci\u00f3n, soporte operativo y controles de ciberseguridad para proteger infraestructura, usuarios y servicios de red.",
        "tags": [
          "soporte",
          "troubleshooting",
          "seguridad",
          "ciberseguridad",
          "operaciones"
        ],
        "modules": [
          {
            "key": "M1",
            "title": "Soporte de Red",
            "topics": [
              {
                "code": "1.1",
                "title": "Metodolog\u00edas de diagn\u00f3stico y soluci\u00f3n de problemas",
                "summary": "Este tema establece un flujo de diagn\u00f3stico repetible para incidentes de red: recopilar evidencia, aislar por capas, formular y validar hip\u00f3tesis, y cerrar con documentaci\u00f3n trazable para evitar reincidencias.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_1_1.png",
                    "alt": "Referencia visual del tema 1.1: Metodolog\u00edas de diagn\u00f3stico y soluci\u00f3n de problemas."
                  }
                ],
                "sections": [
                  {
                    "title": "Proceso de siete pasos (operativo)",
                    "items": [
                      "Definir el problema con s\u00edntomas verificables (alertas, consola, reporte de usuario).",
                      "Recopilar informaci\u00f3n t\u00e9cnica del host/dispositivo y contexto de topolog\u00eda.",
                      "Analizar evidencia, eliminar causas y formular la hip\u00f3tesis m\u00e1s probable.",
                      "Probar la hip\u00f3tesis evaluando impacto, ventana de cambio y plan de reversa.",
                      "Resolver, comunicar al usuario y confirmar restauraci\u00f3n del servicio."
                    ]
                  },
                  {
                    "title": "M\u00e9todos de diagn\u00f3stico por capas",
                    "items": [
                      "Ascendente: iniciar en capa f\u00edsica cuando hay ca\u00eddas de enlace, errores o energ\u00eda.",
                      "Descendente: iniciar en aplicaci\u00f3n cuando el fallo es funcional pero hay conectividad base.",
                      "Divide y vencer\u00e1s: entrar por la capa con m\u00e1s evidencia para reducir tiempo de aislamiento.",
                      "Seguir la ruta y comparaci\u00f3n: validar cada salto y contrastar contra un estado conocido estable.",
                      "Sustituci\u00f3n controlada: reemplazar componente sospechoso para confirmar causa ra\u00edz."
                    ]
                  },
                  {
                    "title": "Evidencia m\u00ednima y trazabilidad",
                    "items": [
                      "Inventario relevante: fabricante, modelo, firmware, versi\u00f3n de SO y garant\u00eda.",
                      "Artefactos de red: topolog\u00eda f\u00edsica/l\u00f3gica, configuraciones y archivos de registro.",
                      "Historial del incidente: pasos ejecutados, comandos usados y resultados observados.",
                      "Validaci\u00f3n con usuario final antes de cerrar el ticket."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Aplicar un m\u00e9todo estructurado de troubleshooting que reduzca tiempo de diagn\u00f3stico, minimice cambios riesgosos y deje evidencia reutilizable."
                    ]
                  }
                ]
              },
              {
                "code": "1.2",
                "title": "Documentaci\u00f3n de red",
                "summary": "La documentaci\u00f3n de red es la base de un soporte eficiente: define el estado esperado de la infraestructura, acelera el diagn\u00f3stico y permite detectar desviaciones mediante topolog\u00edas, inventario y l\u00ednea base.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_1_2.png",
                    "alt": "Referencia visual del tema 1.2: Documentaci\u00f3n de red."
                  }
                ],
                "sections": [
                  {
                    "title": "Documentaci\u00f3n operativa imprescindible",
                    "items": [
                      "Conservar topolog\u00edas f\u00edsicas y l\u00f3gicas actualizadas en una ubicaci\u00f3n controlada.",
                      "Mantener inventario por dispositivo: modelo, firmware, SO, interfaces y rol.",
                      "Versionar configuraciones, bit\u00e1coras de cambios y respaldos fuera del sitio principal.",
                      "Registrar pol\u00edticas de enrutamiento, VLAN, seguridad y acceso remoto."
                    ]
                  },
                  {
                    "title": "Topolog\u00edas y alcance de red",
                    "items": [
                      "Diferenciar PAN, LAN, VLAN, WLAN, WMN, CAN, MAN, WAN y VPN seg\u00fan cobertura y administraci\u00f3n.",
                      "Usar diagramas f\u00edsicos para cableado/ubicaci\u00f3n y l\u00f3gicos para direccionamiento y rutas.",
                      "En redes empresariales, documentar capas de acceso, distribuci\u00f3n y n\u00facleo con distintos niveles de detalle."
                    ]
                  },
                  {
                    "title": "Servicios en nube y est\u00e1ndares inal\u00e1mbricos",
                    "items": [
                      "Clasificar servicios consumidos por la organizaci\u00f3n: SaaS, PaaS, IaaS y variantes XaaS.",
                      "Relacionar cada servicio con dependencias de red, seguridad y continuidad operativa.",
                      "Documentar est\u00e1ndares 802.11, bandas (2.4/5/6 GHz), capacidades MIMO y uso de espectro licenciado/no licenciado."
                    ]
                  },
                  {
                    "title": "L\u00ednea base y descubrimiento autom\u00e1tico",
                    "items": [
                      "Definir l\u00ednea base de rendimiento (disponibilidad, errores, uso de enlaces y tendencias de tr\u00e1fico).",
                      "Comparar comportamiento actual contra la l\u00ednea base para detectar anomal\u00edas reales.",
                      "Usar CDP para descubrir vecinos y completar mapas l\u00f3gicos cuando falta documentaci\u00f3n.",
                      "Comandos de apoyo: `show cdp neighbors` y `show cdp neighbors detail`."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Construir y mantener una documentaci\u00f3n de red trazable que reduzca tiempos de soporte, facilite cambios seguros y mejore la toma de decisiones t\u00e9cnicas."
                    ]
                  }
                ]
              },
              {
                "code": "1.3",
                "title": "Mesas de Ayuda",
                "summary": "La mesa de ayuda es el punto central de soporte y debe operar con pol\u00edticas claras, registro disciplinado de tiquetes y comunicaci\u00f3n efectiva con usuarios para resolver o escalar incidentes con trazabilidad.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_1_3.png",
                    "alt": "Referencia visual del tema 1.3: Mesas de Ayuda."
                  }
                ],
                "sections": [
                  {
                    "title": "Pol\u00edtica de seguridad y marco operativo",
                    "items": [
                      "Definir identificaci\u00f3n y autenticaci\u00f3n de usuarios, complejidad de contrase\u00f1as y requisitos de acceso remoto.",
                      "Aplicar SOP (procedimientos operativos est\u00e1ndar) para tareas repetibles y seguras.",
                      "Usar directrices complementarias cuando no exista un SOP formal para un caso espec\u00edfico.",
                      "Actualizar pol\u00edticas de forma continua seg\u00fan amenazas, vulnerabilidades y necesidades del negocio."
                    ]
                  },
                  {
                    "title": "Flujo de atenci\u00f3n y gesti\u00f3n de tiquetes",
                    "items": [
                      "Recibir solicitudes por portal, chat, tel\u00e9fono o correo y validar si procede abrir incidente.",
                      "Crear, clasificar y priorizar el tiquete con descripci\u00f3n clara del impacto y s\u00edntomas.",
                      "Resolver y cerrar con evidencia, o escalar cuando el caso exceda alcance o credenciales.",
                      "Documentar la soluci\u00f3n para alimentar la base de conocimiento y acelerar casos futuros."
                    ]
                  },
                  {
                    "title": "Entrevista t\u00e9cnica y escucha activa",
                    "items": [
                      "Guiar la conversaci\u00f3n con empat\u00eda: identificar qui\u00e9n, qu\u00e9 y cu\u00e1ndo del problema.",
                      "Combinar preguntas abiertas (contexto) y cerradas (hechos verificables).",
                      "Parafrasear y confirmar el incidente antes de ejecutar acciones t\u00e9cnicas.",
                      "Evitar interrupciones y jerga innecesaria para reducir fricci\u00f3n con el usuario."
                    ]
                  },
                  {
                    "title": "Datos t\u00e9cnicos m\u00ednimos para diagn\u00f3stico",
                    "items": [
                      "Host: fabricante, modelo, serie, versi\u00f3n de SO, medio de red y pruebas ping/tracert.",
                      "Windows: visor de eventos, administrador de dispositivos, tareas y herramientas de diagn\u00f3stico.",
                      "Infraestructura Cisco: comandos IOS, registros y capturas de paquetes para evidenciar s\u00edntomas.",
                      "Redactar notas claras, concisas y reutilizables por otros t\u00e9cnicos o niveles de escalamiento."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Gestionar incidentes de mesa de ayuda con calidad de servicio y rigor t\u00e9cnico, desde la apertura del tiquete hasta su resoluci\u00f3n o escalamiento documentado."
                    ]
                  }
                ]
              },
              {
                "code": "1.4",
                "title": "Solucionar problemas de conectividad de dispositivos finales",
                "summary": "El diagn\u00f3stico de conectividad en equipos finales requiere validar direccionamiento IP, comprobar alcance de Capa 3 y usar herramientas espec\u00edficas de Windows, Linux, macOS, iOS y Android para aislar la causa del fallo.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_1_4.jpeg",
                    "alt": "Referencia visual del tema 1.4: Solucionar problemas de conectividad de dispositivos finales."
                  }
                ],
                "sections": [
                  {
                    "title": "Paso 1: validar direccionamiento del host",
                    "items": [
                      "Confirmar IP, m\u00e1scara, puerta de enlace y DNS antes de asumir una falla de red troncal.",
                      "En Windows usar `ipconfig` para validaci\u00f3n r\u00e1pida y `ipconfig /all` para detalles (DHCP, MAC, arrendamiento, DNS).",
                      "En Linux usar `ifconfig` o `ip address` para verificar interfaces activas, direcciones y estado de enlace.",
                      "En macOS revisar GUI de red y complementar con `ifconfig`, `networksetup -listallnetworkservices` y `networksetup -getinfo <servicio>`."
                    ]
                  },
                  {
                    "title": "Paso 2: comprobar alcance y ruta de Capa 3",
                    "items": [
                      "Ejecutar `ping` hacia puerta de enlace, recursos locales y destinos remotos para medir p\u00e9rdida y latencia.",
                      "Si `ping` falla parcialmente, usar `tracert` (Windows) o `traceroute` (Linux/macOS) para ubicar el salto problem\u00e1tico.",
                      "Considerar pol\u00edticas de firewall: algunos equipos bloquean ICMP y pueden generar falsos negativos de conectividad.",
                      "Cuando se requiera validar puertos concretos, usar `nc`/`ncat` para comprobar apertura de servicios (por ejemplo, TCP 443)."
                    ]
                  },
                  {
                    "title": "Verificaci\u00f3n en dispositivos m\u00f3viles",
                    "items": [
                      "iOS: revisar datos IPv4/IPv6 y router en `Ajustes > Wi-Fi > (i)` sobre el SSID activo.",
                      "Android: comprobar Wi-Fi o datos m\u00f3viles en `Configuraci\u00f3n > Conexiones/Red e Internet` y validar autenticaci\u00f3n.",
                      "Si hay Wi-Fi sin internet, diferenciar entre enlace local funcional y falla de salida por puerta de enlace/ISP.",
                      "En Android se pueden usar herramientas de terceros para pruebas de `ping`, `trace` y verificaci\u00f3n de puertos."
                    ]
                  },
                  {
                    "title": "Secuencia de diagn\u00f3stico recomendada",
                    "items": [
                      "1) Verificar capa f\u00edsica/enlace (interfaz activa, se\u00f1al y autenticaci\u00f3n).",
                      "2) Validar direccionamiento (IP, m\u00e1scara, gateway, DNS).",
                      "3) Probar conectividad por IP (`ping`) y luego por nombre (DNS).",
                      "4) Trazar ruta y registrar evidencia para escalar cuando corresponda."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Aplicar un procedimiento multiplataforma para diagnosticar conectividad de dispositivos finales, identificando r\u00e1pidamente si la falla est\u00e1 en configuraci\u00f3n local, servicios de red o salida a Internet."
                    ]
                  }
                ]
              },
              {
                "code": "1.5",
                "title": "Solucionar problemas de una red",
                "summary": "Para diagnosticar fallas de red se requiere recopilar evidencia desde dispositivos Cisco, interpretar tr\u00e1fico con analizadores de protocolos y medir rendimiento real para separar problemas de capacidad, latencia o configuraci\u00f3n.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_1_5.png",
                    "alt": "Referencia visual del tema 1.5: Solucionar problemas de una red."
                  }
                ],
                "sections": [
                  {
                    "title": "Comandos IOS para recopilar evidencia",
                    "items": [
                      "Usar `show version`, `show running-config` y `show inventory` para validar estado, versi\u00f3n y contexto del equipo.",
                      "Verificar interfaces y direccionamiento con `show ip interface brief`, `show ipv6 interface brief` y `show interfaces`.",
                      "Revisar topolog\u00eda y aprendizaje con `show ip route`, `show ipv6 route`, `show cdp neighbors detail`, `show arp` y `show ipv6 neighbors`.",
                      "En conmutadores, validar capa 2 con `show vlan`, `show interface status` y `show mac-address table`."
                    ]
                  },
                  {
                    "title": "Niveles de acceso y uso eficiente de la CLI",
                    "items": [
                      "Diferenciar `EXEC de usuario` (>) y `EXEC privilegiado` (#); muchos comandos de diagn\u00f3stico avanzados exigen privilegio 15.",
                      "Entrar a modo privilegiado con `enable` solo cuando el procedimiento lo requiera y con control de credenciales.",
                      "Usar ayuda sensible al contexto con `?` y autocompletado con `Tab` para reducir errores de sintaxis.",
                      "Apoyarse en `show tech-support` cuando se necesite un paquete completo de informaci\u00f3n para escalamiento."
                    ]
                  },
                  {
                    "title": "Captura de paquetes y an\u00e1lisis de protocolos",
                    "items": [
                      "Utilizar analizadores como Wireshark para decodificar tramas por capas y observar comportamiento real del tr\u00e1fico.",
                      "Aplicar filtros por host, protocolo o puerto para centrarse en el flujo afectado y evitar ruido de captura.",
                      "Correlacionar cabeceras y tiempos entre capas para confirmar si la falla es de resoluci\u00f3n, transporte o aplicaci\u00f3n.",
                      "Asegurar que las capturas queden documentadas (fecha, origen, filtro y hallazgo) para trazabilidad t\u00e9cnica."
                    ]
                  },
                  {
                    "title": "Medici\u00f3n de rendimiento: ancho de banda, rendimiento y latencia",
                    "items": [
                      "Distinguir ancho de banda (capacidad te\u00f3rica) de rendimiento (bits reales entregados por segundo).",
                      "Considerar que el rendimiento disminuye por latencia, n\u00famero de saltos y procesamiento intermedio.",
                      "Usar pruebas de velocidad de Internet para diagn\u00f3stico r\u00e1pido de enlace WAN y percepci\u00f3n de usuario.",
                      "Emplear iPerf/iPerf3 entre cliente-servidor para obtener m\u00e9tricas por intervalo: transferencia y tasa de bits."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Resolver problemas de red con evidencia objetiva, combinando verificaci\u00f3n en IOS, an\u00e1lisis de tr\u00e1fico y medici\u00f3n de rendimiento para identificar la causa ra\u00edz con menor tiempo de diagn\u00f3stico."
                    ]
                  }
                ]
              },
              {
                "code": "1.6",
                "title": "Solucionar problemas de conectividad de forma remota",
                "summary": "El soporte remoto permite diagnosticar y corregir incidencias sin presencia f\u00edsica, pero exige controles estrictos de seguridad, uso de protocolos adecuados y plataformas de gesti\u00f3n que den visibilidad continua de la red.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_1_6.png",
                    "alt": "Referencia visual del tema 1.6: Solucionar problemas de conectividad de forma remota."
                  }
                ],
                "sections": [
                  {
                    "title": "Soporte remoto al usuario final",
                    "items": [
                      "Usar herramientas de escritorio remoto para observar y ajustar configuraciones directamente en el equipo del usuario.",
                      "Diferenciar modelos de sesi\u00f3n: control completo, asistencia supervisada o acceso desatendido seg\u00fan pol\u00edtica corporativa.",
                      "Registrar autorizaci\u00f3n del usuario y evidencia del cambio para mantener trazabilidad del soporte.",
                      "Restringir acceso remoto a personal autorizado para reducir riesgos de ingenier\u00eda social."
                    ]
                  },
                  {
                    "title": "Protocolos y herramientas de acceso remoto",
                    "items": [
                      "Telnet (TCP 23) es heredado y no cifra credenciales; evitarlo en entornos productivos.",
                      "SSH (TCP 22) proporciona autenticaci\u00f3n y cifrado de sesi\u00f3n; debe ser la opci\u00f3n por defecto para CLI remota.",
                      "RDP permite acceso gr\u00e1fico remoto a sistemas Windows; en macOS y otros entornos puede usarse VNC (TCP 5900).",
                      "Clientes comunes de administraci\u00f3n remota: PuTTY, Tera Term, OpenSSH y suites de escritorio remoto empresariales."
                    ]
                  },
                  {
                    "title": "VPN para soporte y trabajo remoto seguro",
                    "items": [
                      "Implementar VPN para proteger tr\u00e1fico de acceso remoto sobre Internet no confiable.",
                      "Distinguir VPN de sitio a sitio (t\u00fanel preconfigurado entre gateways) y VPN de acceso remoto (cliente a gateway).",
                      "Validar que el cifrado y la autenticaci\u00f3n de la VPN est\u00e9n activos antes de habilitar acceso a recursos internos.",
                      "Usar clientes corporativos aprobados (por ejemplo, AnyConnect) y controles de postura de seguridad."
                    ]
                  },
                  {
                    "title": "Sistemas de gesti\u00f3n de red (NMS)",
                    "items": [
                      "Monitorear dispositivos de red y clientes con telemetr\u00eda, SNMP/RMON y anal\u00edtica para detecci\u00f3n proactiva.",
                      "Modelo en nube: despliegue r\u00e1pido, acceso global y escalabilidad para redes distribuidas.",
                      "Modelo local (on-premises): mayor control de datos y cumplimiento en entornos con restricciones regulatorias.",
                      "Usar paneles de gesti\u00f3n para correlacionar salud, rendimiento y seguridad en un solo flujo operativo."
                    ]
                  },
                  {
                    "title": "Automatizaci\u00f3n y programabilidad",
                    "items": [
                      "Automatizar tareas repetitivas de configuraci\u00f3n, verificaci\u00f3n y despliegue para reducir errores humanos.",
                      "Aplicar scripts (por ejemplo, Python) y APIs para operar m\u00faltiples dispositivos de forma consistente.",
                      "Definir controles de cambio, validaciones previas y rollback para evitar impacto operativo.",
                      "Aprovechar automatizaci\u00f3n para acelerar resoluci\u00f3n de incidentes y mejorar disponibilidad del servicio."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Resolver incidencias de conectividad remota con procedimientos seguros y estandarizados, combinando acceso remoto, VPN, monitoreo centralizado y automatizaci\u00f3n para mejorar continuidad operativa."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "key": "M2",
            "title": "Amenazas, vulnerabilidades y ataques a la ciberseguridad",
            "topics": [
              {
                "code": "2.1",
                "title": "Amenazas comunes",
                "summary": "Las amenazas cibern\u00e9ticas afectan usuarios, dispositivos, redes, aplicaciones y nubes; por eso la gesti\u00f3n de riesgos debe cubrir todos los dominios de exposici\u00f3n y no solo el per\u00edmetro.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_2_1.jpeg",
                    "alt": "Referencia visual del tema 2.1: Amenazas comunes."
                  }
                ],
                "sections": [
                  {
                    "title": "Dominios de amenaza y superficie de ataque",
                    "items": [
                      "Un dominio de amenaza es un \u00e1rea de control o protecci\u00f3n que un atacante puede aprovechar para obtener acceso.",
                      "La superficie de ataque crece con acceso f\u00edsico, Wi-Fi fuera del per\u00edmetro, Bluetooth/NFC, nube y cadena de suministro.",
                      "Tambi\u00e9n aportan riesgo los medios extra\u00edbles, adjuntos maliciosos y cuentas institucionales en redes sociales.",
                      "La protecci\u00f3n efectiva exige controles t\u00e9cnicos y operativos coordinados entre dominios."
                    ]
                  },
                  {
                    "title": "Clasificaci\u00f3n de amenazas cibern\u00e9ticas",
                    "items": [
                      "Software malicioso, errores de software y sabotaje intencional.",
                      "Error humano, robo de equipos y fallas de hardware.",
                      "Interrupciones de servicio (energ\u00eda, agua, infraestructura) y desastres naturales.",
                      "Clasificar amenazas por probabilidad e impacto ayuda a priorizar inversiones de seguridad."
                    ]
                  },
                  {
                    "title": "Amenazas internas y externas",
                    "items": [
                      "Las internas pueden provenir de empleados o contratistas que filtran datos o introducen medios infectados.",
                      "Las externas incluyen atacantes que explotan vulnerabilidades t\u00e9cnicas o aplican ingenier\u00eda social.",
                      "Ambas buscan activos de alto valor: propiedad intelectual, datos financieros y registros sensibles.",
                      "La mitigaci\u00f3n requiere controles de acceso, monitoreo continuo y cultura de seguridad."
                    ]
                  },
                  {
                    "title": "Riesgos por dominio operativo",
                    "items": [
                      "Usuario: desconocimiento, descargas no autorizadas, VPN no autorizada y uso inseguro de sitios web.",
                      "Dispositivo: equipos desatendidos, software desactualizado y medios USB/CD/DVD no confiables.",
                      "LAN: accesos no autorizados, firewall mal configurado, escaneo de puertos y sistemas sin parche.",
                      "Nube privada/p\u00fablica y aplicaciones: errores de configuraci\u00f3n, accesos indebidos, p\u00e9rdida de datos y vulnerabilidades de desarrollo."
                    ]
                  },
                  {
                    "title": "Amenazas avanzadas y malware persistente",
                    "items": [
                      "APT: campa\u00f1as prolongadas, sigilosas y bien financiadas con objetivos estrat\u00e9gicos.",
                      "Ataques algor\u00edtmicos: uso malicioso de l\u00f3gicas leg\u00edtimas para provocar comportamiento no deseado.",
                      "Puertas traseras y RAT: mantienen acceso administrativo aun despu\u00e9s de cerrar la vulnerabilidad inicial.",
                      "Rootkits: elevan privilegios y alteran herramientas de monitoreo; en muchos casos se requiere reinstalaci\u00f3n completa."
                    ]
                  },
                  {
                    "title": "Inteligencia de amenazas y fuentes de investigaci\u00f3n",
                    "items": [
                      "Usar cat\u00e1logos CVE para identificar vulnerabilidades conocidas y priorizar remediaci\u00f3n.",
                      "Monitorear IOC (indicadores de compromiso) para detectar actividad maliciosa temprana.",
                      "Integrar intercambio automatizado de inteligencia (AIS) con est\u00e1ndares STIX/TAXII.",
                      "Complementar con investigaci\u00f3n en fuentes especializadas, incluida la web oscura, por equipos autorizados."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Evaluar amenazas comunes por dominio, clasificar su impacto y definir controles preventivos y de detecci\u00f3n para reducir el riesgo operativo de la organizaci\u00f3n."
                    ]
                  }
                ]
              },
              {
                "code": "2.2",
                "title": "Enga\u00f1o",
                "summary": "El enga\u00f1o en ciberseguridad combina ingenier\u00eda social y manipulaci\u00f3n psicol\u00f3gica para que las personas revelen informaci\u00f3n sensible o ejecuten acciones que debilitan la seguridad.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_2_2.png",
                    "alt": "Referencia visual del tema 2.2: Enga\u00f1o."
                  }
                ],
                "sections": [
                  {
                    "title": "Ingenier\u00eda social y objetivos del atacante",
                    "items": [
                      "La ingenier\u00eda social explota factores humanos (confianza, miedo, urgencia o autoridad) en lugar de fallas t\u00e9cnicas.",
                      "Pretexto: crear una historia falsa para obtener informaci\u00f3n privilegiada.",
                      "Quid pro quo: ofrecer un supuesto beneficio a cambio de datos sensibles.",
                      "Fraude de identidad: usar datos robados para suplantar a la v\u00edctima y obtener bienes o acceso."
                    ]
                  },
                  {
                    "title": "T\u00e1cticas psicol\u00f3gicas m\u00e1s usadas",
                    "items": [
                      "Autoridad, intimidaci\u00f3n, consenso, escasez y urgencia para forzar decisiones impulsivas.",
                      "Familiaridad y confianza: el atacante construye relaci\u00f3n antes de solicitar acciones de riesgo.",
                      "Estas t\u00e1cticas buscan que el usuario omita controles y entregue credenciales o datos.",
                      "La respuesta correcta es verificar identidad y canal antes de actuar."
                    ]
                  },
                  {
                    "title": "M\u00e9todos de enga\u00f1o en campo y en l\u00ednea",
                    "items": [
                      "Espiar por encima del hombro y hurgar en la basura para obtener PIN, credenciales o documentos.",
                      "Suplantaci\u00f3n de identidad y enga\u00f1os (hoax) para inducir miedo y propagaci\u00f3n de mensajes falsos.",
                      "Piggybacking/tailgating: ingreso a zonas restringidas siguiendo a personal autorizado.",
                      "Controles recomendados: credenciales visibles, cultura de no acompa\u00f1amiento indebido y uso de mantrap."
                    ]
                  },
                  {
                    "title": "Ataques adicionales basados en enga\u00f1o",
                    "items": [
                      "Estafa de facturas y portales falsos para capturar credenciales o pagos no autorizados.",
                      "Ataque de pozo de agua: comprometer sitios frecuentados por la organizaci\u00f3n.",
                      "Error tipogr\u00e1fico (typosquatting): dominios parecidos para desviar usuarios a sitios maliciosos.",
                      "Campa\u00f1as de influencia: combinan desinformaci\u00f3n y redes sociales para manipular percepci\u00f3n y comportamiento."
                    ]
                  },
                  {
                    "title": "Defensa contra el enga\u00f1o",
                    "items": [
                      "No compartir credenciales ni datos confidenciales por correo, chat, SMS o llamadas no verificadas.",
                      "Evitar clics impulsivos y descargas no iniciadas; validar URL y remitentes.",
                      "Formalizar pol\u00edticas de seguridad y capacitar usuarios con ejercicios peri\u00f3dicos.",
                      "Escalar de inmediato cualquier intento sospechoso al equipo de seguridad o mesa de ayuda."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Identificar y bloquear t\u00e1cticas de ingenier\u00eda social antes de que comprometan usuarios, credenciales o activos cr\u00edticos de la organizaci\u00f3n."
                    ]
                  }
                ]
              },
              {
                "code": "2.3",
                "title": "Ataques cibern\u00e9ticos",
                "summary": "Los ataques cibern\u00e9ticos combinan malware, abuso de servicios de red y t\u00e9cnicas de intercepci\u00f3n para comprometer confidencialidad, integridad y disponibilidad de sistemas empresariales.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_2_3.png",
                    "alt": "Referencia visual del tema 2.3: Ataques cibern\u00e9ticos."
                  }
                ],
                "sections": [
                  {
                    "title": "Malware: vectores y comportamiento",
                    "items": [
                      "Virus: se adjuntan a archivos, suelen requerir acci\u00f3n del usuario y pueden mutar para evadir detecci\u00f3n.",
                      "Gusanos: se propagan de forma aut\u00f3noma explotando vulnerabilidades de red a gran velocidad.",
                      "Troyanos: aparentan ser leg\u00edtimos para ejecutar acciones maliciosas con privilegios del usuario.",
                      "Canales frecuentes de infecci\u00f3n: adjuntos de correo, descargas, medios extra\u00edbles y software no confiable."
                    ]
                  },
                  {
                    "title": "Bombas l\u00f3gicas y ransomware",
                    "items": [
                      "Bomba l\u00f3gica: c\u00f3digo latente que se activa por una condici\u00f3n (fecha, evento o valor en base de datos).",
                      "Puede da\u00f1ar software y tambi\u00e9n hardware cr\u00edtico (CPU, discos, fuentes, ventilaci\u00f3n).",
                      "Ransomware: cifra informaci\u00f3n para exigir pago, sin garant\u00eda real de recuperaci\u00f3n.",
                      "Suele entrar por phishing o vulnerabilidades sin parche; la prevenci\u00f3n depende de backup y hardening."
                    ]
                  },
                  {
                    "title": "Ataques de denegaci\u00f3n de servicio (DoS)",
                    "items": [
                      "Buscan interrumpir servicios saturando tr\u00e1fico o enviando paquetes malformados.",
                      "Impactan disponibilidad de TI y tambi\u00e9n tecnolog\u00edas operativas (OT) en f\u00e1bricas y servicios cr\u00edticos.",
                      "S\u00edntomas comunes: degradaci\u00f3n severa de rendimiento, timeouts y ca\u00eddas del servicio.",
                      "Mitigaci\u00f3n base: filtrado de origen, segmentaci\u00f3n, capacidad de absorci\u00f3n y pol\u00edticas anti-DDoS."
                    ]
                  },
                  {
                    "title": "Abuso de DNS y redirecciones maliciosas",
                    "items": [
                      "Falsificaci\u00f3n/intoxicaci\u00f3n de cach\u00e9 DNS: altera resoluciones hacia servidores il\u00edcitos.",
                      "Secuestro de dominio: toma de control de registros DNS mediante ingenier\u00eda social o compromiso de cuentas.",
                      "Redirecci\u00f3n de URL: desv\u00edo a sitios falsos para robo de credenciales o distribuci\u00f3n de malware.",
                      "Monitorear reputaci\u00f3n de dominio y cambios de DNS reduce la ventana de ataque."
                    ]
                  },
                  {
                    "title": "Ataques de capa 2 y en ruta",
                    "items": [
                      "Spoofing de MAC, ARP e IP: suplantaci\u00f3n para evadir autenticaci\u00f3n o desviar tr\u00e1fico.",
                      "Saturaci\u00f3n de tabla MAC: inundaci\u00f3n de direcciones falsas para degradar seguridad del switch.",
                      "MitM: intercepta y manipula comunicaciones entre emisor y destino.",
                      "MitMo: variante en m\u00f3viles (por ejemplo, captura de SMS de verificaci\u00f3n en dos pasos)."
                    ]
                  },
                  {
                    "title": "Amenazas emergentes y controles defensivos",
                    "items": [
                      "Ataques de d\u00eda cero explotan fallas antes de que exista parche disponible.",
                      "Keyloggers registran pulsaciones y exfiltran credenciales y datos sensibles.",
                      "Defensas prioritarias: parchado continuo, firewalls con filtrado de origen, control de ICMP y monitoreo activo.",
                      "Distribuir cargas, segmentar y validar telemetr\u00eda mejora resiliencia ante incidentes."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Reconocer patrones de ataque cibern\u00e9tico y aplicar controles preventivos y de respuesta para reducir impacto operativo y tiempo de recuperaci\u00f3n."
                    ]
                  }
                ]
              },
              {
                "code": "2.4",
                "title": "Ataques a dispositivos inal\u00e1mbricos y m\u00f3viles",
                "summary": "Los entornos inal\u00e1mbricos y m\u00f3viles ampl\u00edan la superficie de ataque mediante puntos de acceso no autorizados, abuso de Bluetooth, debilidades de protocolos Wi-Fi y campa\u00f1as de enga\u00f1o como SMiShing.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_2_4.png",
                    "alt": "Referencia visual del tema 2.4: Ataques a dispositivos inal\u00e1mbricos y m\u00f3viles."
                  }
                ],
                "sections": [
                  {
                    "title": "Grayware y SMiShing",
                    "items": [
                      "Grayware: aplicaciones no deseadas que pueden rastrear, perfilar o mostrar publicidad invasiva sin ser malware cl\u00e1sico.",
                      "Muchos usuarios aceptan permisos excesivos por no revisar t\u00e9rminos y condiciones de las apps m\u00f3viles.",
                      "SMiShing: mensajes SMS falsos que inducen clics en enlaces maliciosos o llamadas a n\u00fameros fraudulentos.",
                      "Impacto t\u00edpico: robo de credenciales, instalaci\u00f3n de malware o exposici\u00f3n de informaci\u00f3n personal."
                    ]
                  },
                  {
                    "title": "Puntos de acceso no autorizados y ataque gemelo maligno",
                    "items": [
                      "Un rogue AP dentro de la red corporativa puede abrir una puerta de entrada para atacantes externos.",
                      "Puede operar como MitM para capturar credenciales y tr\u00e1fico sensible de usuarios conectados.",
                      "El ataque evil twin imita una red leg\u00edtima con mejor se\u00f1al para atraer v\u00edctimas.",
                      "La combinaci\u00f3n de ingenier\u00eda social y acceso f\u00edsico facilita la instalaci\u00f3n de estos dispositivos."
                    ]
                  },
                  {
                    "title": "Interferencia de radiofrecuencia (RFI)",
                    "items": [
                      "Las comunicaciones inal\u00e1mbricas son sensibles a EMI/RFI y otras fuentes de ruido en el entorno.",
                      "Un atacante puede degradar o bloquear enlaces al generar interferencia en frecuencia y potencia compatibles.",
                      "El resultado es p\u00e9rdida de disponibilidad o degradaci\u00f3n severa del servicio inal\u00e1mbrico.",
                      "La mitigaci\u00f3n requiere dise\u00f1o RF adecuado, monitoreo del espectro y planes de contingencia."
                    ]
                  },
                  {
                    "title": "Bluejacking y bluesnarfing en Bluetooth",
                    "items": [
                      "Bluejacking: env\u00edo no autorizado de mensajes o contenido a dispositivos cercanos por Bluetooth.",
                      "Bluesnarfing: extracci\u00f3n de informaci\u00f3n (contactos, correos u otros datos) desde un dispositivo objetivo.",
                      "Ambos ataques requieren proximidad, pero aprovechan configuraciones inseguras de emparejamiento.",
                      "Reducir visibilidad del dispositivo y desactivar Bluetooth cuando no se usa disminuye riesgo."
                    ]
                  },
                  {
                    "title": "Ataques contra protocolos Wi-Fi",
                    "items": [
                      "WEP es obsoleto por debilidades de dise\u00f1o (IV peque\u00f1o, est\u00e1tico y mala gesti\u00f3n de claves).",
                      "WPA/WPA2 mejoran cifrado y autenticaci\u00f3n, pero a\u00fan exigen configuraci\u00f3n correcta y monitoreo continuo.",
                      "Los atacantes pueden analizar tr\u00e1fico y explotar configuraciones d\u00e9biles o credenciales comprometidas.",
                      "La seguridad real depende tanto del protocolo como de la higiene operativa de la red."
                    ]
                  },
                  {
                    "title": "Defensa Wi-Fi y m\u00f3vil",
                    "items": [
                      "Cambiar valores predeterminados, reforzar autenticaci\u00f3n y activar cifrado robusto en toda WLAN.",
                      "Ubicar AP en arquitectura segura (DMZ/per\u00edmetro) y no exponer directamente la LAN interna.",
                      "Detectar equipos no autorizados con herramientas de reconocimiento inal\u00e1mbrico y monitoreo continuo.",
                      "Definir pol\u00edtica de acceso de invitados y exigir VPN en redes Wi-Fi p\u00fablicas para personal remoto."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Identificar amenazas inal\u00e1mbricas y m\u00f3viles prioritarias y aplicar controles t\u00e9cnicos y operativos para reducir compromiso de usuarios y exposici\u00f3n de la red."
                    ]
                  }
                ]
              },
              {
                "code": "2.5",
                "title": "Ataques de aplicaciones",
                "summary": "Las aplicaciones web y APIs son un vector cr\u00edtico de ataque; errores de validaci\u00f3n, manejo de sesi\u00f3n y programaci\u00f3n insegura permiten comprometer datos, identidad y control del sistema.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_2_5.png",
                    "alt": "Referencia visual del tema 2.5: Ataques de aplicaciones."
                  }
                ],
                "sections": [
                  {
                    "title": "Secuencias de comandos entre sitios (XSS)",
                    "items": [
                      "XSS inyecta scripts maliciosos en p\u00e1ginas web para ejecutarse en el navegador de la v\u00edctima.",
                      "Puede robar cookies, tokens de sesi\u00f3n y datos sensibles para suplantar al usuario.",
                      "Afecta especialmente formularios, campos de comentarios y entradas sin saneamiento.",
                      "Mitigaci\u00f3n clave: validaci\u00f3n/sanitizaci\u00f3n de entrada y codificaci\u00f3n segura de salida."
                    ]
                  },
                  {
                    "title": "Inyecci\u00f3n de c\u00f3digo y consultas",
                    "items": [
                      "SQL/XML injection: manipulaci\u00f3n de consultas por falta de validaci\u00f3n de entrada.",
                      "Inyecci\u00f3n DLL y LDAP: ejecuci\u00f3n de componentes/consultas maliciosas con impacto en autenticaci\u00f3n y directorios.",
                      "Consecuencias: lectura, alteraci\u00f3n o destrucci\u00f3n de datos; escalamiento de privilegios.",
                      "Usar consultas parametrizadas, m\u00ednimos privilegios y controles estrictos de entrada reduce exposici\u00f3n."
                    ]
                  },
                  {
                    "title": "Desbordamiento de b\u00fafer y ejecuci\u00f3n remota",
                    "items": [
                      "El desbordamiento de b\u00fafer escribe fuera de l\u00edmites de memoria y altera el flujo del programa.",
                      "Puede provocar ca\u00edda del servicio, corrupci\u00f3n de datos o ejecuci\u00f3n de c\u00f3digo arbitrario.",
                      "La ejecuci\u00f3n remota de c\u00f3digo (RCE) permite al atacante operar con privilegios del proceso comprometido.",
                      "La escalada de privilegios convierte una falla puntual en control amplio del sistema."
                    ]
                  },
                  {
                    "title": "Otros ataques de aplicaci\u00f3n",
                    "items": [
                      "CSRF: env\u00edo de comandos no autorizados desde sesiones v\u00e1lidas del usuario.",
                      "Condici\u00f3n de carrera (TOC/TOU): explotaci\u00f3n de operaciones simult\u00e1neas sobre recursos compartidos.",
                      "Traversal de directorios, abuso de API, repetici\u00f3n de solicitudes y agotamiento de recursos.",
                      "Manejo incorrecto de errores y entradas expone informaci\u00f3n \u00fatil para nuevos ataques."
                    ]
                  },
                  {
                    "title": "Correo y enga\u00f1o como puerta de entrada",
                    "items": [
                      "Spam y phishing distribuyen enlaces o adjuntos maliciosos para comprometer aplicaciones y cuentas.",
                      "Spear phishing, vishing, pharming y whaling aumentan efectividad por personalizaci\u00f3n y suplantaci\u00f3n.",
                      "Indicadores comunes: urgencia artificial, dominios sospechosos, enlaces cr\u00edpticos y solicitudes inusuales.",
                      "Ante duda, no abrir adjuntos/enlaces y reportar al equipo de ciberseguridad."
                    ]
                  },
                  {
                    "title": "Defensa contra ataques de aplicaciones",
                    "items": [
                      "Aplicar desarrollo seguro: validaci\u00f3n de entrada, control de errores y dise\u00f1o defensivo desde el c\u00f3digo fuente.",
                      "Ejecutar pruebas de seguridad continuas en c\u00f3digo y binarios durante todo el ciclo de desarrollo.",
                      "Mantener SO, frameworks, librer\u00edas y aplicaciones con parches y versiones soportadas.",
                      "Combinar protecci\u00f3n t\u00e9cnica con capacitaci\u00f3n de usuarios para reducir vector humano de compromiso."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Identificar y mitigar ataques de aplicaciones priorizando validaci\u00f3n de entrada, hardening de servicios y pr\u00e1cticas de desarrollo seguro para proteger datos y continuidad operativa."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "key": "M3",
            "title": "Seguridad de Red",
            "topics": [
              {
                "code": "3.1",
                "title": "Fundamentos de seguridad",
                "summary": "Los fundamentos de seguridad de red se estructuran con el Cubo de Ciberseguridad: principios (confidencialidad, integridad y disponibilidad), estados del dato (en tr\u00e1nsito, en reposo y en proceso) y medidas de protecci\u00f3n (tecnolog\u00eda, pol\u00edticas/procedimientos y personas).",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_3_1.png",
                    "alt": "Cubo de ciberseguridad aplicado a principios, estados de datos y medidas de protecci\u00f3n."
                  }
                ],
                "sections": [
                  {
                    "title": "Cubo de ciberseguridad: tres dimensiones",
                    "items": [
                      "Principios: confidencialidad, integridad y disponibilidad como objetivos de protecci\u00f3n.",
                      "Estados del dato: en tr\u00e1nsito, en reposo y en proceso; cada estado exige controles distintos.",
                      "Medidas: tecnolog\u00eda, pol\u00edticas/procedimientos y personas capacitadas en operaci\u00f3n segura."
                    ]
                  },
                  {
                    "title": "Tr\u00edada CIA (CID) aplicada a redes",
                    "items": [
                      "Confidencialidad: limita el acceso a informaci\u00f3n sensible mediante autenticaci\u00f3n, autorizaci\u00f3n y cifrado.",
                      "Integridad: evita alteraciones no autorizadas usando hash, validaciones y control de cambios.",
                      "Disponibilidad: mantiene servicios accesibles con redundancia, monitoreo y planes de recuperaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Estados de los datos y controles recomendados",
                    "items": [
                      "En tr\u00e1nsito: proteger con TLS/IPsec, segmentaci\u00f3n y verificaci\u00f3n de identidad de extremo a extremo.",
                      "En reposo: aplicar cifrado de disco/volumen, copias de seguridad y control de acceso por roles.",
                      "En proceso: endurecer sistemas, restringir privilegios y supervisar procesos cr\u00edticos en tiempo real."
                    ]
                  },
                  {
                    "title": "Garant\u00eda de disponibilidad en operaci\u00f3n",
                    "items": [
                      "Mantenimiento preventivo y actualizaci\u00f3n peri\u00f3dica de sistemas, aplicaciones y firmware.",
                      "Respaldo probado: no basta con copiar, tambi\u00e9n se debe validar restauraci\u00f3n.",
                      "Plan de continuidad y recuperaci\u00f3n ante desastres con roles, tiempos y procedimientos definidos.",
                      "Monitoreo activo de eventos y alertas para detectar incidentes antes de que afecten al usuario."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Aplicar el Cubo de Ciberseguridad para seleccionar controles t\u00e9cnicos y operativos que reduzcan riesgos y mejoren continuidad, trazabilidad y respuesta ante incidentes."
                    ]
                  }
                ]
              },
              {
                "code": "3.2",
                "title": "Control de acceso",
                "summary": "El control de acceso en ciberseguridad combina barreras f\u00edsicas, controles l\u00f3gicos y pol\u00edticas administrativas para evitar accesos no autorizados y mantener trazabilidad sobre las acciones de los usuarios.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_3_2.png",
                    "alt": "Controles de acceso f\u00edsico, l\u00f3gico y administrativo en una arquitectura de seguridad."
                  }
                ],
                "sections": [
                  {
                    "title": "Capas de control de acceso",
                    "items": [
                      "F\u00edsico: barreras de entrada como puertas, tarjetas, c\u00e1maras, alarmas y vigilancia para proteger instalaciones y equipos.",
                      "L\u00f3gico: mecanismos de software/hardware como cifrado, ACL, firewalls, contrase\u00f1as y biometr\u00eda para restringir recursos digitales.",
                      "Administrativo: pol\u00edticas, procedimientos y roles que definen qu\u00e9 se permite, qui\u00e9n lo aprueba y c\u00f3mo se audita."
                    ]
                  },
                  {
                    "title": "Modelo AAA en operaci\u00f3n",
                    "items": [
                      "Autenticaci\u00f3n: verifica identidad con factores como contrase\u00f1a, token o biometr\u00eda.",
                      "Autorizaci\u00f3n: define a qu\u00e9 recursos puede acceder el usuario y en qu\u00e9 condiciones (ACL, horarios, privilegios).",
                      "Contabilidad (auditor\u00eda): registra sesiones, comandos y cambios para trazabilidad, cumplimiento e investigaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Identificaci\u00f3n e identidad federada",
                    "items": [
                      "Cada usuario debe tener un identificador \u00fanico para asociar actividades con una identidad concreta.",
                      "La identidad federada permite usar credenciales comunes entre sistemas/empresas del mismo ecosistema.",
                      "Riesgo clave: una cuenta comprometida puede abrir acceso a varios servicios; por eso se requiere segmentaci\u00f3n, MFA y revisiones peri\u00f3dicas."
                    ]
                  },
                  {
                    "title": "Factores de autenticaci\u00f3n y buenas pr\u00e1cticas",
                    "items": [
                      "Algo que sabe: contrase\u00f1a, PIN o frase de paso.",
                      "Algo que tiene: tarjeta inteligente, token o llave de seguridad.",
                      "Algo que es: biometr\u00eda (huella, rostro, voz, retina).",
                      "Aplicar MFA/2FA, usar gestor de contrase\u00f1as, rotaci\u00f3n peri\u00f3dica y complejidad adecuada seg\u00fan pol\u00edtica corporativa."
                    ]
                  },
                  {
                    "title": "Acciones t\u00e9cnicas recomendadas",
                    "items": [
                      "Implementar principio de menor privilegio y revisar permisos de forma recurrente.",
                      "Unificar autenticaci\u00f3n y registros en plataformas centrales para acelerar detecci\u00f3n de accesos an\u00f3malos.",
                      "Integrar controles de acceso con mesa de ayuda para documentar altas, cambios y revocaciones con evidencia."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Dise\u00f1ar y operar un esquema de control de acceso multicapa que reduzca riesgo de intrusi\u00f3n, mejore cumplimiento y fortalezca la respuesta ante incidentes."
                    ]
                  }
                ]
              },
              {
                "code": "3.3",
                "title": "Defensa de sistemas y dispositivos",
                "summary": "La defensa del endpoint combina hardening del sistema operativo, administraci\u00f3n de parches, protecci\u00f3n antimalware, cifrado de host e integridad de arranque para reducir la superficie de ataque y mantener continuidad operativa.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_3_3.svg",
                    "alt": "Defensa multicapa del endpoint: SO, parches, antimalware, cifrado e integridad de arranque."
                  }
                ],
                "sections": [
                  {
                    "title": "Hardening del sistema operativo",
                    "items": [
                      "Eliminar servicios y software innecesarios para reducir vectores de ataque.",
                      "Definir una l\u00ednea base t\u00e9cnica del host y comparar peri\u00f3dicamente configuraci\u00f3n y rendimiento.",
                      "Operar con procedimientos documentados para monitoreo, evaluaci\u00f3n y despliegue de cambios de seguridad."
                    ]
                  },
                  {
                    "title": "Gesti\u00f3n de parches y actualizaciones",
                    "items": [
                      "Tratar parches como control preventivo contra vulnerabilidades explotables.",
                      "Probar actualizaciones en entorno controlado antes de despliegue masivo.",
                      "Usar plataforma centralizada para aprobar/rechazar parches, calendarizar ventanas y emitir reportes de cumplimiento.",
                      "Incluir aplicaciones de terceros en el ciclo de parchado para cerrar brechas frecuentes."
                    ]
                  },
                  {
                    "title": "Protecci\u00f3n antimalware moderna",
                    "items": [
                      "Riesgos actuales: antivirus falsos, malware sin archivos y scripts maliciosos.",
                      "Complementar detecci\u00f3n por firma con heur\u00edstica y an\u00e1lisis de comportamiento.",
                      "Retirar software no aprobado: puede violar pol\u00edticas e introducir riesgo operativo.",
                      "Mantener telemetr\u00eda de seguridad para correlaci\u00f3n y respuesta temprana."
                    ]
                  },
                  {
                    "title": "Controles de endpoint y datos",
                    "items": [
                      "Firewall basado en host para restringir tr\u00e1fico entrante/saliente por reglas expl\u00edcitas.",
                      "HIDS/HIPS para detectar o bloquear actividad an\u00f3mala en sistema y procesos.",
                      "EDR para visibilidad continua, investigaci\u00f3n y contenci\u00f3n de amenazas avanzadas.",
                      "DLP para prevenir fuga de informaci\u00f3n sensible y NGFW para inspecci\u00f3n profunda a nivel de red."
                    ]
                  },
                  {
                    "title": "Cifrado de host e integridad de arranque",
                    "items": [
                      "EFS/FDE protegen datos en reposo; BitLocker y TPM fortalecen resguardo de claves.",
                      "Unidades autocifradas (SED) agregan protecci\u00f3n desde hardware.",
                      "Secure Boot valida software de arranque confiable; Measured Boot registra evidencias de integridad para verificaci\u00f3n remota.",
                      "La seguridad debe iniciar antes del sistema operativo y mantenerse durante todo el ciclo de vida del equipo."
                    ]
                  },
                  {
                    "title": "Protecci\u00f3n f\u00edsica del activo",
                    "items": [
                      "Aplicar cerraduras, control de acceso, RFID y resguardo de cuartos de telecomunicaciones.",
                      "Prevenir manipulaci\u00f3n f\u00edsica de equipos port\u00e1tiles y dispositivos de red.",
                      "Combinar seguridad l\u00f3gica con seguridad f\u00edsica para cerrar brechas fuera del software."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Implementar una defensa de endpoint por capas que disminuya infecciones, limite impacto de incidentes y aumente la capacidad de detecci\u00f3n y recuperaci\u00f3n."
                    ]
                  }
                ]
              },
              {
                "code": "3.4",
                "title": "Protecci\u00f3n antimalware",
                "summary": "La protecci\u00f3n antimalware moderna requiere defensa por capas en terminales y red: detecci\u00f3n temprana, controles de acceso, visibilidad continua y respuesta coordinada frente a amenazas como ransomware y ataques sin archivos.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_3_4.png",
                    "alt": "Arquitectura de protecci\u00f3n antimalware combinando controles de host y controles de red."
                  }
                ],
                "sections": [
                  {
                    "title": "Amenazas actuales en dispositivos finales",
                    "items": [
                      "El endpoint ya no es solo PC o servidor: IoT, c\u00e1maras, impresoras y m\u00f3viles tambi\u00e9n ampl\u00edan superficie de ataque.",
                      "Ransomware, trabajo remoto y baja visibilidad son riesgos dominantes en operaciones de ciberseguridad.",
                      "Cada terminal comprometido puede convertirse en punto de pivote hacia activos cr\u00edticos de la organizaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Por qu\u00e9 proteger LAN interna adem\u00e1s del per\u00edmetro",
                    "items": [
                      "La seguridad perimetral (VPN, firewall, IPS, AAA) es necesaria pero no suficiente.",
                      "Muchos incidentes inician dentro de la red interna por malware, suplantaci\u00f3n o mala configuraci\u00f3n.",
                      "Se deben proteger terminales e infraestructura de LAN contra ataques a MAC table, DHCP, STP, VLAN y suplantaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Protecci\u00f3n basada en host",
                    "items": [
                      "Antimalware en endpoint con tres enfoques de detecci\u00f3n: firma, heur\u00edstica y comportamiento.",
                      "Modelo basado en agente para equipos individuales y modelo sin agente en entornos virtualizados para optimizar recursos.",
                      "Firewall de host para restringir conexiones entrantes/salientes y limitar propagaci\u00f3n lateral de amenazas.",
                      "Suites de seguridad (antivirus, antiphishing, HIPS y firewall) ofrecen defensa multicapa y telemetr\u00eda local."
                    ]
                  },
                  {
                    "title": "Protecci\u00f3n basada en red",
                    "items": [
                      "La red aporta capas adicionales de an\u00e1lisis que un endpoint aislado no puede cubrir por s\u00ed solo.",
                      "Controles frecuentes: filtrado de correo, seguridad DNS, bloqueo de destinos maliciosos y verificaci\u00f3n de cumplimiento de dispositivos.",
                      "Ejemplos de referencia del curso: Cisco Secure Endpoint, Secure Email, Umbrella y NAC."
                    ]
                  },
                  {
                    "title": "Criterios operativos para una defensa efectiva",
                    "items": [
                      "Integrar registros de host y red para correlaci\u00f3n y detecci\u00f3n temprana.",
                      "Aplicar pol\u00edticas homog\u00e9neas en equipos corporativos y remotos con validaciones de postura de seguridad.",
                      "Revisar peri\u00f3dicamente eficacia de controles y ajustar reglas seg\u00fan nuevos vectores de ataque."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Implementar una estrategia antimalware integral (host + red) que reduzca infecciones, mejore visibilidad y acelere la contenci\u00f3n de incidentes en la organizaci\u00f3n."
                    ]
                  }
                ]
              },
              {
                "code": "3.5",
                "title": "Firewalls y prevenci\u00f3n de intrusiones basada en host",
                "summary": "Los firewalls y controles de intrusi\u00f3n reducen el tr\u00e1fico malicioso al aplicar pol\u00edticas de acceso en red y endpoint. Su eficacia depende de dise\u00f1o por capas, reglas bien mantenidas y monitoreo continuo.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_3_5.png",
                    "alt": "Comparativa de controles de firewall y prevenci\u00f3n de intrusiones en red y host."
                  }
                ],
                "sections": [
                  {
                    "title": "Fundamentos operativos del firewall",
                    "items": [
                      "El firewall act\u00faa como punto de tr\u00e1nsito y control entre redes internas y externas.",
                      "Resiste ataques comunes y aplica pol\u00edticas de permitir/denegar seg\u00fan criterios definidos.",
                      "Beneficios: reduce exposici\u00f3n de activos, bloquea flujos maliciosos y centraliza control de acceso.",
                      "Limitaciones: mala configuraci\u00f3n, evasiones por t\u00fanel, impacto en rendimiento y dependencia de reglas precisas."
                    ]
                  },
                  {
                    "title": "Tipos de firewall y cu\u00e1ndo usarlos",
                    "items": [
                      "Filtrado de paquetes (stateless): r\u00e1pido y simple con criterios L3/L4; adecuado como primera barrera.",
                      "Stateful firewall: inspecciona estado de conexi\u00f3n y mejora control frente a suplantaci\u00f3n y DoS.",
                      "Proxy/gateway de aplicaciones: inspecci\u00f3n m\u00e1s profunda (hasta capa de aplicaci\u00f3n).",
                      "NGFW: integra IPS, reconocimiento de aplicaciones e inteligencia para amenazas avanzadas.",
                      "Implementaciones complementarias: host-based, transparente e h\u00edbrida."
                    ]
                  },
                  {
                    "title": "Comparativa: filtrado de paquetes vs stateful",
                    "items": [
                      "Filtrado de paquetes: bajo costo e impacto, pero sin contexto de sesi\u00f3n y con menor capacidad ante fragmentaci\u00f3n/evasiones.",
                      "Stateful: mejor registro y contexto de conexi\u00f3n; aun as\u00ed, no reemplaza inspecci\u00f3n de capa de aplicaci\u00f3n.",
                      "Protocolos sin estado (como UDP/ICMP) y puertos din\u00e1micos pueden requerir ajustes adicionales.",
                      "Ning\u00fan firewall aislado es suficiente: debe integrarse con segmentaci\u00f3n, hardening y monitoreo."
                    ]
                  },
                  {
                    "title": "Firewalls basados en host y administraci\u00f3n central",
                    "items": [
                      "Controlan tr\u00e1fico entrante/saliente por direcci\u00f3n IP, protocolo y puerto directamente en el endpoint.",
                      "Pueden generar alertas por comportamiento sospechoso y registrar eventos para an\u00e1lisis forense.",
                      "Modelo distribuido: combina protecci\u00f3n local con pol\u00edticas centralizadas y recolecci\u00f3n de logs.",
                      "Ejemplos del curso: Windows Defender Firewall, iptables/nftables y TCP Wrappers en Linux."
                    ]
                  },
                  {
                    "title": "Antimalware y prevenci\u00f3n de intrusiones en endpoint",
                    "items": [
                      "El antimalware debe cubrir virus, gusanos, troyanos, spyware, adware y phishing.",
                      "Buenas pr\u00e1cticas: usar soluciones reconocidas, actualizar firmas/motores y combinar detecci\u00f3n con reglas de firewall.",
                      "En Windows Defender, preferir pol\u00edtica restrictiva por defecto y abrir solo puertos/servicios justificados.",
                      "Usar configuraci\u00f3n avanzada para reglas de entrada/salida, perfiles por entorno y auditor\u00eda continua."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Dise\u00f1ar una defensa de intrusi\u00f3n en host y red que minimice superficie de ataque, aumente trazabilidad y mejore la capacidad de contenci\u00f3n ante incidentes."
                    ]
                  }
                ]
              },
              {
                "code": "3.6",
                "title": "Acceso inal\u00e1mbrico seguro",
                "summary": "Una WLAN segura exige controles t\u00e9cnicos y operativos frente a intercepci\u00f3n, intrusos, DoS y puntos de acceso no autorizados. La protecci\u00f3n real combina autenticaci\u00f3n fuerte, cifrado robusto y monitoreo continuo del entorno inal\u00e1mbrico.",
                "images": [
                  {
                    "src": "./assets/images/network-support-security/C8_3_6.png",
                    "alt": "Controles de seguridad para acceso inal\u00e1mbrico: cifrado, autenticaci\u00f3n y detecci\u00f3n de amenazas WLAN."
                  }
                ],
                "sections": [
                  {
                    "title": "Amenazas clave en WLAN",
                    "items": [
                      "Intercepci\u00f3n de datos cuando el tr\u00e1fico no est\u00e1 cifrado correctamente.",
                      "Intrusos inal\u00e1mbricos que intentan asociarse con credenciales robadas o configuraciones d\u00e9biles.",
                      "Ataques DoS por saturaci\u00f3n o interferencia intencional de radiofrecuencia.",
                      "Puntos de acceso rogue o maliciosos que exponen la red interna sin autorizaci\u00f3n."
                    ]
                  },
                  {
                    "title": "DoS, interferencia y continuidad de servicio",
                    "items": [
                      "El DoS tambi\u00e9n puede originarse por errores de configuraci\u00f3n, no solo por atacantes.",
                      "La banda de 2.4 GHz suele tener m\u00e1s interferencia (microondas, monitores, tel\u00e9fonos inal\u00e1mbricos).",
                      "En entornos ruidosos, priorizar 5 GHz y planificaci\u00f3n de canales para mejorar estabilidad.",
                      "Aplicar respaldos de configuraci\u00f3n, control de cambios fuera de horario y validaci\u00f3n posterior."
                    ]
                  },
                  {
                    "title": "Rogue AP y ataques MITM (Evil Twin)",
                    "items": [
                      "Un AP no autorizado puede abrir una puerta de entrada a recursos corporativos.",
                      "Evil Twin: AP falso con mismo SSID para atraer clientes y capturar tr\u00e1fico/credenciales.",
                      "Defensa: inventario de dispositivos leg\u00edtimos, autenticaci\u00f3n fuerte y monitoreo de comportamiento an\u00f3malo.",
                      "Usar WLC y herramientas de an\u00e1lisis del espectro para detecci\u00f3n temprana de AP sospechosos."
                    ]
                  },
                  {
                    "title": "Autenticaci\u00f3n y cifrado recomendados",
                    "items": [
                      "Ocultar SSID y filtrar MAC puede disuadir usuarios b\u00e1sicos, pero no detiene atacantes con experiencia.",
                      "Evitar WEP y minimizar uso de WPA legado; preferir WPA2-AES o WPA3 seg\u00fan compatibilidad.",
                      "En hogar/pyme, WPA2-Personal o WPA3-Personal con clave robusta y rotaci\u00f3n peri\u00f3dica.",
                      "En empresa, WPA2/WPA3-Enterprise con RADIUS y credenciales por usuario para mayor trazabilidad."
                    ]
                  },
                  {
                    "title": "Medidas de operaci\u00f3n segura",
                    "items": [
                      "Deshabilitar administraci\u00f3n insegura del AP y cambiar credenciales por defecto.",
                      "Segmentar clientes WLAN (usuarios, invitados, IoT) y aplicar pol\u00edticas por rol.",
                      "Correlacionar eventos WLAN con SIEM/NMS para detecci\u00f3n y respuesta m\u00e1s r\u00e1pida.",
                      "Auditar peri\u00f3dicamente cobertura, potencia y seguridad para evitar zonas ciegas o sobreexposici\u00f3n."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Implementar una WLAN corporativa resistente a intrusiones y fugas de informaci\u00f3n, con acceso controlado, cifrado fuerte y monitoreo continuo de amenazas inal\u00e1mbricas."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "intro-cybersecurity",
        "title": "Introducci\u00f3n a Ciberseguridad",
        "provider": "Cisco Networking Academy",
        "level": "Fundamentos",
        "status": "En curso",
        "estimatedHours": 15,
        "summary": "Curso introductorio sobre amenazas digitales, protecci\u00f3n de datos personales y organizacionales, controles de seguridad y ruta profesional en ciberseguridad.",
        "tags": [
          "ciberseguridad",
          "privacidad",
          "amenazas",
          "defensa",
          "concienciación",
          "ética",
          "legal"
        ],
        "modules": [
          {
            "key": "M1",
            "title": "Introducci\u00f3n a la Ciberseguridad",
            "topics": [
              {
                "code": "1.1",
                "title": "El mundo de la ciberseguridad",
                "summary": "Fundamentos de ciberseguridad, valor de la identidad digital y riesgos reales sobre datos personales en entornos conectados.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_sio_operaciones.png",
                    "alt": "Diagrama de operaciones de seguridad con amenazas, internet y usuarios."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_mccumber_principios.png",
                    "alt": "Cubo de McCumber con principios base para proteger información."
                  }
                ],
                "sections": [
                  {
                    "title": "Ciberseguridad en contexto",
                    "items": [
                      "La ciberseguridad es un esfuerzo continuo para proteger personas, organizaciones y gobiernos frente a uso no autorizado, da\u00f1o o robo de informaci\u00f3n.",
                      "A nivel personal, protege identidad, cuentas, dispositivos y finanzas digitales.",
                      "A nivel organizacional, protege reputaci\u00f3n, continuidad operativa, datos de clientes y cumplimiento legal.",
                      "A nivel gubernamental, impacta seguridad nacional, estabilidad econ\u00f3mica y bienestar ciudadano."
                    ]
                  },
                  {
                    "title": "Identidad y datos personales",
                    "items": [
                      "La identidad fuera de l\u00ednea incluye datos como nombre completo, direcci\u00f3n, edad y documentos; tambi\u00e9n puede ser objetivo de fraude.",
                      "La identidad en l\u00ednea incluye usuario, alias, perfiles, historial de actividad y huella digital en servicios web.",
                      "Si una persona usa internet, ya tiene identidad digital, incluso sin redes sociales.",
                      "Los datos sensibles abarcan registros m\u00e9dicos, educativos, laborales y financieros, todos valiosos para suplantaci\u00f3n o fraude."
                    ]
                  },
                  {
                    "title": "D\u00f3nde terminan sus datos",
                    "items": [
                      "Al compartir contenido (por ejemplo fotos), los datos pueden replicarse en m\u00faltiples dispositivos y servidores fuera de su control.",
                      "Servicios m\u00e9dicos, aseguradoras, comercios y aplicaciones pueden procesar o conservar parte de su informaci\u00f3n.",
                      "Dispositivos inteligentes y wearables generan telemetr\u00eda de salud, ubicaci\u00f3n o comportamiento que tambi\u00e9n requiere protecci\u00f3n."
                    ]
                  },
                  {
                    "title": "Qui\u00e9n busca sus datos y por qu\u00e9",
                    "items": [
                      "Ciberdelincuentes: buscan dinero, credenciales y robo de identidad para fraude de corto y largo plazo.",
                      "Atacantes pueden explotar confianza personal (mensajes urgentes de familiares, ingenier\u00eda social, suplantaci\u00f3n).",
                      "ISP, anunciantes, motores de b\u00fasqueda, redes sociales y sitios web tambi\u00e9n recopilan datos para perfiles y segmentaci\u00f3n.",
                      "Cookies y rastreadores pueden construir un historial detallado de navegaci\u00f3n vinculado a su identidad digital."
                    ]
                  },
                  {
                    "title": "Pr\u00e1cticas de protecci\u00f3n inmediata",
                    "items": [
                      "Compartir solo lo necesario y revisar permisos de aplicaciones y servicios en la nube.",
                      "Usar contrase\u00f1as robustas y \u00fanicas, con autenticaci\u00f3n multifactor en cuentas cr\u00edticas.",
                      "Evitar publicar datos sensibles (ubicaci\u00f3n en tiempo real, documentos, identificadores personales).",
                      "Comprobar solicitudes de dinero o datos por un canal alterno antes de actuar."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Comprender que la ciberseguridad comienza con la gesti\u00f3n responsable de la identidad y los datos personales, y que protegerlos exige decisiones diarias de uso digital."
                    ]
                  }
                ]
              },
              {
                "code": "1.2",
                "title": "Datos de la organizaci\u00f3n",
                "summary": "Valor, clasificaci\u00f3n y protecci\u00f3n de los datos organizacionales frente a brechas de seguridad en entornos tradicionales y de nube.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_mccumber_principios.png",
                    "alt": "Cubo de McCumber con principios fundamentales para proteger información."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_mccumber_estados.png",
                    "alt": "Cubo de McCumber enfocado en estados de los datos."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_mccumber_medidas.png",
                    "alt": "Cubo de McCumber enfocado en medidas de seguridad."
                  }
                ],
                "sections": [
                  {
                    "title": "Tipos de datos organizacionales",
                    "items": [
                      "Los datos transaccionales soportan compras, ventas, producci\u00f3n y decisiones operativas del d\u00eda a d\u00eda.",
                      "La propiedad intelectual (patentes, dise\u00f1os, planes de producto) puede definir la ventaja competitiva de una empresa.",
                      "Los datos financieros (ingresos, balances, flujo de caja) reflejan la salud de la organizaci\u00f3n y son objetivo frecuente de fraude."
                    ]
                  },
                  {
                    "title": "IoT y Big Data en el riesgo empresarial",
                    "items": [
                      "El Internet de las cosas (IoT) conecta sensores, equipos y sistemas que recopilan y comparten datos de forma continua.",
                      "La combinaci\u00f3n de IoT, nube y virtualizaci\u00f3n incrementa el volumen de datos y ampl\u00eda la superficie de ataque.",
                      "A mayor cantidad de datos y dispositivos conectados, mayor necesidad de gobierno de datos y controles de seguridad escalables."
                    ]
                  },
                  {
                    "title": "Marco de protecci\u00f3n: Cubo de McCumber",
                    "items": [
                      "Principios base: confidencialidad, integridad y disponibilidad (CIA).",
                      "Estados de la informaci\u00f3n: en proceso, en reposo y en tr\u00e1nsito.",
                      "Medidas complementarias: pol\u00edticas y procedimientos, tecnolog\u00eda, y concientizaci\u00f3n/capacitaci\u00f3n del personal.",
                      "El modelo ayuda a evaluar seguridad de forma integral, no solo desde la tecnolog\u00eda."
                    ]
                  },
                  {
                    "title": "Incidentes reales y lecciones",
                    "items": [
                      "Razer (2020): exposici\u00f3n de datos por configuraci\u00f3n incorrecta en nube y ventana de riesgo prolongada.",
                      "Persirai (IoT): c\u00e1maras IP comprometidas para ataques DDoS mediante abuso de puertos y malware en memoria.",
                      "Equifax (2017): explotaci\u00f3n de vulnerabilidad web con impacto masivo sobre datos personales.",
                      "En una crisis, tambi\u00e9n aparecen fraudes secundarios (sitios falsos, phishing), por lo que se debe verificar siempre el dominio oficial."
                    ]
                  },
                  {
                    "title": "Consecuencias de una brecha",
                    "items": [
                      "Da\u00f1o reputacional y p\u00e9rdida de confianza de clientes, socios y empleados.",
                      "Robo de identidad y fraude financiero sobre personas afectadas.",
                      "P\u00e9rdidas econ\u00f3micas por interrupci\u00f3n operativa, sanciones regulatorias e inversiones urgentes en remediaci\u00f3n.",
                      "Exposici\u00f3n de propiedad intelectual con impacto directo en competitividad."
                    ]
                  },
                  {
                    "title": "Acciones recomendadas",
                    "items": [
                      "Clasificar datos por sensibilidad y aplicar controles seg\u00fan riesgo.",
                      "Fortalecer seguridad en nube con configuraci\u00f3n segura por defecto y revisiones peri\u00f3dicas.",
                      "Mantener gesti\u00f3n de vulnerabilidades, respaldo y plan de respuesta a incidentes probado.",
                      "Capacitar a usuarios para detectar phishing y validar fuentes oficiales antes de entregar informaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Evaluar el valor de los datos organizacionales, entender el impacto de una brecha y seleccionar controles t\u00e9cnicos, administrativos y humanos para reducir riesgo."
                    ]
                  }
                ]
              },
              {
                "code": "1.4",
                "title": "Ciberatacantes",
                "summary": "Clasificaci\u00f3n de actores de amenaza, diferencias entre atacantes internos y externos, y sus motivaciones principales.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_hacker_perfil.png",
                    "alt": "Icono de atacante para representar perfiles de ciberatacantes."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_spoofing.png",
                    "alt": "Ejemplo de suplantación de identidad en red como táctica de ataque."
                  }
                ],
                "sections": [
                  {
                    "title": "Tipos de atacantes",
                    "items": [
                      "Los atacantes aficionados (script kiddies) usan herramientas p\u00fablicas para lanzar ataques con poco conocimiento t\u00e9cnico propio.",
                      "Sombrero blanco: prueba sistemas con autorizaci\u00f3n para encontrar y reportar debilidades.",
                      "Sombrero gris: detecta fallas sin autorizaci\u00f3n formal y puede divulgar hallazgos seg\u00fan su agenda.",
                      "Sombrero negro: explota vulnerabilidades con fines ilegales (lucro, fraude, extorsi\u00f3n o sabotaje).",
                      "Grupos organizados: ciberdelincuentes, hacktivistas y actores patrocinados por estados, con mayor sofisticaci\u00f3n y recursos."
                    ]
                  },
                  {
                    "title": "Amenazas internas y externas",
                    "items": [
                      "Amenaza interna: empleados, contratistas o socios que pueden exponer datos por error o por acci\u00f3n intencional.",
                      "Ejemplos internos: mal manejo de informaci\u00f3n sensible, uso de USB infectados, clic en enlaces maliciosos o abuso de privilegios.",
                      "Amenaza externa: atacantes fuera de la organizaci\u00f3n que aprovechan fallas de red, credenciales d\u00e9biles e ingenier\u00eda social."
                    ]
                  },
                  {
                    "title": "Motivaciones frecuentes",
                    "items": [
                      "Beneficio econ\u00f3mico: robo de dinero, datos o credenciales para fraude.",
                      "Espionaje: extracci\u00f3n de secretos comerciales, tecnol\u00f3gicos o de defensa.",
                      "Impacto pol\u00edtico o ideol\u00f3gico: hacktivismo, desinformaci\u00f3n y presi\u00f3n social.",
                      "Sabotaje operativo: interrupci\u00f3n de servicios cr\u00edticos y da\u00f1o reputacional."
                    ]
                  },
                  {
                    "title": "Controles recomendados",
                    "items": [
                      "Aplicar principio de m\u00ednimo privilegio y control estricto de acceso a datos sensibles.",
                      "Fortalecer autenticaci\u00f3n (MFA), segmentaci\u00f3n de red y monitoreo continuo de eventos.",
                      "Capacitar al personal contra phishing e ingenier\u00eda social con simulaciones peri\u00f3dicas.",
                      "Definir proceso formal de respuesta a incidentes para amenazas internas y externas."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Distinguir perfiles de atacante y asociarlos a controles t\u00e9cnicos y operativos para reducir probabilidad e impacto de incidentes."
                    ]
                  }
                ]
              },
              {
                "code": "1.5",
                "title": "Guerra cibern\u00e9tica",
                "summary": "Uso estrat\u00e9gico de capacidades cibern\u00e9ticas por estados y grupos avanzados para espionaje y sabotaje de infraestructura cr\u00edtica.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_certs.jpeg",
                    "alt": "Logotipos de equipos internacionales de respuesta a incidentes informáticos."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_sio_operaciones.png",
                    "alt": "Modelo operativo de defensa y coordinación ante incidentes de gran escala."
                  }
                ],
                "sections": [
                  {
                    "title": "Concepto operativo",
                    "items": [
                      "La guerra cibern\u00e9tica busca ventaja frente a naciones o competidores mediante operaciones digitales persistentes.",
                      "Puede combinar espionaje, interrupci\u00f3n de servicios y sabotaje de sistemas industriales sin invasi\u00f3n f\u00edsica."
                    ]
                  },
                  {
                    "title": "Caso de referencia: Stuxnet",
                    "items": [
                      "Stuxnet fue dise\u00f1ado para comprometer sistemas Windows y afectar controladores l\u00f3gicos programables (PLC) en entornos industriales.",
                      "Us\u00f3 vulnerabilidades de d\u00eda cero, propagaci\u00f3n por USB y t\u00e9cnicas avanzadas de persistencia y actualizaci\u00f3n modular.",
                      "Su objetivo principal no era robar datos, sino alterar procesos f\u00edsicos y da\u00f1ar infraestructura cr\u00edtica."
                    ]
                  },
                  {
                    "title": "Objetivos de la guerra cibern\u00e9tica",
                    "items": [
                      "Obtener inteligencia estrat\u00e9gica y secretos de defensa.",
                      "Reducir brechas tecnol\u00f3gicas e industriales mediante espionaje digital.",
                      "Desestabilizar servicios esenciales (energ\u00eda, transporte, comunicaciones, salud) para generar caos y presi\u00f3n pol\u00edtica."
                    ]
                  },
                  {
                    "title": "Impacto sobre la sociedad",
                    "items": [
                      "Una interrupci\u00f3n en infraestructura cr\u00edtica puede afectar comercio, movilidad, atenci\u00f3n m\u00e9dica y acceso a servicios digitales.",
                      "Las consecuencias pueden escalar r\u00e1pidamente y erosionar la confianza ciudadana en instituciones y operadores."
                    ]
                  },
                  {
                    "title": "Preparaci\u00f3n defensiva",
                    "items": [
                      "Proteger sistemas OT/ICS con segmentaci\u00f3n, control de cambios y monitoreo especializado.",
                      "Reducir superficie de ataque: gesti\u00f3n de parches, inventario de activos y control de medios removibles.",
                      "Coordinar equipos t\u00e9cnicos, legales y de continuidad para responder a incidentes de alto impacto."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Diferenciar cibercrimen de ciberconflicto estatal y comprender por qu\u00e9 la protecci\u00f3n de infraestructura cr\u00edtica exige estrategias de defensa avanzadas."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "key": "M2",
            "title": "Ataques, conceptos y t\u00e9cnicas",
            "topics": [
              {
                "code": "2.1",
                "title": "Analizando un ciberataque",
                "summary": "Tipos de malware, signos de compromiso y acciones iniciales para analizar y contener un ciberataque.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_nmap_scan.png",
                    "alt": "Captura de escaneo Nmap para analizar puertos y servicios."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_ids.png",
                    "alt": "Ubicación de IDS para detectar eventos sospechosos durante el análisis de un ataque."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_ips.png",
                    "alt": "Ubicación de IPS para contener tráfico malicioso durante la respuesta inicial."
                  }
                ],
                "sections": [
                  {
                    "title": "Qu\u00e9 es malware y por qu\u00e9 importa",
                    "items": [
                      "Malware es cualquier c\u00f3digo malicioso que roba datos, evade controles de acceso o compromete sistemas.",
                      "Entender c\u00f3mo se propaga y qu\u00e9 efectos provoca permite contener incidentes con mayor rapidez.",
                      "Un an\u00e1lisis temprano reduce tiempo de exposici\u00f3n, impacto operativo y costo de recuperaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Tipos de malware m\u00e1s comunes",
                    "items": [
                      "Spyware: esp\u00eda actividad del usuario y puede capturar teclas, credenciales y datos sensibles.",
                      "Adware: inunda con publicidad no deseada y con frecuencia viene acompa\u00f1ado de rastreo.",
                      "Puerta trasera (backdoor): omite autenticaci\u00f3n para permitir acceso remoto no autorizado.",
                      "Ransomware: cifra datos o bloquea el sistema para exigir un pago.",
                      "Scareware: usa mensajes de miedo para inducir instalaci\u00f3n de software malicioso.",
                      "Rootkit: altera componentes del sistema para ocultarse y escalar privilegios.",
                      "Virus: se adjunta a archivos ejecutables y requiere acci\u00f3n del usuario para activarse.",
                      "Troyano: aparenta ser leg\u00edtimo, pero ejecuta acciones maliciosas.",
                      "Gusano: se autorreplica y se propaga por red sin depender de un archivo anfitri\u00f3n."
                    ]
                  },
                  {
                    "title": "S\u00edntomas de infecci\u00f3n",
                    "items": [
                      "Alto uso de CPU, lentitud extrema, bloqueos frecuentes o reinicios inesperados.",
                      "Navegaci\u00f3n web anormalmente lenta, redirecciones y problemas de conectividad.",
                      "Aparici\u00f3n de archivos/programas desconocidos o cambios no autorizados en configuraciones.",
                      "Procesos o servicios extra\u00f1os en segundo plano.",
                      "Env\u00edo de correos desde la cuenta del usuario sin su consentimiento."
                    ]
                  },
                  {
                    "title": "Acciones iniciales de respuesta",
                    "items": [
                      "Aislar el equipo sospechoso de la red para limitar propagaci\u00f3n.",
                      "Preservar evidencias b\u00e1sicas (hora, procesos, eventos, archivos sospechosos) antes de limpiar.",
                      "Ejecutar escaneo con herramientas antimalware actualizadas y validar integridad del sistema.",
                      "Aplicar parches, cambiar credenciales comprometidas y revisar persistencias (tareas, servicios, inicio).",
                      "Si hay rootkit o da\u00f1o profundo, priorizar reinstalaci\u00f3n limpia y restauraci\u00f3n desde respaldos verificados."
                    ]
                  },
                  {
                    "title": "Prevenci\u00f3n continua",
                    "items": [
                      "Capacitar usuarios frente a phishing, adjuntos y descargas no confiables.",
                      "Mantener actualizados sistema operativo, aplicaciones y firmas de seguridad.",
                      "Implementar m\u00ednimo privilegio, segmentaci\u00f3n y copias de seguridad peri\u00f3dicas probadas."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Identificar r\u00e1pidamente patrones de malware, reconocer indicadores de compromiso y ejecutar una contenci\u00f3n inicial efectiva."
                    ]
                  }
                ]
              },
              {
                "code": "2.2",
                "title": "M\u00e9todos de infiltraci\u00f3n",
                "summary": "Vectores de entrada usados por atacantes: ingenier\u00eda social, DoS/DDoS, botnets, MiTM, ataques de contrase\u00f1a y APT.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_spoofing.png",
                    "alt": "Diagrama de suplantación de identidad en red (spoofing)."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_hacker_perfil.png",
                    "alt": "Perfil de atacante como referencia de actores de infiltración."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_xss.png",
                    "alt": "Vector XSS como ejemplo de infiltración en aplicaciones web."
                  }
                ],
                "sections": [
                  {
                    "title": "Ingenier\u00eda social",
                    "items": [
                      "La ingenier\u00eda social manipula a las personas para revelar informaci\u00f3n o ejecutar acciones inseguras.",
                      "Pretexto: el atacante miente sobre su identidad o urgencia para obtener datos privilegiados.",
                      "Tailgating: ingreso f\u00edsico no autorizado siguiendo a una persona con acceso leg\u00edtimo.",
                      "Quid pro quo: intercambio de supuesta ayuda/regalo por credenciales o informaci\u00f3n sensible."
                    ]
                  },
                  {
                    "title": "Ataques de denegaci\u00f3n de servicio",
                    "items": [
                      "DoS: interrupci\u00f3n de servicios por saturaci\u00f3n o uso de paquetes malformados.",
                      "DDoS: mismo objetivo, pero desde m\u00faltiples fuentes coordinadas para aumentar impacto.",
                      "El efecto habitual es degradaci\u00f3n severa, ca\u00edda del servicio o indisponibilidad total."
                    ]
                  },
                  {
                    "title": "Botnets y control C2",
                    "items": [
                      "Una botnet es una red de equipos comprometidos (bots/zombies) controlados remotamente.",
                      "Los bots se usan para DDoS, distribuci\u00f3n de malware, spam y fuerza bruta de contrase\u00f1as.",
                      "El tr\u00e1fico hacia infraestructura de comando y control (C2) es un indicador clave de compromiso.",
                      "Filtros de inteligencia de amenazas ayudan a detectar comunicaciones con botnets conocidas."
                    ]
                  },
                  {
                    "title": "Intercepci\u00f3n en ruta y manipulaci\u00f3n",
                    "items": [
                      "MiTM (Man-in-the-Middle): el atacante intercepta/modifica comunicaci\u00f3n entre dos extremos.",
                      "MiTMo (Man-in-the-Mobile): variante orientada a dispositivos m\u00f3viles y robo de c\u00f3digos/sesiones.",
                      "El riesgo principal es la captura de datos financieros, credenciales y tokens de autenticaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Envenenamiento SEO y tr\u00e1fico malicioso",
                    "items": [
                      "El envenenamiento SEO manipula resultados de b\u00fasqueda para posicionar sitios maliciosos.",
                      "Su objetivo es atraer usuarios hacia p\u00e1ginas con malware o fraude por ingenier\u00eda social."
                    ]
                  },
                  {
                    "title": "Ataques de contrase\u00f1a",
                    "items": [
                      "Password spraying: pocas contrase\u00f1as comunes contra muchas cuentas para evadir bloqueos.",
                      "Diccionario: prueba sistem\u00e1tica de palabras frecuentes y variantes.",
                      "Fuerza bruta: exploraci\u00f3n de combinaciones hasta acertar la clave.",
                      "Tabla arco\u00edris: b\u00fasqueda de coincidencias de hash precalculadas.",
                      "Intercepci\u00f3n de texto plano: captura de claves cuando no hay cifrado robusto."
                    ]
                  },
                  {
                    "title": "Amenazas persistentes avanzadas (APT)",
                    "items": [
                      "APT: operaciones sigilosas, multietapa y de largo plazo contra objetivos espec\u00edficos.",
                      "Suelen estar bien financiadas y buscar espionaje, ventaja estrat\u00e9gica o sabotaje sostenido.",
                      "La persistencia en el entorno objetivo es prioritaria para extraer valor sin ser detectados."
                    ]
                  },
                  {
                    "title": "Controles recomendados",
                    "items": [
                      "Capacitaci\u00f3n continua contra ingenier\u00eda social, verificaci\u00f3n de identidad y canales seguros.",
                      "MFA, pol\u00edticas de contrase\u00f1a robusta y bloqueo adaptativo ante intentos sospechosos.",
                      "Protecci\u00f3n de correo/web, segmentaci\u00f3n de red y monitoreo de tr\u00e1fico hacia C2.",
                      "Plan de respuesta con detecci\u00f3n temprana, contenci\u00f3n, erradicaci\u00f3n y lecciones aprendidas."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Reconocer los principales m\u00e9todos de infiltraci\u00f3n y seleccionar controles preventivos y de detecci\u00f3n acordes al riesgo."
                    ]
                  }
                ]
              },
              {
                "code": "2.3",
                "title": "Aprovechamiento de las vulnerabilidades de seguridad",
                "summary": "C\u00f3mo los atacantes explotan fallas de hardware y software, y qu\u00e9 controles reducen el riesgo de compromiso.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_xss.png",
                    "alt": "Esquema de ataque XSS entre atacante, víctima y sitio comprometido."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_nmap_scan.png",
                    "alt": "Reconocimiento técnico de puertos y servicios para identificar vectores explotables."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_mccumber_medidas.png",
                    "alt": "Dimensión de medidas de seguridad para mitigar explotación de vulnerabilidades."
                  }
                ],
                "sections": [
                  {
                    "title": "Vulnerabilidades de hardware",
                    "items": [
                      "Algunas fallas provienen del dise\u00f1o f\u00edsico del hardware y no solo del software.",
                      "Rowhammer: acceso repetitivo a una fila de memoria RAM puede inducir corrupci\u00f3n en celdas vecinas.",
                      "Meltdown y Spectre afectaron CPU de uso masivo y permitieron extraer datos mediante ataques de canal lateral.",
                      "Aunque suelen ser ataques dirigidos, requieren mitigaciones de firmware, sistema operativo y controles de entorno."
                    ]
                  },
                  {
                    "title": "Vulnerabilidades de software",
                    "items": [
                      "Se originan por errores en sistema operativo, aplicaciones o configuraci\u00f3n insegura.",
                      "Caso SynFUL Knock: instalaci\u00f3n de imagen IOS alterada en routers empresariales para tomar control del dispositivo.",
                      "Buenas pr\u00e1cticas: validar integridad de im\u00e1genes/paquetes, restringir acceso f\u00edsico y limitar privilegios administrativos."
                    ]
                  },
                  {
                    "title": "Categor\u00edas frecuentes de fallas",
                    "items": [
                      "Desbordamiento de b\u00fafer: escritura fuera de l\u00edmites que permite corrupci\u00f3n de memoria o escalada de privilegios.",
                      "Entrada no validada: datos maliciosos fuerzan comportamientos no previstos por la aplicaci\u00f3n.",
                      "Condiciones de carrera: ejecuciones fuera de secuencia crean estados explotables.",
                      "Debilidades de dise\u00f1o de seguridad: uso incorrecto de autenticaci\u00f3n, autorizaci\u00f3n o cifrado.",
                      "Problemas de control de acceso: permisos excesivos o mal aplicados facilitan acceso no autorizado."
                    ]
                  },
                  {
                    "title": "Actualizaciones y gesti\u00f3n de vulnerabilidades",
                    "items": [
                      "El parcheo continuo reduce la ventana de explotaci\u00f3n de fallas conocidas.",
                      "No basta con actualizar una vez: aparecen vulnerabilidades nuevas de forma regular.",
                      "Programas de pruebas de penetraci\u00f3n y equipos dedicados (ejemplo: Project Zero) ayudan a detectar fallas antes de que se exploten."
                    ]
                  },
                  {
                    "title": "Controles recomendados",
                    "items": [
                      "Inventario de activos y clasificaci\u00f3n de criticidad para priorizar correcciones.",
                      "Hardening de sistemas, m\u00ednimo privilegio y segmentaci\u00f3n para reducir superficie de ataque.",
                      "Cifrado de datos en reposo y en tr\u00e1nsito para limitar impacto si hay acceso no autorizado.",
                      "Monitoreo de integridad, registros y alertas para detecci\u00f3n temprana de actividad an\u00f3mala."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Identificar c\u00f3mo se explotan vulnerabilidades de hardware y software, y aplicar un ciclo de mitigaci\u00f3n basado en parcheo, configuraci\u00f3n segura y monitoreo continuo."
                    ]
                  }
                ]
              },
              {
                "code": "2.4",
                "title": "El panorama de la ciberseguridad",
                "summary": "Panorama actual centrado en criptomonedas y criptojacking como vectores de riesgo t\u00e9cnico y econ\u00f3mico.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_tendencias_riesgo.png",
                    "alt": "Indicadores de tendencias de riesgo en ciberseguridad."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_sio_operaciones.png",
                    "alt": "Vista operacional del ecosistema de amenazas y defensa en ciberseguridad."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_certs.jpeg",
                    "alt": "Ecosistema CERT/FIRST para coordinación global ante incidentes de seguridad."
                  }
                ],
                "sections": [
                  {
                    "title": "Criptomoneda en contexto",
                    "items": [
                      "La criptomoneda es dinero digital que usa criptograf\u00eda para proteger transacciones.",
                      "Las operaciones se registran en un libro mayor distribuido (blockchain), replicado entre nodos de la red.",
                      "La validaci\u00f3n de transacciones mediante miner\u00eda requiere capacidad computacional significativa."
                    ]
                  },
                  {
                    "title": "Riesgos asociados al ecosistema cripto",
                    "items": [
                      "El car\u00e1cter pseud\u00f3nimo y descentralizado puede dificultar trazabilidad en ciertos delitos.",
                      "Los atacantes explotan credenciales de billeteras, claves privadas y plataformas mal configuradas.",
                      "Las campa\u00f1as de extorsi\u00f3n digital suelen exigir pagos en criptoactivos por su rapidez operativa."
                    ]
                  },
                  {
                    "title": "Criptojacking: c\u00f3mo funciona",
                    "items": [
                      "El criptojacking instala o ejecuta c\u00f3digo que mina criptomonedas sin consentimiento del usuario.",
                      "Puede afectar PC, servidores, port\u00e1tiles, dispositivos m\u00f3viles y entornos en la nube.",
                      "El atacante monetiza recursos ajenos mientras la v\u00edctima asume costos de energ\u00eda y degradaci\u00f3n del servicio."
                    ]
                  },
                  {
                    "title": "Indicadores de compromiso",
                    "items": [
                      "Uso anormal y sostenido de CPU/GPU, sobrecalentamiento y rendimiento degradado.",
                      "Incremento inesperado en consumo el\u00e9ctrico o costos de infraestructura cloud.",
                      "Procesos desconocidos, tareas programadas sospechosas o conexiones salientes inusuales."
                    ]
                  },
                  {
                    "title": "Mitigaci\u00f3n recomendada",
                    "items": [
                      "Aplicar parches y endurecimiento del sistema en endpoints, servidores y contenedores.",
                      "Restringir ejecuci\u00f3n de scripts no confiables y usar protecci\u00f3n EDR/antimalware actualizada.",
                      "Monitorear consumo de recursos, telemetr\u00eda de procesos y tr\u00e1fico de red para detecci\u00f3n temprana.",
                      "Asegurar cuentas con MFA y m\u00ednimo privilegio para reducir abuso de credenciales."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Explicar el rol de la criptomoneda en el panorama de amenazas y detectar tempranamente se\u00f1ales de criptojacking para contener su impacto."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "key": "M3",
            "title": "Protegiendo sus datos y su privacidad",
            "topics": [
              {
                "code": "3.1",
                "title": "Protegiendo sus dispositivos y su red",
                "summary": "Buenas pr\u00e1cticas para proteger endpoints, Wi-Fi dom\u00e9stica, redes p\u00fablicas y autenticaci\u00f3n con contrase\u00f1as robustas.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_password_reglas.png",
                    "alt": "Gu\u00eda visual de buenas pr\u00e1cticas para crear contrase\u00f1as fuertes."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_ids.png",
                    "alt": "IDS como control para detectar actividad sospechosa en la red dom\u00e9stica o personal."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_ips.png",
                    "alt": "IPS como control para bloquear tr\u00e1fico malicioso y proteger dispositivos."
                  }
                ],
                "sections": [
                  {
                    "title": "Protecci\u00f3n de dispositivos inform\u00e1ticos",
                    "items": [
                      "Activar firewall local o de red y mantenerlo actualizado para bloquear accesos no autorizados.",
                      "Instalar antivirus/antispyware y descargar software solo de fuentes confiables.",
                      "Mantener sistema operativo y navegador con parches de seguridad al d\u00eda.",
                      "Usar contrase\u00f1a en todos los dispositivos, cifrar datos sensibles y minimizar datos almacenados localmente."
                    ]
                  },
                  {
                    "title": "IoT y segmentaci\u00f3n de red",
                    "items": [
                      "Muchos dispositivos IoT no reciben actualizaciones frecuentes y permanecen vulnerables por largos periodos.",
                      "Si un IoT se compromete, puede abrir una ruta hacia equipos y datos de la red local.",
                      "Recomendaci\u00f3n: aislar IoT en una red separada (SSID/VLAN dedicada) con pol\u00edticas restrictivas."
                    ]
                  },
                  {
                    "title": "Seguridad Wi-Fi en el hogar",
                    "items": [
                      "Cambiar SSID y credenciales predeterminadas del router para evitar accesos triviales.",
                      "Habilitar cifrado robusto (WPA2/WPA3 seg\u00fan compatibilidad) y mantener firmware del AP actualizado.",
                      "No confiar en ocultar SSID como control principal; no sustituye autenticaci\u00f3n ni cifrado.",
                      "Considerar mitigaciones de KRACK: parcheo oportuno de AP, clientes y sistemas."
                    ]
                  },
                  {
                    "title": "Riesgos de Wi-Fi p\u00fablica y Bluetooth",
                    "items": [
                      "En redes p\u00fablicas, evitar transacciones sensibles si no hay protecci\u00f3n adicional.",
                      "Usar VPN confiable para cifrar el tr\u00e1fico extremo a extremo y reducir riesgo de intercepci\u00f3n.",
                      "Desactivar compartici\u00f3n de archivos y mantener Bluetooth apagado cuando no se use."
                    ]
                  },
                  {
                    "title": "Contrase\u00f1as y frases de contrase\u00f1a",
                    "items": [
                      "Preferir frases de contrase\u00f1a largas y memorables sobre claves cortas complejas.",
                      "Seguir lineamientos modernos (NIST): longitud suficiente, bloqueo de contrase\u00f1as comunes y evitar pistas.",
                      "Evitar caducidad forzada sin justificaci\u00f3n de riesgo; priorizar MFA y detecci\u00f3n de compromiso."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Implementar una postura de seguridad personal integral que combine hardening de dispositivos, protecci\u00f3n de red inal\u00e1mbrica y autenticaci\u00f3n robusta."
                    ]
                  }
                ]
              },
              {
                "code": "3.2",
                "title": "Mantenimiento de datos",
                "summary": "Protecci\u00f3n del ciclo de vida de la informaci\u00f3n mediante cifrado, respaldo peri\u00f3dico y eliminaci\u00f3n segura.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_mccumber_estados.png",
                    "alt": "Protecci\u00f3n de datos seg\u00fan su estado: en reposo, en tr\u00e1nsito y en uso."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_mccumber_medidas.png",
                    "alt": "Medidas de seguridad aplicadas para proteger datos durante todo su ciclo de vida."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_mccumber_principios.png",
                    "alt": "Principios de confidencialidad, integridad y disponibilidad aplicados al mantenimiento de datos."
                  }
                ],
                "sections": [
                  {
                    "title": "Cifrado como control base",
                    "items": [
                      "Cifrar convierte los datos en un formato ilegible para usuarios no autorizados.",
                      "Solo quien posee la clave o credencial correcta puede restaurar el contenido original.",
                      "El cifrado no evita la intercepci\u00f3n del tr\u00e1fico, pero reduce la exposici\u00f3n si los datos son capturados."
                    ]
                  },
                  {
                    "title": "Protecci\u00f3n de archivos y dispositivos",
                    "items": [
                      "Herramientas del sistema operativo (por ejemplo EFS en Windows) permiten cifrar archivos, carpetas o unidades.",
                      "Cifrar dispositivos port\u00e1tiles reduce impacto por robo o p\u00e9rdida del equipo.",
                      "La clave de acceso debe estar protegida con autenticaci\u00f3n fuerte y controles de cuenta."
                    ]
                  },
                  {
                    "title": "Respaldo de datos",
                    "items": [
                      "Realizar copias de seguridad peri\u00f3dicas evita p\u00e9rdida irreversible de informaci\u00f3n.",
                      "Aplicar estrategia 3-2-1: tres copias, en dos medios distintos, con al menos una copia fuera del sitio.",
                      "Automatizar respaldos y verificar restauraci\u00f3n de forma regular es tan importante como crear la copia."
                    ]
                  },
                  {
                    "title": "Opciones de almacenamiento de respaldo",
                    "items": [
                      "Local/secundario: NAS, discos externos u otros medios bajo control directo de la organizaci\u00f3n.",
                      "Nube: servicios como AWS ofrecen disponibilidad y resiliencia ante incendio, robo o falla local.",
                      "Seleccionar qu\u00e9 respaldar seg\u00fan criticidad de datos, costo y requisitos de recuperaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Eliminaci\u00f3n segura y sanitizaci\u00f3n",
                    "items": [
                      "Borrar un archivo de forma convencional no siempre impide su recuperaci\u00f3n forense.",
                      "Para datos sensibles, usar herramientas de sobreescritura segura y procedimientos de sanitizaci\u00f3n.",
                      "Cuando el riesgo lo exige, la destrucci\u00f3n f\u00edsica del medio es la garant\u00eda m\u00e1s robusta.",
                      "No olvidar eliminar tambi\u00e9n copias en servicios en la nube cuando aplique."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Definir y aplicar una estrategia pr\u00e1ctica de cifrado, respaldo y eliminaci\u00f3n segura para reducir riesgo de fuga, p\u00e9rdida o reutilizaci\u00f3n no autorizada de datos."
                    ]
                  }
                ]
              },
              {
                "code": "3.4",
                "title": "Protecci\u00f3n de la privacidad en l\u00ednea",
                "summary": "Controles para reducir exposici\u00f3n digital: autenticaci\u00f3n fuerte, acceso federado seguro y h\u00e1bitos de navegaci\u00f3n conscientes.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_passphrase.png",
                    "alt": "Construcci\u00f3n de frase de contrase\u00f1a segura con caracteres especiales."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_spoofing.png",
                    "alt": "Ejemplo de suplantaci\u00f3n de identidad digital como riesgo para la privacidad en l\u00ednea."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_xss.png",
                    "alt": "Ejemplo de ataque web que compromete sesiones y datos de usuario en navegaci\u00f3n."
                  }
                ],
                "sections": [
                  {
                    "title": "Autenticaci\u00f3n en dos factores",
                    "items": [
                      "2FA/MFA agrega una capa adicional al inicio de sesi\u00f3n, adem\u00e1s de usuario y contrase\u00f1a.",
                      "El segundo factor puede ser algo que tienes (token/tel\u00e9fono), algo que eres (biometr\u00eda) o un c\u00f3digo temporal.",
                      "Reduce el impacto del robo de contrase\u00f1as, aunque no elimina riesgos de phishing o malware avanzado."
                    ]
                  },
                  {
                    "title": "OAuth y acceso con terceros",
                    "items": [
                      "OAuth permite usar una cuenta existente para acceder a otra aplicaci\u00f3n sin compartir la contrase\u00f1a directamente.",
                      "Beneficio: mejor experiencia de usuario y menor exposici\u00f3n de credenciales.",
                      "Riesgo: otorgar permisos excesivos a aplicaciones de terceros puede exponer datos sensibles.",
                      "Recomendaci\u00f3n: revisar y revocar peri\u00f3dicamente permisos de apps vinculadas."
                    ]
                  },
                  {
                    "title": "Ingenier\u00eda social y phishing dirigido",
                    "items": [
                      "Los atacantes estudian personas y procesos para crear correos convincentes con contexto real.",
                      "Un adjunto malicioso puede iniciar ransomware o abrir una puerta para exfiltraci\u00f3n de datos.",
                      "Incluso organizaciones grandes fallan cuando se combinan urgencia, confianza y falta de verificaci\u00f3n.",
                      "Pr\u00e1ctica clave: verificar remitente, dominio, enlaces y contexto antes de abrir adjuntos."
                    ]
                  },
                  {
                    "title": "Privacidad en correo y navegaci\u00f3n",
                    "items": [
                      "El modo privado del navegador reduce huella local (historial, archivos temporales y cookies de sesi\u00f3n).",
                      "Es \u00fatil en equipos compartidos para evitar exposici\u00f3n accidental de actividad local.",
                      "No vuelve an\u00f3nimo al usuario frente a ISP, redes corporativas, proxies o sitios web."
                    ]
                  },
                  {
                    "title": "Controles complementarios recomendados",
                    "items": [
                      "Usar HTTPS y servicios de correo con cifrado para proteger contenido en tr\u00e1nsito.",
                      "Usar VPN confiable en redes no confiables para reducir intercepci\u00f3n de tr\u00e1fico.",
                      "Aplicar gestor de contrase\u00f1as, MFA y actualizaciones continuas de sistema y navegador."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Tomar decisiones de privacidad en l\u00ednea con criterio t\u00e9cnico, combinando autenticaci\u00f3n fuerte, validaci\u00f3n anti-phishing y configuraci\u00f3n segura de navegaci\u00f3n."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "key": "M4",
            "title": "Protegiendo a la organizaci\u00f3n",
            "topics": [
              {
                "code": "4.1",
                "title": "Dispositivos y tecnolog\u00edas de ciberseguridad",
                "summary": "Arquitectura de defensa organizacional con dispositivos de seguridad, inspecci\u00f3n de tr\u00e1fico, detecci\u00f3n en tiempo real y control de malware.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_ids.png",
                    "alt": "Ubicaci\u00f3n de IDS en la red para detectar tr\u00e1fico malicioso."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_ips.png",
                    "alt": "Ubicaci\u00f3n de IPS en la red para bloquear tr\u00e1fico malicioso."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_nmap_scan.png",
                    "alt": "Escaneo de puertos y servicios como apoyo a validaci\u00f3n de superficie de ataque."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_tendencias_riesgo.png",
                    "alt": "Indicadores de riesgo que justifican defensa por capas en la organizaci\u00f3n."
                  }
                ],
                "sections": [
                  {
                    "title": "Dispositivos de seguridad esenciales",
                    "items": [
                      "Routers: interconectan segmentos y aplican filtrado b\u00e1sico de tr\u00e1fico.",
                      "Firewalls: inspeccionan y aplican pol\u00edticas para permitir o bloquear comunicaciones.",
                      "IPS: detecta y bloquea tr\u00e1fico malicioso seg\u00fan firmas y reglas.",
                      "VPN: crea t\u00faneles cifrados para acceso remoto y conexi\u00f3n segura entre sedes.",
                      "Antimalware/antivirus: combina firmas y an\u00e1lisis de comportamiento para detener c\u00f3digo malicioso.",
                      "Otros controles: seguridad web/correo, control de acceso, descifrado y plataformas de gesti\u00f3n."
                    ]
                  },
                  {
                    "title": "Tipos de firewall y su alcance",
                    "items": [
                      "Firewall de red: protege segmentos completos; firewall de host: protege un equipo espec\u00edfico.",
                      "Capa de red: filtra por IP origen/destino.",
                      "Capa de transporte: filtra por puertos y estado de sesi\u00f3n.",
                      "Capa de aplicaci\u00f3n: filtra por servicio o aplicaci\u00f3n concreta.",
                      "Context-aware: decide seg\u00fan usuario, dispositivo, rol, aplicaci\u00f3n y perfil de amenaza.",
                      "Proxy y proxy inverso: controlan acceso web y protegen/publican servicios internos."
                    ]
                  },
                  {
                    "title": "An\u00e1lisis de puertos como validaci\u00f3n",
                    "items": [
                      "El escaneo de puertos identifica servicios expuestos y ayuda a evaluar superficie de ataque.",
                      "Estados comunes: abierto, cerrado o filtrado; cada estado orienta decisiones de hardening.",
                      "Escaneos internos y externos permiten verificar si reglas de firewall y NAT funcionan como se espera.",
                      "Puertos innecesarios abiertos deben cerrarse o restringirse con pol\u00edticas de acceso."
                    ]
                  },
                  {
                    "title": "IDS/IPS y detecci\u00f3n en tiempo real",
                    "items": [
                      "IDS detecta y alerta; IPS detecta y puede bloquear en l\u00ednea.",
                      "El an\u00e1lisis por firmas y comportamiento permite detectar escaneos, sondas y ataques conocidos.",
                      "La detecci\u00f3n temprana es cr\u00edtica frente a ataques de d\u00eda cero y campa\u00f1as DDoS.",
                      "Defensa efectiva requiere correlaci\u00f3n de eventos entre firewall, IDS/IPS y telemetr\u00eda de endpoints."
                    ]
                  },
                  {
                    "title": "Protecci\u00f3n avanzada de malware",
                    "items": [
                      "Soluciones empresariales de an\u00e1lisis avanzado correlacionan archivos y comportamientos sospechosos a escala.",
                      "El trabajo coordinado entre SOC, respuesta a incidentes e inteligencia de amenazas reduce tiempo de contenci\u00f3n.",
                      "La automatizaci\u00f3n acelera bloqueo, investigaci\u00f3n forense y remediaci\u00f3n de compromisos."
                    ]
                  },
                  {
                    "title": "Buenas pr\u00e1cticas de seguridad organizacional",
                    "items": [
                      "Evaluaci\u00f3n de riesgos y pol\u00edtica de seguridad con roles y responsabilidades claras.",
                      "Controles f\u00edsicos y de RR. HH. para proteger infraestructura y reducir amenazas internas.",
                      "Parches y actualizaciones continuas en servidores, clientes y dispositivos de red.",
                      "Copias de seguridad probadas, control de acceso fuerte y plan de respuesta a incidentes ensayado.",
                      "Capacitaci\u00f3n de usuarios y cifrado de datos sensibles en reposo y en tr\u00e1nsito."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Dise\u00f1ar una defensa en profundidad para la organizaci\u00f3n, combinando controles de red, detecci\u00f3n activa, protecci\u00f3n de endpoints y gobernanza operativa."
                    ]
                  }
                ]
              },
              {
                "code": "4.2",
                "title": "Comportamiento a seguir en la ciberseguridad",
                "summary": "Enfoque operativo para detectar anomal\u00edas, ejecutar evaluaciones t\u00e9cnicas y reducir impacto mediante respuesta y gesti\u00f3n de riesgos.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_netflow.png",
                    "alt": "Flujo NetFlow y campos de inspecci\u00f3n para an\u00e1lisis de tr\u00e1fico."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_nmap_scan.png",
                    "alt": "Reconocimiento t\u00e9cnico con Nmap como insumo para an\u00e1lisis de comportamiento y pruebas."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_sio_operaciones.png",
                    "alt": "Ciclo operativo de seguridad para detecci\u00f3n, an\u00e1lisis y respuesta ante incidentes."
                  }
                ],
                "sections": [
                  {
                    "title": "Seguridad basada en comportamiento",
                    "items": [
                      "Analiza flujos de comunicaci\u00f3n entre usuarios, equipos y destinos para detectar desviaciones del patr\u00f3n normal.",
                      "Las anomal\u00edas de comportamiento pueden ser indicadores tempranos de compromiso o abuso interno.",
                      "Honeypots permiten atraer, observar y registrar t\u00e9cnicas del atacante para fortalecer defensas reales."
                    ]
                  },
                  {
                    "title": "Telemetr\u00eda de red con NetFlow",
                    "items": [
                      "NetFlow recopila metadatos de flujo: qui\u00e9n se comunica, con qui\u00e9n, cu\u00e1ndo y c\u00f3mo.",
                      "Routers, switches y firewalls exportan flujos a colectores para an\u00e1lisis hist\u00f3rico y en tiempo real.",
                      "Con l\u00edneas base de comportamiento se detectan cambios en puertos, destinos, volumen y frecuencia de tr\u00e1fico."
                    ]
                  },
                  {
                    "title": "Pruebas de penetraci\u00f3n",
                    "items": [
                      "El pentest eval\u00faa sistemas, personas y procesos para descubrir fallas explotables antes que un atacante real.",
                      "Fases habituales: planificaci\u00f3n, reconocimiento/escaneo, obtenci\u00f3n de acceso, persistencia controlada y reporte final.",
                      "Los hallazgos deben traducirse en acciones concretas: parches, hardening, controles de acceso y capacitaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Reducci\u00f3n del impacto ante incidentes",
                    "items": [
                      "Comunicar de forma oportuna a empleados, clientes y partes interesadas con mensajes claros y verificables.",
                      "Asumir responsabilidad, describir alcance del incidente y transparentar datos potencialmente comprometidos.",
                      "Investigar causa ra\u00edz con evidencia forense, cerrar puertas traseras y validar erradicaci\u00f3n completa.",
                      "Aplicar lecciones aprendidas para evitar recurrencia y recuperar confianza."
                    ]
                  },
                  {
                    "title": "Gesti\u00f3n de riesgos",
                    "items": [
                      "Proceso continuo para identificar amenazas, estimar impacto y decidir tratamiento del riesgo.",
                      "Opciones de tratamiento: eliminar, mitigar, transferir o aceptar seg\u00fan criticidad y costo/beneficio.",
                      "El costo del control no debe superar el valor del activo protegido.",
                      "Los riesgos aceptados tambi\u00e9n se monitorean; pueden escalar y requerir nuevas medidas."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Implementar un ciclo operativo de ciberseguridad que combine detecci\u00f3n por comportamiento, pruebas t\u00e9cnicas, respuesta efectiva e inteligencia de riesgo para mejorar resiliencia organizacional."
                    ]
                  }
                ]
              },
              {
                "code": "4.3",
                "title": "Enfoque de Cisco para la ciberseguridad",
                "summary": "Modelo integrado de Cisco para prevenir, detectar y responder incidentes mediante equipos especializados, automatizaci\u00f3n y control de acceso por identidad.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_sio_operaciones.png",
                    "alt": "Modelo de operaciones de seguridad y coordinaci\u00f3n de controles."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_certs.jpeg",
                    "alt": "Organizaciones CERT de referencia para coordinaci\u00f3n de respuesta."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_netflow.png",
                    "alt": "Telemetr\u00eda de red para soporte de decisiones en CSIRT y SOC."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_control_acceso_administrativo.png",
                    "alt": "Controles administrativos que complementan el enfoque t\u00e9cnico de ciberseguridad."
                  }
                ],
                "sections": [
                  {
                    "title": "CSIRT y operaci\u00f3n proactiva",
                    "items": [
                      "Un CSIRT recibe, valida y responde incidentes de seguridad; en un enfoque maduro tambi\u00e9n anticipa amenazas.",
                      "El enfoque de Cisco incluye evaluaci\u00f3n proactiva de amenazas, planeaci\u00f3n de mitigaci\u00f3n y an\u00e1lisis de tendencias.",
                      "La colaboraci\u00f3n con comunidades y centros de intercambio de inteligencia fortalece la capacidad de respuesta."
                    ]
                  },
                  {
                    "title": "Security playbook",
                    "items": [
                      "Un playbook define procedimientos repetibles para detecci\u00f3n, escalamiento y respuesta a incidentes.",
                      "Debe incluir consultas estandarizadas, fuentes de datos, responsables y tiempos objetivo de respuesta.",
                      "Tambi\u00e9n documenta acciones post-incidente: contenci\u00f3n, recuperaci\u00f3n, mejoras y lecciones aprendidas.",
                      "La automatizaci\u00f3n de casos frecuentes reduce variabilidad y acelera la operaci\u00f3n del SOC."
                    ]
                  },
                  {
                    "title": "Herramientas clave de detecci\u00f3n y prevenci\u00f3n",
                    "items": [
                      "SIEM: centraliza logs y alertas para correlacionar eventos hist\u00f3ricos y en tiempo real.",
                      "DLP: protege datos en uso, en tr\u00e1nsito y en reposo para evitar fuga de informaci\u00f3n sensible.",
                      "La combinaci\u00f3n SIEM + DLP mejora visibilidad, trazabilidad y cumplimiento de pol\u00edticas."
                    ]
                  },
                  {
                    "title": "Identidad, segmentaci\u00f3n y visibilidad",
                    "items": [
                      "Cisco ISE centraliza pol\u00edticas de acceso basadas en identidad y contexto de usuario/dispositivo.",
                      "TrustSec aplica segmentaci\u00f3n para aislar amenazas y limitar movimiento lateral.",
                      "Stealthwatch aporta anal\u00edtica de comportamiento y detecci\u00f3n de anomal\u00edas, incluso en tr\u00e1fico cifrado.",
                      "La integraci\u00f3n de estas capacidades habilita control en tiempo real y respuesta coordinada."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Comprender c\u00f3mo una arquitectura integrada (CSIRT + playbooks + SIEM/DLP + ISE/TrustSec) mejora la resiliencia y reduce el tiempo de detecci\u00f3n y respuesta ante incidentes."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "key": "M5",
            "title": "\u00bfSu futuro estar\u00e1 relacionado con la ciberseguridad?",
            "topics": [
              {
                "code": "5.1",
                "title": "Cuestiones legales y \u00e9ticas",
                "summary": "Principios legales y \u00e9ticos para ejercer ciberseguridad de forma responsable en contextos personales y corporativos.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_control_acceso_administrativo.png",
                    "alt": "Elementos de control de acceso administrativo: pol\u00edticas, procedimientos y capacitaci\u00f3n."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_password_reglas.png",
                    "alt": "Reglas y lineamientos de credenciales como base de cumplimiento y buenas pr\u00e1cticas."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_tendencias_riesgo.png",
                    "alt": "Panorama de riesgos y amenazas que exige decisiones legales y \u00e9ticas en ciberseguridad."
                  }
                ],
                "sections": [
                  {
                    "title": "L\u00edmites legales en ciberseguridad",
                    "items": [
                      "Tener habilidad t\u00e9cnica para atacar un sistema no autoriza a hacerlo: la legalidad y el permiso expl\u00edcito son obligatorios.",
                      "En entornos corporativos, acciones fuera de norma pueden generar sanciones para la empresa y responsabilidad personal.",
                      "Ante duda legal, detener la acci\u00f3n y consultar al \u00e1rea legal o de recursos humanos."
                    ]
                  },
                  {
                    "title": "Dimensi\u00f3n internacional",
                    "items": [
                      "El ciberespacio no respeta fronteras f\u00edsicas tradicionales, lo que complica jurisdicci\u00f3n y atribuci\u00f3n de ataques.",
                      "El derecho internacional en ciberseguridad sigue evolucionando mediante pr\u00e1ctica estatal, tratados y doctrina."
                    ]
                  },
                  {
                    "title": "\u00c9tica profesional aplicada",
                    "items": [
                      "No todo lo legal es \u00e9tico; la conducta profesional exige transparencia, integridad y responsabilidad.",
                      "En pruebas de seguridad, ocultar hallazgos cr\u00edticos (por conveniencia personal) compromete a la organizaci\u00f3n y a sus clientes.",
                      "Todo hallazgo relevante debe documentarse y reportarse seg\u00fan el alcance y el protocolo del ejercicio."
                    ]
                  },
                  {
                    "title": "Preguntas de decisi\u00f3n \u00e9tica",
                    "items": [
                      "\u00bfEs legal esta acci\u00f3n?",
                      "\u00bfCumple la pol\u00edtica interna y beneficia a la organizaci\u00f3n y sus partes interesadas?",
                      "\u00bfAceptar\u00eda que esta decisi\u00f3n fuera p\u00fablica en un titular de noticias?",
                      "Si alguna respuesta es no, detenerse y escalar para orientaci\u00f3n."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Actuar dentro del marco legal y \u00e9tico, reportando hallazgos de forma completa y tomando decisiones defendibles ante auditor\u00eda, clientes y reguladores."
                    ]
                  }
                ]
              },
              {
                "code": "5.2",
                "title": "Educaci\u00f3n y carreras",
                "summary": "Ruta de desarrollo profesional en ciberseguridad: exploraci\u00f3n de roles, aprendizaje continuo y certificaciones reconocidas.",
                "images": [
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_certs.jpeg",
                    "alt": "Organizaciones y ecosistema profesional de ciberseguridad (CERT/FIRST)."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_sio_operaciones.png",
                    "alt": "Funciones operativas en centros de seguridad (SOC) y colaboraci\u00f3n entre equipos."
                  },
                  {
                    "src": "./assets/images/intro-cybersecurity/C9_netflow.png",
                    "alt": "Ejemplo de anal\u00edtica de tr\u00e1fico como competencia t\u00e9cnica para carreras de ciberseguridad."
                  }
                ],
                "sections": [
                  {
                    "title": "Plan de crecimiento profesional",
                    "items": [
                      "Explorar vacantes reales permite entender habilidades demandadas por rol (SOC, respuesta, GRC, pentest, arquitectura).",
                      "Revisar plataformas de empleo ayuda a mapear tendencias, requisitos y oportunidades globales.",
                      "Definir una especialidad temprana acelera la selecci\u00f3n de cursos, laboratorios y experiencia pr\u00e1ctica."
                    ]
                  },
                  {
                    "title": "Certificaciones de referencia",
                    "items": [
                      "CCST Ciberseguridad: entrada para perfiles junior y estudiantes en etapa inicial.",
                      "CompTIA Security+: base generalista reconocida para roles de seguridad TI.",
                      "CEH: enfoque ofensivo controlado para evaluaci\u00f3n de vulnerabilidades de forma legal.",
                      "CISSP: certificaci\u00f3n avanzada orientada a dise\u00f1o y gesti\u00f3n de programas de seguridad.",
                      "Cisco Certified CyberOps Associate: competencias clave para analistas en centros de operaciones de seguridad."
                    ]
                  },
                  {
                    "title": "Estrategia recomendada",
                    "items": [
                      "Combinar estudio te\u00f3rico con pr\u00e1ctica constante en laboratorios y entornos simulados.",
                      "Construir portafolio t\u00e9cnico con casos, reportes y ejercicios reproducibles.",
                      "Actualizarse de forma continua en amenazas, herramientas y marcos de defensa."
                    ]
                  },
                  {
                    "title": "Resultado esperado",
                    "items": [
                      "Trazar un camino profesional realista y sostenible en ciberseguridad, alineando experiencia pr\u00e1ctica, certificaciones y objetivos de carrera."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
            "id": "intro-iot-digital-transformation",
            "title": "Introducción al Internet de las Cosas y Transformación Digital",
            "provider": "Cisco Networking Academy",
            "level": "Fundamentos",
            "status": "En curso",
            "estimatedHours": 20,
            "summary": "Curso base para comprender IoT, automatización, datos masivos, seguridad y oportunidades profesionales en la transformación digital.",
            "tags": [
                  "iot",
                  "transformacion-digital",
                  "automatizacion",
                  "inteligencia-artificial",
                  "datos-masivos",
                  "seguridad"
            ],
            "modules": [
                  {
                        "key": "M1",
                        "title": "Transformación digital y conectividad IoT",
                        "topics": [
                              {
                                    "code": "1.1",
                                    "title": "La digitalización transforma los negocios",
                                    "summary": "Evolución de la digitalización hacia modelos de negocio conectados, orientados a datos y mejora continua.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_001.jpeg",
                                                "alt": "Globo digital conectado que representa transformación de negocios a escala global."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_002.png",
                                                "alt": "Automatización y analítica como impulsores de eficiencia en procesos empresariales."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_003.png",
                                                "alt": "Cadena logística conectada que ejemplifica digitalización operativa en tiempo real."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "De digitalizar a transformar",
                                                "items": [
                                                      "Digitalizar no es solo usar tecnología; implica rediseñar procesos, roles y servicios.",
                                                      "La transformación digital integra personas, procesos y datos en una estrategia común.",
                                                      "La mejora continua depende de métricas claras y decisiones guiadas por evidencia."
                                                ]
                                          },
                                          {
                                                "title": "Impacto en operaciones y clientes",
                                                "items": [
                                                      "Reduce tiempos de ciclo, errores operativos y costos de reproceso.",
                                                      "Permite experiencias de cliente más rápidas y personalizadas.",
                                                      "Facilita escalar servicios cuando la arquitectura tecnológica está preparada."
                                                ]
                                          },
                                          {
                                                "title": "Riesgos de una adopción superficial",
                                                "items": [
                                                      "Incorporar herramientas sin rediseño de procesos suele generar sobrecostos y bajo retorno.",
                                                      "Sin gobierno de datos, aumenta el riesgo de decisiones rápidas pero incorrectas.",
                                                      "Sin seguridad por diseño, crece la exposición a incidentes y paradas de servicio."
                                                ]
                                          },
                                          {
                                                "title": "Resultado esperado",
                                                "items": [
                                                      "Diferenciar digitalización y transformación digital, y explicar su impacto en competitividad, eficiencia y resiliencia."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "1.2",
                                    "title": "Conectados globalmente a través de redes",
                                    "summary": "La red como plataforma de interconexión entre usuarios, sistemas e IoT en entornos locales y distribuidos.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_008.png",
                                                "alt": "Diagrama LAN y WAN que conecta hogares, servicios e infraestructura."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_021.png",
                                                "alt": "Arquitectura de conectividad entre borde, internet y centro de datos."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_001.jpeg",
                                                "alt": "Interconexión global que sustenta servicios digitales y colaboración remota."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "La red como plataforma base",
                                                "items": [
                                                      "Toda solución digital depende de una red estable para transportar datos, voz, video y telemetría.",
                                                      "Disponibilidad, latencia, capacidad y seguridad condicionan la continuidad operativa.",
                                                      "Una red bien diseñada habilita automatización y analítica en tiempo real."
                                                ]
                                          },
                                          {
                                                "title": "Tipos de red según alcance",
                                                "items": [
                                                      "LAN conecta recursos locales con alta velocidad y baja latencia.",
                                                      "WAN interconecta sedes, centros de datos y servicios remotos.",
                                                      "WLAN agrega movilidad para usuarios y dispositivos IoT en un mismo sitio."
                                                ]
                                          },
                                          {
                                                "title": "Direccionamiento y visibilidad",
                                                "items": [
                                                      "El direccionamiento IP correcto permite identificar, enrutar y administrar dispositivos de forma consistente.",
                                                      "La segmentación de red reduce superficie de ataque y mejora control del tráfico.",
                                                      "El monitoreo continuo permite detectar congestión, fallos y comportamiento anómalo de manera temprana."
                                                ]
                                          },
                                          {
                                                "title": "Resultado esperado",
                                                "items": [
                                                      "Relacionar tipo de red, alcance y calidad de conectividad con objetivos operativos de soluciones IoT y servicios digitales."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "1.3",
                                    "title": "El crecimiento de los dispositivos de IoT",
                                    "summary": "Crecimiento acelerado de sensores y actuadores en hogares, industria, salud y ciudades, y su impacto en datos, operaci\u00f3n y seguridad.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_009.png",
                                                "alt": "Ecosistema IoT con m\u00faltiples dispositivos y nodos conectados."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_011.png",
                                                "alt": "Sensores conectados en entorno industrial para monitoreo continuo."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_019.png",
                                                "alt": "Panel de datos IoT para an\u00e1lisis de eventos y toma de decisiones."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Qu\u00e9 impulsa el crecimiento de IoT",
                                                "items": [
                                                      "La reducci\u00f3n de costos en sensores, conectividad y c\u00f3mputo aceler\u00f3 la adopci\u00f3n en m\u00faltiples sectores.",
                                                      "La necesidad de visibilidad en tiempo real impulsa despliegues en log\u00edstica, manufactura, energ\u00eda y salud.",
                                                      "Los modelos de negocio basados en datos convierten telemetr\u00eda en decisiones operativas y comerciales."
                                                ]
                                          },
                                          {
                                                "title": "Impacto t\u00e9cnico y operativo",
                                                "items": [
                                                      "M\u00e1s dispositivos implican m\u00e1s direcciones, m\u00e1s tr\u00e1fico y mayor necesidad de segmentaci\u00f3n de red.",
                                                      "El borde (edge) procesa eventos cr\u00edticos con baja latencia antes de enviar datos a nube o centro de datos.",
                                                      "La interoperabilidad entre fabricantes requiere est\u00e1ndares, pasarelas y gesti\u00f3n de versiones de firmware."
                                                ]
                                          },
                                          {
                                                "title": "Riesgos y controles clave",
                                                "items": [
                                                      "Cada dispositivo adicional ampl\u00eda la superficie de ataque y puede convertirse en punto de entrada.",
                                                      "Es obligatorio aplicar identidad por dispositivo, actualizaci\u00f3n segura y cifrado de comunicaciones.",
                                                      "La observabilidad continua ayuda a detectar comportamiento an\u00f3malo y fallos tempranos."
                                                ]
                                          },
                                          {
                                                "title": "Resultado esperado",
                                                "items": [
                                                      "Explicar por qu\u00e9 crece IoT, qu\u00e9 retos de escalabilidad introduce y qu\u00e9 controles m\u00ednimos exige para operar con seguridad."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "1.4",
                                    "title": "Conexi\u00f3n de los dispositivos de IoT a la red",
                                    "summary": "Integraci\u00f3n de sensores, actuadores, gateways y plataformas de gesti\u00f3n para transportar telemetr\u00eda y ejecutar acciones de control confiables.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_010.png",
                                                "alt": "Arquitectura IoT con controlador, sensores y actuadores en computaci\u00f3n perimetral."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_021.png",
                                                "alt": "Conectividad entre borde, red WAN e infraestructura central."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_023.png",
                                                "alt": "Flujo de datos IoT desde dispositivo hasta plataforma de an\u00e1lisis."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Arquitectura de conexi\u00f3n",
                                                "items": [
                                                      "Los dispositivos IoT se conectan por Ethernet, Wi-Fi, Bluetooth, LPWAN o red celular seg\u00fan alcance y consumo energ\u00e9tico.",
                                                      "Los gateways agregan tr\u00e1fico, traducen protocolos y aplican pol\u00edticas antes de enviar informaci\u00f3n al n\u00facleo.",
                                                      "El dise\u00f1o debe considerar disponibilidad, latencia, seguridad y costo operacional."
                                                ]
                                          },
                                          {
                                                "title": "Protocolos y flujo de datos",
                                                "items": [
                                                      "MQTT, CoAP y HTTP/HTTPS son opciones frecuentes para telemetr\u00eda y control en IoT.",
                                                      "Los datos deben etiquetarse con tiempo, estado e identidad de origen para facilitar trazabilidad.",
                                                      "La calidad de servicio evita p\u00e9rdida de eventos cr\u00edticos en escenarios con congesti\u00f3n."
                                                ]
                                          },
                                          {
                                                "title": "Checklist de implementaci\u00f3n",
                                                "items": [
                                                      "Asignar direccionamiento y segmentaci\u00f3n por tipo de dispositivo y criticidad del servicio.",
                                                      "Validar autenticaci\u00f3n mutua, cifrado en tr\u00e1nsito y actualizaci\u00f3n segura de firmware.",
                                                      "Monitorear disponibilidad, consumo de ancho de banda y salud del gateway."
                                                ]
                                          },
                                          {
                                                "title": "Resultado esperado",
                                                "items": [
                                                      "Dise\u00f1ar una conexi\u00f3n IoT b\u00e1sica, justificar el medio o protocolo elegido y definir controles m\u00ednimos de operaci\u00f3n segura."
                                                ]
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "key": "M2",
                        "title": "Programación y prototipado",
                        "topics": [
                              {
                                    "code": "2.1",
                                    "title": "Conceptos de programaci\u00f3n b\u00e1sica",
                                    "summary": "Fundamentos de pensamiento algor\u00edtmico, estructuras de control y modelado de datos para resolver problemas t\u00e9cnicos en entornos IoT.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_012.png",
                                                "alt": "Diagrama de flujo con decisiones y acciones para resolver un problema."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_015.jpeg",
                                                "alt": "Interfaz de bloques usada para practicar l\u00f3gica de programaci\u00f3n."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_011.png",
                                                "alt": "Sistema conectado que ilustra automatizaci\u00f3n y ejecuci\u00f3n de instrucciones."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Pensamiento algor\u00edtmico",
                                                "items": [
                                                      "Un algoritmo descompone un problema en pasos finitos, ordenados y verificables.",
                                                      "Definir entradas, proceso y salida evita ambig\u00fcedades al implementar una soluci\u00f3n.",
                                                      "Diagramas de flujo y pseudoc\u00f3digo ayudan a validar la l\u00f3gica antes de programar."
                                                ]
                                          },
                                          {
                                                "title": "Estructuras b\u00e1sicas",
                                                "items": [
                                                      "Variables, tipos de datos y operadores permiten modelar estado y reglas de negocio.",
                                                      "Secuencia, condicionales e iteraciones son la base para automatizar decisiones repetitivas.",
                                                      "Funciones simples favorecen reutilizaci\u00f3n y mantenimiento del c\u00f3digo."
                                                ]
                                          },
                                          {
                                                "title": "Buenas pr\u00e1cticas iniciales",
                                                "items": [
                                                      "Nombrar variables con claridad y evitar l\u00f3gica duplicada reduce errores.",
                                                      "Probar casos normales y casos l\u00edmite mejora confiabilidad desde etapas tempranas.",
                                                      "Documentar supuestos t\u00e9cnicos facilita trabajo colaborativo y soporte posterior."
                                                ]
                                          },
                                          {
                                                "title": "Resultado esperado",
                                                "items": [
                                                      "Plantear una soluci\u00f3n algor\u00edtmica b\u00e1sica y traducirla a estructuras de programaci\u00f3n comprensibles y comprobables."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "2.2",
                                    "title": "Programaci\u00f3n b\u00e1sica con Blockly",
                                    "summary": "Uso de programaci\u00f3n visual para adquirir fundamentos de l\u00f3gica, control de flujo y depuraci\u00f3n sin fricci\u00f3n sint\u00e1ctica.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_015.jpeg",
                                                "alt": "Pantalla de Blockly Games para aprendizaje progresivo de programaci\u00f3n."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_012.png",
                                                "alt": "Flujo de decisiones que puede implementarse con bloques l\u00f3gicos."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_017.jpeg",
                                                "alt": "Actividad pr\u00e1ctica de prototipado que conecta l\u00f3gica visual con resultados reales."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Por qu\u00e9 empezar con bloques",
                                                "items": [
                                                      "Blockly elimina errores de sintaxis y permite enfocarse en la secuencia l\u00f3gica del problema.",
                                                      "Cada bloque representa una instrucci\u00f3n concreta y ayuda a visualizar dependencias.",
                                                      "El aprendizaje es m\u00e1s r\u00e1pido para quienes inician en programaci\u00f3n."
                                                ]
                                          },
                                          {
                                                "title": "Patrones que se entrenan",
                                                "items": [
                                                      "Uso de condicionales para tomar decisiones seg\u00fan entradas o estados del sistema.",
                                                      "Uso de bucles para repetir tareas de forma eficiente.",
                                                      "Descomposici\u00f3n en bloques reutilizables como antesala de funciones."
                                                ]
                                          },
                                          {
                                                "title": "De Blockly a Python",
                                                "items": [
                                                      "Los mismos conceptos de flujo se trasladan a lenguajes textuales con cambios de sintaxis.",
                                                      "La transici\u00f3n es m\u00e1s simple cuando se domina primero la l\u00f3gica del problema.",
                                                      "Comparar soluciones en bloques y en texto refuerza comprensi\u00f3n de estructuras."
                                                ]
                                          },
                                          {
                                                "title": "Checklist de pr\u00e1ctica",
                                                "items": [
                                                      "Resolver un reto con secuencia y luego optimizarlo con condicionales o bucles.",
                                                      "Probar entradas distintas y registrar resultados esperados vs. obtenidos.",
                                                      "Explicar verbalmente la l\u00f3gica antes de implementarla en otro lenguaje."
                                                ]
                                          },
                                          {
                                                "title": "Resultado esperado",
                                                "items": [
                                                      "Construir programas sencillos en Blockly y justificar su l\u00f3gica como base para evolucionar a Python."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "2.3",
                                    "title": "Programaci\u00f3n con Python",
                                    "summary": "Introducci\u00f3n pr\u00e1ctica a Python para automatizar tareas, procesar datos de sensores y construir scripts reutilizables en proyectos IoT.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_011.png",
                                                "alt": "Sistema conectado que representa automatizaci\u00f3n mediante software en IoT."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_012.png",
                                                "alt": "Flujo l\u00f3gico de decisiones, aplicable a scripts de Python para control de procesos."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_019.png",
                                                "alt": "Panel de an\u00e1lisis de datos, resultado t\u00edpico de scripts de procesamiento en Python."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Por qu\u00e9 Python en IoT",
                                                "items": [
                                                      "Python es legible, tiene amplia comunidad y dispone de bibliotecas para redes, datos y automatizaci\u00f3n.",
                                                      "Permite crear prototipos funcionales r\u00e1pidos sin sacrificar claridad del c\u00f3digo.",
                                                      "Su ecosistema facilita integrar APIs, archivos CSV/JSON y servicios en la nube."
                                                ]
                                          },
                                          {
                                                "title": "Estructuras esenciales",
                                                "items": [
                                                      "Variables, listas y diccionarios permiten modelar estados y lecturas de dispositivos.",
                                                      "Condicionales y bucles controlan decisiones repetitivas en flujos de monitoreo.",
                                                      "Funciones y m\u00f3dulos mejoran reutilizaci\u00f3n, mantenimiento y pruebas."
                                                ]
                                          },
                                          {
                                                "title": "Flujo de script recomendado",
                                                "items": [
                                                      "Capturar datos, validar formato, procesar eventos y registrar resultados en bit\u00e1cora.",
                                                      "Manejar excepciones evita que errores puntuales detengan todo el proceso.",
                                                      "Separar configuraci\u00f3n, l\u00f3gica y salida ayuda a escalar el script a entornos reales."
                                                ]
                                          },
                                          {
                                                "title": "Resultado esperado",
                                                "items": [
                                                      "Desarrollar y explicar un script b\u00e1sico en Python que lea datos, aplique reglas y genere una salida verificable."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "2.4",
                                    "title": "\u00bfQu\u00e9 es la creaci\u00f3n de un prototipo?",
                                    "summary": "Construcci\u00f3n de versiones iniciales para validar hip\u00f3tesis t\u00e9cnicas, funcionales y de negocio antes de un despliegue completo.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_017.jpeg",
                                                "alt": "Trabajo pr\u00e1ctico de ensamblaje electr\u00f3nico durante prototipado."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_018.jpeg",
                                                "alt": "Herramientas y componentes utilizados para construir prototipos funcionales."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_023.png",
                                                "alt": "Visualizaci\u00f3n de resultados que apoya la validaci\u00f3n de un prototipo IoT."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Objetivo del prototipo",
                                                "items": [
                                                      "Reducir incertidumbre con evidencia temprana sobre funcionalidad, costo y factibilidad.",
                                                      "Validar supuestos clave antes de comprometer tiempo y presupuesto de despliegue.",
                                                      "Detectar riesgos t\u00e9cnicos y de usabilidad en etapas de bajo impacto."
                                                ]
                                          },
                                          {
                                                "title": "Niveles de fidelidad",
                                                "items": [
                                                      "Prototipo de baja fidelidad: valida idea y flujo general con recursos m\u00ednimos.",
                                                      "Prototipo funcional: prueba integraci\u00f3n entre hardware, software y conectividad.",
                                                      "Piloto controlado: eval\u00faa comportamiento en un entorno cercano al real."
                                                ]
                                          },
                                          {
                                                "title": "Ciclo iterativo",
                                                "items": [
                                                      "Dise\u00f1ar, construir, medir y ajustar en iteraciones cortas con criterios claros.",
                                                      "Registrar m\u00e9tricas t\u00e9cnicas (latencia, estabilidad, consumo) y retroalimentaci\u00f3n de usuario.",
                                                      "Cerrar cada iteraci\u00f3n con decisiones: continuar, corregir o descartar."
                                                ]
                                          },
                                          {
                                                "title": "Resultado esperado",
                                                "items": [
                                                      "Definir un prototipo IoT viable, sus criterios de \u00e9xito y el plan de iteraciones para madurarlo."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "2.5",
                                    "title": "Recursos para la creaci\u00f3n de prototipos",
                                    "summary": "Selecci\u00f3n de recursos t\u00e9cnicos, humanos y de laboratorio para construir prototipos de forma r\u00e1pida, segura y trazable.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_018.jpeg",
                                                "alt": "Recursos de laboratorio para pruebas de prototipado electr\u00f3nico."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_017.jpeg",
                                                "alt": "Equipo de trabajo desarrollando prototipos con enfoque pr\u00e1ctico."
                                          },
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_015.jpeg",
                                                "alt": "Herramienta visual de programaci\u00f3n \u00fatil en etapas tempranas de prototipado."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Recursos t\u00e9cnicos m\u00ednimos",
                                                "items": [
                                                      "Microcontrolador o placa de desarrollo, sensores b\u00e1sicos y fuente de energ\u00eda estable.",
                                                      "Entorno de desarrollo, control de versiones y repositorio para trazabilidad del c\u00f3digo.",
                                                      "Instrumentaci\u00f3n b\u00e1sica (mult\u00edmetro, cables, protoboard) para diagn\u00f3stico r\u00e1pido."
                                                ]
                                          },
                                          {
                                                "title": "Recursos humanos y metodol\u00f3gicos",
                                                "items": [
                                                      "Roles claros: quien dise\u00f1a, quien implementa, quien prueba y quien valida resultados.",
                                                      "Backlog de experimentos y criterios de aceptaci\u00f3n por iteraci\u00f3n.",
                                                      "Bit\u00e1cora de hallazgos para no repetir errores y acelerar mejoras."
                                                ]
                                          },
                                          {
                                                "title": "Seguridad y gobernanza en laboratorio",
                                                "items": [
                                                      "Separar redes de prueba de redes productivas y usar credenciales dedicadas.",
                                                      "Evitar contrase\u00f1as por defecto y registrar cambios de configuraci\u00f3n relevantes.",
                                                      "Mantener inventario de componentes y versiones de firmware utilizadas."
                                                ]
                                          },
                                          {
                                                "title": "Checklist de preparaci\u00f3n",
                                                "items": [
                                                      "Definir problema, alcance y m\u00e9trica de \u00e9xito antes de comprar o ensamblar.",
                                                      "Confirmar compatibilidad entre componentes y protocolos de comunicaci\u00f3n.",
                                                      "Planificar pruebas funcionales, de estabilidad y de recuperaci\u00f3n ante fallos."
                                                ]
                                          },
                                          {
                                                "title": "Resultado esperado",
                                                "items": [
                                                      "Seleccionar un kit de recursos coherente con el objetivo del prototipo y justificar su elecci\u00f3n t\u00e9cnica."
                                                ]
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "key": "M3",
                        "title": "Datos masivos y analítica",
                        "topics": [
                              {
                                    "code": "3.1",
                                    "title": "¿Qué son los datos masivos?",
                                    "summary": "Concepto de Big Data y características que exigen nuevos enfoques de procesamiento.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_019.png",
                                                "alt": "Representación de volumen, velocidad y variedad en datos masivos."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Características clave",
                                                "items": [
                                                      "Volumen, velocidad y variedad definen escenarios de datos masivos.",
                                                      "IoT incrementa generación continua de datos de sensores y eventos."
                                                ]
                                          },
                                          {
                                                "title": "Implicaciones",
                                                "items": [
                                                      "Se requieren plataformas escalables para almacenar y analizar información.",
                                                      "La calidad del dato condiciona decisiones de negocio y operación."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "3.2",
                                    "title": "¿Dónde se almacenan los datos masivos?",
                                    "summary": "Estrategias de almacenamiento en borde, centro de datos y nube según latencia y escala.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_021.png",
                                                "alt": "Arquitectura que combina computación de borde, internet y nube."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Opciones de almacenamiento",
                                                "items": [
                                                      "El borde procesa eventos cercanos a la fuente para menor latencia.",
                                                      "La nube aporta elasticidad para cargas variables y crecimiento rápido."
                                                ]
                                          },
                                          {
                                                "title": "Procesamiento distribuido",
                                                "items": [
                                                      "Distribuir datos entre nodos aumenta resiliencia y rendimiento.",
                                                      "La arquitectura debe equilibrar costo, seguridad y cumplimiento."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "3.3",
                                    "title": "Soporte de empresas con datos masivos",
                                    "summary": "Uso de analítica y visualización para decisiones más rápidas y mejor desempeño operativo.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_023.png",
                                                "alt": "Visualización analítica para encontrar relaciones y patrones en datos."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Valor para negocio",
                                                "items": [
                                                      "La analítica detecta patrones de demanda, eficiencia y riesgo.",
                                                      "Permite decisiones sustentadas en evidencia y no en supuestos."
                                                ]
                                          },
                                          {
                                                "title": "Visualización",
                                                "items": [
                                                      "Elegir el gráfico correcto mejora comprensión y comunicación ejecutiva.",
                                                      "Los hallazgos deben traducirse en acciones concretas medibles."
                                                ]
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "key": "M4",
                        "title": "Automatización, IA e intención de red",
                        "topics": [
                              {
                                    "code": "4.1",
                                    "title": "Automatización",
                                    "summary": "Aplicación de reglas y procesos automáticos para mejorar consistencia y velocidad operativa.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_002.png",
                                                "alt": "Robot con paneles de datos representando operaciones automatizadas."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Qué automatizar",
                                                "items": [
                                                      "Tareas repetitivas y de alto volumen con reglas claras.",
                                                      "Procesos con impacto en tiempos de respuesta y reducción de errores."
                                                ]
                                          },
                                          {
                                                "title": "Beneficios",
                                                "items": [
                                                      "Mayor eficiencia, trazabilidad y capacidad de escalar servicios.",
                                                      "Más tiempo del equipo para análisis y mejora continua."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "4.2",
                                    "title": "Inteligencia artificial (AI) y aprendizaje de máquina (ML)",
                                    "summary": "Uso de modelos de IA/ML para identificar patrones y apoyar decisiones en entornos IoT.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_026.jpeg",
                                                "alt": "Panel con métricas y patrones para análisis con IA y aprendizaje de máquina."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Fundamentos",
                                                "items": [
                                                      "IA engloba técnicas para resolver tareas cognitivas complejas.",
                                                      "ML aprende patrones desde datos para predecir o clasificar eventos."
                                                ]
                                          },
                                          {
                                                "title": "Aplicación en IoT",
                                                "items": [
                                                      "Permite detección de anomalías y mantenimiento predictivo.",
                                                      "Requiere datos de calidad y validación continua del modelo."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "4.3",
                                    "title": "Redes basadas en intención",
                                    "summary": "Modelo que traduce objetivos de negocio a políticas de red con verificación continua.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_027.png",
                                                "alt": "Ciclo operativo de redes basadas en intención con validación y ajuste."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Concepto operativo",
                                                "items": [
                                                      "La intención se convierte en políticas técnicas de manera automatizada.",
                                                      "La red valida estado real y corrige desviaciones de forma continua."
                                                ]
                                          },
                                          {
                                                "title": "Relación con IA/ML",
                                                "items": [
                                                      "IA/ML mejora detección de anomalías y recomendaciones de ajuste.",
                                                      "Aumenta consistencia de cambios y reduce errores operativos."
                                                ]
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "key": "M5",
                        "title": "Seguridad en IoT y protección de datos",
                        "topics": [
                              {
                                    "code": "5.1",
                                    "title": "¿Por qué la seguridad es tan importante?",
                                    "summary": "Importancia de proteger datos y servicios en ecosistemas conectados y de alta exposición.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_020.jpeg",
                                                "alt": "Carpeta protegida que representa seguridad de información sensible."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Datos y amenazas",
                                                "items": [
                                                      "Datos personales y operativos son objetivos de fraude y extorsión.",
                                                      "Más dispositivos conectados implican mayor superficie de ataque."
                                                ]
                                          },
                                          {
                                                "title": "Consecuencias",
                                                "items": [
                                                      "Una brecha afecta finanzas, reputación y continuidad de la organización.",
                                                      "La prevención requiere controles técnicos y disciplina operativa."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "5.2",
                                    "title": "Protegiendo el mundo corporativo",
                                    "summary": "Buenas prácticas para proteger infraestructura, red inalámbrica, endpoints y activos IoT.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_028.png",
                                                "alt": "Escenario de Wi-Fi público que evidencia riesgos y necesidad de controles."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Prácticas recomendadas",
                                                "items": [
                                                      "Aplicar mínimo privilegio, MFA y segmentación de red por funciones.",
                                                      "Mantener parches, inventario de activos y monitoreo continuo."
                                                ]
                                          },
                                          {
                                                "title": "Foco en IoT",
                                                "items": [
                                                      "Actualizar firmware y eliminar configuraciones por defecto inseguras.",
                                                      "Aislar dispositivos IoT para limitar movimiento lateral en incidentes."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "5.3",
                                    "title": "Protección de datos personales y dispositivos",
                                    "summary": "Controles de seguridad para hogares inteligentes y uso de conectividad pública.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_005.png",
                                                "alt": "Hogar inteligente con sensores y dispositivos que requieren configuración segura."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Hogar inteligente",
                                                "items": [
                                                      "Cambiar credenciales por defecto y separar red IoT de red principal.",
                                                      "Aplicar actualizaciones y desactivar servicios no necesarios."
                                                ]
                                          },
                                          {
                                                "title": "Uso en redes públicas",
                                                "items": [
                                                      "Evitar transacciones sensibles sin VPN y validación del punto de acceso.",
                                                      "Usar MFA, bloqueo de dispositivo y copias de seguridad periódicas."
                                                ]
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "key": "M6",
                        "title": "Oportunidades profesionales y aprendizaje continuo",
                        "topics": [
                              {
                                    "code": "6.1",
                                    "title": "Desafíos y oportunidades en el mundo digital",
                                    "summary": "Cambios tecnológicos que redefinen perfiles profesionales y competencias requeridas.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_003.png",
                                                "alt": "Logística conectada como ejemplo de transformación en sectores productivos."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Contexto actual",
                                                "items": [
                                                      "La digitalización acelera cambios en procesos y expectativas de usuarios.",
                                                      "El mercado demanda perfiles con base técnica y capacidad de adaptación."
                                                ]
                                          },
                                          {
                                                "title": "Aprendizaje permanente",
                                                "items": [
                                                      "Actualizar habilidades es clave para sostener empleabilidad.",
                                                      "Combinar teoría y práctica mejora preparación para roles emergentes."
                                                ]
                                          }
                                    ]
                              },
                              {
                                    "code": "6.2",
                                    "title": "Oportunidades profesionales y de educación",
                                    "summary": "Rutas de formación, certificaciones y comunidades para crecer en IoT y transformación digital.",
                                    "images": [
                                          {
                                                "src": "./assets/images/iot-digital-transformation/C10_media_002.png",
                                                "alt": "Tecnologías emergentes que representan oportunidades de carrera y certificación."
                                          }
                                    ],
                                    "sections": [
                                          {
                                                "title": "Ruta formativa",
                                                "items": [
                                                      "Definir objetivos por rol ayuda a elegir cursos y laboratorios relevantes.",
                                                      "Las certificaciones validan competencias ante empleadores y clientes."
                                                ]
                                          },
                                          {
                                                "title": "Ecosistema profesional",
                                                "items": [
                                                      "Participar en comunidades técnicas acelera aprendizaje y networking.",
                                                      "Construir portafolio práctico mejora acceso a oportunidades laborales."
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

