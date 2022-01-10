import Footer from "../components/Footer/Footer";
import WebFont from "webfontloader";
import Navbar from "../components/Navbar/StaticNavbar";
import Sidebar from "../components/Sidebar/Options";
import Card from "../components/Cards/JobCards";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const [categoryName, setName] = useState("");

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Chakra Petch"],
      },
    });
    window.scrollTo(0, 0);
    let pathname = window.location.pathname;
    let lastSegment = pathname.split("/").pop();
    let replacedName = lastSegment.replaceAll("-", " ");
    setName(replacedName);
    console.log(categoryName);
  }, [window.location.pathname]);

  // RESPONSIVENESS
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 600 });
    return isMobile ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 900 });
    return isTablet ? children : null;
  };
  const TabletLandscape = ({ children }) => {
    const isTabletLandscape = useMediaQuery({
      minWidth: 900,
      maxWidth: 1200,
    });
    return isTabletLandscape ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1200, maxWidth: 1800 });
    return isDesktop ? children : null;
  };
  const TV = ({ children }) => {
    const isTV = useMediaQuery({ minWidth: 1800 });
    return isTV ? children : null;
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        className="w-full h-64 flex items-end justify-center"
        style={{
          backgroundImage: "url(https://i.imgur.com/2hGSijN.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          id="categoryName"
          style={{ textShadow: "2px 2px 2px #000" }}
          className="uppercase text-6xl text-white font-semibold mb-6 dark:text-gray-300"
        >
          {categoryName}
        </h1>
      </div>

      <div className="mx-auto mb-10" style={{ width: "88%" }}>
        <div className="dark:text-white ml-4">
          <h1 className="text-2xl font-semibold mb-2 mt-16">Үр дүн : </h1>
          <h1 className="text-sm font-medium">
            Нийт хайлтын тоо: <span className="font-semibold">366</span>
          </h1>
        </div>

        <Mobile>
          <div className="w-full mx-auto mt-8 grid grid-cols-1 gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Mobile>
        <Tablet>
          <div className="w-full mx-auto mt-8 grid grid-cols-2 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Tablet>
        <TabletLandscape>
          <div className="w-full mx-auto mt-8 grid grid-cols-3 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </TabletLandscape>
        <Desktop>
          <div className="w-full mx-auto mt-8 grid grid-cols-4 gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Desktop>
        <TV>
          <div className="w-full mx-auto mt-8 grid grid-cols-5 gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </TV>
      </div>

      <Footer />
      <style jsx>{`
        #categoryName::before,
        #categoryName::after {
          display: inline-block;
          content: "";
          border-top: 3px solid white;
          width: 10rem;
          margin: 0 1rem;
          transform: translateY(-1.1rem);
        }
      `}</style>
    </>
  );
};

export default Index;
