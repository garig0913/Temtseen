import { useMediaQuery } from "react-responsive";

const Partners = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1010 });
    return isDesktop ? children : null;
  };

  const NonDesktop = ({ children }) => {
    const isNotDesktop = useMediaQuery({ maxWidth: 1009 });
    return isNotDesktop ? children : null;
  };

  return (
    <>
      <Desktop>
        <div className="grid grid-cols-10 gap-10 mt-12 pr-6 pl-6 border-b border-gray-300 pb-8">
          <h1 className="text-lg font-semibold text-gray-500">Trusted by:</h1>
          <img
            className="w-auto h-11"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
            alt="abc"
          />
          <img
            className="w-auto h-11"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
            alt="abc"
          />
          <img
            className="w-auto h-11"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
            alt="abc"
          />
          <img
            className="w-auto h-11"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
            alt="abc"
          />
          <img
            className="w-auto h-11"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
            alt="abc"
          />
          <img
            className="w-auto h-11"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/airbus-logo2.svg"
            alt="abc"
          />
          <img
            className="w-auto h-11"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/telstra-logo.svg"
            alt="abc"
          />
          <img
            className="w-auto h-11"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/fujitsu-logo.svg"
            alt="abc"
          />
          <img
            className="w-auto h-11"
            src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/google-logo.svg"
            alt="abc"
          />
        </div>
      </Desktop>
    </>
  );
};

export default Partners;
