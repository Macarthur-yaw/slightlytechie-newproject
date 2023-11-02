import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const NewPage = (props) => {
  const { text, content, source, displayValue, updateValue, editData } = props;

  const [newText, setNewText] = useState(text || '');
  const [newContent, setNewContent] = useState(content || '');
  const [newSource, setNewSource] = useState(source || '');

  const isEditMode = !!editData;

  useEffect(() => {
    if (isEditMode) {
      setNewText(text);
      setNewContent(content);
      setNewSource(source);
    }
  }, [isEditMode, text, content, source]);

  const addBlog = () => {
    const newBlog = {
      text: newText,
      content: newContent,
      source: newSource,
    };
  
    const existingBlogs = JSON.parse(localStorage.getItem('items')) || [];
    const updatedBlogs = [newBlog, ...existingBlogs];
  
    // Update the local storage with the updated blog list
    localStorage.setItem('items', JSON.stringify(updatedBlogs));
  
    
    // Pass the new blog data to the parent component
    updateValue(newBlog);
  

    // Reset input fields and other relevant state
    setNewText('');
    setNewContent('');
    setNewSource('');
    displayValue();
  };
  
 
 
  const handleUpdate = () => {
    const updatedBlogs = JSON.parse(localStorage.getItem('items')) || [];

    // Find the index of the blog to update
    const indexToUpdate = updatedBlogs.findIndex(
      (blog) => blog.text === text && blog.content === content && blog.source === source
    );

    if (indexToUpdate !== -1) {
      updatedBlogs[indexToUpdate] = {
        text: newText,
        content: newContent,
        source: newSource,
      };

      localStorage.setItem('items', JSON.stringify(updatedBlogs));

      // Call the updateValue function to update the UI
      updateValue(updatedBlogs);
    }

    setNewText('');
    setNewContent('');
    setNewSource('');
    displayValue();
  };

  const handleNewPageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div className={`ml-auto md:w-[65%] w-fit py-4 px-4 h-fit z-20`}>
        <div
          onClick={handleNewPageClick}
          className="shadow-lg rounded-lg md:w-[70%] bg-white text-[#0A376E]"
        >
          <div className="p-2 border-b-[1px] p-2 border-b-gray flex flex-row justify-between items-center">
            <h1 className="font-semibold">
              {isEditMode ? 'Edit Post' : 'Add new Post'}
            </h1>
            <span
              onClick={displayValue}
              className="cursor-pointer rounded-full hover:bg-[#808080] p-2 transition-bg duration-300 ease-in-out hover:border-gray"
            >
              <FaTimes className="text-[18px] text-black text-normal" />
            </span>
          </div>
          <div className="flex flex-row p-2 gap-2">
            <div id="descSection" className="flex flex-col gap-4">
              <h3>Title</h3>
              <h3>
                Content
                <p className="text-sm">Write meaningful meanings in it.</p>
              </h3>
              <h3>Date published.</h3>
            </div>
            <div id="inputs" className="flex flex-col gap-6">
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="border-2 p-2 text-sm rounded-md bg-none outline-none"
              ></textarea>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="border-2 rounded-md outline-none p-2 text-sm"
              ></textarea>
              <input
                type="text"
                value={newSource}
                onChange={(e) => setNewSource(e.target.value)}
                className="border-2 rounded-md"
              />
<button
  onClick={() => isEditMode ? handleUpdate() : addBlog()}
  className="border-2 rounded bg-[#0A376E] border-[#0A376E] text-white"
>
  {isEditMode ? 'Update' : 'Submit'}
</button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
