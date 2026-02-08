// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Footer = ({ t }) => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="footer-tagline">{t.footer.tagline}</div>
        <div className="footer-built">{t.footer.builtBy}</div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} {t.footer.copyright}
        </div>
      </div>
    </motion.footer>
  );
};
