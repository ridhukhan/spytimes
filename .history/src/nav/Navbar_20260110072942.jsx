import React from 'react'
import "./Navbar.css"
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";
import logo from "../assets/download.jpeg"
import { useState } from 'react';
const Navbar = () => {
    const [openmenu,setOpenmenu]=useState(false)
  return (
    <div style={{position:"fixed",backgroundColor:"red",display:"flex",
    width:"100%", height:"80px", top:"0", zIndex:"1000", boxShadow:"2px 5px 14px black"}}>
<img src={logo} alt="logo" style={{width:"80px", height:"80px", borderRadius:"100%"}}/>
<h1 style={{marginTop:"2%", marginLeft:"7%",}}>SPAY TIMES</h1>
<TiThMenu  onClick={()=>setOpenmenu(!openmenu)}  style={{width:"50px",height:"30px", marginTop:"5%", }}/>
   
   {openmenu? <div style={{display:"grid",position:"absolute",width:"90%",background:"black", height:"600px", zIndex:"999", marginTop:"10%", borderRadius:"19px", right:"0"}}>
<ImCross onClick={()=>setOpenmenu(null)} style={{ color:"red", left:"0", justifyContent:"flex-start", width:"50px", height:"30px"}}/>
  
  <ul>


    <li>Home</li>
    <li>USA</li>
    <li>UK</li>
    <li>ASIA</li>
    <li>HOLLYWOOD</li>
    <li style={{color:"blue"}}>Privecy Policy</li>
    <li style={{color:"blue"}}>Terms &  condition</li>

  </ul>
  
  
  
  
  
  
  
  
  
  
   </div>: null}
    </div>
  )
}


export default Navbar