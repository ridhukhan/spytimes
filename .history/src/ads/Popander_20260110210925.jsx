import { useEffect } from "react";

const Popander = () => {
  useEffect(() => {
    // নতুন script element তৈরি
    const script = document.createElement("script");
    script.src = "https://pl28443803.effectivegatecpm.com/1b/d9/87/1bd987ff830d9e3e8ebb0abed211b9af.js";
    script.async = true;

    // script body তে inject করা
    document.body.appendChild(script);

    // Cleanup: কম্পোনেন্ট unmount হলে script remove
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // কারণ popunder ads element page এ render করতে হবে না
};

export default Popander;
