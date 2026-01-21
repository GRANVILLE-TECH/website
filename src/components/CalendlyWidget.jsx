import React, { useEffect } from 'react';

const CalendlyWidget = ({ url, style }) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // Only append if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup is handled by React
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: '320px', height: '700px', ...style }}
    />
  );
};

export default CalendlyWidget;
