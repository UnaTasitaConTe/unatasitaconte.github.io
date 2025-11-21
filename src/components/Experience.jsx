import { motion } from 'framer-motion';
import { HiCheckCircle, HiBriefcase } from 'react-icons/hi';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';

const Experience = () => {
  const t = useTranslation('experience');
  const { experience } = useTranslatedData();

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
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

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              <div className="md:w-5/12">
                {index % 2 === 0 ? (
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <HiBriefcase className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        {exp.current && (
                          <span className="inline-block px-3 py-1 bg-green-500/20 text-green-500 text-xs font-semibold rounded-full">
                            {t.current}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-lg font-semibold text-primary dark:text-primary">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <HiCheckCircle className="text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-secondary dark:text-secondary">
                        {exp.achievement}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="hidden md:block"></div>
                )}
              </div>

              <div className="hidden md:flex w-2/12 justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                ></motion.div>
              </div>

              <div className="md:w-5/12">
                {index % 2 !== 0 ? (
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <HiBriefcase className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        {exp.current && (
                          <span className="inline-block px-3 py-1 bg-green-500/20 text-green-500 text-xs font-semibold rounded-full">
                            {t.current}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-lg font-semibold text-primary dark:text-primary">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <HiCheckCircle className="text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-secondary dark:text-secondary">
                        {exp.achievement}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="hidden md:block"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
