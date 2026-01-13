import { useEffect } from "react";

const BottomAd = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://pl28446684.effectivegatecpm.com/a6e44a23f0c48ab9d7bcb1f9bb309097/invoke.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div
      id="container-a6e44a23f0c48ab9d7bcb1f9bb309097"
      style={{ margin: "30px 0", textAlign: "center" }}
    />
  );
};

export default BottomAd;