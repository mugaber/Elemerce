import React from "react";
import "./CheckoutItem.scss";

import { connect } from "react-redux";
import { removeItem, addItem, clearItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, removeItem, addItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
