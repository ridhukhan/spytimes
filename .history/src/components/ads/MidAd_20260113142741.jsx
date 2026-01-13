import React, { useEffect, useRef } from "react";

export const MidAd = () => {
  const containerRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const script = document.createElement('script');
    script.src = 'https://pl28443803.effectivegatecpm.com/1b/d9/87/1bd987ff830d9e3e8ebb0abed211b9af.js';
    script.async = true;
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <div ref={containerRef} className="text-center min-h-[250px]"></div>
    </div>
  );
};