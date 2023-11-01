import { useNavigate } from "react-router-dom";

export function useAuthenticated() {
  const navigate = useNavigate();
  
  const isAuthenticated = () => {
    const isLogin = sessionStorage.getItem('isLoggedIn');
    if (isLogin) {
      navigate('/Dashboard');
    } else {
      navigate('/signin');
    }
  };

  return isAuthenticated;
}
