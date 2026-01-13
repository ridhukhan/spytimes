import React from "react";
import VastPlayer from "vast-player-react";

const GlobalVastAd = () => {
  const adStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "300px",
    height: "250px",
    zIndex: 9999,
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#000",
  };

  return (
    <div style={adStyle}>
      <VastPlayer
        vastTag="https://s.magsrv.com/v1/vast.php?idzone=5827876"
        width={300}
        height={250}
        autoplay={true} // Auto play
      />
    </div>
  );
};

export default GlobalVastAd;
