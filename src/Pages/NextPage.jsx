import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { MyContext } from "../App";
const NextPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const {display,theme}=useContext(MyContext)
   
  
  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("items"));
    setData(getItems);
  }, []);

  const getData = data.map((item, index) => {
    if (id === index.toString()) {
      return (
        <div key={index} className={`${theme ? 'text-gray-200 bg-[#121212]':'text-black'}  flex flex-col gap-4  mx-auto w-[60%]`}>
      <div>    <h3 className="font-bold  text-left text-[35px]">{item.text}</h3>
          <p className="text-left text-[15px] text-gray-300 ">By {item.source}</p></div>
          <p className="text-[20px] text-left">{item.content}</p>
          
        </div>
      );
    } 
  });

  return (
    <div className={`${theme ? 'bg-[#121212] text-gray-100':'bg-white text-black' }border-2 h-[100vh] text-center p-6`}>
      {/* <h1>Welcome to this page</h1> */}
      {getData}
    </div>
  );
};

export default NextPage;