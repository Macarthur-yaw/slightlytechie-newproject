import { FaHome, FaSignOutAlt, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import DashboardMain from './DashboardMain';
import DashboardSettings from './DashboardSettings';
import useAuthenticated from './useAuthenticated';
import { useEffect } from 'react';
import { MyContext } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
  closed: {
    x: '-100%',
  },
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(false);
  const [help, setHelp] = useState(false);
  const [settings, setSettings] = useState(false);
  const auth = useAuthenticated();
  const [display, setDisplay] = useState(false);
  const { theme, setTheme } = useContext(MyContext);

  useEffect(() => {
    if (!auth) {
      navigate('/signin');
      console.log('User is not authenticated');
    }
  });

  function showPost() {
    setPost(true);
  }

  function closeHelp() {
    setHelp(false);
  }

  function closeSettings() {
    setSettings(false);
  }

  const handleLogOut = () => {
    sessionStorage.setItem('isLoggedIn', false);
    navigate('/');
    sessionStorage.clear();
  };
  function closeDisplay(){
    setDisplay(false)
  }
  function handlePageClick(e){
    e.stopPropagation()
  }
  function showDisplay(e){
    setDisplay(true)
e.stopPropagation();

  }

  return (
    <div  className={`${theme ? 'fixed top-0 left-0 h-screen w-screen  bg-gray-100 z-10 ':' '} `}>
      <div className=''>
      <AnimatePresence>
        {display && (
          <motion.div
          onClick={handlePageClick}
            className={`${theme ? 'absolute z-10 border-0':'absolute z-10'} h-screen w-[60%] md:hidden bg-white shadow-md bg-opacity-100  transition-opacity duration-300 ease-in-out`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
      <div onClick={closeDisplay} className=''></div>
            <div className={`${theme ? 'bg-[#121212] h-screen text-white z-10 ':''}`} >
            <div onClick={closeDisplay} className={`cursor-pointer md:hidden ml-auto  flex-end  w-fit p-4  ${theme ? 'text-white':'text-black'} `}>
              <FaTimes />
            </div>
     <div className='flex flex-col items-center justify-between gap-[100px] py-6'>
            <span>
     
            <h1 className={`py-4 font-bold text-[20px] ${theme ? 'text-gray-300':'text-[#0C4284]'} `}>BLOGWEB</h1>
            </span>  <ul className="list-none flex flex-col gap-12 md:w-[100%]">
              <Link to="">
                <li className={`flex flex-row items-center gap-2 p-2 rounded-xl  ${theme ? 'text-gray-300 ':'text-[#0C4284]'} text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]`}>
                  <FaHome /> Home
                </li>
              </Link>
              <li
                onClick={() => setHelp(true)}
                className={`flex flex-row items-center gap-2 p-2 rounded-xl  ${theme ? 'text-gray-300 ':'text-[#0C4284]'} text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]`}
              >
                <AiFillQuestionCircle /> Help
              </li>
              <li
                onClick={() => setSettings(true)}
                className={`flex flex-row items-center gap-2 p-2 rounded-xl  ${theme ? 'text-gray-300 ':'text-[#0C4284]'} text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]`}
              >
                <FaCog /> Settings
              </li>
              <li
                onClick={handleLogOut}
                className={`flex flex-row items-center gap-2 p-2 rounded-xl  ${theme ? 'text-gray-300 ':'text-[#0C4284]'} text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]`}
              >
                <FaSignOutAlt /> Log Out
              </li>
            </ul>
            <span className={`text-sm ${theme ? 'text-gray-300':'text-[#0C4284]'}  mt-auto`}>&copy; Copyright 2023.</span>
            </div>     </div> </motion.div>
        )}
      </AnimatePresence>
      </div>
      <div className={`${theme ? 'bg-black text-white':''}`} >
        <div onClick={showDisplay} className={`${theme ? 'text-white z-0': 'text-black '} ${display ? 'hidden':''} md:hidden fixed top-4 left-4 z-10  text-black cursor-pointer text-[20px]`}>
          <FaBars className='' />
        </div>
        <div className={`${theme ? 'bg-[#121212] text-white border-[0.1px] border-gray-300':'bg-white border-[1px] border-gray-200'} md:block hidden md:w-[20%] md:left-0  left-[20%]  md:w-20   h-[100%] md:flex md:flex-col md:justify-between p-2 border-t-0 border-l-0 border-b-0 fixed z-10 items-center`}>
          <h1 className={`${theme ? 'text-gray-300':'text-[#0C4284]'} py-4 font-bold text-[20px] `}>BLOGWEB</h1>
          <ul className="list-none flex flex-col gap-12">
            <Link>
              <li className={`flex px-20 flex-row items-center gap-2 p-2 rounded-xl  ${theme ? 'text-gray-300 ':'text-[#0C4284]'} text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]`}>
                <FaHome /> Home
              </li>
            </Link>
            <li
              onClick={() => setHelp(true)}
              className={`flex px-20 flex-row items-center gap-2 p-2 rounded-xl  ${theme ? 'text-gray-300 ':'text-[#0C4284]'} text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]`}
            >
              <AiFillQuestionCircle /> Help
            </li>
            <li
              onClick={() => setSettings(true)}
              className={`flex px-20 flex-row items-center gap-2 p-2 rounded-xl  ${theme ? 'text-gray-300 ':'text-[#0C4284]'} text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]`}       >
              <FaCog /> Settings
            </li>
            <li
              onClick={handleLogOut}
              className={`flex px-20 flex-row items-center gap-2 p-2 rounded-xl  ${theme ? 'text-gray-300 ':'text-[#0C4284]'} text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]`}  >
              <FaSignOutAlt /> Log Out
            </li>
          </ul>
          <span className={`${theme ? 'text-gray-300':'text-[#0C4284]'} text-sm  `}>&copy; Copyright 2023.</span>
        </div>
      </div>

      <div className={`${theme ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
        <Outlet />
      </div>

      {help && (
        <div
          onClick={() => closeHelp()}
          className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out"
        >
          <DashboardMain valueHelp={closeHelp} />
        </div>
      )}

      {settings && (
        <div
          onClick={closeSettings}
          className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out"
        >
          <DashboardSettings valueSettings={closeSettings} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
