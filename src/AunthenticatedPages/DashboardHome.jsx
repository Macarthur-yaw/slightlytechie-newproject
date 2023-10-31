import avatarPic from '../assets/avatar.jpg'
import { FaSearch } from 'react-icons/fa';
const DashboardHome = () => {
    return (
        <div className="">
                        <div className='flex flex-row items-center w-[70%]  ml-auto  justify-between p-4'>

<span>
    <h1 className='text-[40px] font-bold text-[#0A376E]'>
        Dashboard
    </h1>
    <h3 className='text-[14px] text-[#6E6E6E]'>
        Hi Kevin,welcome back!
    </h3>
</span>

<div className='flex flex-row items-center gap-6'>
<div className='border-2 md:w-[220px]  md:h-[40px] rounded-[40px] flex flex-row items-center justify-center gap-2'>
    <FaSearch className='text-[#8E8E8E]'/>
<input type='text' placeholder='Search everything' className='outline-none'/>
</div>
<div id='avatar'>
<img src={avatarPic} alt='an avatar' className='w-[40px] h-[40px] rounded-[40px]'/>
</div>
</div>
</div>

        </div>
      );
}
 
export default DashboardHome;