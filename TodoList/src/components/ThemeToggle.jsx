import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeToggle = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleMode}
      className="submit-btn toggle-btn"
      style={{
        justifyContent: "center",
        width: "40px",
        height: "40px",
      }}
      title={`Change theme to ${mode == "dark" ? "light" : "dark"}`}
    >
      {mode == "light" ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-solid fa-sun"></i>
      )}
    </div>
  );
};

export default ThemeToggle;
