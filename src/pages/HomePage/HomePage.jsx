import React from "react";

// to make use of styled component as opposed of scss
import HomePageContainer from "./home-page";

import Directory from "../../components/Directory/Directory";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
