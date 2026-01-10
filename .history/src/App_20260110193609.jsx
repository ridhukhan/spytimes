import { Route, Routes } from "react-router-dom"
import Navbar from "./nav/Navbar"
import Home from "./pages/home/Home"
import PrivecyPolicy from "./components/policy/policy/PrivecyPolicy"



function App() {

  return (
    <div>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route  path="/privecy policy" element={<PrivecyPolicy/>}/> 
   </Routes>
    </div>
  )
}

export default App
