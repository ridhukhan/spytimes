import { useEffect } from "react";

const TopAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pl2844xxxx.js"; // ad network script
    script.async = true;

    const container = document.getElementById("top-ad");
    if (container && container.children.length === 0) {
      container.appendChild(script);
    }
  }, []);

  return <div id="top-ad" style={{ minHeight: "250px", margin: "20px 0" }} />;
};

export default TopAd;
