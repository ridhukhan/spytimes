import React, { useState } from 'react'
import arhoimim from "../../assets/arohimim.jpeg"
import watchnow from "../../assets/watchnow.jpeg"
import downloadnnow from "../../assets/downloadnow.gif"
const Home = () => {
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

<img style={{ marginLeft:"5%",height:"300px", width:"80%", justifyContent:"center"}} src={arhoimim} alt="arohi mim link" />

<div  style={{}}>
  <img onClick={handleImageClick} style={{cursor:"pointer"}} src={watchnow} alt="watchnow" />
  <img src={downloadnnow} alt="download now" />
</div>





    </div>
  )
}

export default Home