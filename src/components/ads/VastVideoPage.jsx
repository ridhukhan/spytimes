import { useEffect, useRef } from "react";

const VastVideoAd = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // video.js CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://vjs.zencdn.net/8.6.7/video-js.css";
    document.head.appendChild(link);

    // video.js JS
    const scriptVideoJS = document.createElement("script");
    scriptVideoJS.src = "https://vjs.zencdn.net/8.6.7/video.min.js";
    scriptVideoJS.async = true;
    document.body.appendChild(scriptVideoJS);

    // videojs-vast-vpaid JS
    const scriptVast = document.createElement("script");
    scriptVast.src =
      "https://unpkg.com/videojs-vast-vpaid@latest/dist/videojs-vast-vpaid.min.js";
    scriptVast.async = true;
    document.body.appendChild(scriptVast);

    scriptVast.onload = () => {
      if (window.videojs && videoRef.current && !playerRef.current) {
        const player = (playerRef.current = window.videojs(videoRef.current, {
          controls: true,
          autoplay: true,
          preload: "auto",
          width: 640,
          height: 360,
        }));

        // VAST Ad setup
        player.vastClient({
          adTagUrl: "https://s.magsrv.com/v1/vast.php?idzone=5827876",
          playAdAlways: true,
        });
      }
    };

    return () => {
      if (playerRef.current) playerRef.current.dispose();
      document.head.removeChild(link);
      document.body.removeChild(scriptVideoJS);
      document.body.removeChild(scriptVast);
    };
  }, []);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-default-skin"></video>
      </div>
    </div>
  );
};

export default VastVideoAd;
