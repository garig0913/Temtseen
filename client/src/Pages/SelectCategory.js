import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/StaticNavbar";
import WebFont from "webfontloader";
import { Link } from "react-router-dom";
import Tips from "../components/Infos/UsefulTips";

const Index = () => {
   useEffect(() => {
      WebFont.load({
         google: {
            families: ["Open Sans"],
         },
      });
   }, []);

   const [firstSelect, SetfirstSelect] = useState(false);
   const [secondSelect, SetsecondSelect] = useState(false);

   return (
      <>
         <Navbar />
         <div className="w-full h-full bg-gray-200 pt-7 dark:bg-gray-900">
            <main
               id="PostJobGrids"
               style={{ width: "87%" }}
               className="mx-auto grid grid-cols-2 gap-10 pb-10 dark:bg-gray-900"
            >
               <div
                  id="PostJobGrid1"
                  className="bg-white rounded-sm p-4 flex flex-col dark:bg-gray-700"
               >
                  <div className="w-full border-b pb-5 dark:text-gray-200">
                     <h1 className="text-3xl mb-1">Post a project</h1>
                     <p className="text-xl font-thin">
                        Describe what you need, then receive custom proposals
                        from freelancers.
                     </p>
                  </div>
                  <p className="text-lg font-thin text-gray-500 my-10 dark:text-gray-300">
                     Select a relevant category so that freelancers can find
                     your project
                  </p>
                  <div className="flex">
                     <div className="w-full">
                        <label
                           className="text-sm text-gray-500 font-semibold dark:text-gray-300"
                           htmlFor="PostJobOption"
                        >
                           CATEGORY
                        </label>
                        <select
                           onChange={() => SetfirstSelect(true)}
                           className="w-11/12 pl-2 py-1.5 focus:outline-none border rounded"
                           id="PostJobOption"
                        >
                           <option
                              className="text-sm font-semibold hidden"
                              value=""
                              disabled
                              selected
                           >
                              Select
                           </option>
                           <option
                              className="text-sm font-semibold"
                              value="volvo"
                           >
                              Volvo
                           </option>
                           <option
                              className="text-sm font-semibold"
                              value="saab"
                           >
                              Saab
                           </option>
                           <option
                              className="text-sm font-semibold"
                              value="opel"
                           >
                              Opel
                           </option>
                           <option
                              className="text-sm font-semibold"
                              value="audi"
                           >
                              Audi
                           </option>
                        </select>
                     </div>

                     <div className="w-full">
                        <label
                           htmlFor="PostJobOption"
                           className="dark:text-gray-100"
                        >
                           SUBCATEGORY
                        </label>
                        <select
                           onChange={() => SetsecondSelect(true)}
                           disabled={firstSelect ? false : true}
                           style={
                              firstSelect
                                 ? { opacity: "1" }
                                 : { opacity: "0.5", cursor: "not-allowed" }
                           }
                           onClick={
                              firstSelect
                                 ? () => console.log("allowed")
                                 : () => console.log("not allowed")
                           }
                           className="w-11/12 pl-2 py-1.5 focus:outline-none border rounded"
                           id="PostJobOption"
                        >
                           <option
                              className="text-sm font-semibold hidden"
                              value=""
                              disabled
                              selected
                           >
                              Select
                           </option>
                           <option
                              className="text-sm font-semibold"
                              value="volvo"
                           >
                              Volvo
                           </option>
                           <option
                              className="text-sm font-semibold"
                              value="saab"
                           >
                              Saab
                           </option>
                           <option
                              className="text-sm font-semibold"
                              value="opel"
                           >
                              Opel
                           </option>
                           <option
                              className="text-sm font-semibold"
                              value="audi"
                           >
                              Audi
                           </option>
                        </select>
                     </div>
                  </div>
                  <div className="flex justify-center">
                     {secondSelect ? (
                        <Link to={"postjob"}>
                           <button
                              style={{
                                 transition:
                                    "background-color 0.11s ease-in 0s",
                              }}
                              className="py-3 px-10 rounded mx-auto
               text-white font-semibold text-sm mt-36 mb-14 bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600"
                           >
                              CONTINUE
                           </button>
                        </Link>
                     ) : (
                        <button
                           onClick={() =>
                              window.alert("Please select a category")
                           }
                           style={{
                              transition: "background-color 0.11s ease-in 0s",
                           }}
                           className="py-3 px-10 rounded mx-auto
               text-white font-semibold text-sm mt-36 mb-14 bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600"
                        >
                           CONTINUE
                        </button>
                     )}
                  </div>
               </div>
               <Tips />
            </main>
         </div>
         <Footer />
         <style jsx>
            {`
               #PostJobGrids {
                  grid-template-columns: 1fr 0.5fr;
               }
               #PostJobGrid2 {
               }
               #PostJobOption {
                  background: rgb(255, 255, 255);
                  background: linear-gradient(
                     0deg,
                     rgba(255, 255, 255, 1) 0%,
                     rgba(255, 255, 255, 1) 41%,
                     rgba(240, 240, 240, 1) 100%
                  );
                  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
                     rgba(0, 0, 0, 0.24) 0px 1px 2px;
               }
            `}
         </style>
      </>
   );
};

export default Index;
