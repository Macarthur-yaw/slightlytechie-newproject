import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";

const Footer = () => {
    const {display,theme}=useContext(MyContext)
    return ( 
        <div className={` flex mb-0 flex-row items-center border-t-[0.2px] border-gray-800  py-4 px-[8px] md:justify-around justify-between text-[10px]`}>
<span className="flex flex-row gap-2">
           &copy; BLOG 

<h1>
    2023 
</h1>
</span>

<Link to='signin' className="hover:underline  hover:font-normal">
    Publish News 
</Link>

<div>
    <ul className="list-none inline-flex gap-2">
        <li>
            Contact us
        </li>
<li>
    Privacy & Terms
</li>
    </ul>
</div>

        </div>
     );
}
 
export default Footer;