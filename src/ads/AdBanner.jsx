import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.highperformanceformat.com/b98d336197bb10ad2755087bdef3a0b5/invoke.js";
    script.async = true;

    document.getElementById("adsterra-banner").appendChild(script);
  }, []);

  return (
    <div style={{ width: "300px", height: "250px" }}>
      <div id="adsterra-banner"></div>
    </div>
  );
};

export default AdBanner;