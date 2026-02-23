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
            title: "Windows: arquitectura y administración",
            topics: [
              {
                code: "1.1",
                title: "Historia, GUI y vulnerabilidades en Windows",
                summary:
                  "Evolución de DOS a Windows moderno, uso de GUI y riesgos asociados a vulnerabilidades del sistema.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-windows.svg",
                    alt: "Panorama de Windows, interfaz y operación básica."
                  }
                ],
                sections: [
                  {
                    title: "Puntos importantes",
                    items: [
                      "Windows evolucionó desde DOS hacia un entorno gráfico completo.",
                      "La GUI mejora productividad con Desktop, Taskbar y menús contextuales.",
                      "Todo sistema con mucho código puede contener vulnerabilidades explotables."
                    ]
                  }
                ]
              },
              {
                code: "1.2",
                title: "HAL, kernel, modos de CPU y sistemas de archivos",
                summary:
                  "Relación entre hardware y kernel, diferencia entre user mode/kernel mode, y uso de NTFS en Windows.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-windows.svg",
                    alt: "Arquitectura de Windows con HAL, kernel y capas de ejecución."
                  }
                ],
                sections: [
                  {
                    title: "Factores técnicos",
                    items: [
                      "HAL abstrae hardware para facilitar compatibilidad.",
                      "Kernel mode tiene control total; user mode limita impacto de fallas.",
                      "NTFS destaca por seguridad, permisos y trazabilidad de archivos."
                    ]
                  }
                ]
              },
              {
                code: "1.3",
                title: "Arranque, servicios, registro y herramientas de seguridad",
                summary:
                  "Secuencia de boot, gestión de procesos/servicios y uso de netstat, Event Viewer, Defender y Firewall.",
                images: [
                  {
                    src: "./assets/images/operating-systems-basics/osb-windows.svg",
                    alt: "Arranque de Windows y herramientas de administración y seguridad."
                  }
                ],
                sections: [
                  {
                    title: "Checklist operativo",
                    items: [
                      "Identificar etapas de inicio BIOS/UEFI, Bootmgr y Winload.",
                      "Supervisar procesos y servicios críticos con herramientas del sistema.",
                      "Aplicar monitoreo de eventos, actualizaciones y firewall activo."
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
              }
            ]
          }
        ]
      }
    ]
  };
})();
