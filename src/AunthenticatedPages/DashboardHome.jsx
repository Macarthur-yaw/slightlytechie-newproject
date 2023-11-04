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
      
      if (blogs.length === 0) { 
        setBlogs(getInfo);
      }
    }
  }, []);
  
  const [isModalOpen, setModalOpen] = useState(false);

  const [modalContent, setModalContent] = useState("");
  
  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalContent("");
    setModalOpen(false);
  };

  function addBlogs() {
    const initialInput = {
      text: text,
      content: content,
      source: source,
    };
  
    const updatedBlogs = [...blogs, initialInput]; // Add the new article to the existing articles
  
    localStorage.setItem("items", JSON.stringify(updatedBlogs)); // Save the updated articles
  
    setBlogs(updatedBlogs);
    setInfo(updatedBlogs);
  
    setText("");
    setContent("");
    setSource("");
    setDisplay(false);
    setActive(false);
    setUpdateIndex(null);
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
function handlePageClick(e){
  e.stopPropagation();

}
  return (
    <div>
    <div  className={`${display ? 'fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-20  z-10 ':'bg-white'}`}>
   
   
   <div className="md:flex md:flex-row hidden md:block md:ml-auto items-center w-[80%] md:justify-between justify-around p-4 shadow-sm">
        <span>
          <h1 className="md:text-[40px] font-bold text-[#0A376E]">Dashboard</h1>
          <h3 className="md:text-[14px] text-[8px] font-semibold text-[#6E6E6E]">Hi Kevin, welcome back!</h3>
        </span>
        
      </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
      <div className=" py-2 px-4">
        <button
          className="ml-auto z-0 text-white border-2 flex flex-row items-center text-sm md:w-[10%] w-[30%] justify-center bg-[#1473E6] border-[#1473E6]  gap-2 border-[2px] p-2 rounded-md"
onClick={changeDisplay}
        >
          {/* <FontAwesomeIcon icon={faPlus}/> */}

          <FaPlus/>
          Add Blog
        </button>
      </div>
     
      {display && (
  <div onClick={changeDisplay} className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-40">
    <div onClick={handlePageClick} className="bg-white max-w-md  p-4 rounded-lg shadow-lg">
    <div className="border-2 w-fit ml-auto border-white">
    <button
          className="text-black hover:text-red-500"
          onClick={() => setDisplay(false)}
        >
          <FaTimes />
        </button>
</div>
      <h1 className="text-2xl font-semibold text-[#0A376E] mb-4">Add New Blog</h1>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-4 border text-black rounded-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="w-full p-2 mb-4 text-black border rounded-md"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Source"
        className="w-full text-black p-2 mb-4 border rounded-md"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      {/* Add your date and image inputs here */}
      {updateIndex !== null ? (
        <button
          className="bg-[#1473E6] w-[15%] text-white py-2 rounded-md hover:bg-[#125EBE] transition-colors duration-300"
          onClick={handleUpdate}
        >
          Update
        </button>
      ) : (
        <button
          className="bg-[#1473E6] w-[15%] text-white py-2 rounded-md hover:bg-[#125EBE] transition-colors duration-300"
          onClick={addBlogs}
        >
          Submit
        </button>
      )}
    </div>
  </div>
)}


      <table className="md:w-[80%] w-[100%] md:ml-auto shadow-sm rounded-sm p-2">
            <thead>
              <tr className="p-4 flex flex-row text-gray-500 text-[12px] font-normal justify-between border-b-2">
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
                  className="w-[100%] p-4 justify-between mx-auto  flex flex-row items-center border-b-2 cursor-pointer"
                >
                  <td className="md:px-4 md:py-2 text-gray-500">{content.text}</td>
               
                  <td className="md:px-4 md:py-2 text-gray-500">
  {content.content.length > 50 ? (
    <div>
      {content.content.substring(0, 50)}...
      <span className="text-blue-500 cursor-pointer" onClick={() => openModal(content.content)}>
        Read More
      </span>
    </div>
  ) : (
    content.content
  )}
</td>

                  <td className="md:px-4 md:py-2 text-gray-600 text-sm">{content.source}</td>
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
          {isModalOpen && (
  <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50  z-10" onClick={closeModal}>
    <div onClick={handlePageClick} className="modal w-[80%] md:w-1/2 bg-white p-4 rounded-lg">
     <div className=" ml-auto w-fit">
      <span className="close  text-gray-500 text-2xl cursor-pointer text-black" onClick={closeModal}>
        &times;
      </span>
      </div>
      <p className="text-gray-700 text-sm md:text-md">{modalContent}</p>
    </div>
  </div>
)}


    </div></div>
  );
};

export default DashboardHome;