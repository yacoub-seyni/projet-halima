// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ndouga from '../assets/ndouga_00.JPG';
import waagona from '../assets/waagona_00.JPG';

const imageMap = {
  'ndouga_00.JPG': ndouga,
  'waagona_00.JPG': waagona,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const Gallery = ({ t }) => {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            {t.gallery.eyebrow}
          </div>
          <h2>{t.gallery.title}</h2>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.gallery.images.map((img) => (
            <motion.div
              key={img.src}
              className="gallery-item"
              variants={imageVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={imageMap[img.src]}
                  alt={img.caption}
                  loading="lazy"
                />
              </div>
              <div className="gallery-caption">
                <p className="gallery-caption-text">{img.caption}</p>
                <span className="gallery-location">{img.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
