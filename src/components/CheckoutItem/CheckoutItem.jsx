import React, { useContext } from 'react';
import './CheckoutItem.scss';
import { CartContext } from '../../providers/cart/CartProvider';

//
const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { removeItem, addItem, clearItemFromCart } = useContext(CartContext);

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={() => removeItem(item)}>
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </span>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItemFromCart(item)}>
        &#10008;
      </div>
    </div>
  );
};

export default CheckoutItem;
