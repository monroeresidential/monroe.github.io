import { useState, useEffect, useRef } from 'react';

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

function preloadImages(urls: string[]): Promise<void> {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = url;
        })
    )
  ).then(() => undefined);
}

export default function HeroSlideshow() {
  const [ready, setReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Preload all images before showing anything
  useEffect(() => {
    preloadImages(heroImages).then(() => setReady(true));
  }, []);

  // Run slideshow only after images are ready
  useEffect(() => {
    if (!ready) return;

    const scheduleNext = () => {
      timerRef.current = setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % heroImages.length;
          setNextIndex(next);
          setIsTransitioning(true);

          setTimeout(() => {
            setCurrentIndex(next);
            setNextIndex(null);
            setIsTransitioning(false);
            scheduleNext();
          }, FADE_DURATION);

          return prev;
        });
      }, SLIDE_DURATION);
    };

    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [ready]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid background to prevent white flash */}
      <div className="absolute inset-0 bg-monroe-dark" />

      {ready && (
        <>
          {/* Current slide */}
          <div
            className={`absolute inset-0 transition-opacity ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ transitionDuration: `${FADE_DURATION}ms` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center animate-ken-burns-out"
              style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
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
                style={{ backgroundImage: `url(${heroImages[nextIndex]})` }}
                key={`next-${nextIndex}`}
              />
            </div>
          )}
        </>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-monroe-dark/65" />
    </div>
  );
}
