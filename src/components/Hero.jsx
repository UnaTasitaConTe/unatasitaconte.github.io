import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const { personalInfo } = useTranslatedData();

  const handleDownloadCV = () => {
    // Crear un enlace temporal para descargar el CV
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_TomasMauricioRodriguez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary dark:text-primary font-semibold text-base sm:text-lg">
                {t.greeting}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-2 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-500 font-medium mb-3 sm:mb-4">
                @{personalInfo.nickname}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl gradient-text font-semibold">
                {personalInfo.role}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <motion.button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold shadow-lg transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload size={18} className="sm:w-5 sm:h-5" />
                {t.downloadCV}
              </motion.button>

              <motion.button
                onClick={handleContact}
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail size={18} className="sm:w-5 sm:h-5" />
                {t.contactMe}
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 sm:gap-5 pt-2 sm:pt-4 justify-center md:justify-start"
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center items-center order-first md:order-last"
          >
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl sm:blur-3xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    className='w-full h-full object-cover'
                    src='https://media.licdn.com/dms/image/v2/D4E03AQGAJYyD9kxUNQ/profile-displayphoto-crop_800_800/B4EZjH6xalGwAQ-/0/1755700731059?e=1765411200&v=beta&t=At2b6dxXQKPDwHkMJxH4mR6KxMdwVt9mN2PjIXQ7yPk'
                    alt={personalInfo.name}
                  />
                  {/* <div className="text-8xl font-bold gradient-text">TMR</div> */}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -z-10 w-full h-full"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full blur-xl opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-secondary rounded-full blur-xl opacity-50"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
