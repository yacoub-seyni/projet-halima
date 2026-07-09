// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/pr_halima.png';

export const Navbar = ({ lang, setLang, t }) => {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(253, 250, 245, 0.7)', 'rgba(253, 250, 245, 0.95)']
  );
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 2px 12px rgba(44, 24, 16, 0.04)', '0 4px 24px rgba(44, 24, 16, 0.08)']
  );

  const links = [
    { href: '#mission', label: t.nav.mission },
    { href: '#programs', label: t.nav.programs },
    { href: '#impact', label: t.nav.impact },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#founder', label: t.nav.founder },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: navBackground, boxShadow: navShadow }}
      >
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <img src={logo} alt="Projet Halima Seyni" className="nav-logo-img" />
          Projet Halima Seyni
        </motion.div>

        <div className="nav-links">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="lang-toggle">
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              className={lang === 'fr' ? 'active' : ''}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
          </div>

          <button
            className="nav-menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="nav-mobile-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
