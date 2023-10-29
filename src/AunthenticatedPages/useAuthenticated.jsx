import { useNavigate } from "react-router-dom";

export function useAuthenticated() {
  const navigate = useNavigate();
  const isLogin = sessionStorage.getItem('isLoggedIn');

 
  const isAuthenticated = () => {
    if (isLogin) {
      navigate('/Dashboard');
    } else {
      navigate('/signin');
    }
  };

  return {
    isAuthenticated,
  };
}
