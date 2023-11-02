import  { useContext, useState } from 'react';
import {FaMoon, FaSun, FaTimes} from 'react-icons/fa'
import { MyContext } from '../App';
function DashboardSettings(props) {
  // State to manage theme selection
  // const [theme, setTheme] = useState('light');
const {theme,setTheme}=useContext(MyContext)

  // Function to toggle between light and dark themes
 
  const handleCLick=(e)=>{
    e.stopPropagation();

  }
function applySettings(){

}

  return (
    <div onClick={handleCLick} className='flex flex-col gap-2 bg-white md:w-[35%] w-[70%] absolute transform -translate-x-1/2 left-1/2 top-1/2 transform -translate-y-1/2  rounded-md p-4 '>

<FaTimes onClick={props.valueSettings} className='cursor-pointer ml-auto'/>

      <h2 className='border-b-[1px] font-semibold text-gray-400'>Theme Settings</h2>

      Theme Selection
      {/* <h3>Theme Selection</h3> */}
      <div className='inline-flex items-center gap-4 '>
       
       { theme ? (<div className='inline-flex  items-center'>
<FaMoon onClick={()=>setTheme(false)}/> &nbsp; Dark

       </div>):(<div className='inline-flex items-center'>
        <FaSun onClick={()=>setTheme(true)}/> &nbsp; Light 
       </div>)}
      </div>
      {/* <button onClick={()=>applySettings()} className='border-2  rounded-lg md:w-[20%] p-2'>Apply </button> */}
     
   </div>
  );
}

export default DashboardSettings;
