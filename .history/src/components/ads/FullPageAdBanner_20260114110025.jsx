import { useEffect, useState } from "react";

const FullPageAdBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // স্ক্রিপ্ট তৈরি করা
    const script = document.createElement("script");
    script.src = "https://a.pemsrv.com/ad-provider.js";
    script.async = true;
    script.type = "application/javascript";
    document.body.appendChild(script);

    // স্ক্রিপ্ট লোড হলে push করা
    script.onload = () => {
      window.AdProvider = window.AdProvider || [];
      window.AdProvider.push({ serve: {} });
    };

    // ক্লিনআপ
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isVisible) return null; // cross click করলে hide হবে

  // popup style
  const popupStyle = {
    position: "fixed",
    top:"7%",
    width: "500px",
    height: "400px",
    backgroundColor: "#000",
    border: "1px solid #ccc",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: 9999,
    padding: "5px",
    borderRadius: "8px",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "5px",
    right: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  };

  return (
    <div style={popupStyle}>
      <span style={closeButtonStyle} onClick={() => setIsVisible(false)}>
        *
      </span>
      <ins className="eas6a97888e33" data-zoneid="5827872"></ins>
    </div>
  );
};

export default FullPageAdBanner;
