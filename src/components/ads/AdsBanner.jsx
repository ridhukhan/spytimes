import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    // স্ক্রিপ্ট তৈরি করা
    const script = document.createElement("script");
    script.src = "https://a.magsrv.com/ad-provider.js";
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

  return (
    <div>
      <ins className="eas6a97888e14" data-zoneid="5827854"></ins>
    </div>
  );
};

export default AdBanner;
