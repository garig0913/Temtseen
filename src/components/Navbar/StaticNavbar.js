import WebFont from "webfontloader";
import { BsSearch } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
   WebFont.load({
      google: {
         families: ["Anton"],
      },
   });

   return (
      <>
         <div className="flex flex-col w-full z-30">
            <div
               style={{
                  transition: "350ms",
               }}
               className="w-full flex justify-between items-center py-5 navbarBgBlue border-b border-gray-500"
            >
               <div className="flex items-end ml-6 lg:ml-16">
                  <VscThreeBars className="text-3xl text-green-900 mb-0.5 lg:hidden opacity-80 font-bold" />
                  <Link to={"/"}>
                     <h1
                        id="logo"
                        className="text-4xl ml-3 fiverrTextActive font-extrabold"
                        style={{
                           font: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                           letterSpacing: "-2px",
                        }}
                     >
                        fiverr<span className="text-green-400">.</span>
                     </h1>
                  </Link>

                  <div
                     id="inputShadow"
                     style={{
                        opacity: "1",
                        transition: "280ms",
                     }}
                     className="flex h-8 rounded-sm hover:shadow-2xl ml-10"
                  >
                     <div className="h-8 w-14 bg-white text-gray-600 rounded-l-sm flex justify-center items-center">
                        <BsSearch />
                     </div>
                     <input className="h-full w-full focus:outline-none" />
                     <button
                        id="button2"
                        className="h-full px-4 rounded-r-sm text-white "
                     >
                        Search
                     </button>
                  </div>
               </div>
               <div
                  className="flex items-center gap-7 mr-20 navbarText navbarActive"
                  style={{
                     fontSize: "1.12rem",
                     transition: "250ms",
                  }}
               >
                  <button id="transitionBtn" className="hover:text-green-500">
                     Fiverr Business
                  </button>
                  <button id="transitionBtn" className="hover:text-green-500">
                     Explore
                  </button>
                  <button id="transitionBtn" className="hover:text-green-500">
                     Become a seller
                  </button>
                  <button id="transitionBtn" className="hover:text-green-500">
                     Become a seller
                  </button>
                  <button id="transitionBtn" className="hover:text-green-500">
                     Sign in
                  </button>
                  <button
                     id="transitionBtn"
                     style={{ transition: "190ms" }}
                     className="joinActive px-6 border border-gray-500 rounded mt-1 hover:bg-green-500 hover:text-gray-100 hover:border-gray-300"
                  >
                     Join
                  </button>
               </div>
            </div>

            {/* LOWERNAVBAR */}
            <div className="flip-card w-full h-8 flex">
               <div
                  className="flip-card-inner"
                  style={{ transform: "rotateX(180deg)" }}
               >
                  <div className="flip-card-front">
                     <ul className="text-base flex justify-evenly items-center text-gray-200 font-normal mt-0.5">
                        <div>
                           <li className="ml-20 navItemBottom">
                              Graphics & design
                           </li>
                           <div></div>
                        </div>
                        <div>
                           <li>Digital Marketing</li>
                           <div></div>
                        </div>
                        <div>
                           <li>Writing & Translation</li>
                           <div></div>
                        </div>
                        <div>
                           <li>Video & Animation</li>
                           <div></div>
                        </div>
                        <div>
                           <li>Music & Audio</li>
                           <div></div>
                        </div>
                        <div>
                           <li>Programming & Tech</li>
                           <div></div>
                        </div>
                        <div>
                           <li>Business</li>
                           <div></div>
                        </div>
                        <div>
                           <li>Lifestyle</li>
                           <div></div>
                        </div>
                        <div>
                           <li className="mr-20">Trending</li>
                           <div></div>
                        </div>
                     </ul>
                  </div>
                  <div className="flip-card-back">
                     <h1>John Doe</h1>
                     <p>Architect and Engineer</p>
                     <p>We love that guy</p>
                  </div>
               </div>
            </div>
            <style jsx>
               {`
                  .flip-card {
                     background-color: transparent;
                     perspective: 1000px;
                     display: hidden;
                     transform: rotateX(180deg);
                  }
                  .flip-card-inner {
                     position: relative;
                     width: 100%;
                     height: 100%;
                     text-align: center;
                     transition: transform 300ms;
                     transform-style: flat;
                     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                  }
                  .flip-card:hover .flip-card-inner {
                     transform: rotateX(180deg);
                  }
                  .flip-card-front,
                  .flip-card-back {
                     position: absolute;
                     width: 100%;
                     height: 100%;
                     -webkit-backface-visibility: hidden;
                     backface-visibility: hidden;
                  }
                  .flip-card-front {
                     background-color: #14365d;
                     color: black;
                  }
                  .flip-card-back {
                     color: white;
                     transform: rotateY(180deg);
                  }
                  #button2 {
                     background-color: #d85c27;
                     transition: 150ms;
                  }
                  #button2:hover {
                     background-color: #fc7814;
                  }
               `}
            </style>
         </div>
      </>
   );
};

export default Navbar;
