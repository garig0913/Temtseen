import { BsCheckCircle } from "react-icons/bs";
import WebFont from "webfontloader";
import { useMediaQuery } from "react-responsive";

const index = (props) => {
  WebFont.load({
    google: {
      families: ["Nunito", "Anton", "Roboto"],
    },
  });
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 899 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 900 });
    return isMobile ? children : null;
  };

  const data = [
    {
      title: "The best for every budget",
      text: "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
    },
    {
      title: "Quality work done quickly",
      text: "Find the right freelancer to begin working on your project within minutes.",
    },
    {
      title: "Protected payments, every time",
      text: "Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
    },
    {
      title: "24/7 support",
      text: "Questions? Our round-the-clock support team is available to help anytime, anywhere.",
    },
  ];
  return (
    <>
      <Desktop>
        <div
          style={{ gridTemplateColumns: "1fr 1.8fr" }}
          className="grid grid-cols-2 mt-40 gap-10 mb-14"
        >
          <div
            style={{ fontFamily: "Roboto, sans-serif" }}
            className="flex flex-col justify-between"
          >
            <h1 className="text-4xl font-semibold text-gray-800 mb-6 dark:text-gray-300">
              A whole world of freelance talent at your fingertips
            </h1>
            {data.map((data) => {
              return (
                <div>
                  <div className="flex items-center mb-1.5">
                    <BsCheckCircle className="text-2xl text-gray-500 mr-3 dark:text-gray-300" />
                    <h1 className="text-lg text-gray-800 font-bold dark:text-gray-300">
                      {data.title}
                    </h1>
                  </div>
                  <h1 className="text-lg text-gray-500 mb-6 font-normal dark:text-gray-400">
                    {data.text}
                  </h1>
                </div>
              );
            })}
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="45"
            data-aos-duration="500"
            data-aos-easing="ease-out"
            className="flex items-center justify-end"
          >
            <iframe
              style={{ width: "85%" }}
              className="h-4/5 rounded-md"
              src="https://www.youtube.com/embed/Gwm1yVC7qcE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="grid grid-cols-1 mt-40 gap-10">
          <div
            style={{ fontFamily: "Roboto, sans-serif" }}
            className="flex flex-col justify-between"
          >
            <h1 className="text-4xl font-semibold text-gray-800 mb-10">
              A whole world of freelance talent at your fingertips
            </h1>
            {data.map((data) => {
              return (
                <div>
                  <div className="flex items-center mb-1.5">
                    <BsCheckCircle className="text-2xl text-gray-500 mr-3" />
                    <h1 className="text-lg text-gray-800 font-bold">{data.title}</h1>
                  </div>
                  <h1 style={{ color: "#62646a" }} className="text-lg  mb-6 font-normal">
                    {data.text}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <iframe
              style={{ width: "100%", height: "16rem" }}
              className="rounded-md"
              src="https://www.youtube.com/embed/Gwm1yVC7qcE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default index;
