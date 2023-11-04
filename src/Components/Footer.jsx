import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";

const Footer = () => {
  const { display, theme } = useContext(MyContext);

  return (
    <footer className={`bg-${theme ? "bg-[#121212]" : "white"} text-${theme ? "white" : "black"} py-4`}>
      <div className="container mx-auto flex flex-row items-center gap-2 items-center justify-between">
        <div className="text-sm">
          &copy; BLOG &nbsp;
          <span className="mr-1">2023</span>
        </div>
        <div className="mt-2 sm:mt-0">
          <Link to="/signin" className="text-primary hover:underline">
            Publish News
          </Link>
        </div>
        <div className="mt-4 sm:mt-0">
          <ul className="flex space-x-2">
            <li>
              <a href="mailto:arthurkevin1260@gmail.com" className="text-primary hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
