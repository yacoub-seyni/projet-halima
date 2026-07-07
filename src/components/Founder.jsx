// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Founder = ({ t }) => {
  return (
    <section id="founder" className="section founder-section">
      <div className="container">
        <motion.div
          className="founder-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            {t.founder.eyebrow}
          </div>
          <h2 className="founder-title">{t.founder.title}</h2>
          {t.founder.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="founder-paragraph"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.div
            className="founder-footer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="founder-signature">{t.founder.signature}</div>
            <a
              href={t.founder.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="founder-cta"
            >
              {t.founder.cta}
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
