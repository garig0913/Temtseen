import HeaderSlider from "../components/Slider/Slider2";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Partners from "../components/Cards/Partners";
import { useMediaQuery } from "react-responsive";

import CardSlider2 from "../components/Slider/CardSlider2";

const Main = () => {
   const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 992 });
      return isDesktop ? children : null;
   };
   const Tablet = ({ children }) => {
      const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
      return isTablet ? children : null;
   };
   const Mobile = ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 767 });
      return isMobile ? children : null;
   };
   const Default = ({ children }) => {
      const isNotMobile = useMediaQuery({ minWidth: 768 });
      return isNotMobile ? children : null;
   };
   const Portrait = ({ children }) => {
      const isPortrait = useMediaQuery({ orientation: "portrait" });
      return isPortrait ? children : null;
   };

   const colors = ["#387aaa", "#fe9d96", "#394f64"];
   const colors2 = [
      "#1e0946",
      "#f68f84",
      "#e3c714",
      "#e6b747",
      "#e0221b",
      "#c23707",
   ];

   return (
      <>
         <Navbar />
         <HeaderSlider colors={colors2} />

         <main style={{ width: "88%" }} className="mx-auto h-auto">
            <Partners />
            <div className="w-full h-auto mt-20">
               <h1 className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl mb-6 font-medium text-gray-700">
                  Popular professional services
               </h1>
               <CardSlider2 />
            </div>
         </main>
         <Footer />
      </>
   );
};

export default Main;
