import React,{useEffect} from "react";

export const PopunderAd = () => {
  useEffect(() => {
    const atOptions = {
      'key': 'b98d336197bb10ad2755087bdef3a0b5',
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };
    
    window.atOptions = atOptions;

    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/b98d336197bb10ad2755087bdef3a0b5/invoke.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.atOptions;
    };
  }, []);

  return null; // Popunder invisible, শুধু background এ কাজ করে
};

