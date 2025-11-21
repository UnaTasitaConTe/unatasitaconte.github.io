export const personalInfo = {
  name: "Tomás Mauricio Rodríguez Sogamoso",
  nickname: "unatasitaconte",
  displayName: "Tomás Rodríguez",
  role: "Ingeniero de Software",
  email: "thomasmauricio521@gmail.com",
  phone: "3213159582",
  age: 22,
  github: "https://github.com/UnaTasitaConTe",
  linkedin: "https://www.linkedin.com/in/tomas-mauricio-rodriguez-sogamoso-7a252a127/",
  whatsapp: "https://wa.me/573213159582",
};

export const about = {
  description: "Ingeniero de Software enfocado en diseñar e implementar soluciones empresariales robustas y escalables. Dominio técnico en múltiples tecnologías (.NET Core, React/Next.js, Node.js) y especialización en arquitecturas limpias, microservicios, sistemas distribuidos y automatización DevOps. Mi enfoque combina excelencia técnica con visión de negocio para crear sistemas que impulsan la transformación digital, optimizan operaciones y generan impacto medible en las organizaciones.",
  mainTechs: [
    "React", "Next.js", "TailwindCSS",
    "C#", ".NET Core", "ASP.NET",
    "Node.js", "Express",
    "SQL Server", "PostgreSQL",
    "Docker", "Microservicios", "CI/CD"
  ]
};

export const experience = [
  {
    id: 1,
    position: "Analista y Desarrollador de Software",
    company: "C.I. Minas La Aurora S.A.S.",
    period: "2023 - Actual",
    description: [
      "Desarrollo de sistemas internos con Next.js, C# y .NET Core",
      "Arquitectura de microservicios con RabbitMQ",
      "Modelado y optimización de bases de datos PostgreSQL/SQL Server",
      "Implementación de APIs REST con JWT y RBAC",
      "Despliegues en Docker, NGINX y pipelines CI/CD"
    ],
    achievement: "Diseño del ecosistema de mantenimiento minero digital (+25% eficiencia)",
    current: true
  },
  {
    id: 2,
    position: "Desarrollador de Software",
    company: "CEDAC",
    period: "2024",
    description: [
      "Desarrollo de sistemas web con Laravel y Vue.js",
      "Contenerización con Docker Compose",
      "Desarrollo de APIs REST y despliegues productivos"
    ],
    achievement: "Reducción de tiempos internos en 30%",
    current: false
  },
  {
    id: 3,
    position: "Técnico en Desarrollo",
    company: "Juan Sebastián Galindo",
    period: "2023",
    description: [
      "Desarrollo de aplicaciones a medida",
      "Investigación tecnológica (.NET, Node.js)"
    ],
    achievement: "Incremento del 20% en eficiencia operativa",
    current: false
  }
];

// Proyectos empresariales/profesionales (sin código público)
export const professionalProjects = [
  {
    id: 1,
    name: "Sistema de Gestión de Mantenimiento Minero",
    company: "C.I. Minas La Aurora S.A.S.",
    description: "Plataforma web integral para la gestión de mantenimiento de equipos mineros con seguimiento en tiempo real, generación de reportes automáticos y análisis predictivo. Incluye módulos de planificación, ejecución y auditoría.",
    technologies: ["Next.js", "C#", ".NET Core", "PostgreSQL", "Docker", "RabbitMQ"],
    impact: "Incremento del 25% en eficiencia operativa",
    featured: true
  },
  {
    id: 2,
    name: "API de Autenticación y Autorización Empresarial",
    company: "C.I. Minas La Aurora S.A.S.",
    description: "Microservicio robusto de autenticación con JWT, refresh tokens, roles y permisos granulares (RBAC). Incluye rate limiting, 2FA y logging de auditoría completo para trazabilidad de accesos.",
    technologies: ["C#", ".NET Core", "SQL Server", "Redis", "JWT"],
    impact: "Sistema de seguridad centralizado para múltiples aplicaciones",
    featured: false
  },
  {
    id: 3,
    name: "Dashboard Analítico de Operaciones",
    company: "C.I. Minas La Aurora S.A.S.",
    description: "Dashboard interactivo con visualización de métricas operativas en tiempo real usando WebSockets. Gráficos dinámicos, KPIs personalizables y exportación de reportes en múltiples formatos.",
    technologies: ["React", "Node.js", "Socket.io", "Chart.js", "PostgreSQL"],
    impact: "Reducción del 40% en tiempo de toma de decisiones",
    featured: false
  },
  {
    id: 4,
    name: "Sistema de Gestión Interna",
    company: "CEDAC",
    description: "Plataforma web para optimización de procesos internos con módulos de gestión documental, flujos de aprobación y reportería avanzada.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Docker"],
    impact: "Reducción del 30% en tiempos operativos",
    featured: false
  }
];

