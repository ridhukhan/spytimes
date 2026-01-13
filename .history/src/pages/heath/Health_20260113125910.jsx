import React from 'react'
import diabetes from "../../assets/diabetes01.png"
import alergy from "../../assets/Allergy.jpeg"
import weightlose from "../../assets/weightlose.jpeg"

import { Link } from 'react-router-dom'
import { BottomAd } from '../../components/ads/BottomAd'
import { TopAd } from '../../components/ads/TopAd'
const Health = () => {
  return (
    <div style={{marginTop:"25%"}}>
      <TopAd/>
<div style={{display:"flex", boxShadow:"4px 7px 15px black", border:"1px solid black"}}>
<img src={diabetes} alt="Healthy lifestyle tips for supporting blood suger"  style={{width:"300px", height:"150px"}}/>
<Link to={"/blood-sugar-natural-tips"}><h2 >Managing Blood Sugar: Lifestyle Tips & Resources</h2></Link>
</div>
<br />
<div style={{display:"flex", boxShadow:"4px 7px 15px black", border:"1px solid black"}}>
<img src={alergy} alt="Natural ways to support allergy relief"  style={{width:"300px", height:"150px"}}/>
<Link to={"/allergy"}><h2 >Managing Skin Allergys natural way</h2></Link>
</div>
<div style={{display:"flex", boxShadow:"4px 7px 15px black", border:"1px solid black"}}>
<img src={weightlose} alt="Natural ways to support Weight Lose"  style={{width:"300px", height:"150px"}}/>
<Link to={"/weightlose"}><h2 >Simple and Effective Ways to Lose Weight <br /> Naturally for Men and Women</h2></Link>
</div>
<BottomAd/>
    </div>
  )
}

export default Health