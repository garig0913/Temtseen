import { BsTwitter, BsFacebook, BsLinkedin, BsPinterest, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="py-9 w-full flex justify-center bg-gray-50 dark:text-white dark:bg-gray-800">
        <div style={{ width: "90%" }} className="border-t flex justify-between py-5">
          {/* LEFT SIDE */}
          <div className="flex items-end">
            <h1
              id="logo"
              className="text-4xl ml-3 font-extrabold text-gray-500 dark:text-gray-300"
              style={{
                font: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif",
                letterSpacing: "-2px",
              }}
            >
              fiverr
              <span
                style={{
                  fontSize: "0.65rem",
                  lineHeight: "1rem",
                }}
              >
                ®
              </span>
            </h1>
            <h1 className="mb-0.5 ml-6 text-sm font-semibold text-gray-400 dark:text-gray-300">
              © Fiverr International Ltd. 2021
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex gap-6 items-end text-gray-500 dark:text-gray-300 text-5xl">
            <BsTwitter className="hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2.5 transition" />
            <BsFacebook className="hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2.5 transition" />
            <BsLinkedin className="hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2.5 transition" />
            <BsPinterest className="hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2.5 transition" />
            <BsInstagram className="hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-xl p-2.5 transition" />
          </div>
        </div>
      </div>
      <style jsx>{`
        #logo:hover {
          cursor: pointer;
          transition: 250ms;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Footer;
