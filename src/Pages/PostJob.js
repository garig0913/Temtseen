import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/StaticNavbar";
import WebFont from "webfontloader";
import { FaFacebookF } from "react-icons/fa";
import HoverInput from "../components/Inputs/HoverInput";
import { AiFillQuestionCircle } from "react-icons/ai";

const Index = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans"],
      },
    });
  }, []);

  const [secondSelect, SetSecondSelect] = useState(false);
  console.log(secondSelect);
  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-gray-200 pt-7">
        <main
          id="PostJobGrids"
          style={{ width: "87%" }}
          className="mx-auto grid grid-cols-2 gap-10 pb-10"
        >
          {/* GRID1 */}
          <div id="PostJobGrid1" className="bg-white rounded-sm p-4 flex flex-col">
            <div className="w-full border-b pb-5">
              <h1 className="text-3xl mb-1">Post a project</h1>
              <p className="text-xl font-thin">
                Describe what you need, then receive custom proposals from freelancers.
              </p>
            </div>
            <div
              style={{ gridTemplateColumns: "1fr 0.85fr" }}
              className="grid grid-cols-2 gap-10 mt-10"
            >
              <div className="flex flex-col ">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-500" htmlFor="PostJobEmail">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="PostJobEmail"
                    className="focus:outline-none mt-2 border border-gray-300 rounded-md py-1.5 pl-3"
                  />
                </div>
                <div className="flex gap-5 mt-10">
                  <HoverInput label="FIRST NAME" py="1.5" />
                  <HoverInput label="LAST NAME" py="1.5">
                    <AiFillQuestionCircle className="text-blue-600 text-sm" />
                  </HoverInput>
                </div>
              </div>
              <div className="text-white  flex justify-center items-center">
                <button
                  style={{ transition: "background-color 0.11s ease-in 0s" }}
                  id="FBbtn"
                  className="rounded py-4 px-3 flex items-center border border-indigo-700 hover:text-indigo-700"
                >
                  <FaFacebookF className="mr-4" />
                  <h1 className="font-semibold">Sign up with Facebook</h1>
                </button>
              </div>
            </div>
            <h1 className="text-gray-500 font-light text-lg mt-24 mb-16">
              Select a relevant category so that freelancers can find your project
            </h1>
            <HoverInput
              placeholder="e.g I need a flyer and poster created"
              label="PROJECT TITLE"
              py="2"
              desc="Try to summarise your project in one sentence."
            />
            <div className="block w-full mb-10">
              <div className="flex justify-between">
                <label className="text-sm font-semibold text-gray-500" htmlFor="PostJobEmail">
                  PROJECT DESCRIPTION
                </label>
                <AiFillQuestionCircle className="text-blue-600 text-sm" />
              </div>

              <textarea
                style={{ transition: "background-color 0.11s ease-in 0s" }}
                id="PostJobEmail"
                className="pl-3 focus:outline-none mt-2 bg-gray-100 focus:bg-white w-full border border-gray-500 rounded-md py-1 h-40"
              ></textarea>
              <p className="text-sm text-gray-400 font-light mt-1">
                Be descriptive, projects with good descriptions are more popular with our
                freelancers.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h1 className="text-sm font-semibold text-gray-500">
                  UPLOAD SAMPLES AND OTHER HELPFUL MATERIAL
                </h1>
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

              <label
                className="mt-2 text-gray-600 italic text-sm text-center bg-gray-100 focus:bg-white w-full border-dashed border border-gray-800 rounded-md py-10"
                htmlFor="PostJobFile"
              >
                Drop files here <br />
                or browse to add attachments
              </label>
              <input type="file" id="PostJobFile" hidden />
            </div>
          </div>
          {/* GRID2 */}
          <div
            id="PostJobGrid2"
            className="bg-gray-100 rounded-sm flex flex-col items-center h-min"
          >
            <h1 className="text-gray-500 text-2xl font-bold my-5">USEFUL TIPS</h1>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
              }}
              className="w-11/12 p-4 bg-white rounded border border-gray-300 text-gray-500"
            >
              <h1 className="mb-4">
                <span className="text-gray-600 font-bold mr-1">1.</span>
                Describe your project in as much detail as you can comfortably reveal - it will
                increase the quality of proposals you receive and shorten the selection process.
              </h1>
              <h1 className="mb-4">
                <span className="text-gray-600 font-bold mr-1">2.</span>
                Upload as much relevant information (pictures, documents, specifications, links,
                etc) as possible to get a realistic quote.
              </h1>
              <h1 className="mb-5">
                <span className="text-gray-600 font-bold mr-1">3.</span>
                Match the experience level to your requirements – remember, you’re looking for the
                best you can afford, not the cheapest you can get.
              </h1>
              <h1>For more helpful tips, see our guide Post a project</h1>
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
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
          }
          #FBbtn {
            background-color: #3b5998;
          }
          #FBbtn:hover {
            background-color: white;
          }
        `}
      </style>
    </>
  );
};

export default Index;
