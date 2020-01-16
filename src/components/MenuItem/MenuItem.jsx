import React from "react";
import "./MenuItem.scss";
import { CardImgOverlay } from "reactstrap";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      // for dynamic styling we can use the style property
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      // if there is a size property then it will get added to the className
      // otherwise nothing is going to change, then in the styles sheet
      // we can add some styles to this class if it exists
      className={`${size} menu-item`}
    >
      <div className="content">
        = <h2 className="title"> {title} </h2>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
