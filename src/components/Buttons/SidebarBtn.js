const Index = (props) => {
   return (
      <>
         <button
            onClick={props.onClick}
            style={{ left: "100%", top: "33%", transition: "450ms" }}
            className={`absolute`}
         >
            <button id="a" class="transparent" href="#">
               <p>
                  <span class="bg"></span>
                  <span class="base"></span>
                  <span class="text">Filters</span>
               </p>
            </button>
         </button>
         <style jsx>{`
            #a {
               width: 100px;
               max-width: 240px;
               height: 45px;
               font-size: 0.8rem;
               font-weight: 900;
               color: #ff4655;
               text-align: center;
               text-transform: uppercase;
               text-decoration: none;
               box-shadow: 0 0 0 1px inset rgba(236, 232, 225, 0.3);
               position: relative;
               opacity: 0.65;
            }
            #a.white:hover > p {
               color: #ece8e1;
            }
            #a.white > p {
               background: #ece8e1;
               color: #0f1923;
            }
            #a.white > p span.base {
               border: 1px solid transparent;
            }
            #a.transparent:hover > p {
               color: white;
            }
            #a.transparent:hover > p span.text {
               box-shadow: 0 0 0 1px #ece8e1;
            }
            #a.transparent > p {
               background: #0f1923;
               color: #ece8e1;
            }
            #a.transparent > p span.base {
               border: 1px solid #ece8e1;
            }
            #a:after,
            #a:before {
               content: "";
               width: 1px;
               position: absolute;
               height: 8px;
               background: #0f1923;
               left: 0;
               top: 50%;
               transform: translateY(-50%);
            }
            #a:before {
               right: 0;
               left: initial;
            }
            #a p {
               margin: 0;
               height: 45px;
               line-height: 45px;
               box-sizing: border-box;
               z-index: 1;
               left: 0;
               width: 100px;
               position: relative;
               overflow: hidden;
            }
            #a p span.base {
               box-sizing: border-box;
               position: absolute;
               z-index: 2;
               width: 100%;
               height: 100%;
               left: 0;
               border: 1px solid #ff4655;
            }
            #a p span.base:before {
               content: "";
               width: 2px;
               height: 2px;
               left: -1px;
               top: -1px;
               background: #0f1923;
               position: absolute;
               transition: 0.3s ease-out all;
            }
            #a p span.bg {
               left: -5%;
               position: absolute;
               background: #d85c27;
               width: 0;
               height: 100%;
               z-index: 3;
               transition: 0.3s ease-out all;
               transform: skewX(-10deg);
            }
            #a p span.text {
               z-index: 4;
               width: 100%;
               height: 100%;
               position: absolute;
               left: 0;
               top: 0;
            }
            #a:hover {
               color: #ece8e1;
            }
            #a:hover span.bg {
               width: 110%;
            }
            #a:hover span.text:after {
               background: #ece8e1;
            }
         `}</style>
      </>
   );
};

export default Index;
