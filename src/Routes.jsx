import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { createContext, useState } from "react"
// import SigninPage from "./Pages/SigninPage"
import { useContext } from "react"
import { MyContext } from "./App"
 
 
export default function RoutesHandle(){ 
  const { theme } = useContext(MyContext);

  return (
    <div className={`${theme ? 'bg-[#121212] shadow-md text-white' : 'bg-white text-black'} flex flex-col justify-between`}>
       
<Navbar/>

    <Outlet/>

    <Footer/>
     
    </div>
  )}

