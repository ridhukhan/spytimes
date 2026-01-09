import React from 'react'
import logo from "../assets/download.jpeg"
const Navbar = () => {
  return (
    <div style={{backgroundColor:"red",
    textAlign:"center", width:"100%", height:"80px", top:"0", zIndex:"1000", boxShadow:"2px 5px 14px black"}}>
<img src={logo} alt="logo" style={{width:"50px", height:"50px", borderRadius:"full"}}/>
<h1 style={{marginTop:"2%"}}>SPAY TIMES</h1>

    </div>
  )
}

export default Navbar