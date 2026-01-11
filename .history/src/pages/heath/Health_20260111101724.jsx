import React from 'react'
import diabetes from "../../assets/diabetes01.png"
import { Link } from 'react-router-dom'
const Health = () => {
  return (
    <div>
<div style={{display:"flex"}}>
<img src={diabetes} alt="Healthy lifestyle tips for supporting blood suger" />
<Link to={"/blood-sugar-natural-tips"}><h2 >Managing Blood Sugar: Lifestyle Tips & Resources</h2></Link>
</div>



    </div>
  )
}

export default Health