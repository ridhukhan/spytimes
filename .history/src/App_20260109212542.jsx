import { Route, Routes } from "react-router-dom"
import Navbar from "./nav/Navbar"
import Home from "./pages/home/Home"



function App() {

  return (
    <div>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
    </div>
  )
}

export default App
