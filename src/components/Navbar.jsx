// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/pr_halima.png';

export const Navbar = ({ lang, setLang, t }) => {
  const { scrollY } = useScroll();

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
    { href: '#impact', label: t.nav.impact },
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#process', label: t.nav.process },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
        <img src={logo} alt="Projet Halima" className="nav-logo-img" />
        Projet Halima
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
      </div>
    </motion.nav>
  );
};
