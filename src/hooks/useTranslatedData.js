import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { personalInfo, skills, certifications, education } from '../data/data';

export const useTranslatedData = () => {
  const { language } = useLanguage();
  const data = translations[language].data;

  // Datos que no necesitan traducción
  const staticData = {
    personalInfo: {
      ...personalInfo,
      role: data.role // El role sí se traduce
    },
    skills,
    certifications,
    education
  };

  // Experience con datos traducidos
  const experience = [
    {
      id: 1,
      position: data.experience.minas.position,
      company: "C.I. Minas La Aurora S.A.S.",
      period: "2023 - Actual",
      description: data.experience.minas.descriptions,
      achievement: data.experience.minas.achievement,
      current: true
    },
    {
      id: 2,
      position: data.experience.cedac.position,
      company: "CEDAC",
      period: "2024",
      description: data.experience.cedac.descriptions,
      achievement: data.experience.cedac.achievement,
      current: false
    },
    {
      id: 3,
      position: data.experience.galindo.position,
      company: "Juan Sebastián Galindo",
      period: "2023",
      description: data.experience.galindo.descriptions,
      achievement: data.experience.galindo.achievement,
      current: false
    }
  ];

  // Proyectos profesionales traducidos
  const professionalProjects = [
    {
      id: 1,
      name: data.projects.professional.miningSystem.name,
      company: "C.I. Minas La Aurora S.A.S.",
      description: data.projects.professional.miningSystem.description,
      technologies: ["Next.js", "C#", ".NET Core", "PostgreSQL", "Docker", "RabbitMQ"],
      impact: data.projects.professional.miningSystem.impact,
      featured: true
    },
    {
      id: 2,
      name: data.projects.professional.authAPI.name,
      company: "C.I. Minas La Aurora S.A.S.",
      description: data.projects.professional.authAPI.description,
      technologies: ["C#", ".NET Core", "SQL Server", "Redis", "JWT"],
      impact: data.projects.professional.authAPI.impact,
      featured: false
    },
    {
      id: 3,
      name: data.projects.professional.dashboard.name,
      company: "C.I. Minas La Aurora S.A.S.",
      description: data.projects.professional.dashboard.description,
      technologies: ["React", "Node.js", "Socket.io", "Chart.js", "PostgreSQL"],
      impact: data.projects.professional.dashboard.impact,
      featured: false
    },
    {
      id: 4,
      name: data.projects.professional.internalSystem.name,
      company: "CEDAC",
      description: data.projects.professional.internalSystem.description,
      technologies: ["Laravel", "Vue.js", "MySQL", "Docker"],
      impact: data.projects.professional.internalSystem.impact,
      featured: false
    }
  ];

  // Proyectos personales traducidos
  const personalProjects = [
    {
      id: 1,
      name: data.projects.personal.portfolio.name,
      description: data.projects.personal.portfolio.description,
      technologies: ["React", "Vite", "TailwindCSS", "Framer Motion"],
      demo: "#",
      github: "https://github.com/UnaTasitaConTe",
      featured: true
    },
    {
      id: 2,
      name: data.projects.personal.taskManager.name,
      description: data.projects.personal.taskManager.description,
      technologies: ["C#", ".NET Core", "SQL Server", "JWT", "Swagger"],
      demo: "#",
      github: "https://github.com/UnaTasitaConTe",
      featured: false
    },
    {
      id: 3,
      name: data.projects.personal.weatherApp.name,
      description: data.projects.personal.weatherApp.description,
      technologies: ["React", "TypeScript", "TailwindCSS", "API REST"],
      demo: "#",
      github: "https://github.com/UnaTasitaConTe",
      featured: false
    }
  ];

  // About con descripción y tecnologías traducidas
  const about = {
    description: data.about.description,
    mainTechs: data.about.mainTechs
  };

  return {
    ...staticData,
    about,
    experience,
    professionalProjects,
    personalProjects
  };
};
