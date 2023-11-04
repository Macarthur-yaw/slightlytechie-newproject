import { useContext } from 'react';
import { FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { MyContext } from '../App';

function DashboardSettings(props) {
  const { theme, setTheme } = useContext(MyContext);

  function applySettings() {
    // Implement your settings application logic here
  }

  function handleCLick(e){
    e.stopPropagation();
    
  }
  return (
    <div onClick={handleCLick} className={`${theme ? 'bg-[#121212] text-white' : 'bg-white'} flex flex-col gap-2 md:w-[35%] w-[70%] absolute transform -translate-x-1/2 left-1/2 top-1/2 transform -translate-y-1/2 rounded-md p-4`}>
      <FaTimes onClick={props.valueSettings} className='cursor-pointer ml-auto' />

      <h2 className=' font-semibold text-gray-400'>Theme Settings</h2>

      Theme Selection
      <div className='inline-flex items-center gap-4'>
        {theme ? (
          <div onClick={() => setTheme(false)} className='inline-flex items-center cursor-pointer'>
            <FaMoon /> &nbsp; Dark
          </div>
        ) : (
          <div onClick={() => setTheme(true)} className='inline-flex items-center cursor-pointer'>
            <FaSun /> &nbsp; Light
          </div>
        )}
      </div>
      {/* You can add the Apply button and its logic here */}
    </div>
  );
}

export default DashboardSettings;
