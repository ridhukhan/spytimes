import { Route, Routes } from "react-router-dom"
import Navbar from "./nav/Navbar"
import Home from "./pages/home/Home"
import PrivecyPolicy from "./components/policy/PrivecyPolicy"
import Terms from "./components/policy/Terms"
import TrendingDetails from "./components/trending/TrendingDetails"



function App() {

  return (
    <div>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route  path="/privecypolicy" element={<PrivecyPolicy/>}/>
    <Route  path="/Terms" element={<Terms/>}/> 
    <Route  path="/Trendingdetails" element={<TrendingDetails/>}/> 
    <Route path="/blood-sugar-natural-tips" element={<Home/>}/>

   </Routes>
    </div>
  )
}

export default App
