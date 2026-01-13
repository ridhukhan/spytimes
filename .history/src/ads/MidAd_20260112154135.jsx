import { useEffect } from "react";

const MidAd = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://pl28446687.effectivegatecpm.com/db/73/91/db7391edcda54695481a78d6831c495e.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return <div style={{ margin: "30px 0", textAlign: "center" }} />;
};

export default MidAd;

