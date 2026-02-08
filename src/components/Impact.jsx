// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';

const useCounter = (end, inView, duration = 2000) => {
  const [count, setCount] = useState('0');
  const hasAnimated = useRef(false);

  const startAnimation = useCallback(() => {
    const target = parseInt(end, 10);
    if (isNaN(target)) return;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setCount(String(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      startAnimation();
    }
  }, [inView, startAnimation]);

  return count;
};

const StatCard = ({ stat, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const animatedNumber = useCounter(stat.number, isInView);

  return (
    <motion.div
      ref={ref}
      className="impact-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -5 }}
    >
      <div className="impact-number">
        {animatedNumber}{stat.suffix || ''}
      </div>
      <div className="impact-label">{stat.label}</div>
    </motion.div>
  );
};

export const Impact = ({ t }) => {
  return (
    <section id="impact" className="section impact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            {t.impact.eyebrow}
          </div>
          <h2>{t.impact.title}</h2>
        </motion.div>

        <div className="impact-grid">
          {t.impact.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};
