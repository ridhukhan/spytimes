import React, { useEffect, useRef } from "react";

const AdBanner = ({ height = 250, width = 300 }) => {
  const adRef = useRef(null);

  useEffect(() => {
    // atOptions
    window.atOptions = {
      key: "b98d336197bb10ad2755087bdef3a0b5",
      format: "iframe",
      height,
      width,
      params: {}
    };

    // script inject
    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/b98d336197bb10ad2755087bdef3a0b5/invoke.js";
    script.async = true;

    // inject script inside adRef div
    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    return () => {
      if (adRef.current) {
        adRef.current.removeChild(script);
      }
      delete window.atOptions;
    };
  }, [height, width]);

  return <div ref={adRef}></div>;
};

export default AdBanner;
