import React,{useEffect,useRef} from "react";

export const BottomAd = () => {
  const containerRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const script = document.createElement('script');
    script.src = 'https://pl28446687.effectivegatecpm.com/db/73/91/db7391edcda54695481a78d6831c495e.js';
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
    <div className="w-full flex justify-center my-4">
      <div ref={containerRef} className="text-center min-h-[100px]"></div>
    </div>
  );
};

