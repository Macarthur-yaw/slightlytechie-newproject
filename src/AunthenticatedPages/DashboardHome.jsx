import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus,faTimes} from "@fortawesome/free-solid-svg-icons";
// 
import { FaTrash,FaEdit,FaTimes,FaPlus,FaSearch } from "react-icons/fa";
import avatarPic from '../assets/avatar.jpg'
const DashboardHome = () => {
  const [display, setDisplay] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [info, setInfo] = useState([]);
  const [active, setActive] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);

  useEffect(() => {
    const storedInfo = localStorage.getItem("items");
    if (storedInfo) {
      const getInfo = JSON.parse(storedInfo);
      setInfo(Array.isArray(getInfo) ? getInfo : []);
    }
  }, []);
  
  
 
  function addBlogs() {
    const initialInput = {
      text: text,
      content: content,
      source: source,
    };

    setBlogs([initialInput, ...blogs]);
    localStorage.setItem("items", JSON.stringify([initialInput, ...blogs]));
    setInfo(JSON.parse(localStorage.getItem("items")));

    setText("");
    setContent("");
    setSource("");
  }

  function deleteTask(indexToDelete) {
    const updatedBlogs = info.filter((_, index) => index !== indexToDelete);
    setBlogs(updatedBlogs);
    setInfo(updatedBlogs);
    localStorage.setItem("items", JSON.stringify(updatedBlogs));
  }

  function changeDisplay() {
    setDisplay(!display);
    setActive(false);
    setUpdateIndex(null);
  }

  function updateTask(indexOfElement) {
    const blogToUpdate = info[indexOfElement];
    setText(blogToUpdate.text);
    setContent(blogToUpdate.content);
    setSource(blogToUpdate.source);
    setUpdateIndex(indexOfElement);
    setDisplay(true);
    setActive(true);
  }

  function handleUpdate() {
    const updatedBlogs = info.map((blog, index) => {
      if (updateIndex === index) {
        return {
          text: text,
          content: content,
          source: source,
        };
      }
      return blog;
    });

    setInfo(updatedBlogs);
    localStorage.setItem("items", JSON.stringify(updatedBlogs));

    setText("");
    setContent("");
    setSource("");
    setDisplay(false);
    setActive(false);
    setUpdateIndex(null);
  }

  return (
    <div className={`${display ? 'fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-20  ':'bg-white'}`}>
   
   
   <div className="flex flex-row hidden md:block md:ml-auto items-center w-[80%] md:justify-between justify-around p-4 shadow-sm">
        <span>
          <h1 className="md:text-[40px] font-bold text-[#0A376E]">Dashboard</h1>
          <h3 className="md:text-[14px] text-[8px] font-semibold text-[#6E6E6E]">Hi Kevin, welcome back!</h3>
        </span>
        <div className="flex flex-row items-center md:gap-6 gap-2">
          <div className="border-2 md:w-[220px] w-[90%]  h-[20px] md:h-[40px] md:rounded-[40px] rounded-[10px] flex flex-row items-center justify-center gap-2">
            <FaSearch className="text-[#8E8E8E]" />
            <input
              type="text"
              placeholder="Search everything"
              className="outline-none bg-transparent text-sm"
            />
          </div>
          <div id="avatar">
            <img src={avatarPic} alt="an avatar" className="md:w-[40px] w-[20px] md:h-[40px] rounded-[40px]" />
          </div>
        </div>
      </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
      <div className=" py-2">
        <button
          className="ml-auto text-white border-2 flex flex-row items-center text-sm md:w-[100%] w-[30%] justify-center bg-[#1473E6] border-[#1473E6]  gap-2 border-[2px] p-2 rounded-md"
onClick={changeDisplay}
        >
          {/* <FontAwesomeIcon icon={faPlus}/> */}

          <FaPlus/>
          Add Blog
        </button>
      </div>
      {display && (
  
  
  <div className="flex flex-col gap-2 w-[80%]  rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md p-4 bg-white">
 
    <div onClick={()=>setDisplay(false)} className="flex ml-auto p-2 hover:bg-gray-100 rounded-full transition-bg duration-300 ease-in-out w-fit cursor-pointer text-[20px]">
      {/* <FontAwesomeIcon onClick={() => setDisplay(false)} className="p-2 cursor-pointer" icon={faTimes} /> */}
    <FaTimes  />
    </div>
    <h1 className="border-b-[1px] ">Add new Blog</h1>  
    <textarea
      className="border-2 border-black rounded p-2 "
      
      onChange={(e) => setText(e.target.value)}
      value={text}
      placeholder="Title"
    ></textarea>
    <br />
    <textarea
      className="border-2 border-black rounded p-2 "
      
      onChange={(e) => setContent(e.target.value)}
      value={content}
      placeholder="Source"
    ></textarea>
    <br />
    <textarea
      
      className="border-2 border-black rounded p-2 "
      onChange={(e) => setSource(e.target.value)}
      value={source}
      placeholder="Content"
    ></textarea>
    <br />
    <input type="date"/>
    <div className="flex flex-row">
      <button
        className="border-2 border-black w-full sm:w-20 mx-auto rounded bg-black text-white mb-2 sm:mb-0 sm:mr-2"
        onClick={addBlogs}
      >
        Submit
      </button>
  
      {active && updateIndex !== null && (
        <button
          className="border-2 border-black w-full sm:w-20 mx-auto rounded bg-black text-white"
          onClick={handleUpdate}
        >
          Update
        </button>
      )}
    </div>
  </div>
  
      )}
      <table className="md:w-[80%] w-[100%] md:ml-auto shadow-sm rounded-sm">
            <thead>
              <tr className="flex flex-row text-gray-500 text-[12px] font-normal justify-between border-b-2">
                <th className="md:px-4 md:py-2">Title</th>
                <th className="md:px-4 md:py-2">Content</th>
                <th className="md:px-4 md:py-2">Source</th>
                <th className="md:px-4 md:py-2">Operations</th>
              </tr>
            </thead>
            <tbody className="">
              {info.map((content, index) => (
                <tr
                  key={index}
                  className="w-[100%] justify-between mx-auto  flex flex-row items-center border-b-2 cursor-pointer"
                >
                  <td className="md:px-4 md:py-2 text-gray-500">{content.text}</td>
                  <td className="md:px-4 md:py-2 text-gray-500 ">{content.content}</td>
                  <td className="md:px-4 md:py-2 text-gray-600">{content.source}</td>
                  <td className="md:px-4 md:py-2 inline-flex ">
                    <button
                      className="border-2 border-transparent hover-bg-[#DAE9FC] transition-bg duration-300 ease-in-out rounded-full p-2 text-[#0C4284] rounded"
                      onClick={() => updateTask(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="border-2 hover-bg-[#DAE9FC] transition-bg duration-300 ease-in-out  rounded-full   p-2         text-[#0C4284] rounded border-transparent                                                 "
                      onClick={() => deleteTask(index)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
};

export default DashboardHome;