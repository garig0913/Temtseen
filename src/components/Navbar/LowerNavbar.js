const LowerNavbar = (props) => {
   return (
      <>
         <h1 className="btn">flip</h1>
         <div className="flip-card w-full h-10">
            <div className="flip-card-inner">
               <div className="flip-card-front">
                  <ul className="flex gap-10">
                     <li>hello</li>
                     <li>hello</li>
                     <li>hello</li>
                     <li>hello</li>
                     <li>hello</li>
                     <li>hello</li>
                  </ul>
               </div>
               <div className="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect and Engineer</p>
                  <p>We love that guy</p>
               </div>
            </div>
         </div>
         <style jsx>
            {`
               body {
                  font-family: Arial, Helvetica, sans-serif;
                  transform: rotateX(100deg);
               }

               .flip-card {
                  background-color: transparent;
                  perspective: 1000px;
               }

               .flip-card-inner {
                  position: relative;
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  transition: transform 0.3s;
                  transform-style: flat;
                  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
               }

               .flip-card:hover .flip-card-inner {
                  transform: rotateX(280deg);
               }

               .flip-card-front,
               .flip-card-back {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  -webkit-backface-visibility: hidden;
                  backface-visibility: hidden;
               }

               .flip-card-front {
                  background-color: #bbb;
                  color: black;
               }

               .flip-card-back {
                  background-color: #2980b9;
                  color: white;
                  transform: rotateY(180deg);
               }
            `}
         </style>
      </>
   );
};

export default LowerNavbar;
