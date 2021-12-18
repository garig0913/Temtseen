import HeaderSlider from "../components/Slider/Slider2";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CardSlider from "../components/Slider/CardSlider";
import CardSlider2 from "../components/Slider/CardSlider2";

const Main = () => {
  const colors = ["#387aaa", "#fe9d96", "#394f64"];
  const colors2 = ["#1e0946", "#f68f84", "#e3c714", "#e6b747", "#e0221b", "#c23707"];

  return (
    <>
      <Navbar />
      <HeaderSlider colors={colors2} />
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
      <main className="w-11/12 mx-auto h-auto">
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
