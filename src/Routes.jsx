import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Business from "./Pages/Business"
import Entertainment from "./Pages/Entertainment"
import Sports from "./Pages/Sports"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { createContext, useState } from "react"
// import SigninPage from "./Pages/SigninPage"

const MyContext =createContext();

 
 
export default function RoutesHandle(){  
    const [display, setDisplay] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
  <MyContext.Provider value={{display,isOpen,setDisplay,setIsOpen}}>
       
<Navbar/>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/business" element={<Business/>}/>
      <Route path="/entertainment" element={<Entertainment/>}/>
      <Route path="/sports" element={<Sports/>}/>
      
      
     </Routes>

     <Footer/>
     </MyContext.Provider>
      </>
  )}

export {MyContext}
