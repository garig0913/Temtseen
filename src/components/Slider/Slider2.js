import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../static/style/slider2.scss";
import { Carousel } from "react-responsive-carousel";
import { BsSearch } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "./styles.css";

import Skills from "../Buttons/Skills";

import SwiperCore, {
   EffectFade,
   Navigation,
   Pagination,
   Autoplay,
} from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const Slider2 = (props) => {
   WebFont.load({
      google: {
         families: ["Nunito"],
      },
   });
   const data = [
      {
         image: "https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-1/hero-instance-1--desktop.webp",
         color: "#1e0946",
         skills: [
            "web design",
            "ux/ui design",
            "android app development",
            "software testing",
         ],
         placeholder: "web development",
      },
      {
         image: "https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-6/hero-instance-6--desktop.webp",
         color: "#f68f84",
         skills: ["graphic design", "3D logo", "branding", "illustration"],
         placeholder: "graphic design",
      },
      {
         image: "https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-3/hero-instance-3--desktop.webp",
         color: "#d9b100",
         skills: [
            "wordpress",
            "php development",
            "databases",
            "software testing",
         ],
         placeholder: "advertising",
      },
      {
         image: "https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-5/hero-instance-5--desktop.webp",
         color: "#91206b",
         skills: [
            "amazon store management",
            "cms development",
            "link building",
            "adwords",
         ],
         placeholder: "e-commerce",
      },
      {
         image: "https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-4/hero-instance-4--desktop.webp",
         color: "#e0221b",
         skills: ["3D logo", "business cards", "branding", "vector logo"],
         placeholder: "logo design",
      },
      {
         image: "https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-2/hero-instance-2--desktop.webp",
         color: "#c23707",
         skills: ["logo design", "illustration", "animation", "3D design"],
         placeholder: "product design",
      },
   ];

   const [slideIndex, setslideIndex] = useState(0);

   const changeColor = () => {
      if (slideIndex === data.length - 1) {
         setslideIndex(0);
      } else {
         setslideIndex(slideIndex + 1);
      }
   };

   let index = Swiper.realIndex;
   console.log(index);

   return (
      <>
         <div
            id="grid"
            className="grid grid-cols-2 border-b border-gray-300 pb-5 pt-20 pb-12 bg-gray-50"
         >
            {/* GRID1 */}
            <div
               id="grids"
               className="flex flex-col justify-center items-end h-screen"
            >
               <div id="leftDiv">
                  <h1
                     id="colorChangeH1"
                     style={{ color: `${data[slideIndex].color}` }}
                     className="text-7xl font-black mb-7"
                  >
                     Make bright
                     <br /> ideas happen
                  </h1>
                  <h1 className="text-3xl text-gray-900 font-semibold mb-12">
                     Find the best freelancers to deliver your projects
                  </h1>
                  <div
                     id="inputShadow"
                     className="flex h-16 rounded-md hover:shadow-2xl"
                  >
                     <div className="h-full w-14 bg-white text-gray-600 rounded-l-md flex justify-center items-center">
                        <BsSearch />
                     </div>
                     <input
                        placeholder={
                           "Try " + `"${data[slideIndex].placeholder}"`
                        }
                        className="h-full w-full focus:outline-none"
                     />
                     <button
                        style={{ backgroundColor: `${data[slideIndex].color}` }}
                        id="button2"
                        className="h-full px-5 rounded-r-md text-white "
                     >
                        Search
                     </button>
                  </div>
                  <div className="flex w-auto h-auto mt-5 ml-1 items-center">
                     <h1 className="mr-3 text-gray-400 text-sm">
                        Popular skills:
                     </h1>
                     {data[slideIndex].skills.map((skills) => {
                        return <Skills text={skills} />;
                     })}
                  </div>
               </div>
            </div>

            {/* GRID2 */}
            <Swiper
               id="grids"
               onAutoplay={changeColor}
               loop={true}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
               }}
               spaceBetween={30}
               effect={"fade"}
               fadeEffect={{
                  crossFade: true,
               }}
               navigation={true}
               pagination={{
                  clickable: true,
               }}
            >
               {data.map((slides) => {
                  return (
                     <SwiperSlide className="mt-4 pr-10">
                        <img
                           alt='abc'
                           id="imgSlider"
                           src={slides.image}
                           style={{
                              width: "100%",
                              height: "90%",
                              objectFit: "contain",
                           }}
                        />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </>
   );
};

export default Slider2;
