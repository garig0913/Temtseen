import WebFont from "webfontloader";
import { GoQuote } from "react-icons/go";
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const index = (props) => {
  WebFont.load({
    google: {
      families: ["Nunito", "Anton", "Roboto"],
    },
  });

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1161 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 901, maxWidth: 1160 });
    return isMobile ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 900 });
    return isMobile ? children : null;
  };

  const loopTimes = [1, 2, 3, 4];

  const data = [
    {
      text: "With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, Toptal delivered the talent and expertise needed to launch a brand new fan engagement platform.",
      title: "Conor Kenney, Director of Professional Services",
      affiliation: "Cleveland Cavaliers",
      img: "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57754/cavaliers-36068385bab82125272dc5cee7bb7f7e.jpg",
    },
    {
      text: "With Toptal, we are able to find talented developers in a matter of weeks instead of months. The quality of talent they supply is extremely high as the developers are able to immediately onboard and ramp incredibly fast.",
      title: "Ryan Walker, Director of Product",
      affiliation: "Rand McNally",
      img: "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57769/randmcnally-9d298989e09b1b0b4986c9713a462759.jpg",
    },
    {
      text: "We've been very pleased with our experience working with Toptal. Their team was incredibly helpful in helping us find the perfect developer for our project. The work was stellar, the communication was excellent and we couldn't have been happier with the overall experience. We're excited to work with Toptal for more projects in the future!",
      title: "Zac Carman, CEO",
      affiliation: "ConsumerAffairs",
      img: "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57759/consumer-114437f211219bb2cb4120a99bce2cca.jpg",
    },
  ];
  return (
    <>
      <Desktop>
        <div id="container" className="flex flex-col items-center bg-gray-200 py-14">
          <h1 className="text-5xl font-light text-gray-700 my-12">Hear from our Clients</h1>
          <div className="flex">
            <h1 className="mb-16">
              Our customers say
              <span style={{ lineHeight: "-10px" }} className="text-lg font-semibold ml-2">
                Excellent
              </span>
            </h1>
            <div className="flex mt-px mx-3">
              {loopTimes.map(() => {
                return (
                  <MdOutlineStar
                    className="text-2xl"
                    style={{ color: "#00b67a", margin: "0 -2px" }}
                  />
                );
              })}
              <MdOutlineStarOutline
                style={{ margin: "0 -2px" }}
                className="text-2xl text-gray-400"
              />
            </div>
            <h1>4 out of 5 based on 1,312 reviews</h1>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {data.map((content) => {
              return (
                <div className="flex flex-col justify-between p-6 h-96 w-96 bg-white shadow-md">
                  <div>
                    <GoQuote style={{ color: "#14365d" }} className="text-3xl" />
                    <p className="font-light mt-4">{content.text}</p>
                  </div>
                  <div className="flex">
                    <img className="w-11 h-11" src={content.img} alt="abc" />
                    <div className="flex flex-col ml-2">
                      <p className="font-medium text-sm text-gray-800">{content.title}</p>
                      <p className="text-xs">{content.affiliation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          #container {
            width: 100vw;
            position: relative;
            left: calc(-50vw + 50%);
          }
        `}</style>
      </Desktop>
      <Tablet>
        <div id="container" className="flex flex-col items-center bg-gray-200 py-14">
          <h1 className="text-5xl font-light text-gray-700 my-12">Hear from our Clients</h1>
          <div className="flex">
            <h1 className="mb-16">
              Our customers say
              <span style={{ lineHeight: "-10px" }} className="text-lg font-semibold ml-2">
                Excellent
              </span>
            </h1>
            <div className="flex mt-px mx-3">
              {loopTimes.map(() => {
                return (
                  <MdOutlineStar
                    className="text-2xl"
                    style={{ color: "#00b67a", margin: "0 -2px" }}
                  />
                );
              })}
              <MdOutlineStarOutline
                style={{ margin: "0 -2px" }}
                className="text-2xl text-gray-400"
              />
            </div>
            <h1>4 out of 5 based on 1,312 reviews</h1>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {data.map((content) => {
              return (
                <div className="flex flex-col justify-between p-6 h-80 w-80 bg-white shadow-md">
                  <div>
                    <GoQuote style={{ color: "#14365d" }} className="text-3xl" />
                    <p className="font-light mt-4">{content.text}</p>
                  </div>
                  <div className="flex">
                    <img className="w-11 h-11" src={content.img} alt="abc" />
                    <div className="flex flex-col ml-2">
                      <p className="font-medium text-sm text-gray-800">{content.title}</p>
                      <p className="text-xs">{content.affiliation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          #container {
            width: 100vw;
            position: relative;
            left: calc(-50vw + 50%);
          }
        `}</style>
      </Tablet>
      <Mobile>
        <div id="container" className="flex flex-col items-center bg-gray-200 py-14">
          <h1 className="text-4xl font-light text-gray-800 my-12">Hear from our Clients</h1>
          <div className="flex flex-col items-center mb-14">
            <h1 className="mb-5">
              Our customers say
              <span style={{ lineHeight: "-10px" }} className="text-lg font-semibold ml-2">
                Excellent
              </span>
            </h1>
            <div className="flex mb-4">
              {loopTimes.map(() => {
                return (
                  <MdOutlineStar
                    className="text-2xl"
                    style={{ color: "#00b67a", margin: "0 -2px" }}
                  />
                );
              })}
              <MdOutlineStarOutline
                style={{ margin: "0 -2px" }}
                className="text-2xl text-gray-400"
              />
            </div>
            <h1>4 out of 5 based on 1,312 reviews</h1>
          </div>

          {data.map((content) => {
            return (
              <div className="flex flex-col justify-between p-6 w-full h-auto bg-white shadow-md border-b border-gray-400">
                <div>
                  <GoQuote style={{ color: "#14365d" }} className="text-3xl" />
                  <p className="font-light mt-4">{content.text}</p>
                </div>
                <div className="flex mt-10 mb-2">
                  <img className="w-11 h-11" src={content.img} alt="abc" />
                  <div className="flex flex-col ml-2">
                    <p className="font-medium text-sm text-gray-800">{content.title}</p>
                    <p className="text-xs">{content.affiliation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <style jsx>{`
          #container {
            width: 110vw;
            position: relative;
            left: calc(-50vw + 50%);
          }
        `}</style>
      </Mobile>
    </>
  );
};

export default index;
