import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiBriefcase } from 'react-icons/hi';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';

const Projects = () => {
  const t = useTranslation('projects');
  const { professionalProjects, personalProjects } = useTranslatedData();

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

  const renderProjectCard = (project, isProfessional = false) => (
    <motion.div
      key={`${isProfessional ? 'prof' : 'pers'}-${project.id}`}
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="text-6xl"
        >
          {isProfessional ? (
            <HiBriefcase className="text-primary" />
          ) : (
            <HiCode className="text-primary" />
          )}
        </motion.div>

        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {project.featured && (
            <span className="px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full shadow-lg">
              {t.featured}
            </span>
          )}
          {isProfessional && (
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
              {t.professional}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        {isProfessional && project.company && (
          <p className="text-xs text-primary font-semibold mb-3">
            {project.company}
          </p>
        )}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {isProfessional && project.impact && (
          <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-xs font-semibold text-green-700 dark:text-green-400">
              {project.impact}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          {isProfessional ? (
            <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-400">
              <HiBriefcase className="text-lg" />
              <span className="font-medium">{t.confidential}</span>
            </div>
          ) : (
            <>
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiExternalLink />
                  {t.demo}
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiCode />
                  {t.code}
                </motion.a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-4">
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
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"></div>
        </motion.div>

        {/* Proyectos Profesionales/Empresariales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <HiBriefcase className="text-3xl text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold">
              {t.professionalTitle} <span className="gradient-text">{t.professionalHighlight}</span>
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
            {t.professionalDesc}
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {professionalProjects.map((project) => renderProjectCard(project, true))}
          </motion.div>
        </motion.div>

        {/* Proyectos Personales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <HiCode className="text-3xl text-secondary" />
            <h3 className="text-2xl md:text-3xl font-bold">
              {t.personalTitle} <span className="gradient-text">{t.personalHighlight}</span>
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
            {t.personalDesc}
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {personalProjects.map((project) => renderProjectCard(project, false))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
