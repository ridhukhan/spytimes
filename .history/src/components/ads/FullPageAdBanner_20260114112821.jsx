import { useEffect } from "react";

const FullPageAdBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://a.pemsrv.com/ad-provider.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      window.AdProvider = window.AdProvider || [];
      window.AdProvider.push({
        serve: {
          zoneid: 5827872,
        },
      });
    };
  }, []);

  return null; // UI লাগবে না
};

export default FullPageAdBanner;
