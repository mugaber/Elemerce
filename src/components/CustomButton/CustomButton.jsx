import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${isGoogle ? "google" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
