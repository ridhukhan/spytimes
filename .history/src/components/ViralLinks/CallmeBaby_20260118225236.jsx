import React, { useState } from 'react'
import baby1 from "/baby1.jpeg"
import baby2 from "/baby2.jpeg"
import baby3 from "/baby3.jpeg"



import watchnow from "../../assets/watchnow.jpeg"
import downloadnnow from "../../assets/downloadnow.gif"
import AdBanner from '../../components/ads/AdBanner'
import AdEffective from '../../components/ads/AdEffective'
const CallmeBaby = () => {
  const [clickedOnce,setClickedOnce]=useState(false)
  const ADS_LINK ="https://drive.google.com/drive/folders/1ieIYpQIGoxnEzylMCovGKZRRNPTNmiSu" 
  
  const DRIVE_LINK="https://drive.google.com/drive/folders/1cqKR4dROYWqY8lZUmfIE7PdcVRTe-4id"

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
<h1 style={{textAlign:"center", backgroundColor:"red", width:"500px"}}>Taka peye naki bf Re bule gese</h1>
      <AdBanner  height={250} width={300}/>

<img  onClick={handleImageClick} 
  style={{cursor:"pointer", marginLeft:"5%",height:"300px", width:"80%", justifyContent:"center"}}
   src={baby1} alt="arohi mim link" />
   <img  onClick={handleImageClick} 
  style={{cursor:"pointer", marginLeft:"5%",height:"300px", width:"80%", justifyContent:"center"}}
   src={noakhailla2} alt="arohi mim link" />

<div  style={{}}>
  <img onClick={handleImageClick} style={{cursor:"pointer"}} src={watchnow} alt="watchnow" />
  <img onClick={handleImageClick} style={{cursor:"pointer"}} src={downloadnnow} alt="download now" />
</div>
<AdBanner height={250} width={300}/>



<AdEffective/>
    </div>
  )
}

export default CallmeBaby