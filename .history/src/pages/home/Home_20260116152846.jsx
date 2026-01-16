import React from 'react'
import arhoimim from "../../assets/arohimim.jpeg"
import watchnow from "../../assets/watchnow.jpeg"
import downloadnnow from "../../assets/downloadnow.gif"
const Home = () => {
  return (
    <div style={{marginTop:"20%"}}>
<h1 style={{textAlign:"center"}}>আরোহী মিম এর ভাইরাল লিঁক</h1>

<img style={{ marginLeft:"5%",height:"300px", width:"80%", justifyContent:"center"}} src={arhoimim} alt="arohi mim link" />

<div style={{}}>
  <img src={watchnow} alt="watchnow" />
  <img src={downloadnnow} alt="download now" />
</div>





    </div>
  )
}

export default Home