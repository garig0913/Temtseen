import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/StaticNavbar";
import Tips from "../components/Infos/UsefulTips";
import WebFont from "webfontloader";
import { FaFacebookF } from "react-icons/fa";
import HoverInput from "../components/Inputs/HoverInput";
import { AiFillQuestionCircle } from "react-icons/ai";
import {
   BsCurrencyDollar,
   BsCurrencyEuro,
   BsCurrencyPound,
} from "react-icons/bs";

const Index = () => {
   useEffect(() => {
      WebFont.load({
         google: {
            families: ["Open Sans"],
         },
      });
   }, []);

   const [secondSelect, SetSecondSelect] = useState(false);

   const [email, Setemail] = useState("");
   const [firstName, SetfirstName] = useState("");
   const [lastName, SetlastName] = useState("");
   const [projectTitle, SetprojectTitle] = useState("");
   const [projectDesc, SetprojectDesc] = useState("");
   const [imgUrl, SetimgUrl] = useState("");
   const [budget, Setbudget] = useState("");
   const [currency, Setcurrency] = useState("USD");

   const submitHandler = () => {
      const post = {
         email: email,
         firstName: firstName,
         lastName: lastName,
         projectTitle: projectTitle,
         projectDesc: projectDesc,
         imgUrl: imgUrl,
         budget: budget,
         currency: currency,
      };
      if (
         email &&
         firstName &&
         lastName &&
         projectTitle &&
         projectDesc &&
         imgUrl &&
         budget &&
         currency !== ""
      ) {
         fetch("http://localhost:3001/postProject", {
            method: "post",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
         })
            .then((response) => {
               if (!response.ok) {
                  throw Error("Could not post project...");
               }
               return response.json();
            })
            .then((result) => alert(result.message))
            .catch((err) => alert(err.message));
      }
   };

   return (
      <>
         <Navbar />
         <div className="w-full h-full bg-gray-200 pt-7 dark:bg-gray-900">
            <main
               id="PostJobGrids"
               style={{ width: "87%" }}
               className="mx-auto grid grid-cols-2 gap-10 pb-10"
            >
               {/* GRID1 */}
               <div
                  id="PostJobGrid1"
                  className="bg-white rounded-sm p-5 flex flex-col dark:bg-gray-700 dark:text-gray-200"
               >
                  <div className="w-full border-b pb-5">
                     <h1 className="text-3xl mb-1">Post a project</h1>
                     <p className="text-xl font-thin">
                        Describe what you need, then receive custom proposals
                        from freelancers.
                     </p>
                  </div>
                  <div
                     style={{ gridTemplateColumns: "1fr 0.85fr" }}
                     className="grid grid-cols-2 gap-10 mt-10"
                  >
                     <div className="flex flex-col">
                        <div className="flex flex-col">
                           <label
                              className="text-sm font-semibold text-gray-500 dark:text-gray-200"
                              htmlFor="PostJobEmail"
                           >
                              EMAIL ADDRESS
                           </label>
                           <input
                              onChange={(e) => Setemail(e.target.value)}
                              value={email}
                              id="PostJobEmail"
                              className="focus:outline-none mt-2 border border-gray-300 rounded-md py-1.5 pl-3"
                           />
                        </div>
                        <div className="flex gap-5 mt-10">
                           <HoverInput
                              onChange={(e) => SetfirstName(e.target.value)}
                              value={firstName}
                              label="FIRST NAME"
                              py="1.5"
                              id="firstName"
                              htmlfor="firstName"
                           />
                           <HoverInput
                              onChange={(e) => SetlastName(e.target.value)}
                              value={lastName}
                              label="LAST NAME"
                              py="1.5"
                              id="lastName"
                              htmlfor="lastName"
                           >
                              <AiFillQuestionCircle className="text-blue-600 text-sm" />
                           </HoverInput>
                        </div>
                     </div>
                     <div className="text-white  flex justify-center items-center">
                        <button
                           style={{
                              transition: "background-color 0.11s ease-in 0s",
                           }}
                           id="FBbtn"
                           className="rounded py-4 px-3 flex items-center border border-indigo-700 hover:text-indigo-700"
                        >
                           <FaFacebookF className="mr-4" />
                           <h1 className="font-semibold">
                              Sign up with Facebook
                           </h1>
                        </button>
                     </div>
                  </div>
                  <h1 className="text-gray-500 font-light text-lg mt-24 mb-16 dark:text-gray-200">
                     Select a relevant category so that freelancers can find
                     your project
                  </h1>
                  <HoverInput
                     onChange={(e) => SetprojectTitle(e.target.value)}
                     value={projectTitle}
                     placeholder="e.g I need a flyer and poster created"
                     label="PROJECT TITLE"
                     py="2"
                     desc="Try to summarise your project in one sentence."
                     id="projectTitle"
                     htmlfor="projectTitle"
                  />
                  <div className="block w-full mb-10">
                     <div className="flex justify-between">
                        <label
                           className="text-sm font-semibold text-gray-500 dark:text-gray-200"
                           htmlFor="projectDescription"
                        >
                           PROJECT DESCRIPTION
                        </label>
                        <AiFillQuestionCircle className="text-blue-600 text-sm" />
                     </div>

                     <textarea
                        onChange={(e) => SetprojectDesc(e.target.value)}
                        value={projectDesc}
                        style={{
                           transition: "background-color 0.11s ease-in 0s",
                        }}
                        id="projectDescription"
                        className="pl-3 focus:outline-none mt-2 bg-gray-100 focus:bg-white w-full border border-gray-500 rounded-md py-1 h-40"
                     ></textarea>
                     <p className="text-sm text-gray-400 font-light mt-1 dark:text-gray-200">
                        Be descriptive, projects with good descriptions are more
                        popular with our freelancers.
                     </p>
                  </div>
                  <div className="flex flex-col">
                     <div className="flex justify-between">
                        <label
                           htmlFor="postJobImg"
                           className="text-sm font-semibold text-gray-500 dark:text-gray-200"
                        >
                           DROP IMAGE URL
                        </label>
                        <div className="relative">
                           <AiFillQuestionCircle className="text-blue-600 text-sm" />
                           <div
                              style={{
                                 bottom: "-10px",
                              }}
                              className="absolute left-1 w-48 "
                           ></div>
                        </div>
                     </div>

                     <input
                        onChange={(e) => SetimgUrl(e.target.value)}
                        value={imgUrl}
                        id="postJobImg"
                        type="text"
                        className="py-2 px-3 mt-2 focus:outline-none border border-gray-500 rounded"
                     />
                     {/* <label
                        className="mt-2 text-gray-600 italic text-sm text-center bg-gray-100 focus:bg-white w-full border-dashed border border-gray-800 rounded-md py-10"
                        htmlFor="PostJobFile"
                     >
                        Drop files here <br />
                        or browse to add attachments
                     </label>
                     <input type="file" id="PostJobFile" hidden /> */}
                  </div>
                  <div className="w-full flex mt-14 gap-10">
                     <div>
                        <h1 className="text-sm font-semibold text-gray-500 dark:text-gray-200 mb-1">
                           BUDGET
                        </h1>
                        <div className="flex items-center border rounded-md border-gray-500">
                           <BsCurrencyDollar className="ml-3 text-gray-600" />
                           <input
                              onChange={(e) => Setbudget(e.target.value)}
                              value={budget}
                              type="number"
                              placeholder="0.00"
                              className="px-4 py-2 text-gray-800 focus:outline-none"
                           />
                        </div>
                     </div>
                     <div>
                        <h1 className="text-sm font-semibold text-gray-500 dark:text-gray-200 mb-1">
                           CURRENCY
                        </h1>
                        <div className="flex items-center border rounded-md border-gray-500">
                           <BsCurrencyDollar className="ml-3 text-gray-600" />
                           <select
                              defaultValue="USD"
                              id="postJobCurrency"
                              onChange={(e) => console.log(e.target.value)}
                              className="px-3 py-2 w-44 focus:outline-none"
                           >
                              <option value={"USD"}>USD</option>
                              <option value={"GBP"}>GBP</option>
                              <option value={"EUR"}>EUR</option>
                           </select>
                        </div>
                     </div>
                  </div>

                  <div>
                     <button
                        onClick={submitHandler}
                        id="PostProjectBTN"
                        className="mt-10 mb-8 rounded py-4 px-8 flex items-center border text-white border-indigo-700 hover:text-blue-800"
                     >
                        <h1 className="font-semibold">POST PROJECT</h1>
                     </button>
                  </div>
               </div>
               {/* GRID2 */}
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
               #FBbtn {
                  background-color: #3b5998;
               }
               #FBbtn:hover {
                  background-color: white;
               }
               #PostProjectBTN {
                  background-color: #3d66d7;
                  transition: background-color 0.11s ease-in 0s;
               }
               #PostProjectBTN:hover {
                  background-color: white;
               }
            `}
         </style>
      </>
   );
};

export default Index;
