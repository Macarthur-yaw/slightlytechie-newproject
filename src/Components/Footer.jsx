import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className="flex flex-row items-center border-2 p-2 justify-around">
<span className="flex flex-row gap-2">
           &copy; BLOG 

<h1>
    2023 
</h1>
</span>

<Link to="/Signin" className="hover:underline  hover:font-normal">
    Publish News 
</Link>


        </div>
     );
}
 
export default Footer;