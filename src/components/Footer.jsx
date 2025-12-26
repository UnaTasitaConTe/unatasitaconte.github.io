import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useTranslatedData } from '../hooks/useTranslatedData';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const t = useTranslation('nav');
  const tFooter = useTranslation('footer');
  const { personalInfo } = useTranslatedData();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: personalInfo.github, name: 'GitHub' },
    { icon: FaLinkedin, url: personalInfo.linkedin, name: 'LinkedIn' },
    { icon: FaWhatsapp, url: personalInfo.whatsapp, name: 'WhatsApp' },
    { icon: HiMail, url: `mailto:${personalInfo.email}`, name: 'Email' }
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
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <h3 className="text-xl font-bold mb-2">@{personalInfo.nickname}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
                {tFooter.description}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all text-base"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-4">
                {tFooter.quickLinks}
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-4">
                Contacto
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    +57 {personalInfo.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <p>
              © {currentYear} {personalInfo.name}. {tFooter.rights}
            </p>       
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
