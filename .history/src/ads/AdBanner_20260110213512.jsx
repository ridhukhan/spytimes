import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    // atOptions global variable set
    window.atOptions = {
      key: "b98d336197bb10ad2755087bdef3a0b5",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    // script inject
    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/b98d336197bb10ad2755087bdef3a0b5/invoke.js";
    script.async = true;

    // append to body
    document.body.appendChild(script);

    // cleanup
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      delete window.atOptions;
    };
  }, []);

  return null; // JSX render করার দরকার নেই
};

export default AdBanner;
