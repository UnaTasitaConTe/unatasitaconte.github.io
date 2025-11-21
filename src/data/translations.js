export const translations = {
  es: {
    // Data
    data: {
      role: "Ingeniero de Software",
      about: {
        description: "Ingeniero de Software enfocado en diseñar e implementar soluciones empresariales robustas y escalables. Dominio técnico en múltiples tecnologías (.NET Core, React/Next.js, Node.js) y especialización en arquitecturas limpias, microservicios, sistemas distribuidos y automatización DevOps. Mi enfoque combina excelencia técnica con visión de negocio para crear sistemas que impulsan la transformación digital, optimizan operaciones y generan impacto medible en las organizaciones.",
        mainTechs: [
          "React", "Next.js", "TailwindCSS",
          "C#", ".NET Core", "ASP.NET",
          "Node.js", "Express",
          "SQL Server", "PostgreSQL",
          "Docker", "Microservicios", "CI/CD"
        ]
      },
      experience: {
        minas: {
          position: "Analista y Desarrollador de Software",
          descriptions: [
            "Desarrollo de sistemas internos con Next.js, C# y .NET Core",
            "Arquitectura de microservicios con RabbitMQ",
            "Modelado y optimización de bases de datos PostgreSQL/SQL Server",
            "Implementación de APIs REST con JWT y RBAC",
            "Despliegues en Docker, NGINX y pipelines CI/CD"
          ],
          achievement: "Diseño del ecosistema de mantenimiento minero digital (+25% eficiencia)"
        },
        cedac: {
          position: "Desarrollador de Software",
          descriptions: [
            "Desarrollo de sistemas web con Laravel y Vue.js",
            "Contenerización con Docker Compose",
            "Desarrollo de APIs REST y despliegues productivos"
          ],
          achievement: "Reducción de tiempos internos en 30%"
        },
        galindo: {
          position: "Técnico en Desarrollo",
          descriptions: [
            "Desarrollo de aplicaciones a medida",
            "Investigación tecnológica (.NET, Node.js)"
          ],
          achievement: "Incremento del 20% en eficiencia operativa"
        }
      },
      projects: {
        professional: {
          miningSystem: {
            name: "Sistema de Gestión de Mantenimiento Minero",
            description: "Plataforma web integral para la gestión de mantenimiento de equipos mineros con seguimiento en tiempo real, generación de reportes automáticos y análisis predictivo. Incluye módulos de planificación, ejecución y auditoría.",
            impact: "Incremento del 25% en eficiencia operativa"
          },
          authAPI: {
            name: "API de Autenticación y Autorización Empresarial",
            description: "Microservicio robusto de autenticación con JWT, refresh tokens, roles y permisos granulares (RBAC). Incluye rate limiting, 2FA y logging de auditoría completo para trazabilidad de accesos.",
            impact: "Sistema de seguridad centralizado para múltiples aplicaciones"
          },
          dashboard: {
            name: "Dashboard Analítico de Operaciones",
            description: "Dashboard interactivo con visualización de métricas operativas en tiempo real usando WebSockets. Gráficos dinámicos, KPIs personalizables y exportación de reportes en múltiples formatos.",
            impact: "Reducción del 40% en tiempo de toma de decisiones"
          },
          internalSystem: {
            name: "Sistema de Gestión Interna",
            description: "Plataforma web para optimización de procesos internos con módulos de gestión documental, flujos de aprobación y reportería avanzada.",
            impact: "Reducción del 30% en tiempos operativos"
          }
        },
        personal: {
          portfolio: {
            name: "Portfolio Interactivo",
            description: "Portafolio personal desarrollado con React, Vite y Framer Motion. Incluye sistema de temas claro/oscuro, animaciones fluidas y diseño responsive moderno."
          },
          taskManager: {
            name: "Task Manager API",
            description: "API REST para gestión de tareas con autenticación JWT, CRUD completo y documentación Swagger. Arquitectura limpia con .NET Core."
          },
          weatherApp: {
            name: "Weather App",
            description: "Aplicación del clima con geolocalización, pronósticos de 7 días y búsqueda de ciudades. Consumo de API REST y diseño responsive."
          }
        }
      }
    },

    // Navbar
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      certifications: 'Certificaciones',
      contact: 'Contacto'
    },

    // Hero
    hero: {
      greeting: 'Hola, soy',
      description: 'Diseño e implemento arquitecturas de software escalables, seguras y eficientes. Experto en transformación digital mediante soluciones innovadoras que integran tecnologías modernas, mejores prácticas y enfoque en resultados de negocio.',
      downloadCV: 'Descargar CV',
      contactMe: 'Contactarme'
    },

    // About
    about: {
      title: 'Sobre',
      titleHighlight: 'Mí',
      profileTitle: 'Perfil Profesional',
      description: 'Ingeniero de Software enfocado en diseñar e implementar soluciones empresariales robustas y escalables. Dominio técnico en múltiples tecnologías (.NET Core, React/Next.js, Node.js) y especialización en arquitecturas limpias, microservicios, sistemas distribuidos y automatización DevOps. Mi enfoque combina excelencia técnica con visión de negocio para crear sistemas que impulsan la transformación digital, optimizan operaciones y generan impacto medible en las organizaciones.',
      yearsExperience: 'Años de Experiencia',
      completedProjects: 'Proyectos Completados',
      technologies: 'Tecnologías',
      certifications: 'Certificaciones',
      mainTech: 'Tecnologías Principales',
      constantInnovation: 'Innovación Constante',
      constantInnovationDesc: 'Siempre aprendiendo nuevas tecnologías',
      highPerformance: 'Alto Rendimiento',
      highPerformanceDesc: 'Código optimizado y escalable'
    },

    // Experience
    experience: {
      title: 'Experiencia',
      titleHighlight: 'Laboral',
      current: 'Actual',
      positions: {
        analyst: 'Analista y Desarrollador de Software',
        developer: 'Desarrollador de Software',
        technician: 'Técnico en Desarrollo'
      },
      companies: {
        minas: 'C.I. Minas La Aurora S.A.S.',
        cedac: 'CEDAC',
        galindo: 'Juan Sebastián Galindo'
      },
      minasDesc: [
        'Desarrollo de sistemas internos con Next.js, C# y .NET Core',
        'Arquitectura de microservicios con RabbitMQ',
        'Modelado y optimización de bases de datos PostgreSQL/SQL Server',
        'Implementación de APIs REST con JWT y RBAC',
        'Despliegues en Docker, NGINX y pipelines CI/CD'
      ],
      cedacDesc: [
        'Desarrollo de sistemas web con Laravel y Vue.js',
        'Contenerización con Docker Compose',
        'Desarrollo de APIs REST y despliegues productivos'
      ],
      galindoDesc: [
        'Desarrollo de aplicaciones a medida',
        'Investigación tecnológica (.NET, Node.js)'
      ],
      minasAchievement: 'Diseño del ecosistema de mantenimiento minero digital (+25% eficiencia)',
      cedacAchievement: 'Reducción de tiempos internos en 30%',
      galindoAchievement: 'Incremento del 20% en eficiencia operativa'
    },

    // Projects
    projects: {
      title: 'Proyectos',
      titleHighlight: 'Destacados',
      professional: 'Profesional',
      featured: 'Destacado',
      professionalTitle: 'Proyectos',
      professionalHighlight: 'Profesionales',
      professionalDesc: 'Proyectos desarrollados para empresas. Por políticas de confidencialidad, no puedo compartir el código fuente.',
      personalTitle: 'Proyectos',
      personalHighlight: 'Personales',
      personalDesc: 'Proyectos de código abierto disponibles en GitHub.',
      confidential: 'Proyecto Confidencial',
      demo: 'Demo',
      code: 'Código',

      // Professional Projects
      miningSystem: {
        name: 'Sistema de Gestión de Mantenimiento Minero',
        description: 'Plataforma web integral para la gestión de mantenimiento de equipos mineros con seguimiento en tiempo real, generación de reportes automáticos y análisis predictivo. Incluye módulos de planificación, ejecución y auditoría.',
        impact: 'Incremento del 25% en eficiencia operativa'
      },
      authAPI: {
        name: 'API de Autenticación y Autorización Empresarial',
        description: 'Microservicio robusto de autenticación con JWT, refresh tokens, roles y permisos granulares (RBAC). Incluye rate limiting, 2FA y logging de auditoría completo para trazabilidad de accesos.',
        impact: 'Sistema de seguridad centralizado para múltiples aplicaciones'
      },
      dashboard: {
        name: 'Dashboard Analítico de Operaciones',
        description: 'Dashboard interactivo con visualización de métricas operativas en tiempo real usando WebSockets. Gráficos dinámicos, KPIs personalizables y exportación de reportes en múltiples formatos.',
        impact: 'Reducción del 40% en tiempo de toma de decisiones'
      },
      internalSystem: {
        name: 'Sistema de Gestión Interna',
        description: 'Plataforma web para optimización de procesos internos con módulos de gestión documental, flujos de aprobación y reportería avanzada.',
        impact: 'Reducción del 30% en tiempos operativos'
      },

      // Personal Projects
      portfolio: {
        name: 'Portfolio Interactivo',
        description: 'Portafolio personal desarrollado con React, Vite y Framer Motion. Incluye sistema de temas claro/oscuro, animaciones fluidas y diseño responsive moderno.'
      },
      taskManager: {
        name: 'Task Manager API',
        description: 'API REST para gestión de tareas con autenticación JWT, CRUD completo y documentación Swagger. Arquitectura limpia con .NET Core.'
      },
      weatherApp: {
        name: 'Weather App',
        description: 'Aplicación del clima con geolocalización, pronósticos de 7 días y búsqueda de ciudades. Consumo de API REST y diseño responsive.'
      }
    },

    // Skills
    skills: {
      title: 'Habilidades',
      titleHighlight: 'Técnicas',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Base de Datos',
      devops: 'DevOps',
      other: 'Otros',
      highlights: {
        cleanCode: {
          title: 'Clean Code',
          description: 'Código limpio, mantenible y siguiendo mejores prácticas'
        },
        architecture: {
          title: 'Arquitectura',
          description: 'Diseño de sistemas escalables y robustos'
        },
        performance: {
          title: 'Rendimiento',
          description: 'Optimización y mejora continua del performance'
        }
      }
    },

    // Certifications
    certifications: {
      title: 'Certificaciones',
      titleHighlight: 'y Cursos',
      view: 'Ver Certificado',
      education: 'Educación',
      inProgress: 'En curso',
      completed: 'Completado',
      degrees: {
        softwareEngineering: 'Ingeniería de Software',
        softwareTechnologist: 'Tecnólogo en Desarrollo de Software',
        systemsTechnician: 'Técnico en Sistemas',
        fullStackDiploma: 'Diplomado Full Stack'
      }
    },

    // Contact
    contact: {
      title: 'Contacta',
      titleHighlight: 'Conmigo',
      subtitle: 'Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme.',
      contactInfo: 'Información de Contacto',
      followMe: 'Sígueme en Redes',
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      successTitle: 'Mensaje Enviado',
      successMessage: 'Tu mensaje ha sido enviado exitosamente. Te responderé pronto.',
      errorTitle: 'Error',
      errorMessage: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
      phone: 'Teléfono',
      location: 'Ubicación',
      locationValue: 'Colombia',
      contact: 'Contacto',
      placeholders: {
        name: 'Tu nombre',
        email: 'tu@email.com',
        subject: 'Asunto del mensaje',
        message: 'Escribe tu mensaje aquí...'
      }
    },

    // Footer
    footer: {
      description: 'Ingeniero de Software enfocado en crear soluciones empresariales robustas, escalables y de alto impacto.',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      by: 'por'
    }
  },

  en: {
    // Data
    data: {
      role: "Software Engineer",
      about: {
        description: "Software Engineer focused on designing and implementing robust and scalable enterprise solutions. Technical mastery of multiple technologies (.NET Core, React/Next.js, Node.js) and specialization in clean architectures, microservices, distributed systems, and DevOps automation. My approach combines technical excellence with business vision to create systems that drive digital transformation, optimize operations, and generate measurable impact in organizations.",
        mainTechs: [
          "React", "Next.js", "TailwindCSS",
          "C#", ".NET Core", "ASP.NET",
          "Node.js", "Express",
          "SQL Server", "PostgreSQL",
          "Docker", "Microservices", "CI/CD"
        ]
      },
      experience: {
        minas: {
          position: "Software Analyst and Developer",
          descriptions: [
            "Development of internal systems with Next.js, C# and .NET Core",
            "Microservices architecture with RabbitMQ",
            "Modeling and optimization of PostgreSQL/SQL Server databases",
            "Implementation of REST APIs with JWT and RBAC",
            "Deployments in Docker, NGINX and CI/CD pipelines"
          ],
          achievement: "Design of digital mining maintenance ecosystem (+25% efficiency)"
        },
        cedac: {
          position: "Software Developer",
          descriptions: [
            "Web system development with Laravel and Vue.js",
            "Containerization with Docker Compose",
            "REST API development and production deployments"
          ],
          achievement: "Reduction of internal times by 30%"
        },
        galindo: {
          position: "Development Technician",
          descriptions: [
            "Custom application development",
            "Technology research (.NET, Node.js)"
          ],
          achievement: "Increase of 20% in operational efficiency"
        }
      },
      projects: {
        professional: {
          miningSystem: {
            name: "Mining Maintenance Management System",
            description: "Comprehensive web platform for managing mining equipment maintenance with real-time tracking, automatic report generation, and predictive analysis. Includes planning, execution, and audit modules.",
            impact: "25% increase in operational efficiency"
          },
          authAPI: {
            name: "Enterprise Authentication and Authorization API",
            description: "Robust authentication microservice with JWT, refresh tokens, roles, and granular permissions (RBAC). Includes rate limiting, 2FA, and complete audit logging for access traceability.",
            impact: "Centralized security system for multiple applications"
          },
          dashboard: {
            name: "Operations Analytics Dashboard",
            description: "Interactive dashboard with real-time operational metrics visualization using WebSockets. Dynamic charts, customizable KPIs, and multi-format report export.",
            impact: "40% reduction in decision-making time"
          },
          internalSystem: {
            name: "Internal Management System",
            description: "Web platform for optimizing internal processes with document management modules, approval workflows, and advanced reporting.",
            impact: "30% reduction in operational times"
          }
        },
        personal: {
          portfolio: {
            name: "Interactive Portfolio",
            description: "Personal portfolio developed with React, Vite, and Framer Motion. Features dark/light theme system, smooth animations, and modern responsive design."
          },
          taskManager: {
            name: "Task Manager API",
            description: "REST API for task management with JWT authentication, complete CRUD, and Swagger documentation. Clean architecture with .NET Core."
          },
          weatherApp: {
            name: "Weather App",
            description: "Weather application with geolocation, 7-day forecasts, and city search. REST API consumption and responsive design."
          }
        }
      }
    },

    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact'
    },

    // Hero
    hero: {
      greeting: 'Hi, I am',
      description: 'I design and implement scalable, secure, and efficient software architectures. Expert in digital transformation through innovative solutions that integrate modern technologies, best practices, and business-focused results.',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me'
    },

    // About
    about: {
      title: 'About',
      titleHighlight: 'Me',
      profileTitle: 'Professional Profile',
      description: 'Software Engineer focused on designing and implementing robust and scalable enterprise solutions. Technical mastery of multiple technologies (.NET Core, React/Next.js, Node.js) and specialization in clean architectures, microservices, distributed systems, and DevOps automation. My approach combines technical excellence with business vision to create systems that drive digital transformation, optimize operations, and generate measurable impact in organizations.',
      yearsExperience: 'Years of Experience',
      completedProjects: 'Completed Projects',
      technologies: 'Technologies',
      certifications: 'Certifications',
      mainTech: 'Main Technologies',
      constantInnovation: 'Constant Innovation',
      constantInnovationDesc: 'Always learning new technologies',
      highPerformance: 'High Performance',
      highPerformanceDesc: 'Optimized and scalable code'
    },

    // Experience
    experience: {
      title: 'Work',
      titleHighlight: 'Experience',
      current: 'Current',
      positions: {
        analyst: 'Software Analyst and Developer',
        developer: 'Software Developer',
        technician: 'Development Technician'
      },
      companies: {
        minas: 'C.I. Minas La Aurora S.A.S.',
        cedac: 'CEDAC',
        galindo: 'Juan Sebastián Galindo'
      },
      minasDesc: [
        'Development of internal systems with Next.js, C# and .NET Core',
        'Microservices architecture with RabbitMQ',
        'Modeling and optimization of PostgreSQL/SQL Server databases',
        'Implementation of REST APIs with JWT and RBAC',
        'Deployments in Docker, NGINX and CI/CD pipelines'
      ],
      cedacDesc: [
        'Web system development with Laravel and Vue.js',
        'Containerization with Docker Compose',
        'REST API development and production deployments'
      ],
      galindoDesc: [
        'Custom application development',
        'Technology research (.NET, Node.js)'
      ],
      minasAchievement: 'Design of digital mining maintenance ecosystem (+25% efficiency)',
      cedacAchievement: 'Reduction of internal times by 30%',
      galindoAchievement: 'Increase of 20% in operational efficiency'
    },

    // Projects
    projects: {
      title: 'Featured',
      titleHighlight: 'Projects',
      professional: 'Professional',
      featured: 'Featured',
      professionalTitle: 'Professional',
      professionalHighlight: 'Projects',
      professionalDesc: 'Projects developed for companies. Due to confidentiality policies, I cannot share the source code.',
      personalTitle: 'Personal',
      personalHighlight: 'Projects',
      personalDesc: 'Open source projects available on GitHub.',
      confidential: 'Confidential Project',
      demo: 'Demo',
      code: 'Code',

      // Professional Projects
      miningSystem: {
        name: 'Mining Maintenance Management System',
        description: 'Comprehensive web platform for managing mining equipment maintenance with real-time tracking, automatic report generation, and predictive analysis. Includes planning, execution, and audit modules.',
        impact: '25% increase in operational efficiency'
      },
      authAPI: {
        name: 'Enterprise Authentication and Authorization API',
        description: 'Robust authentication microservice with JWT, refresh tokens, roles, and granular permissions (RBAC). Includes rate limiting, 2FA, and complete audit logging for access traceability.',
        impact: 'Centralized security system for multiple applications'
      },
      dashboard: {
        name: 'Operations Analytics Dashboard',
        description: 'Interactive dashboard with real-time operational metrics visualization using WebSockets. Dynamic charts, customizable KPIs, and multi-format report export.',
        impact: '40% reduction in decision-making time'
      },
      internalSystem: {
        name: 'Internal Management System',
        description: 'Web platform for optimizing internal processes with document management modules, approval workflows, and advanced reporting.',
        impact: '30% reduction in operational times'
      },

      // Personal Projects
      portfolio: {
        name: 'Interactive Portfolio',
        description: 'Personal portfolio developed with React, Vite, and Framer Motion. Features dark/light theme system, smooth animations, and modern responsive design.'
      },
      taskManager: {
        name: 'Task Manager API',
        description: 'REST API for task management with JWT authentication, complete CRUD, and Swagger documentation. Clean architecture with .NET Core.'
      },
      weatherApp: {
        name: 'Weather App',
        description: 'Weather application with geolocation, 7-day forecasts, and city search. REST API consumption and responsive design.'
      }
    },

    // Skills
    skills: {
      title: 'Technical',
      titleHighlight: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      devops: 'DevOps',
      other: 'Other',
      highlights: {
        cleanCode: {
          title: 'Clean Code',
          description: 'Clean, maintainable code following best practices'
        },
        architecture: {
          title: 'Architecture',
          description: 'Design of scalable and robust systems'
        },
        performance: {
          title: 'Performance',
          description: 'Optimization and continuous performance improvement'
        }
      }
    },

    // Certifications
    certifications: {
      title: 'Certifications',
      titleHighlight: 'and Courses',
      view: 'View Certificate',
      education: 'Education',
      inProgress: 'In Progress',
      completed: 'Completed',
      degrees: {
        softwareEngineering: 'Software Engineering',
        softwareTechnologist: 'Technologist in Software Development',
        systemsTechnician: 'Systems Technician',
        fullStackDiploma: 'Full Stack Diploma'
      }
    },

    // Contact
    contact: {
      title: 'Contact',
      titleHighlight: 'Me',
      subtitle: 'I am available for new projects and opportunities. Feel free to contact me.',
      contactInfo: 'Contact Information',
      followMe: 'Follow Me',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent',
      successMessage: 'Your message has been sent successfully. I will respond to you soon.',
      errorTitle: 'Error',
      errorMessage: 'There was an error sending the message. Please try again.',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Colombia',
      contact: 'Contact',
      placeholders: {
        name: 'Your name',
        email: 'your@email.com',
        subject: 'Message subject',
        message: 'Write your message here...'
      }
    },

    // Footer
    footer: {
      description: 'Software Engineer focused on creating robust, scalable, and high-impact enterprise solutions.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      by: 'by'
    }
  }
};
