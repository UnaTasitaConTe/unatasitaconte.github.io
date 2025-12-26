import { motion } from 'framer-motion';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const t = useTranslation('about');
  const { about } = useTranslatedData();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
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
            {t.subtitle || "Un poco sobre mí y mi trabajo"}
          </p>
        </motion.div>

        {/* Descripción principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {t.description}
          </p>

          {/* Stats en línea */}
          <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t.yearsExperience}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t.completedProjects}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t.technologies}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">6+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t.certifications}</div>
            </div>
          </div>
        </motion.div>

        {/* Tecnologías principales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            {t.mainTech}
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {about.mainTechs.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm sm:text-base font-medium border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Enfoque - Simple y limpio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                {t.constantInnovation}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.constantInnovationDesc}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                {t.highPerformance}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.highPerformanceDesc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
