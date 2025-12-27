// Projects with embedded translations
// Following SOLID: Single Responsibility - each project contains all its data and translations
// Easy to maintain: add/edit/remove projects in one place

export const professionalProjects = [
  {
    id: 1,
    company: "C.I. Minas La Aurora S.A.S.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "C#",
      ".NET",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker"
    ],
    featured: true,
    translations: {
      es: {
        name: "AuroraCorp",
        description:
          "Plataforma empresarial (ERP) modular para la gestión de procesos operativos y administrativos en el sector minero, con módulos de mantenimiento, inventarios, compras, auditoría, notificaciones en tiempo real y reportes automáticos.",
        impact:
          "Optimización de procesos críticos y mejora significativa en la trazabilidad y tiempos de gestión"
      },
      en: {
        name: "AuroraCorp",
        description:
          "Modular enterprise platform (ERP) for managing operational and administrative processes in the mining sector, including maintenance, inventory, purchasing, auditing, real-time notifications, and automated reporting.",
        impact:
          "Optimized critical processes and significantly improved operational traceability and response times"
      }
    }
  },  {
    id: 2,
    company: "CEDAC",
    technologies: ["Laravel", "Vue.js", "MySQL", "Docker"],
    featured: false,
    translations: {
      es: {
        name: "CEDAC",
        description:
          "Plataforma web para la gestión de inventarios y auditoría interna, enfocada en el control de activos, seguimiento de movimientos y generación de reportes administrativos.",
        impact:
          "Mayor control de inventarios y reducción de pérdidas operativas"
      },
      en: {
        name: "CEDAC",
        description:
          "Web platform for inventory management and internal auditing, focused on asset control, movement tracking, and administrative reporting.",
        impact:
          "Improved inventory control and reduced operational losses"
      }
    }
  }
];


// Personal projects (public code)
export const personalProjects = [
  {
    id: 1,
    technologies: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    demo: "#",
    github: "https://github.com/UnaTasitaConTe/unatasitaconte.github.io",
    featured: true,
    translations: {
      es: {
        name: "Portafolio Interactivo",
        description:
          "Portafolio personal desarrollado con React y Vite, con animaciones fluidas, modo claro/oscuro y diseño responsive optimizado para móvil y escritorio."
      },
      en: {
        name: "Interactive Portfolio",
        description:
          "Personal portfolio built with React and Vite, featuring smooth animations, light/dark mode, and a responsive layout optimized for mobile and desktop."
      }
    }
  } , {
    id: 2,
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Clean Architecture"],
    //demo: "#",
    github: "https://github.com/UnaTasitaConTe/SIGEPP-FRONTEND",
    //demo: "#",
    translations: {
      es: {
        name: "Sistema de Gestión de PPAs (Frontend)",
        description:
          "Aplicación web en Next.js bajo Clean Architecture para centralizar y consultar PPAs y entregables académicos, con búsqueda y categorización."
      },
      en: {
        name: "PPA Management System (Frontend)",
        description:
          "Next.js web app following Clean Architecture to centralize and search PPAs and academic deliverables, featuring categorization and fast lookup."
      }
    }
  },
  {
    id: 3,
    technologies: [".NET", "C#", "DDD", "Clean Architecture", "REST API"],
    //demo: "#",
    github: "https://github.com/UnaTasitaConTe/SIGEPP",
    featured: true,
    translations: {
      es: {
        name: "Sistema de Gestión de PPAs (Backend)",
        description:
          "API en .NET desarrollada como proyecto independiente, aplicando DDD y Clean Architecture para soportar la gestión de PPAs, consultas y trazabilidad."
      },
      en: {
        name: "PPA Management System (Backend)",
        description:
          "Independent .NET API applying DDD and Clean Architecture to support PPA management, queries, and end-to-end traceability."
      }
    }
  }
];


// Combined export for compatibility
export const projects = [...professionalProjects, ...personalProjects];
