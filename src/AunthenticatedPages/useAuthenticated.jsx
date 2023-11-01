const useAuthenticated=()=>{
  const result=sessionStorage.getItem("isLoggedIn");
 
  return result==="true";
 }
 export default useAuthenticated;