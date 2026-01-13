import React, { useEffect } from 'react';

// Top Banner Ad Component
export const TopBannerAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/b98d336197bb10ad2755087bdef3a0b5/invoke.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-4">
      <div className="text-center">
        <div id="top-banner-ad"></div>
      </div>
    </div>
  );
};