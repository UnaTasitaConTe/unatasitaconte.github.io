import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';

const Skills = () => {
  const t = useTranslation('skills');
  const { skills } = useTranslatedData();
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: t.frontend, icon: '🎨' },
    { id: 'backend', name: t.backend, icon: '⚙️' },
    { id: 'database', name: t.database, icon: '🗄️' },
    { id: 'devops', name: t.devops, icon: '🚀' },
    { id: 'other', name: t.other, icon: '🔧' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'glass hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-lg">{skill.name}</h3>
                <span className="text-sm font-semibold text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass p-6 rounded-xl text-center"
          >
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-bold text-xl mb-2">{t.highlights.cleanCode.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.highlights.cleanCode.description}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass p-6 rounded-xl text-center"
          >
            <div className="text-4xl mb-3">🏗️</div>
            <h3 className="font-bold text-xl mb-2">{t.highlights.architecture.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.highlights.architecture.description}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass p-6 rounded-xl text-center"
          >
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-xl mb-2">{t.highlights.performance.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.highlights.performance.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
