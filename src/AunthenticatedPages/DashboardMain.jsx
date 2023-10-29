import {FaHome} from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
const DashboardMain = () => {
    return (
        <div>
            <div id="horizontalBar">

</div>
<div id="verticalBar">
<ul className='list-none'>
    <li >
       Home <FaHome/> 
    </li>

    <li>
        Help <AiFillQuestionCircle/>
    </li>
</ul>
</div>
        </div>
      );
}
 
export default DashboardMain;