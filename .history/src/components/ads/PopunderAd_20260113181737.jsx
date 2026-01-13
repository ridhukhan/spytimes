import { useEffect } from "react";

const PopUnderAd = () => {
  useEffect(() => {
    // prevent duplicate popunder load
    if (window.__exoPopLoaded) return;
    window.__exoPopLoaded = true;

    const script = document.createElement("script");
    script.type = "application/javascript";

    script.innerHTML = `
      (function() {
        var adConfig = {
          ads_host: "a.pemsrv.com",
          syndication_host: "s.pemsrv.com",
          idzone: 5827850,
          popup_fallback: false,
          popup_force: false,
          chrome_enabled: true,
          new_tab: false,
          frequency_period: 30,
          frequency_count: 1,
          trigger_method: 3,
          trigger_class: "",
          trigger_delay: 0,
          capping_enabled: true,
          tcf_enabled: true,
          only_inline: false
        };

        if (typeof popMagic !== "undefined") {
          popMagic.init(adConfig);
        } else {
          var s = document.createElement("script");
          s.src = "//a.pemsrv.com/popunder1000.js";
          s.async = true;
          document.body.appendChild(s);

          s.onload = function () {
            if (typeof popMagic !== "undefined") {
              popMagic.init(adConfig);
            }
          };
        }
      })();
    `;

    document.body.appendChild(script);
  }, []);

  return null; // popunder has no UI
};

export default PopUnderAd;
