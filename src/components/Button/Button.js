import React from "react";

const Button = ({ text, styleClass, onClick, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onClick ? onClick : console.log("klik")}
      onToggle={onToggle ? onToggle : console.log("unklik")}
      className={`btn ${styleClass}`}
    >
      AAAA
    </button>
  );
};

export default Button;
