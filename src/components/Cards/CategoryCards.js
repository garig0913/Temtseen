const Cards = (props) => {
   return (
      <>
         <div id="MainCard">
            <img id="img" className="" src={props.image} />
         </div>
         <style jsx>{`
            #MainCard {
               width: 269px;
               height: 345px;
            }
            #img {
               width: 250px;
               object-fit: contain;
            }
         `}</style>
      </>
   );
};

export default Cards;
