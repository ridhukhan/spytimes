import { useEffect } from "react";

const PopupAd = () => {
  useEffect(() => {
    const shown = sessionStorage.getItem("popup_ad_loaded");
    if (shown) return;

    sessionStorage.setItem("popup_ad_loaded", "true");

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
  }, []);

  return null;
};

export default PopupAd;