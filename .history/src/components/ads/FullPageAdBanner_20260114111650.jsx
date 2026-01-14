import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

 export const FullPageAdBanner = () => {
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
    top: "40%",
    left: "0",
    width: "350px",
    height: "350px",
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
    backgroundColor:"#fff",
    width:"20px"
  };

  return (
    <div style={popupStyle}>
      <span style={closeButtonStyle} onClick={() => setIsVisible(false)}>
        <ImCross />
      </span>
      <ins className="eas6a97888e33" data-zoneid="5827872"></ins>
    </div>
  );
};

