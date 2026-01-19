import React, { useState } from 'react'
import baby1 from "/baby1.jpeg"
import baby2 from "/baby2.jpeg"
import baby3 from "/baby3.jpeg"



import watchnow from "../../assets/watchnow.jpeg"
import callme from "../../assets/callme.png"
import AdBanner from '../../components/ads/AdBanner'
import AdEffective from '../../components/ads/AdEffective'
import AdIframe from '../ads/ExoclicBanner'
const CallmeBaby = () => {
  const [clickedOnce,setClickedOnce]=useState(false)
  const ADS_LINK ="https://www.effectivegatecpm.com/nwt0zcnv?key=462dbf50e87132499a3b995de610ce40" 
  
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
<h1 style={{textAlign:"center", backgroundColor:"red", width:"500px"}}>Please Call Me.. i am waiting for you please call me </h1>
      <AdBanner  height={250} width={300}/>

<img  onClick={handleImageClick} 
  style={{cursor:"pointer", marginLeft:"5%",height:"300px", width:"80%", justifyContent:"center"}}
   src={baby1} alt="see my body" />
 
<div  style={{display:"flex", cursor:"pointer", width:"100%"}}>
  <img onClick={handleImageClick} style={{cursor:"pointer", width:"30%", height:"100px"}} src={callme} alt="call me" />
  <img onClick={handleImageClick} style={{cursor:"pointer", width:"30%", height:"100px"}} src={watchnow} alt="wath meee" />

</div>
<AdBanner height={250} width={300}/>

  <img  onClick={handleImageClick} 
  style={{cursor:"pointer", marginLeft:"5%",height:"300px", width:"80%", justifyContent:"center"}}
   src={baby2} alt="watch my first video" />

<AdIframe/>
  <img  onClick={handleImageClick} 
  style={{cursor:"pointer", marginLeft:"5%",height:"300px", width:"80%", justifyContent:"center"}}
   src={baby3} alt="watch my 2nd video" />


<AdEffective/>
    </div>
  )
}

export default CallmeBaby