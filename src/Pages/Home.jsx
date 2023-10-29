import { useContext } from "react";
import {MyContext} from '../Routes'
import {motion} from 'framer-motion'
const Home = () => {
    const {display}=useContext(MyContext)
    console.log(display);

    return (

        <div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className={`${display ? 'bg-black mt-0 w-[50%] fixed  top-0 left-0  h-full w-full bg-gray-900 bg-opacity-50 z-2 pointer-events-auto':' '} md:bg-white md:w-auto md:h-auto`}>
           
        </motion.div>



        
        </div>
      );
}
 
export default Home;