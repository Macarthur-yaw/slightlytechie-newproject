import { useContext, useState } from "react";

import {motion} from 'framer-motion'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
const Home = () => {
    const {display,theme}=useContext(MyContext)
    const[info,setInfo]=useState([])
    console.log(display);
    useEffect(() => {
      const storedInfo = localStorage.getItem("items");
      if (storedInfo) {
        const getInfo = JSON.parse(storedInfo);
        setInfo(Array.isArray(getInfo) ? getInfo : []);
      }
   
    }, []);
    console.log(info)
    return (

        <div >
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className={`${display ? 'bg-black mt-0 w-[50%] fixed  top-0 left-0  h-full w-full bg-gray-900 bg-opacity-50 z-2 pointer-events-auto':' '} md:bg-white md:w-auto md:h-auto`}>
           
        </motion.div>


<div className="flex flex-col gap-4 p-2 h-screen">
  <h1 className="text-md px-6 py-4 hover:underline w-fit cursor-pointer">
    RECENT ARTICLES
  </h1>
{info.map((content, index) => (
  <div                 key={index}
  
  >
            <Link to={`/next/${index}`}>    <div
            className="w-[100%]  hover:shadow-lg transition-shadow duration-300 ease-in-out justify-between mx-auto  flex flex-col   cursor-pointer p-2"                >
                  <h1 className={`px-4 py-2 ${theme ? 'text-gray-100':'text-black' } `}>{content.text}</h1>
                  {/* <td className="px-4 py-2 text-gray-500 ">{content.content}</td> */}
                  <h2 className="px-4 py-2 text-gray-600 text-sm">{content.source}</h2>
                </div>
                </Link>
                </div>
              ))}
     
</div>
        
        </div>
      );
}
 
export default Home;