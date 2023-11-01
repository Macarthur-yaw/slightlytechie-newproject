import  { useState } from 'react';
import {FaTimes} from 'react-icons/fa'
function DashboardSettings(props) {
  // State to manage theme selection
  const [theme, setTheme] = useState('light');


  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const handleCLick=(e)=>{
    e.stopPropagation();

  }
function applySettings(){

}

  return (
    <div onClick={handleCLick} className='flex flex-col gap-2 bg-white w-[35%] absolute transform -translate-x-1/2 left-1/2 top-1/2 transform -translate-y-1/2  rounded-md p-4 '>

<FaTimes onClick={props.valueSettings} className='cursor-pointer ml-auto'/>

      <h2 className='border-b-[1px] font-semibold text-gray-400'>Theme Settings</h2>

      {/* Theme Selection */}
      <h3>Theme Selection</h3>
      <div className='inline-flex items-center gap-4 '>
       
        <label className='inline flex items-center gap-[2px]'>
          <input
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={toggleTheme}
          />
          
          Light Mode
        </label>
        <label className='inline-flex gap-[2px]'>
          <input
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          /> 
          Dark Mode
        </label>
<br/>
      </div>
      <button onClick={()=>applySettings()} className='border-2  rounded-lg w-[20%]'>Apply </button>
     
   </div>
  );
}

export default DashboardSettings;
