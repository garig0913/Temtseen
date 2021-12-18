import { GrPrevious } from "react-icons/gr";

const index = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <GrPrevious
        style={{ boxShadow: "2px 2px 12px black", borderRadius: "20px" }}
        className="text-gray-700 text-4xl p-2"
      />
    </div>
  );
};

export default index;
