import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiBriefcase, HiLightningBolt, HiStar } from 'react-icons/hi';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const t = useTranslation('projects');
  const { professionalProjects, personalProjects } = useTranslatedData();
  const { language } = useLanguage();

  console.log(professionalProjects);
  console.log(personalProjects);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const ProjectCard = ({ project, isProfessional = false }) => {
    // Validación defensiva
    if (!project || !project.name || !project.description) {
      console.error('Invalid project data:', project);
      return null;
    }

    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -8 }}
        className="group h-full"
      >
        <div className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20">
        {/* Header con gradiente y decoración */}
        <div className="relative h-44 sm:h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent-blush/20 dark:from-primary/30 dark:via-secondary/30 dark:to-accent-blush/30 overflow-hidden">
          {/* Patron de fondo */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`
            }}></div>
          </div>

          {/* Icono central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${
                isProfessional
                  ? 'from-primary to-primary-dark'
                  : 'from-secondary to-secondary-dark'
              } flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
            >
              {isProfessional ? (
                <HiBriefcase className="text-white text-2xl sm:text-3xl" />
              ) : (
                <HiCode className="text-white text-2xl sm:text-3xl" />
              )}
            </motion.div>
          </div>

          {/* Badges superiores */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {project.featured && (
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-secondary to-secondary-dark text-white text-xs font-bold rounded-full shadow-lg"
              >
                <HiStar className="text-sm" />
                {t.featured}
              </motion.span>
            )}
            {isProfessional && (
              <motion.span
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="px-2.5 py-1 bg-accent-blush text-white text-xs font-bold rounded-full shadow-lg"
              >
                {t.professional}
              </motion.span>
            )}
          </div>

          {/* Decoración inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        </div>

        {/* Contenido */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          {/* Título y empresa */}
          <div className="mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
              {project.name}
            </h3>
            {isProfessional && project.company && (
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <p className="text-sm font-semibold text-primary">
                  {project.company}
                </p>
              </div>
            )}
          </div>

          {/* Descripción */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Impacto (solo profesionales) */}
          {isProfessional && project.impact && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/40 dark:to-emerald-900/40 rounded-lg border-l-3 border-green-500"
            >
              <div className="flex items-start gap-2">
                <HiLightningBolt className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs font-medium text-green-700 dark:text-green-400 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </motion.div>
          )}

          {/* Tecnologías */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-2 sm:px-2.5 py-1 text-xs font-medium rounded-md ${
                    isProfessional
                      ? 'bg-primary/15 dark:bg-primary/25 text-primary border border-primary/30'
                      : 'bg-secondary/15 dark:bg-secondary/25 text-secondary border border-secondary/30'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 sm:px-2.5 py-1 text-xs font-medium rounded-md bg-ui/30 text-gray-600 dark:text-gray-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
            {isProfessional ? (
              <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-ui/20 to-ui/10 rounded-lg text-sm text-gray-500 dark:text-gray-400 border border-ui/30">
                <HiBriefcase className="text-base" />
                <span className="font-medium text-xs sm:text-sm">{t.confidential}</span>
              </div>
            ) : (
              <>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg text-xs sm:text-sm font-semibold shadow-md hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiExternalLink className="text-base" />
                    <span>{t.demo}</span>
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 border-2 border-primary text-primary rounded-lg text-xs sm:text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiCode className="text-base" />
                    <span>{t.code}</span>
                  </motion.a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
    );
  };

  const SectionHeader = ({ icon: Icon, title, highlight, description, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8 sm:mb-10"
    >
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
          <Icon className="text-white text-xl sm:text-2xl" />
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {title} <span className="gradient-text">{highlight}</span>
        </h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
        {description}
      </p>
    </motion.div>
  );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            {t.title} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 sm:mb-16"></div>
        </motion.div>

        {/* Proyectos Profesionales */}
        <div className="mb-16 sm:mb-20">
          <SectionHeader
            icon={HiBriefcase}
            title={t.professionalTitle}
            highlight={t.professionalHighlight}
            description={t.professionalDesc}
            color="from-primary to-primary-dark"
          />

          <motion.div
            key={`container-prof-${language}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {professionalProjects.map((project) => (
              <ProjectCard key={`${language}-prof-${project.id}`} project={project} isProfessional={true} />
            ))}
          </motion.div>
        </div>

        {/* Divisor decorativo */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-ui to-transparent mb-16 sm:mb-20"
        ></motion.div>

        {/* Proyectos Personales */}
        <div>
          <SectionHeader
            icon={HiCode}
            title={t.personalTitle}
            highlight={t.personalHighlight}
            description={t.personalDesc}
            color="from-secondary to-secondary-dark"
          />

          <motion.div
            key={`container-pers-${language}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {personalProjects.map((project) => (
              <ProjectCard key={`${language}-pers-${project.id}`} project={project} isProfessional={false} />
            ))}
          </motion.div>
        </div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 italic">
            {t.footer || "Siempre explorando nuevas tecnologías y creando soluciones innovadoras 🚀"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
