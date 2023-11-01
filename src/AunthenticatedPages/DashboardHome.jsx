import React, { useEffect, useState } from 'react';
import avatarPic from '../assets/avatar.jpg';
import { FaSearch, FaTrash, FaEdit } from 'react-icons/fa';
import NewPage from './NewPage';

const DashboardHome = () => {
  const [info, setInfo] = useState([]);
  const [display, setDisplay] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [text, setText] = useState('');
  const [content, setContent] = useState('');
  const [source, setSource] = useState('');
  const [active, setActive] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  useEffect(() => {
    const getInfo = JSON.parse(localStorage.getItem('items'));
    setInfo(getInfo || []);
  }, []);

  function deleteTask(indexToDelete) {
    const updatedBlogs = info.filter((_, index) => index !== indexToDelete);
    setBlogs(updatedBlogs);
    setInfo(updatedBlogs);
    localStorage.setItem('items', JSON.stringify(updatedBlogs));
  }

  function updateTask(indexOfElement) {
    const blogToUpdate = info[indexOfElement];
    setText(blogToUpdate.text);
    setContent(blogToUpdate.content);
    setSource(blogToUpdate.source);
    setUpdateIndex(indexOfElement);
    setDisplay(true);
    setActive(true);
    setEditData(blogToUpdate);
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
    localStorage.setItem('items', JSON.stringify(updatedBlogs));

    setText('');
    setContent('');
    setSource('');
    setDisplay(false);
    setActive(false);
    setUpdateIndex(null);
  }

  return (
    <div>
      <div className="flex flex-row ml-auto items-center w-[80%] justify-between p-4 shadow-sm">
        <span>
          <h1 className="text-[40px] font-bold text-[#0A376E]">Dashboard</h1>
          <h3 className="text-[14px] text-[#6E6E6E]">Hi Kevin, welcome back!</h3>
        </span>
        <div className="flex flex-row items-center gap-6">
          <div className="border-2 md:w-[220px] md:h-[40px] rounded-[40px] flex flex-row items-center justify-center gap-2">
            <FaSearch className="text-[#8E8E8E]" />
            <input
              type="text"
              placeholder="Search everything"
              className="outline-none bg-transparent"
            />
          </div>
          <div id="avatar">
            <img src={avatarPic} alt="an avatar" className="w-[40px] h-[40px] rounded-[40px]" />
          </div>
        </div>
      </div>

      <div className="ml-auto w-[90%] px-10">
        <span>Added Posts</span>
        <div className="p-4 ">
          <table className="w-[90%] ml-auto shadow-sm rounded-sm">
            <thead>
              <tr className="flex flex-row text-gray-500 text-[12px] font-normal justify-between border-b-2">
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Content</th>
                <th className="px-4 py-2">Source</th>
                <th className="px-4 py-2">Operations</th>
              </tr>
            </thead>
            <tbody className="">
              {info.map((content, index) => (
                <tr
                  key={index}
                  className="w-[100%] justify-between mx-auto  flex flex-row items-center border-b-2 cursor-pointer"
                >
                  <td className="px-4 py-2 text-gray-500">{content.text}</td>
                  <td className="px-4 py-2 text-gray-500 ">{content.content}</td>
                  <td className="px-4 py-2 text-gray-600">{content.source}</td>
                  <td className="px-4 py-2  ">
                    <button
                      className="border-2 border-white hover:bg-[#DAE9FC] transition-bg duration-300 ease-in-out rounded-full p-2 text-[#0C4284] rounded"
                      onClick={() => updateTask(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="border-2 hover:bg-[#DAE9FC] transition-bg duration-300 ease-in-out  rounded-full   p-2         text-[#0C4284] rounded border-white                                                 "
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
      </div>

      {
        display && ( 
        <div onClick={()=>setDisplay(false)} 
         className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out">
        <NewPage
          text={text}
          content={content}
          source={source}
          displayValue={() => setDisplay(false)}
          updateValue={handleUpdate}
          editData={editData}
        />
        </div>
        )
      }
    </div>
  );
};

export default DashboardHome;
