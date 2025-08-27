import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Header() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const navLinks = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about-us' },
    { label: t('services'), href: '/services' },
    { label: t('career'), href: '/career' },
    { label: t('partners'), href: '/partners' },
    { label: t('contactUs'), href: '/contact' },
  ];

  // Flag image based on language
  const flagImage = i18n.language === 'ar'
    ? 'assets/images/flag-en.png' // when Arabic is active, show English flag
    : 'assets/images/flag-ar.png'; // when English is active, show Arabic flag

  return (
    <header className="absolute z-10 w-full mt-10">
      {/* Top Bar */}
      <div className="jd-header-container bg-[#495D8A] text-white text-sm px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-2 rounded-tl-2xl rounded-tr-2xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-xs" />
            <span>920009622</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEnvelope className="text-xs" />
            <span>info@joodfm.com</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaInstagram />
          <FaFacebookF />
          <FaWhatsapp />
          <FaLinkedinIn />
        </div>
      </div>

      {/* Navigation */}
      <div className="jd-header-container bg-white px-8 py-6 shadow flex items-center justify-between rounded-bl-2xl rounded-br-2xl">
        <img src="assets/images/joodfm-logo.png" alt="Jood FM Logo" className="w-32" />

        <nav className="hidden md:flex gap-6 text-black text-jd-main-nav">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-purple-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Toggle Image */}
        <img
          src={flagImage}
          alt="Change Language"
          className="w-10 h-10 cursor-pointer"
          onClick={toggleLanguage}
          title="Switch Language"
        />
      </div>
    </header>
  );
}
