const Index = () => {
   return (
      <>
         <div
            id="PostJobGrid2"
            className="bg-gray-100 rounded-sm flex flex-col items-center h-min dark:bg-gray-700"
         >
            <h1 className="text-gray-500 text-2xl font-bold my-5 dark:text-gray-300 mr-1">
               USEFUL TIPS
            </h1>
            <div
               style={{
                  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
               }}
               className="w-11/12 p-4 bg-white rounded border border-gray-300 text-gray-500 dark:bg-gray-200 dark:text-gray-700"
            >
               <h1 className="mb-4">
                  <span className="text-gray-900 font-bold mr-1">1.</span>
                  Describe your project in as much detail as you can comfortably
                  reveal - it will increase the quality of proposals you receive
                  and shorten the selection process.
               </h1>
               <h1 className="mb-4">
                  <span className="text-gray-900 font-bold mr-1">2.</span>
                  Upload as much relevant information (pictures, documents,
                  specifications, links, etc) as possible to get a realistic
                  quote.
               </h1>
               <h1 className="mb-5">
                  <span className="text-gray-900 font-bold mr-1">3.</span>
                  Match the experience level to your requirements – remember,
                  you’re looking for the best you can afford, not the cheapest
                  you can get.
               </h1>
               <h1>For more helpful tips, see our guide Post a project</h1>
            </div>
         </div>
      </>
   );
};

export default Index;
