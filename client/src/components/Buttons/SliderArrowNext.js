import { GrNext } from "react-icons/gr";

const index = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "20px",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,
      }}
      onClick={onClick}
    >
      <GrNext className="text-gray-700 text-2xl" />
    </div>
  );
};

export default index;
