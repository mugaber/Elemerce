import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import React from "react";
import "./CartIcon.scss";

import { toggleCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCart, itemsCount }) => {
  return (
    <div onClick={toggleCart} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
