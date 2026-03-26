import { useState, useEffect, useCallback } from 'react';

const heroImages = [
  '/assets/hero/teton-mountain-pass.jpg',
  '/assets/hero/flat-exterior-pond.jpg',
  '/assets/hero/downtown-bozeman.jpg',
  '/assets/hero/box-board-interior.jpg',
  '/assets/hero/101-west-aerial.jpg',
  '/assets/hero/volaris-lansing.jpg',
];

const SLIDE_DURATION = 5000;
const FADE_DURATION = 500;

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    const next = (currentIndex + 1) % heroImages.length;
    setNextIndex(next);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(next);
      setNextIndex(null);
      setIsTransitioning(false);
    }, FADE_DURATION);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(goToNext, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Current slide */}
      <div
        className={`absolute inset-0 transition-opacity ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transitionDuration: `${FADE_DURATION}ms` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns-out"
          style={{
            backgroundImage: `url(${heroImages[currentIndex]})`,
          }}
          key={`current-${currentIndex}`}
        />
      </div>

      {/* Next slide (fading in) */}
      {nextIndex !== null && (
        <div
          className={`absolute inset-0 transition-opacity ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDuration: `${FADE_DURATION}ms` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center animate-ken-burns-out"
            style={{
              backgroundImage: `url(${heroImages[nextIndex]})`,
            }}
            key={`next-${nextIndex}`}
          />
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-monroe-dark/65" />
    </div>
  );
}
