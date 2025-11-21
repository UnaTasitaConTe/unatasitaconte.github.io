import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const useTranslation = (section) => {
  const { language } = useLanguage();
  return translations[language][section];
};
