import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";

const Footer = () => {
    const {display,theme}=useContext(MyContext)
    return ( 
        <div className={`${theme ? 'border-t-[0.1px] border-t-gray-600':'border-t-[0.1px]'} flex mb-0 flex-row items-center   py-4 px-[8px] md:justify-around justify-between text-[10px] md:text-[14px] `}>
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
<a href="mailto:arthurkevin1260@gmail.com" >Contact us</a>            
        </li>
    </ul>
</div>

        </div>
     );
}
 
export default Footer;