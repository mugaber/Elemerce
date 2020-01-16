import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        <Link className="option" to="/signin">
          Signin
        </Link>
      </div>
    </div>
  );
};

export default Header;
