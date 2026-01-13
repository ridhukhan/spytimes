import { useEffect } from "react";

const FullPageAdBanner = () => {
  useEffect(() => {
    // স্ক্রিপ্ট তৈরি করা
    const script = document.createElement("script");
    script.src = "https://a.pemsrv.com/ad-provider.js";
    script.async = true;
    script.type = "application/javascript";
    document.body.appendChild(script);

    // স্ক্রিপ্ট লোড হয়ে গেলে AdProvider push করা
    script.onload = () => {
      window.AdProvider = window.AdProvider || [];
      window.AdProvider.push({ serve: {} });
    };

    // ক্লিনআপ
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Full page অ্যাড স্টাইল
  const adStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  return (
    <div style={adStyle}>
      <ins className="eas6a97888e33" data-zoneid="5827872"></ins>
    </div>
  );
};

export default FullPageAdBanner;
