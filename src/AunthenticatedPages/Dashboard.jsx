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

  return (
    <div  className={`${theme ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
      <AnimatePresence>
        {display && (
          <motion.div
            className="fixed  top-0 left-0 h-screen w-[60%] md:hidden bg-white shadow-md bg-opacity-100 z-10 transition-opacity duration-300 ease-in-out"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            <div onClick={() => setDisplay(false)} className='cursor-pointer md:hidden ml-auto  flex-end  w-fit p-4 text-black '>
              <FaTimes />
            </div>
     <div className='flex flex-col items-center justify-between gap-[100px] py-6'>
            <span>
     
            <h1 className="py-4 font-bold text-[20px] text-[#0C4284]">BLOGWEB</h1>
            </span>  <ul className="list-none flex flex-col gap-12 md:w-[100%]">
              <Link to="Home">
                <li className="flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]">
                  <FaHome /> Home
                </li>
              </Link>
              <li
                onClick={() => setHelp(true)}
                className="flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer"
              >
                <AiFillQuestionCircle /> Help
              </li>
              <li
                onClick={() => setSettings(true)}
                className="flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover.bg-[#DAE9FC] hover.border-[#DAE9FC] hover.text-[#0C4284] cursor-pointer"
              >
                <FaCog /> Settings
              </li>
              <li
                onClick={handleLogOut}
                className="flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover.bg-[#DAE9FC] hover.border-[#DAE9FC] hover.text-[#0C4284] cursor-pointer"
              >
                <FaSignOutAlt /> Log Out
              </li>
            </ul>
            <span className="text-sm text-[#0C4284] mt-auto">&copy; Copyright 2023.</span>
            </div> </motion.div>
        )}
      </AnimatePresence>

      <div >
        <div onClick={() => setDisplay(true)} className="md:hidden fixed top-4 left-4  text-black cursor-pointer">
          <FaBars />
        </div>
        <div className={`${theme ? 'bg-gray-950 text-white':''} md:block hidden md:w-[20%] md:left-0 absolute left-[20%]  md:w-20 bg-white border-[1px] border-gray-200 h-screen md:flex md:flex-col md:justify-between p-2 border-t-0 border-l-0 border-b-0 fixed z-10 items-center`}>
          <h1 className="py-4 font-bold text-[20px] text-[#0C4284]">BLOGWEB</h1>
          <ul className="list-none flex flex-col gap-12">
            <Link to="">
              <li className="w-[100%] px-20 flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]">
                <FaHome /> Home
              </li>
            </Link>
            <li
              onClick={() => setHelp(true)}
              className="flex w-[100%] px-20 flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer"
            >
              <AiFillQuestionCircle /> Help
            </li>
            <li
              onClick={() => setSettings(true)}
              className="flex flex-row items-center px-20 gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer"
            >
              <FaCog /> Settings
            </li>
            <li
              onClick={handleLogOut}
              className="flex flex-row px-20 items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer"
            >
              <FaSignOutAlt /> Log Out
            </li>
          </ul>
          <span className="text-sm text-[#0C4284] ">&copy; Copyright 2023.</span>
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
