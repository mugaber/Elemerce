import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogle, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} 
      ${isGoogle ? "google" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
