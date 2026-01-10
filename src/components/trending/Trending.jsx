import React from 'react'
import { Link } from 'react-router-dom'
import donaldtrump from "../../assets/donaldtrump.jpeg"
import Popander from '../../ads/Popander'
const Trending = () => {
  return (
    <div style={{display:"flex", marginTop:"5%", border:"1px solid black", margin:"5px", boxShadow:"4px 7px 10px black"}}>
<Popander/>
<img src={donaldtrump} alt="donaldtrump" style={{width:"400px", height:"150px"}}/>
<Link to={"/Trendingdetails"}><h2>Trump eyes Greenland as a move to counter Russia and China.</h2></Link>
    </div>
  )
}

export default Trending