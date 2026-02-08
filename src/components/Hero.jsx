import { useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Book } from './Book';
import { ChevronDown } from 'lucide-react';

const FloatingParticle = ({ delay, duration, size, x, y }) => (
  <motion.div
    className="floating-particle"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.08, 0.25, 0.08],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 4,
    size: 3 + Math.random() * 8,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

export const Hero = ({ t, lang }) => {
  const particles = useMemo(() => generateParticles(15), []);

  const handleScrollDown = (e) => {
    e.preventDefault();
    const el = document.querySelector('#mission');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero">
      <div className="hero-background">
        {particles.map((p) => (
          <FloatingParticle key={p.id} {...p} />
        ))}
      </div>

      <div className="container hero-content">
        <motion.div className="hero-text">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="hero-badge-dot"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.title}
          </motion.h1>

          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t.hero.subtitle}
          </motion.div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {t.hero.tagline}
          </motion.p>

          <motion.a
            href="#mission"
            className="hero-cta"
            onClick={handleScrollDown}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(74, 122, 255, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.cta}
            <ChevronDown size={16} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Book quotes={t.quotes} lang={lang} />
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </header>
  );
};
