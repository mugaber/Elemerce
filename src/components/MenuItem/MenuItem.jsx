import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="background-image"
      ></div>
      <div className="content">
        <h2 className="title"> {title.toUpperCase()} </h2>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
