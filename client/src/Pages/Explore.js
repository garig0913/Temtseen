import Footer from "../components/Footer/Footer";
import WebFont from "webfontloader";
import Navbar from "../components/Navbar/StaticNavbar";
import Sidebar from "../components/Sidebar/Options";
import Card from "../components/Cards/JobCards";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Index = () => {
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

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Chakra Petch"],
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="mx-auto mb-16" style={{ width: "88%" }}>
        <div className="ml-4 text-gray-900 dark:text-gray-100">
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
    </>
  );
};

export default Index;
