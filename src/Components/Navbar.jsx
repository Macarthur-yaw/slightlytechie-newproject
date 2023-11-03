import { useContext, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { MyContext } from '../App';
const Navbar = () => {
  const { theme, setTheme } = useContext(MyContext);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setTheme(storedTheme === 'dark');
    }
  }, [setTheme]);

  function changeTheme() {
    setTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  }

  return (
    <div>
      <div className='flex flex-row items-center shadow-lg justify-between px-4 py-4'>
        <h1 className='font-bold p-4 text-[20px]'>
          BLOGNEWS
        </h1>
        <span onClick={changeTheme} className='cursor-pointer p-[4px] rounded-md'>
          {theme ? <FaSun /> : <FaMoon />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
