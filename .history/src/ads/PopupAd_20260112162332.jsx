import { useEffect } from "react";

const PopupAd = () => {
  useEffect(() => {
    if (sessionStorage.getItem("popup_loaded")) return;
    sessionStorage.setItem("popup_loaded", "true");

    const loadAd = () => {
      try {
        window.atOptions = {
          key: "b98d336197bb10ad2755087bdef3a0b5",
          format: "iframe",
          height: 250,
          width: 300,
          params: {},
        };

        const s = document.createElement("script");
        s.src =
          "https://www.highperformanceformat.com/b98d336197bb10ad2755087bdef3a0b5/invoke.js";
        s.async = true;
        document.body.appendChild(s);
      } catch (error) {
        console.log("Popup ad blocked",error.message);
      }
    };

    const timer = setTimeout(loadAd, 8000); // 8 sec delay
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default PopupAd;
