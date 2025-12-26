// Projects with embedded translations
// Following SOLID: Single Responsibility - each project contains all its data and translations
// Easy to maintain: add/edit/remove projects in one place

export const professionalProjects = [
  {
    id: 1,
    company: "C.I. Minas La Aurora S.A.S.",
    technologies: ["Next.js", "C#", ".NET Core", "PostgreSQL", "Docker", "RabbitMQ"],
    featured: true,
    translations: {
      es: {
        name: "AuroraCorp",
        description: "Desarrollo de plataforma web para la gestión de procesos, seguimiento en tiempo real y generación de reportes automáticos para la optimización del mantenimiento de equipos mineros. Incluye módulos de planificación, ejecución y auditoría.",
        impact: "Incremento en productividad y manejo de recursos y tiempos"
      },
      en: {
        name: "AuroraCorp",
        description: "Comprehensive web platform for managing mining equipment maintenance with real-time tracking, automatic report generation, and predictive analysis. Includes planning, execution, and audit modules.",
        impact: "25% increase in operational efficiency"
      }
    }
  },
  {
    id: 2,
    company: "CEDAC",
    technologies: ["Laravel", "Vue.js", "MySQL", "Docker"],
    featured: false,
    translations: {
      es: {
        name: "Cedac",
        description: "Plataforma web para la auditoría e inventario de la empresa CEDAC de Cúcuta",
        impact: "Reducción de pérdidas y control de inventarios"
      },
      en: {
        name: "Cedac",
        description: "Web platform for optimizing internal processes with document management modules, approval workflows, and advanced reporting.",
        impact: "30% reduction in operational times"
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
    github: "https://github.com/UnaTasitaConTe",
    featured: true,
    translations: {
      es: {
        name: "Portfolio",
        description: "Portafolio personal desarrollado con React, Vite y Framer Motion. Incluye sistema de temas claro/oscuro, animaciones fluidas y diseño responsive moderno."
      },
      en: {
        name: "Interactive Portfolio",
        description: "Personal portfolio developed with React, Vite, and Framer Motion. Features dark/light theme system, smooth animations, and modern responsive design."
      }
    }
  }
];

// Combined export for compatibility
export const projects = [...professionalProjects, ...personalProjects];
