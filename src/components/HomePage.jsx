import React from "react";
import "./HomePage.scss";

// the HomePage component will have a directory menu component
// that will wrap and contain all the menu items in it
// the menue item itself is another compnent that will have
// more components displaying the items in the ecommerce app

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h2 className="title">shirt</h2>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">shoes</h2>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">boose</h2>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">hosoe</h2>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h2 className="title">trouser</h2>
            <span className="subtitle">shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
