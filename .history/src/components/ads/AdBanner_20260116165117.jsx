// src/components/AdBanner.jsx
import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    // Script inject করার জন্য
    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/b98d336197bb10ad2755087bdef3a0b5/invoke.js";
    script.async = true;
    document.body.appendChild(script);

    // atOptions set করা
    window.atOptions = {
      key: "b98d336197bb10ad2755087bdef3a0b5",
      format: "iframe",
      height: 250,
      width: 300,
      params: {}
    };

    // Cleanup
    return () => {
      document.body.removeChild(script);
      delete window.atOptions;
    };
  }, []);

  return (
    <div id="ad-container">
      {/* Ad iframe এখানে inject হবে */}
    </div>
  );
};

export default AdBanner;
