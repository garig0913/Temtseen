import { AiFillQuestionCircle } from "react-icons/ai";

const Index = (props) => {
   return (
      <>
         {" "}
         <div className="flex justify-between">
            <label
               className="text-sm font-semibold text-gray-500"
               htmlFor="PostJobEmail"
            >
               {props.label}
            </label>
            <div>
               <AiFillQuestionCircle className="text-blue-600 text-sm" />
            </div>
         </div>
      </>
   );
};

export default Index;
