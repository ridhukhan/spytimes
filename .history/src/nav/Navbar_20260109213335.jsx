import React from 'react'
import { TiThMenu } from "react-icons/ti";
import logo from "../assets/download.jpeg"
const Navbar = () => {
  return (
    <div style={{backgroundColor:"red",display:"flex",
    width:"100%", height:"80px", top:"0", zIndex:"1000", boxShadow:"2px 5px 14px black"}}>
<img src={logo} alt="logo" style={{width:"90px", height:"80px", borderRadius:"100%"}}/>
<h1 style={{marginTop:"2%", marginLeft:"7%",}}>SPAY TIMES</h1>
<TiThMenu style={{width:"20px", marginTop:"5%"}}/>
    </div>
  )
}

export default Navbar