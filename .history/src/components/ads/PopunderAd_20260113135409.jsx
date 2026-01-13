import React,{useEffect} from "react";

export const BottomAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pl28446687.effectivegatecpm.com/db/73/91/db7391edcda54695481a78d6831c495e.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-4">
      <div className="text-center">
        <div id="bottom-social-ad"></div>
      </div>
    </div>
  );
};
