import { Route, Routes } from "react-router-dom"
import Navbar from "./nav/Navbar"
import Home from "./pages/home/Home"
import PrivecyPolicy from "./components/policy/PrivecyPolicy"
import Terms from "./components/policy/Terms"
import TrendingDetails from "./components/trending/TrendingDetails"
import Dieabeties from "./pages/heath/Dieabeties"
import Health from "./pages/heath/Health"
import Allergy from "./pages/heath/Allergy"



function App() {

  return (
    <div>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route  path="/privecypolicy" element={<PrivecyPolicy/>}/>
    <Route  path="/Terms" element={<Terms/>}/> 
    <Route  path="/Trendingdetails" element={<TrendingDetails/>}/> 
    <Route path="/blood-sugar-natural-tips" element={<Dieabeties/>}/>
<Route path="/health" element={<Health/>}/>
<Route path="/allergy" element={<Allergy/>}/>

   </Routes>
    </div>
  )
}

export default App
