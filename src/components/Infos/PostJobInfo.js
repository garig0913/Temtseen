import { AiFillQuestionCircle } from "react-icons/ai";

const Index = (props) => {
  return (
    <>
      {" "}
      <div className="flex justify-between">
        <label className="text-sm font-semibold text-gray-500" htmlFor="PostJobEmail">
          {props.label}
        </label>
        <div className="relative">
          <AiFillQuestionCircle className="text-blue-600 text-sm" />
          <div className="w-40 h-20 absolute bottom-0 left-0">
            <img src="https://www.pinpng.com/pngs/m/24-242349_speech-bubble-free-speech-bubble-black-background-hd.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
