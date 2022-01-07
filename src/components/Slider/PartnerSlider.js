import React from "react";
import { ThemeContext } from "../../darkmode/ThemeContext";
import Deloitte from "../../static/images/deloitte.png";
const PartnerSlider = (props) => {
   const { theme, setTheme } = React.useContext(ThemeContext);

   const lightStyle = `
   #absolute-shadow {
      box-shadow: 0 0 14px 14px white inset;
      z-index: 1;
   }
   .outer-container {
      height: auto;
      width: 1400px;
   }

   .container {
      overflow: hidden;
      display: flex;
      height: full;
      width: full;
      margin: 0 auto;
      z-index: -10;
   }

   .container div {
      height: 60px;
      min-width: 100px;
      margin-left: 100px;
      animation: slide 15s linear infinite;
   }

   @keyframes slide {
      0% {
         transform: translate3d(0, 0, 0);
      }
      100% {
         transform: translate3d(
            -1200px,
            0,
            0
         ); /* The image width */
      }
   }`;

   const darkStyle = `
   #partnerBrightness {
      filter: brightness(1.5);
      
   }
   #absolute-shadow {
      box-shadow: 0 0 14px 14px #111827 inset;
      z-index: 1;
   }
   .outer-container {
      height: auto;
      width: 1400px;
   }

   .container {
      overflow: hidden;
      display: flex;
      height: full;
      width: full;
      margin: 0 auto;
      z-index: -10;
   }

   .container div {
      height: 55px;
      min-width: 100px;
      margin-left: 100px;
      animation: slide 15s linear infinite;
   }

   @keyframes slide {
      0% {
         transform: translate3d(0, 0, 0);
      }
      100% {
         transform: translate3d(
            -1200px,
            0,
            0
         ); /* The image width */
      }
   }
   `;

   return (
      <>
         <div className="flex flex-col items-center">
            <div>
               <h1
                  style={{ letterSpacing: "1px" }}
                  className="font-semibold text-gray-400 mt-8 mb-4 text-lg "
               >
                  Trusted by
               </h1>
            </div>
            <div className="relative outer-container">
               <div
                  id="absolute-shadow"
                  className="w-full h-full absolute left-0 top-0"
               ></div>
               <div className="container mt-12 pr-6 pl-6 border-b border-gray-300 pb-8 pt-6">
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src={
                           theme === "dark"
                              ? "https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
                              : "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
                        }
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src={
                           theme === "dark"
                              ? Deloitte
                              : "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
                        }
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/airbus-logo2.svg"
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src={
                           theme === "dark"
                              ? "https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
                              : "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
                        }
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src={
                           theme === "dark"
                              ? Deloitte
                              : "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
                        }
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
                        alt="abc"
                     />
                  </div>
                  <div>
                     <img
                        id="partnerBrightness"
                        className="w-full h-full"
                        src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/airbus-logo2.svg"
                        alt="abc"
                     />
                  </div>
               </div>
            </div>
         </div>
         <style jsx>{theme === "dark" ? darkStyle : lightStyle}</style>
      </>
   );
};

export default PartnerSlider;
