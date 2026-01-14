import { useEffect, useState, useRef } from "react";
import { ImCross } from "react-icons/im";

export const FullPageAdBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const adRef = useRef(null);

  useEffect(() => {
    // যদি আগেই script থাকে তাহলে আবার load করবো না
    if (!window.__adProviderLoaded) {
      const script = document.createElement("script");
      script.src = "https://a.pemsrv.com/ad-provider.js";
      script.async = true;
      script.type = "application/javascript";

      script.onload = () => {
        window.__adProviderLoaded = true;

        // একটু delay দিয়ে serve call
        setTimeout(() => {
          if (window.AdProvider && adRef.current) {
            window.AdProvider.push({ serve: {} });
          }
        }, 300);
      };

      document.body.appendChild(script);
    } else {
      // script আগেই থাকলে শুধু serve call
      setTimeout(() => {
        if (window.AdProvider && adRef.current) {
          window.AdProvider.push({ serve: {} });
        }
      }, 300);
    }
  }, []);

  if (!isVisible) return null;

  const popupStyle = {
    position: "fixed",
    top: "40%",
    left: "10px",
    width: "350px",
    height: "350px",
    backgroundColor: "#000",
    zIndex: 9999,
    padding: "5px",
    borderRadius: "8px",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "5px",
    right: "5px",
    cursor: "pointer",
    backgroundColor: "#fff",
    padding: "4px",
    borderRadius: "4px",
    zIndex: 10000,
  };

  return (
    <div style={popupStyle}>
      <span style={closeButtonStyle} onClick={() => setIsVisible(false)}>
        <ImCross size={12} />
      </span>

      <ins
        ref={adRef}
        className="eas6a97888e33"
        data-zoneid="5827872"
        style={{ display: "block", width: "100%", height: "100%" }}
      ></ins>
    </div>
  );
};
