import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/StaticNavbar";
import WebFont from "webfontloader";
import { Link } from "react-router-dom";

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
                  <div className="w-full border-b pb-5">
                     <h1 className="text-3xl mb-1">Post a project</h1>
                     <p className="text-xl font-thin">
                        Describe what you need, then receive custom proposals
                        from freelancers.
                     </p>
                  </div>
                  <p className="text-lg font-thin text-gray-500 my-10">
                     Select a relevant category so that freelancers can find
                     your project
                  </p>
                  <div className="flex">
                     <div className="w-full">
                        <label
                           className="text-sm text-gray-500 font-semibold"
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
                        <label htmlFor="PostJobOption">SUBCATEGORY</label>
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
               <div
                  id="PostJobGrid2"
                  className="bg-gray-100 rounded-sm flex flex-col items-center h-min dark:bg-gray-700"
               >
                  <h1 className="text-gray-500 text-2xl font-bold my-5">
                     USEFUL TIPS
                  </h1>
                  <div
                     style={{
                        boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                     }}
                     className="w-11/12 p-4 bg-white rounded border border-gray-300 text-gray-500"
                  >
                     <h1 className="mb-4">
                        <span className="text-gray-600 font-bold mr-1">1.</span>
                        Describe your project in as much detail as you can
                        comfortably reveal - it will increase the quality of
                        proposals you receive and shorten the selection process.
                     </h1>
                     <h1 className="mb-4">
                        <span className="text-gray-600 font-bold mr-1">2.</span>
                        Upload as much relevant information (pictures,
                        documents, specifications, links, etc) as possible to
                        get a realistic quote.
                     </h1>
                     <h1 className="mb-5">
                        <span className="text-gray-600 font-bold mr-1">3.</span>
                        Match the experience level to your requirements –
                        remember, you’re looking for the best you can afford,
                        not the cheapest you can get.
                     </h1>
                     <h1>
                        For more helpful tips, see our guide Post a project
                     </h1>
                  </div>
               </div>
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
