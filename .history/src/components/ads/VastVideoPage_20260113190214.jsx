import { useEffect, useRef } from "react";

const VastVideoAd = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // video.js CDN
    const script1 = document.createElement("script");
    script1.src = "https://vjs.zencdn.net/8.6.1/video.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    // contrib-ads plugin CDN
    const script2 = document.createElement("script");
    script2.src = "https://unpkg.com/videojs-contrib-ads@6.9.0/dist/videojs-contrib-ads.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    // VAST plugin CDN
    const script3 = document.createElement("script");
    script3.src = "https://unpkg.com/videojs-vast-vpaid@latest/dist/videojs-vast-vpaid.min.js";
    script3.async = true;
    document.body.appendChild(script3);

    script3.onload = () => {
      if (!playerRef.current && window.videojs) {
        const player = (playerRef.current = window.videojs(videoRef.current, {
          controls: true,
          autoplay: true,
          preload: "auto",
          width: 640,
          height: 360,
        }));

        player.vastClient({
          adTagUrl: "https://s.magsrv.com/v1/vast.php?idzone=5827876",
          playAdAlways: true,
        });
      }
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-default-skin" />
      </div>
    </div>
  );
};

export default VastVideoAd;
