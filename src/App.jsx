// import  from "react-router-dom";
import Home from "./Pages/Home"
import Business from "./Pages/Business"
import Entertainment from "./Pages/Entertainment"
import Sports from "./Pages/Sports"
import RoutesHandle from "./Routes";
import { Route,Routes } from "react-router-dom";
import SigninPage from "./Pages/SigninPage";
import Dashboard from "./AunthenticatedPages/Dashboard";
import DashboardHome from "./AunthenticatedPages/DashboardHome";
import DashboardHelp from "./AunthenticatedPages/DashboardHelp";
import DashboardMain from "./AunthenticatedPages/DashboardMain";
// import Authenticate from "./AunthenticatedPages/Authenticate";
const App = () => {
  return ( 
    <>
   

     <Routes>

      <Route path='/' element={<RoutesHandle/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/business" element={<Business/>}/>
      <Route path="/entertainment" element={<Entertainment/>}/>
      <Route path="/sports" element={<Sports/>}/>
      
      </Route>

      <Route path="signin" element={<SigninPage/>}/>
      <Route path="Dashboard/" element={<Dashboard/>}>
        <Route path="Home" element={<DashboardHome/>}/>
        <Route path="Help" element={<DashboardHelp/>}/>
        <Route path="Main" element={<DashboardMain/>}/>

        </Route>
      {/* <Route path='Authenticate' element={<Authenticate/>}/> */}

     </Routes>

    </>
   );
}
 
export default App;