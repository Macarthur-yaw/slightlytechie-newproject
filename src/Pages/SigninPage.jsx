import { useContext, useReducer } from 'react';
import { FaBullhorn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';

const initialState = {
  name: "",
  password: "",
  error: false,
  message: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.payload };
    case 'updatePassword':
      return { ...state, password: action.payload };
    case 'updateError':
      return { ...state, error: true };
    case 'updateSignup':
      return { ...state, message: true };
    default:
      return state;
  }
}

const SigninPage = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
const {theme}=useContext(MyContext)

  function handleName(e) {
    dispatch({ type: 'updateName', payload: e.target.value });
  }

  function handlePassword(e) {
    dispatch({ type: 'updatePassword', payload: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (state.name && state.password) {
      sessionStorage.setItem('isLoggedIn', true);
      navigate('/Dashboard');
    } else {
      dispatch({ type: 'updateError' });
      sessionStorage.setItem('isLoggedIn', false);
    }
  }

  function showMessage() {
    dispatch({ type: 'updateSignup' });
  }

  return (
<div className={`${theme ? 'bg-[#121212] text-gray-950':'bg-white text-black'}`}>
<div className='flex flex-row justify-center items-center h-screen '>
      <div className="bg-white p-8 rounded-lg shadow-lg md:w-[26%] w-[80%] h-[60%] md:h-[50%]">
        <h1 className="text-3xl font-bold mb-4">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              onChange={handleName}
              value={state.name}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              onChange={handlePassword}
              value={state.password}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          {state.error && (
            <p className="text-red-500 text-sm mb-4">Please fill in both fields!</p>
          )}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-gray-950 text-white rounded-md hover:bg-gray-700 transition-bg duration-300 ease-in-out focus:outline-none"
            >
              Sign In
            </button>
            <button
            disabled
              onClick={showMessage}
              className="text-indigo-500 hover:underline focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>  );
};

export default SigninPage;
