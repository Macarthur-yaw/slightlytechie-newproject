import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

const Home = () => {
  const { display, theme } = useContext(MyContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const storedInfo = localStorage.getItem("items");
    if (storedInfo) {
      const getInfo = JSON.parse(storedInfo);
      setInfo(Array.isArray(getInfo) ? getInfo : []);
  
  console.log(storedInfo)  } else {
      setInfo([
        {
          text: "Placeholder Blog Post",
          content: "This is a placeholder blog post. Replace it with your actual content.",
          source: "Placeholder Author",
        },
      ]);
    }
    
  }, []);

  return (
    <div>
      <div
        className={`${
          display
            ? "bg-black mt-0 w-[50%] fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-50 z-2 pointer-events-auto"
            : ""
        } md:bg-white md:w-auto md:h-auto`}
      ></div>

      <div className="flex flex-col gap-4 p-2 min-h-screen">
        <h1 className="text-sm px-6 py-4 hover:underline w-fit cursor-pointer">
          RECENT ARTICLES
        </h1>
        {info.map((content, index) => (
          <div key={index} className="w-[100%] mx-auto flex flex-col p-2">
            <Link to={`/next/${index}`}>
              <h1
                className={`px-4 py-2 hover:underline transition-underline duration-300 ease-in-out ${
                  theme ? "text-gray-200" : "text-black"
                } text-[20px]`}
              >
                {content.text}
              </h1>
            </Link>
            <h2 className="px-4 py-2 text-[12px] text-gray-400">
              By {content.source}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
