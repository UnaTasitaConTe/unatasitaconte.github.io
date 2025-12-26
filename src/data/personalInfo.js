// Personal information with embedded translations
// Following SOLID: Single Responsibility - contains personal data and its translations
// Easy to maintain: all personal info in one place

export const personalInfo = {
  name: "Tomás Mauricio Rodríguez Sogamoso",
  nickname: "unatasitaconte",
  displayName: "Tomás Rodríguez",
  email: "thomasmauricio521@gmail.com",
  phone: "3213159582",
  age: 22,
  github: "https://github.com/UnaTasitaConTe",
  linkedin: "https://www.linkedin.com/in/unatasitaconte/",
  whatsapp: "https://wa.me/573213159582",
  translations: {
    es: {
      role: "Ingeniero de Software"
    },
    en: {
      role: "Software Engineer"
    }
  }
};

// About section with translations
export const about = {
  translations: {
    es: {
      description: "Ingeniero de Software enfocado en diseñar e implementar soluciones empresariales robustas y escalables. Dominio técnico en múltiples tecnologías (.NET Core, React/Next.js, Node.js) y especialización en arquitecturas limpias, microservicios, sistemas distribuidos y automatización DevOps. Mi enfoque combina excelencia técnica con visión de negocio para crear sistemas que impulsan la transformación digital, optimizan operaciones y generan impacto medible en las organizaciones.",
      mainTechs: [
        "React", "Next.js", "TailwindCSS",
        "C#", ".NET Core", "ASP.NET",
        "Node.js", "Express",
        "SQL Server", "PostgreSQL",
        "Docker", "Microservicios", "CI/CD"
      ]
    },
    en: {
      description: "Software Engineer focused on designing and implementing robust and scalable enterprise solutions. Technical mastery of multiple technologies (.NET Core, React/Next.js, Node.js) and specialization in clean architectures, microservices, distributed systems, and DevOps automation. My approach combines technical excellence with business vision to create systems that drive digital transformation, optimize operations, and generate measurable impact in organizations.",
      mainTechs: [
        "React", "Next.js", "TailwindCSS",
        "C#", ".NET Core", "ASP.NET",
        "Node.js", "Express",
        "SQL Server", "PostgreSQL",
        "Docker", "Microservices", "CI/CD"
      ]
    }
  }
};
