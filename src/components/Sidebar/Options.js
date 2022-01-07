import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import Btn from "../Buttons/SidebarBtn";

const Index = (props) => {
  const [sideBarHidden, setSidebarHidden] = useState(true);
  const [countryFocus, setCountryfocus] = useState(false);
  const [priceVisibility, setPricevis] = useState(false);

  const trueOrFalse = (state, setState) => {
    if (state === true) {
      setState(false);
    } else setState(true);
  };

  const OptionsHandler = () => {
    trueOrFalse(sideBarHidden, setSidebarHidden);
  };

  const CountryHandler = () => {
    trueOrFalse(countryFocus, setCountryfocus);
  };

  const priceHandler = () => {
    trueOrFalse(priceVisibility, setPricevis);
  };
  return (
    <>
      <div
        style={
          sideBarHidden
            ? {
                transform: "translateX(-100%)",
                transition: "300ms",
                width: "22rem",
              }
            : { transition: "300ms", width: "22rem" }
        }
        className="left-0 top-0 h-screen fixed z-50"
      >
        <div className="w-full h-full pl-20 pr-4 flex flex-col relative bg-white border-r border-gray-600 dark:bg-gray-800">
          <Btn
            onClick={OptionsHandler}
            text={sideBarHidden ? "options" : "close"}
            w={sideBarHidden ? "20" : "16"}
          />

          <h1 className="text-lg font-semibold pb-3 mt-14 text-black dark:text-gray-200">
            Filters
          </h1>

          <div className="flex flex-col">
            <div style={{ borderTop: "1px solid #aeb5bf" }} className="flex flex-col pb-6">
              <h1 className="font-semibold text-gray-500 my-4 dark:text-gray-300">
                Freelancer Country
              </h1>
              <div
                style={
                  countryFocus
                    ? {
                        boxShadow: "rgba(232, 120, 28, 0.5) 0px 3px 8px",
                        transition: "170ms",
                      }
                    : { transition: "170ms" }
                }
                className="flex items-center py-2 border border-gray-400 rounded dark:bg-gray-100"
              >
                <BiSearch className="text-gray-500 mx-2 text-xl dark:text-gray-300" />
                <input
                  onFocus={CountryHandler}
                  onBlur={() => setCountryfocus(false)}
                  placeholder="enter a country"
                  className="focus:outline-none dark:bg-gray-100"
                />
              </div>
            </div>
            <form>
              <div style={{ borderTop: "1px solid #aeb5bf" }} className="flex flex-col pb-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-gray-800 my-4 dark:text-gray-300">Price</h1>

                  <IoIosArrowForward
                    style={
                      priceVisibility
                        ? {
                            transform: "rotate(90deg)",
                            transition: "180ms",
                          }
                        : { transition: "180ms" }
                    }
                    className="text-xl text-gray-600 dark:text-gray-300"
                    onClick={priceHandler}
                  />
                </div>

                <div
                  style={{ transition: "0.28s", maxHeight: "1000px" }}
                  className={
                    priceVisibility
                      ? "flex flex-col h-0 overflow-hidden"
                      : "flex flex-col h-48 overflow-hidden"
                  }
                >
                  <div className="flex text-gray-800 mb-1.5 ml-1 dark:text-gray-300">
                    <input type="radio" className="mt-1 mr-4" name="prices" id="price1" />
                    <label className="w-full dark:bg-gray-600 pl-3 rounded-md" htmlFor="price1">
                      Under $20
                    </label>
                  </div>
                  <div className="flex text-gray-800 mb-1.5 ml-1 dark:text-gray-300">
                    <input type="radio" className="mt-1 mr-4" name="prices" id="price2" />
                    <label className="w-full dark:bg-gray-600 pl-3 rounded-md" htmlFor="price2">
                      $20 to $50
                    </label>
                  </div>
                  <div className="flex text-gray-800 mb-1.5 ml-1 dark:text-gray-300">
                    <input type="radio" className="mt-1 mr-4" name="prices" id="price3" />
                    <label className="w-full dark:bg-gray-600 pl-3 rounded-md" htmlFor="price3">
                      $50 to $100
                    </label>
                  </div>
                  <div className="flex text-gray-800 mb-1.5 ml-1 dark:text-gray-300">
                    <input type="radio" className="mt-1 mr-4" name="prices" id="price4" />
                    <label className="w-full dark:bg-gray-600 pl-3 rounded-md" htmlFor="price4">
                      Over $100
                    </label>
                  </div>
                  <div className="w-full flex justify-between h-10 mt-4">
                    <div style={{ width: "72%" }} className="h-full flex justify-between">
                      <input
                        placeholder="min"
                        style={{ width: "47%" }}
                        className="py-2.5 border border-gray-500 focus:outline-none pl-2 rounded dark:bg-gray-200"
                      />
                      <input
                        placeholder="max"
                        style={{ width: "47%" }}
                        className="py-2.5 border border-gray-500 focus:outline-none pl-2 rounded dark:bg-gray-200"
                      />
                    </div>
                    <div
                      style={{
                        width: "23%",
                        backgroundColor: "#ff7300",
                      }}
                      className="py-2.5 mr-1 rounded text-white flex justify-center items-center text-xs font-bold"
                    >
                      SET
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div style={{ borderTop: "1px solid #aeb5bf" }} className="flex flex-col pb-6">
              <h1 className="font-semibold text-gray-800 my-4 dark:text-gray-300">More Filters</h1>
              <div className="flex items-center gap-3">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
                <h1 className="text-gray-500 mb-0.5 dark:text-gray-300">Recently added</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 2.5em;
          height: 1.2em;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto 0;
          background-color: #ccc;
          -webkit-transition: 0.1s;
          transition: 0.1s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 1.2em;
          width: 1.2em;
          left: 1px;
          bottom: 0;
          background-color: white;
          -webkit-transition: 0.1s;
          transition: 0.1s;
          border: 1px solid darkgray;
        }

        input:checked + .slider {
          background-color: #e6632c;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(105%);
          -ms-transform: translateX(105%);
          transform: translateX(105%);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default Index;
