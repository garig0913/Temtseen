import Footer from "../components/Footer/Footer";
import WebFont from "webfontloader";
import Navbar from "../components/Navbar/StaticNavbar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const signs = document.querySelectorAll("x-sign");
    const randomIn = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const mixupInterval = (el) => {
      const ms = randomIn(2000, 4000);
      el.style.setProperty("--interval", `${ms}ms`);
    };

    signs.forEach((el) => {
      mixupInterval(el);
      el.addEventListener("webkitAnimationIteration", () => {
        mixupInterval(el);
      });
    });
  }, []);
  WebFont.load({
    google: {
      families: ["Poppins", "Chakra Petch"],
    },
  });
  return (
    <>
      <Navbar />
      <div
        id="NotFoundPage"
        className="w-screen h-screen flex flex-col justify-center items-center"
      >
        <div className="flex items-center">
          <x-sign>404</x-sign>
        </div>
        <h1 className="text-4xl text-white mt-2 font-thin">PAGE NOT FOUND</h1>
      </div>
      <Footer />
      <style jsx>{`
        #NotFoundPage {
          background-image: url("https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80");
          background-position: bottom;
          background-size: cover;
          max-height: 600px;
          font-family: "Chakra Petch", sans-serif;
        }
        .NotFoundText {
          color: #d85c27;
          text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa,
            0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
        }

        x-sign {
          font-size: 4.5rem;
          line-height: 1;
          --interval: 1s;
          display: block;
          text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2), 0 0 40px var(--color3),
            0 0 80px var(--color4);
          will-change: filter, color;
          filter: saturate(60%);
          animation: flicker steps(100) var(--interval) 1s infinite;
          font-weight: 500;
        }

        x-sign {
          color: tomato;
          --color1: orangered;
          --color2: firebrick;
          --color3: maroon;
          --color4: darkred;
        }

        @keyframes flicker {
          50% {
            color: white;
            filter: saturate(200%) hue-rotate(20deg);
          }
        }
      `}</style>
    </>
  );
};

export default Index;
