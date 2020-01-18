import React from "react";

import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// the selectCartItems selector will cach the value and also memoize it
// so when ever any other changes to the state that have nothing to do
// with the cart items will not going to make this component re-render

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
