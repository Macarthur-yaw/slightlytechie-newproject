import { useReducer } from 'react'
import sideImage from '../assets/sideImage.jpg'
import {FaBullhorn} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const initialState={
    name:"",
    password:"",
    error:false
}

function reducer(state,action){
    switch(action.type){

        case 'updateName':return {...state,name:action.payload}
        case 'updatePassword':return {...state,password:action.payload}

        case 'updateError':return {...state,error:true}
        default:return state;

    }
}

const SigninPage=()=>{  

    const navigate=useNavigate();

    const[state,dispatch]=useReducer(reducer,initialState)

    function handleName(e){
dispatch({type:'updateName',payload:e.target.value})
    }
    function handlePassword(e){
        dispatch({type:'updatePassword',payload:e.target.value})
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(state.name);
        console.log(state.password);
      
        if (state.name === "Kevin" && state.password === "kevin") {
            sessionStorage.setItem('isLoggedIn', true); 
            navigate('/Dashboard');
        //   console.log("Nothing has been typed");
       
       console.log(sessionStorage.getItem('isLoggedIn'))
        } else {
          console.log('next');
          dispatch({ type: 'updateError' });
          sessionStorage.setItem('isLoggedIn',false)
        //   navigate('/Dashboard');
        }
        console.log(sessionStorage.getItem('isLoggedIn'))
      }
      

    return (





<div className='flex flex-row justify-evenly items-center p-2'>
            <div className='p-10'>
                <img src={sideImage} alt='a welcoming image' className='blur-sm' />
            </div>
            <div className="p-2 ">
     <form onSubmit={handleSubmit} className="absolute top-1/2 transform rounded-sm -translate-y-1/2 left-1/2 transform -translate-x-1/2 md:w-[30%] w-[65%] bg-white border-white shadow-md flex mx-auto border-2 flex-col   items-center justify-evenly   md:h-[75%] h-[60%] mr-0  border-2 p-4 ">
<span className="flex flex-col items-center gap-2">
  <p className=' font-bold font-serif'>
  SIGN IN 
  </p>

<h1 className="font-bold inline-flex items-center gap-2 font-serif font-bold text-[25px] text-[#188fff] ">
    
    BLOG NEWS 
    <FaBullhorn/>

</h1>



<p className=" text-sm text-[#26282a]">
To publish News.  
</p>
</span>

<div className="flex flex-col gap-10">
    
<span className="flex flex-col gap-2">
Username
                <input
                    type="text"
onChange={handleName}

                    className="outline-none text-sm 
                    
                    border-[1px] border-t-0 border-l-0 border-r-0
                   md:w-[120%]
                    "/>
</span>
<span className="flex flex-col gap-2">


Password
                <input
                    type="password"
                    onChange={handlePassword}
                    className="
                    md:w-[120%]
                    border-[1px] outline-none border-t-0 border-l-0 border-r-0   "
                    
                />
</span>

<div className="flex flex-col gap-4">
                <button className="
                md:w-[120%]
                p-[1px] text-sm border-2 border-[#188fff] font-semibold  bg-[#188fff] text-white ">Sign in</button>
<button className="md:w-[120%]  p-[1px] text-sm border-[1.2px] border-[#188fff] text-[#188fff] font-semibold">
    Sign up 
</button>
</div>           </div>

<br/>
{state.error && (<div className='text-[#FF0000] text-sm'>
    Please fill the forms!
    </div>)}   
                </form>

          


            </div>
        </div>
    );
}

export default SigninPage;
