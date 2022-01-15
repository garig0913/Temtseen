import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const Index = (props) => {
  const [hover, setHover] = useState(false);
  const imgLink1 =
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80";
  return (
    <>
      <div
        style={{ gridTemplateRows: "1.2fr 1fr" }}
        className="h-96 grid grid-rows-2 dark:text-white"
      >
        <img className="w-full h-full rounded-t-md overflow-hidden" src={props.imgUrl} />
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
          W
          className="w-full rounded-b p-2.5 flex flex-col justify-between relative dark:bg-gray-700 "
        >
          <img
            style={{ right: "8%", top: "-15%" }}
            className="absolute w-14 h-14 object-cover rounded-full border-2 border-white"
            src={imgLink1}
          />
          <div>
            <h1 style={{ fontSize: "0.9em" }} className="font-semibold">
              Elbegsaysan buya
            </h1>
            <h1 className="text-gray-400 text-sm font-semibold dark:text-gray-300">
              Шинэ фрийлансер
            </h1>
            <h1 className="mt-4 font-medium">{props.title}</h1>
          </div>
          <div className="w-full flex justify-between border-t pt-3">
            <div className="relative">
              <FaHeart
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                id="heart"
                style={{ transition: "150ms" }}
                className="text-xl text-gray-400 hover:text-red-500 relative cursor-pointer"
              />
              <div
                id="jagsaaltand"
                style={{
                  top: "-2em",
                  left: "52%",
                  transform: "translate(-48%, 0)",
                  transition: "200ms",
                }}
                className={
                  hover
                    ? "absolute bg-gray-800 text-white rounded opacity-100"
                    : "absolute bg-gray-800 text-white rounded opacity-0"
                }
              >
                <h1 className="text-center" style={{ inlineSize: "10em" }}>
                  Жагсаалтанд нэмэх
                </h1>
              </div>
            </div>

            <h1>{props.budget + props.currency}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
