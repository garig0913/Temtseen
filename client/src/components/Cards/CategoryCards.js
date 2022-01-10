import { useMediaQuery } from "react-responsive";

const Cards = (props) => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 900 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 900 });
    return isMobile ? children : null;
  };
  return (
    <>
      <Desktop>
        <div className="relative" id="MainCard">
          <div className="text-white absolute top-3 left-7">
            <p className="font-medium">{props.desc}</p>
            <h1 className="text-2xl font-medium">{props.title}</h1>
          </div>
          <img id="img" className="" src={props.image} />
        </div>
        <style jsx>{`
          #MainCard {
            width: 269px;
            height: 345px;
          }
          #img {
            width: 250px;
            margin: auto;
            object-fit: contain;
          }
        `}</style>
      </Desktop>
      <Mobile>
        <div className="relative" id="MainCard">
          <div className="text-white absolute top-3 left-7">
            <p className="font-medium">{props.desc}</p>
            <h1 className="text-2xl font-medium">{props.title}</h1>
          </div>
          <img id="img" className="" src={props.image} />
        </div>
        <style jsx>{`
          #MainCard {
            width: 80%;
            height: 450px;
          }
          #img {
            width: 100%;
            margin: auto;
            object-fit: contain;
          }
        `}</style>
      </Mobile>
    </>
  );
};

export default Cards;
