import Slider from "../Slider/Slider";
import Slider2 from "../Slider/Slider2";
import Slider3 from "../Slider/Slider3";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
  const colors2 = ["#1e0946", "#f68f84", "#e3c714", "#e6b747", "#e0221b", "#c23707"];
  const colors = ["#387aaa", "#fe9d96", "#394f64"];

  return (
    <>
      <Navbar />
      <Slider2 colors={colors2} />
      <div className="flex justify-center items-center gap-14 bg-gray-100">
        <h1 className="text-lg font-semibold text-gray-400">Trusted by:</h1>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
          alt="abc"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
          alt="abc"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
          alt="abc"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
          alt="abc"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
          alt="abc"
        />
      </div>
      <Footer />
    </>
  );
};

export default Main;
