import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MyContext } from '../App';

export default function DashboardMain(props) {
  function handleDashboardHelp(e) {
    e.stopPropagation();
  }

  const { theme } = useContext(MyContext);

  console.log('Theme in DashboardMain:', theme); // Add this line for debugging

  return (
    <div
      onClick={handleDashboardHelp}
      className={`${
        theme ? 'bg-[#121212] text-gray-200 border-[#121212]' : 'bg-white'
      } border-2 md:w-[50%] w-[80%] rounded-md border-white absolute top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 shadow-lg md:p-6 p-2 rounded-md shadow-md`}
    >
      <span className=''>
        <FaTimes
          onClick={props.valueHelp}
          className={`${theme ? 'text-white border-none':'text-black border-2'}  ml-auto rounded-full border-white cursor-pointer hover:bg-gray-300 p-2 text-[35px] transition-bg duration-300 ease-in-out`}
        />
      </span>
      <h2 className={`${theme ? 'text-white':'text-black'} md:text-2xl  text-md font-bold mb-4`}>Help and Resources</h2>
      <p className='text-md text-gray-600'>
        Welcome to your Dashboard! Here's some helpful information:
      </p>

      <div className='mt-4'>
        <h3 className={`${theme ? 'text-white':'text-black'} md:text-2xl  text-md font-semibold mb-4`}>Navigating the Dashboard</h3>
        <p className='text-md text-gray-700'>
          You can easily navigate through different sections of the dashboard using the menu or links provided.
        </p>
      </div>

      <div className='mt-4'>
        <h3 className={`${theme ? 'text-white':'text-black'} md:text-2xl  text-md font-semibold mb-4`}>Dashboard Features</h3>
        <p className='text-md text-gray-700'>
          Explore various features, such as adding and managing posts, accessing your profile, and more.
        </p>
      </div>

      <div className='mt-4'>
        <h3 className={`${theme ? 'text-white':'text-black'} md:text-2xl  text-md font-semibold mb-4`}>Need Assistance?</h3>
        <p className='text-base text-gray-700'>
          If you have any questions or encounter issues, feel free to contact our support team at
          <a className='text-blue-500' href='mailto:arthurkevin1260@gmail.com'>
            arthurkevin1260@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
