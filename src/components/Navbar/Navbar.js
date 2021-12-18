import { useState } from "react";
import WebFont from "webfontloader";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = (props) => {
  WebFont.load({
    google: {
      families: ["Anton"],
    },
  });

  const [navbar, setNavbar] = useState(false);
  const [flipIsHidden, setFliphidden] = useState(false);
  const [flip, setFlip] = useState(false);
  const [navBarHidden, setNavbarHidden] = useState(false);

  let pagePosition = Math.floor(window.scrollY);
  let distanceScrolled = 0;

  const changeBg = () => {
    if (window.scrollY > 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const flipHidden = () => {
    if (window.scrollY > 100) {
      setFliphidden(true);
    } else {
      setFliphidden(false);
    }
  };

  const flipAnimation = () => {
    if (window.scrollY > 101) {
      setFlip(true);
    } else {
      setFlip(false);
    }
  };

  const hideOnUp = () => {
    if (distanceScrolled >= 90) {
      setNavbarHidden(true);
      distanceScrolled = 0;
    }
    if (Math.floor(window.scrollY) >= pagePosition) {
      pagePosition = Math.floor(window.scrollY);
      setNavbarHidden(false);
    } else {
      distanceScrolled++;
    }
  };

  const navbarEvents = () => {
    changeBg();
    flipHidden();
    flipAnimation();
    hideOnUp();
  };

  window.addEventListener("scroll", navbarEvents);

  return (
    <>
      <div
        style={navBarHidden ? { transform: "translateY(-101%)", transition: "250ms" } : null}
        className="flex-col fixed w-full z-30 flex"
      >
        {/* TOPNAVBAR */}
        <div
          style={{
            transition: "350ms",
          }}
          className={
            navbar
              ? "w-full flex justify-between items-center py-5 navbarBgBlue border-b border-gray-500"
              : "w-full flex justify-between items-center py-5 bg-transparent"
          }
        >
          <div className="flex items-end ml-6 lg:ml-16">
            <VscThreeBars className="text-3xl text-green-900 mb-0.5 lg:hidden opacity-80 font-bold" />
            <h1
              className={
                navbar
                  ? "text-4xl ml-3 fiverrTextActive font-extrabold"
                  : "text-4xl ml-3 fiverrTextInactive font-extrabold"
              }
              style={{
                font: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                letterSpacing: "-2px",
              }}
            >
              fiverr<span className="text-green-400">.</span>
            </h1>
          </div>
          <div
            className={
              navbar
                ? "flex items-center gap-7 mr-20 navbarText navbarActive"
                : "flex items-center gap-7 mr-20 navbarText"
            }
            style={{
              fontSize: "1.12rem",
              transition: "250ms",
            }}
          >
            <button id="transitionBtn" className="hover:text-green-500">
              Fiverr Business
            </button>
            <button id="transitionBtn" className="hover:text-green-500">
              Explore
            </button>
            <button id="transitionBtn" className="hover:text-green-500">
              Become a seller
            </button>
            <button id="transitionBtn" className="hover:text-green-500">
              Become a seller
            </button>
            <button id="transitionBtn" className="hover:text-green-500">
              Sign in
            </button>
            <button
              id="transitionBtn"
              style={{ transition: "190ms" }}
              className={
                navbar
                  ? "joinActive px-6 border border-gray-500 rounded mt-1 hover:bg-green-500 hover:text-gray-100 hover:border-gray-300"
                  : "joinInactive px-6 border border-gray-500 rounded mt-1 hover:text-gray-100 hover:bg-green-500 hover:border-gray-700"
              }
            >
              Join
            </button>
          </div>
        </div>

        {/* LOWERNAVBAR */}
        <div className={flipIsHidden ? "flip-card w-full h-8 flex" : "flip-card w-full h-8 hidden"}>
          <div className="flip-card-inner" style={flip ? { transform: "rotateX(180deg)" } : null}>
            <div className="flip-card-front">
              <ul className="text-base flex justify-evenly items-center text-gray-200 font-normal mt-0.5">
                <li className="ml-20">Graphics & design</li>
                <li>Digital Marketing</li>
                <li>Writing & Translation</li>
                <li>Video & Animation</li>
                <li>Music & Audio</li>
                <li>Programming & Tech</li>
                <li>Business</li>
                <li>Lifestyle</li>
                <li className="mr-20">Trending</li>
              </ul>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect and Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .flip-card {
              background-color: transparent;
              perspective: 1000px;
              display: hidden;
              transform: rotateX(180deg);
            }

            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              text-align: center;
              transition: transform 300ms;
              transform-style: flat;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }

            .flip-card:hover .flip-card-inner {
              transform: rotateX(180deg);
            }

            .flip-card-front,
            .flip-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
            }

            .flip-card-front {
              background-color: #14365d;
              color: black;
            }

            .flip-card-back {
              color: white;
              transform: rotateY(180deg);
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Navbar;
