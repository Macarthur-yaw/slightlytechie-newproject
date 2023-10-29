
import { useAuthenticated } from './useAuthenticated';

// import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
function Dashboard(){
    const {isAuthenticated}=useAuthenticated()

    // const navigate=useNavigate()
  
    return isAuthenticated ? <Outlet/>: console.log("not authen");


}

 
export default Dashboard;