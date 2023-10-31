import { useReducer,  useEffect } from "react";
import { FaTimes } from "react-icons/fa";



function reducer(state, action) {
  switch (action.type) {
    case "updateTitle":
      return { ...state, title: action.payload };
    case "updateContent":
      return { ...state, content: action.payload };
    case "updateDate":
      return { ...state, date: action.payload };
      default:
      return state;
  }
}

const NewPage = (props) => {

  const initialState = {
    title: "",
    content: "",
    date: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
 
  useEffect(() => {
    // Fetch data from local storage when the component mounts
    const savedData = JSON.parse(localStorage.getItem("userInput"));
   console.log(savedData);
   
    if (savedData) {
      dispatch({ type: "updateTitle", payload: savedData.title });
      dispatch({ type: "updateContent", payload: savedData.content });
      dispatch({ type: "updateDate", payload: savedData.date });
    }
  }, []);

  function handleTitle(e) {
    const title = e.target.value;
    dispatch({ type: "updateTitle", payload: title });
    // Store the user's input in local storage
    const userInput = { ...state, title };
    localStorage.setItem("userInput", JSON.stringify(userInput));
  }

  function handleDate(e) {
    const date = e.target.value;
    dispatch({ type: "updateDate", payload: date });
    // Store the user's input in local storage
    const userInput = { ...state, date };
    localStorage.setItem("userInput", JSON.stringify(userInput));
  }

  function handleContent(e) {
    const content = e.target.value;
    dispatch({ type: "updateContent", payload: content });
    // Store the user's input in local storage
    const userInput = { ...state, content };
    localStorage.setItem("userInput", JSON.stringify(userInput));
  }

  function displayContent() {
    dispatch({ type: "displayMessage" });
  }

  const handleNewPageClick = (e) => {
    e.stopPropagation(); // Prevent the event from propagating to the parent div
  }; 

  return (
    <div onClick={handleNewPageClick}>
      <div
       
      ></div>
      <div className={`ml-auto md:w-[65%]  w-fit py-4 px-4 h-fit z-20`}>
        <div className="shadow-lg rounded-lg md:w-[70%] bg-white text-[#0A376E]">
       <div className="p-2 border-b-[1px] p-2 border-b-gray flex flex-row justify-between items-center">
          
          
          
          <h1 className=" font-semibold">
            Add new Posts.
          </h1>

          <span onClick={()=>props.displayValue()} className="cursor-pointer rounded-full hover:bg-[#808080] p-2 transition-bg duration-300 ease-in-out hover:border-gray">
            <FaTimes  className="text-[18px] text-black text-normal "/>
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
                value={state.title}
                onChange={handleTitle}
                className="border-2 p-2 text-sm rounded-md bg-none outline-none"
              ></textarea>
              <textarea
                value={state.content}
                onChange={handleContent}
                className="border-2 rounded-md outline-none p-2 text-sm"
              ></textarea>
              <input
                type="text"
                value={state.date}
                onChange={handleDate}
                className="border-2 rounded-md"
              />
              <button
                onClick={displayContent}
                className="border-2 rounded bg-[#0A376E] border-[#0A376E] text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default NewPage;
