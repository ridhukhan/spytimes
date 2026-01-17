import React, { useState } from 'react'
import arhoimim from "/arohimim.jpeg"
import watchnow from "../../assets/watchnow.jpeg"
import downloadnnow from "../../assets/downloadnow.gif"
import AdBanner from '../../components/ads/AdBanner'
import AdEffective from '../../components/ads/AdEffective'
const NoakhaillaLinks = () => {
  const [clickedOnce,setClickedOnce]=useState(false)
  const ADS_LINK ="https://www.effectivegatecpm.com/b4s3z1g3h3?key=624d68387e04f583c66e77df9c6d18a7" 
  
  const DRIVE_LINK="https://drive.google.com/file/d/1g8_IfB920ryziCLUADRYtlMIwsoFzTwe/view?usp=drivesdk"

const handleImageClick=()=>{

  if (!clickedOnce){
    window.open(ADS_LINK,"_blank","noopener","noreferrer");
    setClickedOnce(true)
  }else{
    window.open(DRIVE_LINK,"_blank","noopener","noreferrer");

  }

}





  return (
    
    <div style={{marginTop:"20%"}}>
<h1 style={{textAlign:"center", backgroundColor:"red", width:"500px"}}>আরোহী মিম এর ভাইরাল লিঁক</h1>
      <AdBanner  height={250} width={300}/>

<img  onClick={handleImageClick}   style={{cursor:"pointer", marginLeft:"5%",height:"300px", width:"80%", justifyContent:"center"}} src={arhoimim} alt="arohi mim link" />

<div  style={{}}>
  <img onClick={handleImageClick} style={{cursor:"pointer"}} src={watchnow} alt="watchnow" />
  <img onClick={handleImageClick} style={{cursor:"pointer"}} src={downloadnnow} alt="download now" />
</div>
<AdBanner height={250} width={300}/>



<AdEffective/>
    </div>
  )
}

export default NoakhaillaLinks