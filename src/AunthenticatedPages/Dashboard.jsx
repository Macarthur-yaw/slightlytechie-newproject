import { FaHome,  FaSignOutAlt, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { createContext,  useState } from 'react';
// import NewPage from './NewPage';
import DashboardMain from './DashboardMain';
import DashboardSettings from './DashboardSettings';
import useAuthenticated from './useAuthenticated';
import { useEffect } from 'react';

// export const displayContext=createContext();

const Dashboard = () => {
  // const divRef = useRef(null);
  const navigate = useNavigate();
  const [post, setPost] = useState(false);
  const [help, setHelp] = useState(false);
  const [settings, setSettings] = useState(false);
  const auth = useAuthenticated()
  const[display,setDisplay]=useState(false)
// const[info,setInfo]=useState([])
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
  }


  
  return (
    <div className={`${display ? 'fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out': ''}`}>
      <div onClick={()=>setDisplay(true)} className={`${display ? 'hidden':'block'} p-2 md:hidden border-2 rounded-full w-fit border-white hover:bg-gray-200 cursor-pointer`}>
        <FaBars/>
      </div>
      <div id="verticalBar" className={`${display ? 'block absolute':'hidden'} md:block bg-white  border-[1px] border-gray-200 w-[50%] md:w-[20%] h-screen flex flex-col justify-center  justify-between p-2 border-t-0 border-l-0 border-b-0 fixed z-2 items-center`}>
      
      {display && ( <div onClick={()=>setDisplay(false)} className='ml-auto'> <FaTimes/></div>)}

        <h1 className='py-4 font-bold text-[20px] text-[#0C4284]'>
          BLOGWEB
        </h1>

        <ul className='list-none flex flex-col gap-12 w-[100%]'>
          <Link to="Home">
            <li className='flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]'>
              <FaHome /> Home
            </li>
          </Link>

          <li onClick={() => setHelp(true)} className='flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer'>
            <AiFillQuestionCircle /> Help
          </li>

          <li onClick={() => setSettings(true)} className='flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer'>
            <FaCog /> Settings
          </li>

          <li onClick={handleLogOut} className='flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer'>
            <FaSignOutAlt /> Log Out
          </li>
        </ul>

 <span className='text-sm text-[#0C4284]'>
  &copy; Copyright 2023.
 </span>
      </div>

      <Outlet />

  
      {help && (
        <div onClick={() => closeHelp()} className='fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out'>
          <DashboardMain valueHelp={closeHelp} />
        </div>
      )}

      {settings && (
        <div onClick={closeSettings} className='fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out'>
          <DashboardSettings valueSettings={closeSettings} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
