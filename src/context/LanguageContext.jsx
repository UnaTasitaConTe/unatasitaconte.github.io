import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Detect browser language and return 'es' for Spanish speakers, 'en' for others
const detectBrowserLanguage = () => {
  // Get browser language
  const browserLang = navigator.language || navigator.userLanguage || '';

  // List of Spanish language codes
  const spanishLanguages = ['es', 'es-ES', 'es-MX', 'es-AR', 'es-CO', 'es-CL', 'es-PE', 'es-VE', 'es-EC', 'es-GT', 'es-CU', 'es-BO', 'es-DO', 'es-HN', 'es-PY', 'es-SV', 'es-NI', 'es-CR', 'es-PA', 'es-UY', 'es-PR'];

  // Check if browser language starts with 'es' or is in the Spanish languages list
  const isSpanish = browserLang.toLowerCase().startsWith('es') ||
                    spanishLanguages.some(lang => browserLang.toLowerCase().startsWith(lang.toLowerCase()));

  return isSpanish ? 'es' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Priority: 1. localStorage (user preference), 2. browser detection, 3. default to Spanish
    const saved = localStorage.getItem('language');
    if (saved) {
      return saved;
    }
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
