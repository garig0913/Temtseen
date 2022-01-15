import React, { useState } from "react";
import WebFont from "webfontloader";
import { BsSearch } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import DarkToggle from "../../darkmode/ThemeToggle";
import { ThemeContext } from "../../darkmode/ThemeContext";

const Navbar = (props) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  WebFont.load({
    google: {
      families: ["Anton"],
    },
  });

  const navItems = [
    {
      name: "Graphics & Design",
      link: "graphicDesign",
    },
    {
      name: "Digital Marketing",
      link: "digitalMarketing",
    },
    {
      name: "Writing & Translation",
      link: "writingTranslation",
    },
    {
      name: "Video & Animation",
      link: "videoAnimation",
    },
    {
      name: "Music & Audio",
      link: "musicAudio",
    },
    {
      name: "Programming & Tech",
      link: "programmingTech",
    },
    {
      name: "Business",
      link: "business",
    },
    {
      name: "Lifestyle",
      link: "lifestyle",
    },
    {
      name: "Trending",
      link: "trending",
    },
  ];

  const [navbar, setNavbar] = useState(false);
  const [flipIsHidden, setFliphidden] = useState(false);
  const [flip, setFlip] = useState(false);
  const [navBarHidden, setNavbarHidden] = useState(false);
  const [topSearch, setTopSearch] = useState(false);
  const [topSearchOpacity, setTopSearchOpacity] = useState(false);

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
    if (window.scrollY < 40) {
      setNavbarHidden(false);
      distanceScrolled = 0;
    }
    if (distanceScrolled >= 35) {
      setNavbarHidden(true);
      distanceScrolled = 0;
    }
    if (Math.floor(window.scrollY) >= pagePosition) {
      pagePosition = Math.floor(window.scrollY);
      setNavbarHidden(false);
      distanceScrolled = 0;
    } else {
      distanceScrolled++;
    }
  };

  const topSearchHidden = () => {
    if (window.scrollY > 325) {
      setTopSearch(true);
    } else setTopSearch(false);
    if (window.scrollY > 330) {
      setTopSearchOpacity(true);
    } else setTopSearchOpacity(false);
  };

  const navbarEvents = () => {
    changeBg();
    flipHidden();
    flipAnimation();
    hideOnUp();
    topSearchHidden();
  };

  window.addEventListener("scroll", navbarEvents);

  return (
    <>
      <div
        style={navBarHidden ? { transform: "translateY(-101%)", transition: "250ms" } : null}
        className="flex-col fixed w-full z-30 flex"
      >
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
            <Link to={"/"}>
              <h1
                id="logo"
                className={
                  navbar
                    ? "text-4xl ml-3 fiverrTextActive font-extrabold"
                    : "text-4xl ml-3 fiverrTextInactive font-extrabold"
                }
                style={
                  navbar
                    ? {
                        font: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "-2px",
                        color: "#d85c27",
                      }
                    : {
                        font: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "-2px",
                        color: "#46344e",
                      }
                }
              >
                fiverr<span className="text-green-400">.</span>
              </h1>
            </Link>

            <div
              id="inputShadow"
              style={{
                opacity: `${topSearchOpacity ? "1" : "0"}`,
                transition: "280ms",
              }}
              className={topSearch ? "mb-px flex h-8 rounded-sm hover:shadow-2xl ml-10" : "hidden"}
            >
              <div className="h-8 w-14 bg-white text-gray-600 rounded-l-sm flex justify-center items-center">
                <BsSearch />
              </div>
              <input className="h-full w-full focus:outline-none" />
              <button id="button2" className="h-full px-4 rounded-r-sm text-white ">
                Search
              </button>
            </div>
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
            <Link to={"category"}>
              <button
                id="transitionBtn"
                className="py-1 px-3.5 mt-px text-white postProject rounded-sm"
              >
                Post project
              </button>
            </Link>
            <Link to={"explore"}>
              <button id="transitionBtn" className="hover:text-green-500">
                Explore
              </button>
            </Link>

            <DarkToggle />
            <button id="transitionBtn" className="hover:text-green-500">
              Become a buyer
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
              <ul className="flex justify-center items-center text-gray-200 font-normal mt-0.5 gap-6">
                {navItems.map((el) => {
                  return (
                    <Link to={`categories/${el.link}`}>
                      <li className="cursor-pointer">{el.name}</li>
                    </Link>
                  );
                })}
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
            #button2 {
              background-color: #d85c27;
              transition: 150ms;
            }
            #button2:hover {
              background-color: #fc7814;
            }
            .postProject {
              background-color: #d85c27;
              border: 1px solid #d85c27;
              transition: 300ms !important;
            }
            .postProject:hover {
              background-color: white;
              color: #d85c27;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Navbar;
