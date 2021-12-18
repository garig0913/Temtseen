const Cards = (props) => {
   return (
      <>
         <div className="relative" id="MainCard">
            <div className="text-white absolute top-3 left-7">
               <p className="font-medium">{props.desc}</p>
               <h1 className="text-2xl font-medium">{props.title}</h1>
            </div>
            <img id="img" className="" src={props.image} />
         </div>
         <style jsx>{`
            #MainCard {
               width: 269px;
               height: 345px;
            }
            #img {
               width: 250px;
               margin: auto;
               object-fit: contain;
            }
         `}</style>
      </>
   );
};

export default Cards;
