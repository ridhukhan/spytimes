import React, { useEffect, useRef } from "react";

export const MidAd = () => {
  const containerRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const script = document.createElement('script');
    script.src = 'https://pl28446684.effectivegatecpm.com/a6e44a23f0c48ab9d7bcb1f9bb309097/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    
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
      <div ref={containerRef} className="text-center min-h-[250px]">
        <div id="container-a6e44a23f0c48ab9d7bcb1f9bb309097"></div>
      </div>
    </div>
  );
};