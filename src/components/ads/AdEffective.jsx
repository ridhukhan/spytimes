// src/components/AdEffective.jsx
import React, { useEffect, useRef } from "react";

const AdEffective = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // script create
    const script = document.createElement("script");
    script.src = "https://pl28446684.effectivegatecpm.com/a6e44a23f0c48ab9d7bcb1f9bb309097/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    // inject script inside the div
    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    // cleanup
    return () => {
      if (adRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        adRef.current.removeChild(script);
      }
    };
  }, []);

  return <div ref={adRef} id="container-a6e44a23f0c48ab9d7bcb1f9bb309097"></div>;
};

export default AdEffective;
