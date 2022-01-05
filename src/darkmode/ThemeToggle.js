//ThemeToggle.js
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className=" rounded-full p-2">
      {theme === "dark" ? (
        <div
          className="flex items-center gap-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <button>Light</button>
          <FaSun className="text-gray-500 dark:text-gray-300 text-2xl cursor-pointer transition duration-700 ease-in-out" />
        </div>
      ) : (
        <div
          className="flex items-center gap-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <button>Dark</button>
          <FaMoon className="text-gray-500 dark:text-gray-300 text-xl cursor-pointer transition duration-700 ease-in-out" />
        </div>
      )}
    </div>
  );
};

export default Toggle;
