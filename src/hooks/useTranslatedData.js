// Custom hook for extracting translated data based on current language
// Following SOLID: Single Responsibility - only handles language selection logic
// No hardcoded data - all data comes from separate files with embedded translations

import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, about as aboutData } from '../data/personalInfo';
import { experience as experienceData } from '../data/experience';
import { professionalProjects as professionalProjectsData, personalProjects as personalProjectsData } from '../data/projects';
import { skills } from '../data/skills';
import { certifications } from '../data/certifications';
import { education as educationData } from '../data/education';

export const useTranslatedData = () => {
  const { language } = useLanguage();

  // Helper function to extract translation from an item
  const getTranslation = (item, itemName = 'item') => {
    // Check if translations object exists
    if (!item.translations) {
      console.error(`Missing translations object in ${itemName}:`, item);
      return {};
    }

    // Try to get translation for current language
    const translation = item.translations[language];

    if (!translation) {
      console.warn(`Missing translation for language "${language}" in ${itemName}. Available languages:`, Object.keys(item.translations));
      // Fallback to Spanish, then English, then first available language
      return item.translations.es || item.translations.en || item.translations[Object.keys(item.translations)[0]] || {};
    }

    return translation;
  };

  // Memoize translated data to prevent unnecessary recalculations
  const translatedData = useMemo(() => {
    console.log('🔄 Recalculating translated data for language:', language);

    // Personal info with translated role
    const translatedPersonalInfo = {
      ...personalInfo,
      role: getTranslation(personalInfo, 'personalInfo').role
    };

    // About section with translations
    const about = getTranslation(aboutData, 'about');

    // Experience with translations
    const experience = experienceData.map((exp, index) => {
      const translation = getTranslation(exp, `experience[${index}] (${exp.company})`);
      return {
        ...exp,
        position: translation.position,
        startDate: translation.startDate,
        endDate: translation.endDate,
        description: translation.descriptions || [],
        achievement: translation.achievement
      };
    });

    // Professional projects with translations
    const professionalProjects = professionalProjectsData.map((project, index) => {
      const translation = getTranslation(project, `professionalProject[${index}] (${project.company})`);
      return {
        ...project,
        name: translation.name || 'Untitled Project',
        description: translation.description || '',
        impact: translation.impact || ''
      };
    });

    // Personal projects with translations
    const personalProjects = personalProjectsData.map((project, index) => {
      const translation = getTranslation(project, `personalProject[${index}]`);
      return {
        ...project,
        name: translation.name || 'Untitled Project',
        description: translation.description || ''
      };
    });

    // Education with translations
    const education = educationData.map((edu, index) => {
      const translation = getTranslation(edu, `education[${index}] (${edu.institution})`);
      return {
        ...edu,
        degree: translation.degree,
        status: translation.status
      };
    });

    return {
      personalInfo: translatedPersonalInfo,
      about,
      experience,
      professionalProjects,
      personalProjects,
      skills,
      certifications,
      education
    };
  }, [language]); // Only recalculate when language changes

  return translatedData;
};
