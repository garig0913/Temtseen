import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from "../Buttons/SliderArrowNext";
import Prev from "../Buttons/SliderArrowPrev";
import Card from "../Cards/CategoryCards";
import { useMediaQuery } from "react-responsive";

const SimpleSlider = () => {
   const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 1010 });
      return isDesktop ? children : null;
   };

   const Portrait = ({ children }) => {
      const Portrait = useMediaQuery({ orientation: "portrait" });
      return Portrait ? children : null;
   };
   let data = [
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
         desc: "Build your brand",
         title: "Logo Design",
      },
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
         desc: "Customize your site",
         title: "Wordpress",
      },
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
         desc: "Share your message",
         title: "Voice over",
      },
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
         desc: "Engage your audience",
         title: "Video Explainer",
      },
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
         desc: "Reach more Customers",
         title: "Social media",
      },
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
         desc: "Unlock growth online",
         title: "SEO",
      },
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
         desc: "Color your dreams",
         title: "Illustration",
      },
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
         desc: "Go global",
         title: "Translation",
      },
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png",
         desc: "Learn your business",
         title: "Data entry",
      },
      {
         image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png",
         desc: "Showcase your story",
         title: "Book covers",
      },
   ];
   var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      accessibility: true,
      adaptiveHeight: true,
      nextArrow: <Next />,
      prevArrow: <Prev />,
      responsive: [
         {
            breakpoint: 1600,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 5,
               infinite: true,
            },
         },
         {
            breakpoint: 1350,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 5,
               infinite: true,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (
      <>
         <Slider {...settings}>
            {data.map((content) => {
               return (
                  <Card
                     image={content.image}
                     desc={content.desc}
                     title={content.title}
                  />
               );
            })}
         </Slider>
         <style jsx>{`
            .slick-slide > div {
               display: grid;
               place-items: center;
               width: 99%;
               margin: auto;
            }
            .slick-prev {
               z-index: 1;
            }
            .slick-next {
               z-index: 1;
            }
         `}</style>
      </>
   );
};

export default SimpleSlider;
