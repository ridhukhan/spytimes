import { useEffect } from "react";

const BottomAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pl28446687.effectivegatecpm.com/db/73/91/db7391edcda54695481a78d6831c495e.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Social bar নিজে থেকেই bottom এ show হবে
};

export default BottomAd;
