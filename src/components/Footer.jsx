import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const t = useTranslation('nav');
  const tFooter = useTranslation('footer');
  const tContact = useTranslation('contact');
  const { personalInfo } = useTranslatedData();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: personalInfo.github, name: 'GitHub' },
    { icon: <FaLinkedin />, url: personalInfo.linkedin, name: 'LinkedIn' },
    { icon: <FaWhatsapp />, url: personalInfo.whatsapp, name: 'WhatsApp' },
    { icon: <HiMail />, url: `mailto:${personalInfo.email}`, name: 'Email' }
  ];

  const quickLinks = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.experience, href: '#experience' },
    { name: t.projects, href: '#projects' },
    { name: t.skills, href: '#skills' },
    { name: t.contact, href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">@{personalInfo.nickname}</h3>
            <p className="text-sm text-gray-500 mb-3">{personalInfo.displayName}</p>
            <p className="text-gray-400 mb-4 max-w-md">
              {tFooter.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">{tFooter.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">{tContact.contact}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">
                  +57 {personalInfo.phone}
                </a>
              </li>
              <li>{tContact.locationValue}</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>{currentYear} {personalInfo.name} (@{personalInfo.nickname}).</span>
            <span className="flex items-center gap-1">
              {tFooter.madeWith} <FaHeart className="text-red-500 animate-pulse" /> y React
            </span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {tFooter.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