// Proyectos personales (código público)
export const personalProjects = [
  {
    id: 1,
    name: "Portfolio Interactivo",
    description: "Portafolio personal desarrollado con React, Vite y Framer Motion. Incluye sistema de temas claro/oscuro, animaciones fluidas y diseño responsive moderno.",
    technologies: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    demo: "#",
    github: "https://github.com/UnaTasitaConTe",
    featured: true
  },
  {
    id: 2,
    name: "Task Manager API",
    description: "API REST para gestión de tareas con autenticación JWT, CRUD completo y documentación Swagger. Arquitectura limpia con .NET Core.",
    technologies: ["C#", ".NET Core", "SQL Server", "JWT", "Swagger"],
    demo: "#",
    github: "https://github.com/UnaTasitaConTe",
    featured: false
  },
  {
    id: 3,
    name: "Weather App",
    description: "Aplicación del clima con geolocalización, pronósticos de 7 días y búsqueda de ciudades. Consumo de API REST y diseño responsive.",
    technologies: ["React", "TypeScript", "TailwindCSS", "API REST"],
    demo: "#",
    github: "https://github.com/UnaTasitaConTe",
    featured: false
  }
];

// Mantener export de projects para compatibilidad
export const projects = [...professionalProjects, ...personalProjects];

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 92 },
    { name: "TailwindCSS", level: 90 },
    { name: "Angular", level: 75 },
    { name: "Vue.js", level: 70 },
    { name: "Redux/Zustand", level: 85 }
  ],
  backend: [
    { name: "C#", level: 90 },
    { name: ".NET Core", level: 88 },
    { name: "ASP.NET", level: 85 },
    { name: "Node.js", level: 87 },
    { name: "Express", level: 85 },
    { name: "Laravel", level: 72 },
    { name: "REST APIs", level: 92 },
    { name: "Microservicios", level: 80 }
  ],
  database: [
    { name: "SQL Server", level: 88 },
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Redis", level: 70 }
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "Docker Compose", level: 83 },
    { name: "CI/CD", level: 80 },
    { name: "NGINX", level: 75 },
    { name: "Git", level: 90 },
    { name: "Linux", level: 78 }
  ],
  other: [
    { name: "Clean Architecture", level: 85 },
    { name: "SOLID", level: 88 },
    { name: "OOP", level: 90 },
    { name: "JWT", level: 87 },
    { name: "RabbitMQ", level: 75 }
  ]
};

export const certifications = [
  {
    id: 1,
    name: "Principios SOLID en C# y .NET",
    provider: "Platzi",
    year: "2025",
    logo: "https://static.platzi.com/media/achievements/badge-solid-csharp-2c3fa642-4a89-4b47-809f-3a8d9b6c9e89.png",
    url: "https://platzi.com/p/unatasitaconte/curso/4761-solid-csharp-net/diploma/detalle/"
  },
  {
    id: 2,
    name: "Docker: Fundamentos",
    provider: "Platzi",
    year: "2025",
    logo: "https://static.platzi.com/media/achievements/badge-fundamentos-docker-e7ccf7df-b290-4b75-8cba-9b91c7350f25.png",
    url: "https://platzi.com/p/unatasitaconte/curso/8781-docker-fundamentos/diploma/detalle/"
  },
  {
    id: 3,
    name: "30 días de JavaScript",
    provider: "Platzi",
    year: "2025",
    logo: "https://static.platzi.com/media/achievements/30diasjavascript-badge-a07d1f7f-a8a1-4bd3-a0fe-522d7a1f95be.png",
    url: "https://platzi.com/p/unatasitaconte/curso/6636-javascript-30-dias/diploma/detalle/"
  },
  {
    id: 4,
    name: "Fundamentos de Node.js",
    provider: "Platzi",
    year: "2025",
    logo: "https://static.platzi.com/media/achievements/badge-nodejs-fundamentos-f4e5b987-3c92-4e0d-a4b5-f5bbfddba7bf.png",
    url: "https://platzi.com/p/unatasitaconte/curso/11982-course/diploma/detalle/"
  },
  {
    id: 5,
    name: "Microservicios",
    provider: "Platzi",
    year: "2025",
    logo: "https://static.platzi.com/media/achievements/badge-microservicios-08e8dd03-b3ee-4b51-8cc6-c4e564a4b59f.png",
    url: "https://platzi.com/p/unatasitaconte/curso/12071-microservicios/diploma/detalle/"
  },
  {
    id: 6,
    name: "Generative AI Foundations",
    provider: "AWS / Immune",
    year: "2025",
    logo: "https://d1.awsstatic.com/ImmersionDay/brand/AWS_logo_RGB.8a5b48e92903c5011a3f84f12218a45e8c9efcec.png",
    url: "https://www.credential.net/9889b605-8abd-477e-ac3a-91246e490745"
  }
];


export const education = [
  {
    degree: "Ingeniería de Software",
    institution: "FESC",
    status: "En curso"
  },
  {
    degree: "Tecnólogo en Desarrollo de Software",
    institution: "FESC",
    status: "Completado"
  },
  {
    degree: "Técnico en Sistemas",
    institution: "SENA",
    status: "Completado"
  },
  {
    degree: "Diplomado Full Stack",
    institution: "FESC",
    status: "Completado"
  }
];
