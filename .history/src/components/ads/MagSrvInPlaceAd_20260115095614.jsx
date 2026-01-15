import { useEffect, useRef } from "react";

const MagSrvInPlaceAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // স্ক্রিপ্ট create
    const script = document.createElement("script");
    script.src = "https://a.magsrv.com/ad-provider.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.AdProvider = window.AdProvider || [];
      if (adRef.current) {
        window.AdProvider.push({ serve: {} });
      }
    };

    return () => {
      // optional: cleanup করলে আবার load করতে হবে
      // document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <ins
        ref={adRef}
        className="eas6a97888e20"
        data-zoneid="5828560"
        style={{ display: "block", width: "100%", height: "250px" }}
      ></ins>
    </div>
  );
};

export default MagSrvInPlaceAd;
