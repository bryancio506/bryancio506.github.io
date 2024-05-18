// components/CalendlyEvent.js
import { useEffect } from 'react';

const CalendlyEvent = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: document.getElementById('calendly-container'),
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return <div id="calendly-container" className=" w-full h-full"></div>;
};

export default CalendlyEvent;
