// import  from "react-router-dom";
import Home from "./Pages/Home"
import RoutesHandle from "./Routes";
import { Route,Routes } from "react-router-dom";
import SigninPage from "./Pages/SigninPage";
import Dashboard from "./AunthenticatedPages/Dashboard";
import DashboardHome from "./AunthenticatedPages/DashboardHome";
// import DashboardHelp from "./AunthenticatedPages/DashboardHelp";
import DashboardMain from "./AunthenticatedPages/DashboardMain";
// import NewPage from "./AunthenticatedPages/NewPage";
import NextPage from "./Pages/NextPage";
// import Authenticate from "./AunthenticatedPages/Authenticate";
import { createContext,useState } from "react";

const MyContext =createContext();
const App = () => {
  const [display, setDisplay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const[theme,setTheme]=useState(false)  
  
  return ( 
    <>
   
   <MyContext.Provider value={{display,theme,setTheme,isOpen,setDisplay,setIsOpen}}>

     <Routes>

      <Route path='/' element={<RoutesHandle/>}>
      <Route index  element={<Home/>}/>
      <Route path='/next/:id' element={<NextPage/>}/>
     
      
      </Route>
      <Route path="signin" element={<SigninPage/>}/>
      <Route path="Dashboard/" element={<Dashboard/>}>
        <Route index element={<DashboardHome/>}/>
        {/* <Route path="Help" element={<DashboardHelp/>}/> */}
        <Route path="Main" element={<DashboardMain/>}/>
{/* <Route path="Add" element={<NewPage/>}/> */}
<Route path="*" element={<p> 404!</p>} />
        </Route>
      {/* <Route path='Authenticate' element={<Authenticate/>}/> */}

     </Routes>
</MyContext.Provider>
    </>
   );
}
export {MyContext}

export default App;