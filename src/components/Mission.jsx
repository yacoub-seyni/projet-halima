// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Mission = ({ t }) => {
  return (
    <section id="mission" className="section mission-section">
      <div className="container">
        <motion.div
          className="mission-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="section-eyebrow">{t.mission.eyebrow}</div>
          <h2>{t.mission.title}</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.mission.p1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.mission.p2}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.mission.p3}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
