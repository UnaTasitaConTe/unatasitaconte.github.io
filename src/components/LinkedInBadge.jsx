import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const LinkedInBadge = ({ vanity = 'unatasitaconte' }) => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const badgeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Map language code to LinkedIn locale
  const getLocale = (lang) => {
    return lang === 'es' ? 'es_ES' : 'en_US';
  };

  useEffect(() => {
    // Only load badge once on mount
    if (badgeRef.current && badgeRef.current.children.length === 0) {
      const badge = document.createElement('div');
      badge.className = 'badge-base LI-profile-badge';
      badge.style.margin = '0 auto';
      badge.style.display = 'flex';
      badge.style.justifyContent = 'center';
      badge.setAttribute('data-locale', getLocale(language));
      badge.setAttribute('data-size', 'medium');
      badge.setAttribute('data-theme', isDark ? 'dark' : 'light');
      badge.setAttribute('data-type', 'VERTICAL');
      badge.setAttribute('data-vanity', vanity);
      badge.setAttribute('data-version', 'v1');

      badgeRef.current.appendChild(badge);

      // Trigger LinkedIn badge rendering
      const timer = setTimeout(() => {
        if (window.LIRenderAll) {
          window.LIRenderAll();
        }
        setIsLoading(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[250px] md:min-h-[300px] w-full">
      {isLoading && (
        <div className="animate-pulse flex justify-center">
          <div className="h-56 w-44 md:h-64 md:w-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
      )}
      <div
        ref={badgeRef}
        className={`flex justify-center items-center w-full transition-opacity duration-300 ${isLoading ? 'opacity-0 absolute' : 'opacity-100'}`}
      ></div>
    </div>
  );
};

export default LinkedInBadge;
