import { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MyContext } from '../Routes'
const Navbar = () => {
    const {display,setDisplay,isOpen,setIsOpen}=useContext(MyContext)
    const displaySlide = () => {
        setDisplay(true);
        setIsOpen(true);
      };
    
      const changeDisplay = () => {
        setDisplay(false); 
        setIsOpen(false); 
      };

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-10 p-4 bg-white shadow-sm">
        <h1 className="font-bold text-[20px]">BLOG</h1>

        <ul
          className="list-none md:relative hidden md:h-auto border-2 p-2 text-center text-[20px] md:border-none md:w-auto md:text-md md:flex md:flex-row gap-4 md:block"
        >
          <li className="font-semibold">Home</li>
          <li className="font-semibold">Business</li>
          <li className="font-semibold">Entertainment</li>
          <li className="font-semibold">Sports</li>
        </ul>

        {display && (
          <motion.ul
            initial={{ x: -100, opacity: 0 }}
            animate={isOpen ? { x: 1, opacity: 1 } : { opacity: 0, x: -100 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="shadow-sm absolute z-10 w-[50%] h-[100vh] flex flex-col items-center border-2 list-none top-0 left-0 bg-white border-white md:hidden"
          >
            <li className="md:hidden ml-auto p-4">
              <FaTimes onClick={() => changeDisplay()} className="" />
            </li>
            <li className="font-semibold">Home</li>
            <li className="font-semibold">Business</li>
            <li className="font-semibold">Entertainment</li>
            <li className="font-semibold">Sports</li>
          </motion.ul>
        )}
        <FaBars className="block md:hidden" onClick={() => displaySlide()} />
      </div>
    </div>
  );
};

export default Navbar;
