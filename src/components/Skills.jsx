import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';

const Skills = () => {
  const t = useTranslation('skills');
  const { skills } = useTranslatedData();
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: t.frontend },
    { id: 'backend', name: t.backend },
    { id: 'database', name: t.database },
    { id: 'devops', name: t.devops },
    { id: 'other', name: t.other },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header minimalista */}
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
            {t.subtitle || "Tecnologías y herramientas que domino"}
          </p>
        </motion.div>

        {/* Tabs minimalistas */}
        <div className="mb-8 sm:mb-12 border-b border-gray-200 dark:border-gray-800">
          <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-px scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`pb-3 sm:pb-4 text-sm sm:text-base font-medium whitespace-nowrap transition-colors relative ${
                  activeCategory === category.id
                    ? 'text-primary'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {category.name}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skills list - super simple */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 sm:space-y-8"
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              className="group"
            >
              {/* Skill name y level */}
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-400 dark:text-gray-500 font-mono">
                  {skill.level}%
                </span>
              </div>

              {/* Barra minimalista */}
              <div className="h-1 bg-gray-100 dark:bg-gray-900/80 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.03, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights minimalistas (opcional) */}
        {t.highlights && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {t.highlights.cleanCode?.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t.highlights.cleanCode?.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {t.highlights.architecture?.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t.highlights.architecture?.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {t.highlights.performance?.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t.highlights.performance?.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
