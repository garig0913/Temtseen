import Slider from "../Slider/Slider";
import Slider2 from "../Slider/Slider2";
import Slider3 from "../Slider/Slider3";

const Main = () => {
   const colors = ["#387aaa", "#fe9d96", "#394f64"];

   return (
      <>
         <Slider2 />
         <div className="flex justify-center items-center gap-14 mt-8">
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
      </>
   );
};

export default Main;
