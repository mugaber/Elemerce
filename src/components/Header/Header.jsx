import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer
} from "./header.styled";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";

import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign out</OptionDiv>
        ) : (
          <OptionLink to="/signin">Sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
