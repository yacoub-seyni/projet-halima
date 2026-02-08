// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const Process = ({ t }) => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow">{t.process.eyebrow}</div>
          <h2>{t.process.title}</h2>
        </motion.div>

        <motion.div
          className="process-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.process.steps.map((step) => (
            <motion.div
              key={step.number}
              className="process-card"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="process-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
