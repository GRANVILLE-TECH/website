import React, { useState, useEffect, useRef } from 'react';

const CalendlyWidget = ({ url, style }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' } // Load slightly before it comes into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Format the Calendly URL for direct iframe embed
  const getEmbedUrl = () => {
    try {
      const parsedUrl = new URL(url);
      parsedUrl.searchParams.set('embed_type', 'inline');
      parsedUrl.searchParams.set('embed_domain', window.location.hostname);
      return parsedUrl.toString();
    } catch (e) {
      return url;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden bg-[#111111]/40 border border-white/5 backdrop-blur-xl transition-all duration-500"
      style={{ minHeight: '700px', ...style }}
    >
      {/* Premium Glassmorphic Loading Placeholder */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md z-10 transition-opacity duration-500">
          <div className="relative flex items-center justify-center mb-4">
            {/* Pulsing outer rings */}
            <div className="absolute w-16 h-16 border-2 border-amber-500/20 rounded-full animate-ping" />
            <div className="absolute w-20 h-20 border border-amber-500/10 rounded-full animate-pulse" />
            {/* Spinning loader */}
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide animate-pulse">
            Connecting to Granville Scheduler...
          </p>
        </div>
      )}

      {/* Lazy-loaded iframe */}
      {isInView && (
        <iframe
          src={getEmbedUrl()}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Calendly Scheduling"
          className="w-full h-full min-h-[700px] rounded-2xl bg-transparent"
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
};

export default CalendlyWidget;
