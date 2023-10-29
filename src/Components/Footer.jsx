import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate=useNavigate()
    const signIn=()=>{
        navigate('/signin');
    }
    return ( 
        <div className="flex flex-row items-center border-2 p-2 justify-around">
<span className="flex flex-row gap-2">
           &copy; BLOG 

<h1>
    2023 
</h1>
</span>

<a href="" onClick={()=>{signIn()}} className="hover:underline  hover:font-normal">
    Publish News 
</a>


        </div>
     );
}
 
export default Footer;