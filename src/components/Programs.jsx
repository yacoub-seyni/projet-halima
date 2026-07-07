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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const Programs = ({ t }) => {
  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            {t.programs.eyebrow}
          </div>
          <h2>{t.programs.title}</h2>
        </motion.div>

        <motion.div
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.programs.items.map((program) => (
            <motion.div
              key={program.title}
              className="program-card"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={`program-status program-status--${program.statusType}`}>
                <span className="program-status-dot" />
                {program.status}
              </div>
              <h3>{program.title}</h3>
              <p>{program.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
