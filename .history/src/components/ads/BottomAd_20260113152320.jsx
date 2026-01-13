import { useEffect } from "react";

let bottomAdLoaded = false;

const BottomAd = () => {
  useEffect(() => {
    if (bottomAdLoaded) return;

    const script = document.createElement("script");
    script.src =
      "https://pl28446687.effectivegatecpm.com/db/73/91/db7391edcda54695481a78d6831c495e.js";
    script.async = true;

    document.body.appendChild(script);
    bottomAdLoaded = true;
  }, []);

  return null;
};

export default BottomAd;
