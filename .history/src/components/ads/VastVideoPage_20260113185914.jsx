import React from "react";
import VastPlayer from "vast-player-react";

const PageVastAd = () => {
  const adStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto",
    width: "640px",  // ভিডিও এর width
    height: "360px", // ভিডিও এর height
  };

  return (
    <div style={adStyle}>
      <VastPlayer
        vastTag="https://s.magsrv.com/v1/vast.php?idzone=5827876"
        width={640}
        height={360}
        autoplay={true} // Auto play
      />
    </div>
  );
};

export default PageVastAd;
