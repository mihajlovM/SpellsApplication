import React from "react";
import "./Button.css";
import { setToFavorites, deleteFromFavorites } from "../../utils/storage";
import cx from "classnames";

const Button = ({ rounded = false }) => {
  const sliderCx = cx("slider", {
    rounded: rounded,
  });

  return (
    <label className="switch">
      <input type="checkbox" />
      <span className={sliderCx} />
    </label>
  );

  // return (
  //   <button
  //     type="button"
  //     onClick={setToFavorites()}
  //     onToggle={deleteFromFavorites()}
  //     className={`btn ${styleClass}`}
  //   >
  //     AAAA
  //   </button>
  // );
};

export default Button;
