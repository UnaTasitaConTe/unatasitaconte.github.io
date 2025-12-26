import { motion } from 'framer-motion';
import { HiCheckCircle, HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const t = useTranslation('experience');
  const { experience } = useTranslatedData();
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 sm:mb-10 lg:mb-12"></div>
        </motion.div>

        <motion.div
          key={`container-exp-${language}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="relative space-y-6 sm:space-y-8"
        >
          {/* Timeline vertical line - solo visible en desktop */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-20"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={`${language}-exp-${exp.id}`}
              variants={cardVariants}
              className="relative"
            >
              {/* Timeline dot - solo visible en desktop */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="hidden md:block absolute left-8 top-8 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background-warm dark:border-gray-800 shadow-lg z-10 transform -translate-x-1/2"
              ></motion.div>

              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(31, 58, 95, 0.15)' }}
                transition={{ duration: 0.3 }}
                className="md:ml-20 glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
              >
                {/* Header con gradiente */}
                <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <HiBriefcase className="text-white text-xl sm:text-2xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 leading-tight">
                          {exp.position}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold text-primary mb-1">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <HiCalendar className="flex-shrink-0 text-primary" />
                            <span className="font-medium">
                              {exp.startDate} - {exp.endDate}
                            </span>
                          </div>
                          {exp.location && (
                            <>
                              <span className="hidden sm:inline">•</span>
                              <div className="flex items-center gap-1">
                                <HiLocationMarker className="flex-shrink-0" />
                                <span>{exp.location}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    {exp.current && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg self-start"
                      >
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        {t.current}
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Descripción con bullets */}
                  <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400"
                      >
                        <HiCheckCircle className="text-primary mt-0.5 sm:mt-1 flex-shrink-0 text-base sm:text-lg" />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Achievement destacado */}
                  {exp.achievement && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-3 sm:p-4 bg-gradient-to-r from-accent-blush/20 to-secondary/20 dark:from-accent-blush/30 dark:to-secondary/30 border-l-4 border-secondary rounded-lg"
                    >
                      <p className="text-xs sm:text-sm font-semibold text-secondary dark:text-secondary flex items-start gap-2">
                        <span className="text-base sm:text-lg">🏆</span>
                        <span className="leading-relaxed">{exp.achievement}</span>
                      </p>
                    </motion.div>
                  )}

                  {/* Tecnologías/Skills (si existen en los datos) */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary/15 dark:bg-primary/25 text-primary text-xs sm:text-sm rounded-full font-medium border border-primary/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 italic">
            {t.footer || "Seguir aprendiendo y creciendo profesionalmente 🚀"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
