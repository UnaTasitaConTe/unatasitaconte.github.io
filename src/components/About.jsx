import { motion } from 'framer-motion';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const t = useTranslation('about');
  const { about } = useTranslatedData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-5 sm:p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">{t.profileTitle}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.description}
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="glass p-4 sm:p-5 lg:p-6 rounded-xl text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">3+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.yearsExperience}</div>
              </motion.div>
              <motion.div variants={itemVariants} className="glass p-4 sm:p-5 lg:p-6 rounded-xl text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.completedProjects}</div>
              </motion.div>
              <motion.div variants={itemVariants} className="glass p-4 sm:p-5 lg:p-6 rounded-xl text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.technologies}</div>
              </motion.div>
              <motion.div variants={itemVariants} className="glass p-4 sm:p-5 lg:p-6 rounded-xl text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">6+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.certifications}</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t.mainTech}</h3>
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {about.mainTechs.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 dark:border-primary/30 rounded-full text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass p-4 sm:p-5 lg:p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">{t.constantInnovation}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.constantInnovationDesc}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass p-4 sm:p-5 lg:p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">{t.highPerformance}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t.highPerformanceDesc}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
