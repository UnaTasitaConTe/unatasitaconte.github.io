import { motion } from 'framer-motion';
import { HiExternalLink, HiCheckCircle } from 'react-icons/hi';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const Certifications = () => {
  const t = useTranslation('certifications');
  const { certifications, education } = useTranslatedData();
  const { language } = useLanguage();

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
            {t.subtitle || "Certificaciones profesionales y formación académica"}
          </p>
        </motion.div>

        {/* Certificaciones - Grid minimalista */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
          >
            {t.certificationsTitle || "Certificaciones Profesionales"}
          </motion.h3>

          <div className="space-y-3 sm:space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={`${language}-cert-${cert.id}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group"
              >
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 transition-all bg-white dark:bg-gray-900/95 hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  {/* Nombre y Provider */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 sm:gap-3 mb-1">
                      <HiCheckCircle className="text-primary mt-0.5 flex-shrink-0 text-base sm:text-lg" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors line-clamp-1">
                          {cert.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Year y Link */}
                  <div className="flex items-center gap-3 sm:gap-4 ml-6 sm:ml-0">
                    <span className="text-xs sm:text-sm font-medium text-gray-400 dark:text-gray-500 font-mono">
                      {cert.year}
                    </span>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      <span className="hidden sm:inline">{t.view || "Ver"}</span>
                      <HiExternalLink className="text-base" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Educación - Timeline simple */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
          >
            {t.education || "Formación Académica"}
          </motion.h3>

          <div className="relative">
            {/* Línea vertical */}
            <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-20"></div>

            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => {
                const isInProgress = edu.status.toLowerCase().includes('progress') || edu.status.toLowerCase().includes('curso');

                return (
                  <motion.div
                    key={`${language}-edu-${edu.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative sm:pl-16"
                  >
                    {/* Dot */}
                    <div className={`hidden sm:block absolute left-6 top-2 w-3 h-3 rounded-full border-4 border-background-warm dark:border-gray-800 transform -translate-x-1/2 ${
                      isInProgress
                        ? 'bg-gradient-to-br from-primary to-secondary'
                        : 'bg-gray-300 dark:bg-gray-700'
                    }`}></div>

                    <div className={`p-4 sm:p-5 rounded-lg border-l-4 ${
                      isInProgress
                        ? 'border-primary bg-gradient-to-r from-primary/5 to-transparent'
                        : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
                    } transition-colors`}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-gray-100">
                            {edu.degree}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {edu.institution}
                          </p>
                        </div>
                        {isInProgress ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/15 dark:bg-green-500/25 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full border border-green-500/30 self-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            {edu.status}
                          </span>
                        ) : (
                          <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 self-start">
                            {edu.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
