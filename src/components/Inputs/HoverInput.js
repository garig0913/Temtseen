import Info from "../Infos/PostJobInfo";

const Index = (props) => {
   return (
      <>
         <div className="block w-full mb-8">
            <Info label={props.label} />

            <input
               placeholder={props.placeholder}
               style={{ transition: "background-color 0.11s ease-in 0s" }}
               id="PostJobEmail"
               className={`italicPlaceholder pl-3 focus:outline-none mt-2 bg-gray-100 focus:bg-white w-full border border-gray-500 rounded py-${props.py}`}
            />
            <p className="text-sm text-gray-400 font-light mt-1">
               {props.desc}
            </p>
         </div>
         <style jsx>{`
            ::-webkit-input-placeholder {
               font-style: italic;
               font-size: 0.85rem;
            }
            :-moz-placeholder {
               font-style: italic;
               font-size: 0.85rem;
            }
            ::-moz-placeholder {
               font-style: italic;
               font-size: 0.85rem;
            }
            :-ms-input-placeholder {
               font-style: italic;
               font-size: 0.85rem;
            }
         `}</style>
      </>
   );
};

export default Index;
