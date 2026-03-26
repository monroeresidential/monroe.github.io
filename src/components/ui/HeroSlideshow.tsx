import { useState, useEffect, useRef, useCallback } from 'react';

const heroImages = [
  '/assets/hero/teton-mountain-pass.jpg',
  '/assets/hero/flat-exterior-pond.jpg',
  '/assets/hero/downtown-bozeman.jpg',
  '/assets/hero/box-board-interior.jpg',
  '/assets/hero/101-west-aerial.jpg',
  '/assets/hero/volaris-lansing.jpg',
];

const SLIDE_DURATION = 5000;
const FADE_DURATION = 800;

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
  // Two layers: A and B alternate being on top
  const [layerAIndex, setLayerAIndex] = useState(0);
  const [layerBIndex, setLayerBIndex] = useState(1);
  // Which layer is currently visible on top
  const [activeLayer, setActiveLayer] = useState<'A' | 'B'>('A');
  // Animation key to restart Ken Burns per layer
  const [layerAKey, setLayerAKey] = useState(0);
  const [layerBKey, setLayerBKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    preloadImages(heroImages).then(() => setReady(true));
  }, []);

  const advance = useCallback(() => {
    if (activeLayer === 'A') {
      // B is about to become visible — it already has the next image loaded
      // Restart its Ken Burns animation
      setLayerBKey((k) => k + 1);
      setActiveLayer('B');
      // After fade completes, prepare A with the next-next image
      setTimeout(() => {
        setLayerAIndex((layerBIndex + 1) % heroImages.length);
        setLayerAKey((k) => k + 1);
      }, FADE_DURATION);
    } else {
      setLayerAKey((k) => k + 1);
      setActiveLayer('A');
      setTimeout(() => {
        setLayerBIndex((layerAIndex + 1) % heroImages.length);
        setLayerBKey((k) => k + 1);
      }, FADE_DURATION);
    }
  }, [activeLayer, layerAIndex, layerBIndex]);

  useEffect(() => {
    if (!ready) return;
    timerRef.current = setTimeout(advance, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [ready, advance]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Solid background prevents any flash */}
      <div className="absolute inset-0 bg-monroe-dark" />

      {ready && (
        <>
          {/* Layer A — always in DOM */}
          <div
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              transitionDuration: `${FADE_DURATION}ms`,
              opacity: activeLayer === 'A' ? 1 : 0,
              zIndex: activeLayer === 'A' ? 2 : 1,
            }}
          >
            <div
              key={layerAKey}
              className="absolute inset-0 bg-cover bg-center animate-ken-burns-out"
              style={{ backgroundImage: `url(${heroImages[layerAIndex]})` }}
            />
          </div>

          {/* Layer B — always in DOM */}
          <div
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              transitionDuration: `${FADE_DURATION}ms`,
              opacity: activeLayer === 'B' ? 1 : 0,
              zIndex: activeLayer === 'B' ? 2 : 1,
            }}
          >
            <div
              key={layerBKey}
              className="absolute inset-0 bg-cover bg-center animate-ken-burns-out"
              style={{ backgroundImage: `url(${heroImages[layerBIndex]})` }}
            />
          </div>
        </>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-monroe-dark/65" style={{ zIndex: 3 }} />
    </div>
  );
}
