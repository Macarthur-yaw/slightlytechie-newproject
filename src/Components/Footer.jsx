import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";

const Footer = () => {
  const { display, theme } = useContext(MyContext);

  return (
    <div className={`text-center py-4 px-8 md:justify-around inline-flex justify-between text-[10px] md:text-[15px] ${theme ? 'bg-[#121212] text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-row gap-2">
        &copy; BLOG
        <h1>2023</h1>
      </div>
      <Link to='signin' className="hover:underline hover:font-normal">
        Publish News
      </Link>
      <div>
        <ul className="list-none inline-flex gap-2">
          <li>
            <a href="mailto:arthurkevin1260@gmail.com">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;