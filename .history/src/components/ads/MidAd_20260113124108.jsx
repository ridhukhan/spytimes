import { useEffect } from "react";
import React from "react";
export const MidAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pl28443803.effectivegatecpm.com/1b/d9/87/1bd987ff830d9e3e8ebb0abed211b9af.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <div className="text-center">
        <div id="mid-native-ad"></div>
      </div>
    </div>
  );
};