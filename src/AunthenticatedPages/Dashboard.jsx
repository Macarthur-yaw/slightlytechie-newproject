import {FaHome,FaSearch,FaSignOutAlt,FaCog,FaPlus} from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
import {Link, Outlet} from 'react-router-dom'
import { useRef, useState } from 'react'
import NewPage from './NewPage'
const Dashboard = () => {
const divRef=useRef(null)
  const[post,setPost]=useState(false)
  function showPost(){
setPost(true)
  }
  function closePost(){
    setPost(false)
  }
    return (
        <div >
<div id="verticalBar" className='bg-white  border-2 w-[30%] md:w-[20%] h-screen flex flex-col justify-center  justify-between p-2 border-t-0 border-l-0 border-b-0 fixed z-2 items-center'>

<h1 className='py-4 font-bold text-[20px]'>
    BLOG-WEB
</h1>
 
<ul className='list-none flex flex-col gap-12 w-[100%]'>
<Link to="Home">
  <li className=' flex flex-row items-center gap-2 p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer !active:bg-[#DAE9FC] !focus:bg-[#DAE9FC]'>
    <FaHome /> Home
  </li>
</Link>

  <Link to='Help'>  <li className='flex flex-row items-center gap-2  p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer'>
    <AiFillQuestionCircle/>    Help 
    </li></Link>

    <li className='flex flex-row items-center gap-2  p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer'>
    <FaCog/>   Settings 
    </li>

    <li className='flex flex-row items-center gap-2  p-2 rounded-xl text-[#0C4284] text-[18px] hover:bg-[#DAE9FC] hover:border-[#DAE9FC] hover:text-[#0C4284] cursor-pointer'>
    <FaSignOutAlt/> Log Out  
    </li>
</ul>


<button
onClick={()=>showPost()}
className=' flex flex-row items-center max-w-[100%] justify-center bg-[#1473E6] border-[#1473E6] text-white gap-2 border-2 p-2 rounded-full   '>
<FaPlus className='text-[#9BC4F7]'/>  New Post 
</button>

</div>
<Outlet/>

{ post && (
 <div ref={divRef} 
 onClick={()=>closePost()}
  className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out">
 <div>
 <NewPage displayValue={closePost} />
 </div>
</div>

)

}
        </div>
      );
}
 
export default Dashboard;