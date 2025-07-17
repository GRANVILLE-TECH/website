import React, { useEffect } from 'react';

let calendlyScriptLoaded = false;

const loadCalendlyScript = () => {
  if (!calendlyScriptLoaded) {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.id = 'calendly-widget-script';
    document.body.appendChild(script);
    calendlyScriptLoaded = true;
  }
};

const CalendlyWidget = ({ url, style }) => {
  useEffect(() => {
    loadCalendlyScript();
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={style}
    />
  );
};

export default CalendlyWidget;
