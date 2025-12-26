// Experience with embedded translations
// Following SOLID: Single Responsibility - each experience contains all its data and translations
// Easy to maintain: add/edit/remove experiences in one place

export const experience = [
  {
    id: 1,
    company: "C.I. Minas La Aurora S.A.S.",
    period: "2023 - 2025",
    current: false,
    translations: {
      es: {
        position: "Analista y Desarrollador de Software",
        startDate: "Ene 2023",
        endDate: "Dic 2025",
        descriptions: [
          "Desarrollo de sistemas internos con Next.js, C# y .NET Core",
          "Arquitectura de microservicios con RabbitMQ",
          "Modelado y optimización de bases de datos PostgreSQL/SQL Server",
          "Implementación de APIs REST con JWT y RBAC",
          "Despliegues en Docker, NGINX y pipelines CI/CD"
        ],
        achievement: "Diseño del ecosistema de mantenimiento minero digital (+25% eficiencia)"
      },
      en: {
        position: "Software Analyst and Developer",
        startDate: "Jan 2023",
        endDate: "Dec 2025",
        descriptions: [
          "Development of internal systems with Next.js, C# and .NET Core",
          "Microservices architecture with RabbitMQ",
          "Modeling and optimization of PostgreSQL/SQL Server databases",
          "Implementation of REST APIs with JWT and RBAC",
          "Deployments in Docker, NGINX and CI/CD pipelines"
        ],
        achievement: "Design of digital mining maintenance ecosystem (+25% efficiency)"
      }
    }
  },
  {
    id: 2,
    company: "CEDAC",
    period: "2024",
    current: false,
    translations: {
      es: {
        position: "Desarrollador de Software",
        startDate: "Ene 2024",
        endDate: "Jun 2024",
        descriptions: [
          "Desarrollo de sistemas web con Laravel y Vue.js",
          "Contenerización con Docker Compose",
          "Desarrollo de APIs REST y despliegues productivos"
        ],
        achievement: "Reducción de tiempos internos en 30%"
      },
      en: {
        position: "Software Developer",
        startDate: "Jan 2024",
        endDate: "Jun 2024",
        descriptions: [
          "Web system development with Laravel and Vue.js",
          "Containerization with Docker Compose",
          "REST API development and production deployments"
        ],
        achievement: "Reduction of internal times by 30%"
      }
    }
  },
  {
    id: 3,
    company: "Juan Sebastián Galindo",
    period: "2023",
    current: false,
    translations: {
      es: {
        position: "Técnico en Desarrollo",
        startDate: "Mar 2023",
        endDate: "Dic 2023",
        descriptions: [
          "Desarrollo de aplicaciones a medida",
          "Investigación tecnológica (.NET, Node.js)"
        ],
        achievement: "Incremento del 20% en eficiencia operativa"
      },
      en: {
        position: "Development Technician",
        startDate: "Mar 2023",
        endDate: "Dec 2023",
        descriptions: [
          "Custom application development",
          "Technology research (.NET, Node.js)"
        ],
        achievement: "Increase of 20% in operational efficiency"
      }
    }
  }
];
