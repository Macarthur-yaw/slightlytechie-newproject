import { Outlet } from "react-router-dom"
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
    <Outlet/>

     <Footer/>
     </MyContext.Provider>
      </>
  )}

export {MyContext}
