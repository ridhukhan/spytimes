import { useEffect } from "react";

const TopAd = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://pl28443803.effectivegatecpm.com/1b/d9/87/1bd987ff830d9e3e8ebb0abed211b9af.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return <div style={{ margin: "20px 0", textAlign: "center" }} />;
};

export default TopAd;