interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  fullHeight?: boolean;
}

export default function PageHero({ title, subtitle, backgroundImage, fullHeight = false }: PageHeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center ${
        fullHeight ? 'min-h-screen' : 'min-h-[50vh]'
      }`}
    >
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-monroe-dark/70" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-monroe-dark" />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Scroll Indicator (only on full height) */}
      {fullHeight && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  );
}
