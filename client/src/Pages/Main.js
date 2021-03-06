import HeaderSlider from "../components/Slider/Slider2";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Partners from "../components/Cards/Partners";
import { useMediaQuery } from "react-responsive";
import InfoVideo from "../components/Infos/Video";
import Reviews from "../components/Infos/Reviews";
import PartnerSlider from "../components/Slider/PartnerSlider";

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

   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
   if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
         window.matchMedia("(prefers-color-scheme: dark)").matches)
   ) {
      document.documentElement.classList.add("dark");
   } else {
      document.documentElement.classList.remove("dark");
   }

   // Whenever the user explicitly chooses light mode
   localStorage.theme = "light";

   // Whenever the user explicitly chooses dark mode
   localStorage.theme = "dark";

   // Whenever the user explicitly chooses to respect the OS preference
   localStorage.removeItem("theme");

   return (
      <>
         <Desktop>
            <Navbar />
            <HeaderSlider colors={colors2} />

            <main style={{ width: "88%" }} className="mx-auto h-auto">
               <PartnerSlider className="mx-auto" />
               <div className="w-full h-auto mt-24">
                  <h1
                     id="popularServices"
                     className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl mb-6 font-medium text-gray-700 dark:text-gray-300"
                  >
                     Popular professional services
                  </h1>
                  <CardSlider2 />
               </div>
               <InfoVideo />
               <Reviews />
            </main>
            <Footer />
         </Desktop>

         <Portrait>
            <Navbar />
            <HeaderSlider colors={colors2} />

            <main style={{ width: "100vw" }} className="h-auto">
               <Partners />
               <div className="w-full h-auto mt-24">
                  <h1 className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl mb-6 font-medium text-gray-700">
                     Popular professional services
                  </h1>
                  <CardSlider2 />
               </div>
               <InfoVideo />
               <Reviews />
            </main>
            <Footer />
         </Portrait>
         <style jsx>{`
            #popularServices::after {
               display: inline-block;
               content: "";
               border-top: 3px solid white;
               width: 15rem;
               margin: 0 1rem;
               transform: translateY(-0.4rem);
               overflow: hidden;
            }
         `}</style>
      </>
   );
};

export default Main;
