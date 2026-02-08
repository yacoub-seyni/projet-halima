import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const FLIP_DURATION = 3.5;
const PAUSE_BETWEEN_FLIPS = 2.5;
const VISIBLE_WINDOW = 6;

const Page = ({ index, totalPages, currentPage, quote }) => {
  const rotateY = useMotionValue(0);
  const isFlipped = index < currentPage;
  const isFlipping = index === currentPage - 1;

  const shadowOpacity = useTransform(
    rotateY,
    [-180, -90, 0],
    [0, 0.35, 0]
  );

  useEffect(() => {
    if (isFlipped || isFlipping) {
      const controls = animate(rotateY, -180, {
        duration: FLIP_DURATION,
        ease: [0.4, 0.0, 0.15, 1],
      });
      return () => controls.stop();
    } else {
      rotateY.set(0);
    }
  }, [isFlipped, isFlipping, rotateY]);

  return (
    <motion.div
      className="page"
      style={{
        zIndex: totalPages - index,
        rotateY,
      }}
    >
      {/* Front face — visible when page is unflipped (right side) */}
      <div className="page-face page-front">
        {quote && (
          <div className="page-content">
            <div className="quote-mark">&ldquo;</div>
            <div className="quote-text">{quote.text}</div>
            <div className="quote-author">{quote.author}</div>
            <div className="quote-decoration-bottom" />
          </div>
        )}
        <motion.div className="page-shadow" style={{ opacity: shadowOpacity }} />
      </div>

      {/* Back face — visible when page is flipped (shows on left side) */}
      <div className="page-face page-back">
        <div className="page-content">
          <div className="quote-decoration" />
        </div>
      </div>
    </motion.div>
  );
};

const CoverPage = ({ currentPage, totalPages }) => {
  const rotateY = useMotionValue(0);
  const isOpen = currentPage > 0;

  useEffect(() => {
    if (isOpen) {
      const controls = animate(rotateY, -180, {
        duration: FLIP_DURATION,
        ease: [0.4, 0.0, 0.15, 1],
      });
      return () => controls.stop();
    } else {
      const controls = animate(rotateY, 0, {
        duration: 0.01,
      });
      return () => controls.stop();
    }
  }, [isOpen, rotateY]);

  return (
    <motion.div
      className="book-cover front-cover"
      style={{
        zIndex: totalPages + 2,
        rotateY,
      }}
    >
      <div className="cover-title">
        Projet Halima
        <span>Guardians of Knowledge</span>
      </div>
    </motion.div>
  );
};

export const Book = ({ quotes }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const totalPages = quotes.length;
  const resetTimerRef = useRef(null);
  const flipTimerRef = useRef(null);

  // Page range to render (windowing)
  const visibleRange = useMemo(() => {
    const start = Math.max(0, currentPage - 2);
    const end = Math.min(totalPages, currentPage + VISIBLE_WINDOW);
    return { start, end };
  }, [currentPage, totalPages]);

  const flipNext = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);

  // Handle page progression
  useEffect(() => {
    if (isResetting) return;

    // If we've shown all pages, schedule a reset
    if (currentPage > totalPages) {
      resetTimerRef.current = setTimeout(() => {
        setIsResetting(true);
        setTimeout(() => {
          setCurrentPage(0);
          setTimeout(() => setIsResetting(false), 600);
        }, 3000);
      }, 0);
      return () => {
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      };
    }

    // Schedule next flip
    const delay = currentPage === 0 ? 2500 : (FLIP_DURATION + PAUSE_BETWEEN_FLIPS) * 1000;
    flipTimerRef.current = setTimeout(flipNext, delay);
    return () => {
      if (flipTimerRef.current) clearTimeout(flipTimerRef.current);
    };
  }, [currentPage, totalPages, flipNext, isResetting]);

  return (
    <motion.div
      className="book-scene"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isResetting ? 0 : 1, scale: isResetting ? 0.95 : 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="book">
        {/* Spine */}
        <div className="book-spine" />

        {/* Page edges */}
        <div className="pages-edge" />
        <div className="pages-bottom-edge" />

        {/* Back cover */}
        <div className="book-cover back-cover" />

        {/* Pages container */}
        <div className="pages-container">
          {/* Render only visible window of pages */}
          {quotes.slice(visibleRange.start, visibleRange.end).map((quote, i) => {
            const actualIndex = visibleRange.start + i;
            return (
              <Page
                key={actualIndex}
                index={actualIndex + 1}
                totalPages={totalPages + 1}
                currentPage={currentPage}
                quote={quote}
              />
            );
          })}
        </div>

        {/* Front cover (flips open first) */}
        <CoverPage currentPage={currentPage} totalPages={totalPages} />
      </div>
    </motion.div>
  );
};
