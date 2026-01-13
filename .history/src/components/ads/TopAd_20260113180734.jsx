import { useEffect } from "react";

const TopBannerAd = () => {
  useEffect(() => {
    // Prevent duplicate script load
    if (!document.querySelector('script[src="https://a.magsrv.com/ad-provider.js"]')) {
      const script = document.createElement("script");
      script.src = "https://a.magsrv.com/ad-provider.js";
      script.async = true;
      script.type = "application/javascript";
      document.body.appendChild(script);
    }

    // Push ad after script load
    window.AdProvider = window.AdProvider || [];
    window.AdProvider.push({ serve: {} });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "10px 0",
      }}
    >
      <ins
        className="eas6a97888e10"
        data-zoneid="5827828"
        style={{ display: "block" }}
      ></ins>
    </div>
  );
};

export default TopBannerAd;
