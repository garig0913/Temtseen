//Background.js
import React from "react";

const Background = ({ children }) => {
  return (
    <div
      style={{
        transitionProperty: "all",
        transitionTimingFunction: "ease-out",
        transitionDuration: "150ms",
      }}
      className="bg-white dark:bg-gray-900"
    >
      {children}
    </div>
  );
};

export default Background;
