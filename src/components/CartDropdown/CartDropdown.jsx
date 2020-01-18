import React from "react";

import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleCart } from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems, history, toggleCart }) => {
  const hanldeClick = () => {
    history.push("/checkout");
    toggleCart();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={hanldeClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// dispatch is available anyway as a prop for the component

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

// to make the history object from the route available

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
