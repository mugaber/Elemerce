import React from "react";
import "./HomePage.scss";
import Directory from "../../components/Directory/Directory";

// the HomePage component will have a directory menu component
// that will wrap and contain all the menu items in it
// the menue item itself is another compnent that will have
// more components displaying the items in the ecommerce app

const HomePage = () => {
  return <div className="homepage">
    <Directory />
  </div>;
};

export default HomePage;
