import { useState } from "react";
import WebFont from "webfontloader";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = (props) => {
   WebFont.load({
      google: {
         families: ["Anton"],
      },
   });

   const [navbar, setNavbar] = useState(false);

   const changeBg = () => {
      if (window.scrollY > 25) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };
   window.addEventListener("scroll", changeBg);

   return (
      <>
         <div
            style={{
               transition: "250ms",
            }}
            className={
               navbar
                  ? "w-full flex justify-between items-center py-4 fixed navbarBgBlue z-30"
                  : "w-full flex justify-between items-center py-4 fixed bg-transparent z-30"
            }
         >
            <div className="flex items-end ml-6 lg:ml-16">
               <VscThreeBars className="text-3xl text-green-900 mb-0.5 lg:hidden opacity-80 font-bold" />
               <h1
                  className={
                     navbar
                        ? "text-4xl ml-3 fiverrTextActive font-extrabold"
                        : "text-4xl ml-3 fiverrTextInactive font-extrabold"
                  }
                  style={{
                     font: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                     letterSpacing: "-2px",
                  }}
               >
                  fiverr<span className="text-green-400">.</span>
               </h1>
            </div>
            <div
               className={navbar ? "flex items-center gap-7 mr-20 navbarText navbarActive" : "flex items-center gap-7 mr-20 navbarText"}
               style={{
                  fontSize: "1.12rem",
                  transition: '250ms'
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
                  className={navbar ?
                     "joinActive px-6 border border-gray-500 rounded mt-1 hover:bg-green-500 hover:text-gray-100 hover:border-gray-300"
                     : "joinInactive px-6 border border-gray-500 rounded mt-1 hover:text-gray-100 hover:bg-green-500 hover:border-gray-700"
                  }
               >
                  Join
               </button>
            </div>
         </div>
      </>
   );
};

export default Navbar;
