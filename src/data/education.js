// Education with embedded translations
// Following SOLID: Single Responsibility - each education entry contains all its data and translations
// Easy to maintain: add/edit/remove education entries in one place

export const education = [
  {
    id: 1,
    institution: "FESC",
    translations: {
      es: {
        degree: "Ingeniería de Software",
        status: "En curso"
      },
      en: {
        degree: "Software Engineering",
        status: "In Progress"
      }
    }
  },
  {
    id: 2,
    institution: "FESC",
    translations: {
      es: {
        degree: "Tecnólogo en Desarrollo de Software",
        status: "Completado"
      },
      en: {
        degree: "Technologist in Software Development",
        status: "Completed"
      }
    }
  },
  {
    id: 3,
    institution: "SENA",
    translations: {
      es: {
        degree: "Técnico en Sistemas",
        status: "Completado"
      },
      en: {
        degree: "Systems Technician",
        status: "Completed"
      }
    }
  },
  {
    id: 4,
    institution: "FESC",
    translations: {
      es: {
        degree: "Diplomado Full Stack",
        status: "Completado"
      },
      en: {
        degree: "Full Stack Diploma",
        status: "Completed"
      }
    }
  }
];
