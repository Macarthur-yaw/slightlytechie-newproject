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
        <div key={index} className={`${theme ? 'text-gray-200 bg-gray-950':'text-black'} text-center flex flex-col gap-4 w-[50%] mx-auto`}>
          <h3 className="font-bold text-lg">{item.text}</h3>
          <p className="text-sm">{item.content}</p>
          <p>{item.source}</p>
        </div>
      );
    } 
  });

  return (
    <div className={`${theme ? 'bg-gray-950 text-gray-100':'bg-white text-black' }border-2 h-[100vh] text-center p-6`}>
      {/* <h1>Welcome to this page</h1> */}
      {getData}
    </div>
  );
};

export default NextPage;