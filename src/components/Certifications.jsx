import { motion } from 'framer-motion';
import { HiExternalLink, HiAcademicCap } from 'react-icons/hi';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';

const Certifications = () => {
  const t = useTranslation('certifications');
  const { certifications } = useTranslatedData();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="certifications" className="py-20 px-4">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <HiAcademicCap className="text-5xl text-primary" />
                </motion.div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                    {cert.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {cert.provider}
                </p>

                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors font-semibold"
                  whileHover={{ x: 5 }}
                >
                  {t.view}
                  <HiExternalLink />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">{t.education}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiAcademicCap className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.degrees.softwareEngineering}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">FESC</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-500 text-xs font-semibold rounded-full">
                    {t.inProgress}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiAcademicCap className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.degrees.softwareTechnologist}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">FESC</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-500 text-xs font-semibold rounded-full">
                    {t.completed}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiAcademicCap className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.degrees.systemsTechnician}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">SENA</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-500 text-xs font-semibold rounded-full">
                    {t.completed}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiAcademicCap className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t.degrees.fullStackDiploma}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">FESC</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-500 text-xs font-semibold rounded-full">
                    {t.completed}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
