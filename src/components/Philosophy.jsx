// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Philosophy = ({ t }) => {
  return (
    <section id="philosophy" className="section philosophy-section">
      <div className="container">
        <motion.div
          className="philosophy-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            {t.philosophy.eyebrow}
          </div>
          <h2 className="philosophy-title">{t.philosophy.title}</h2>
          <motion.p
            className="philosophy-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.philosophy.body}
          </motion.p>
          <motion.div
            className="philosophy-quote"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.philosophy.quote}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
