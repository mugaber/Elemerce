import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import React from "react";
import "./CartIcon.scss";

import toggleCart from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartIcon = ({toggleCart}) => {
  return (
    <div onClick={toggleCart} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> 0 </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);
