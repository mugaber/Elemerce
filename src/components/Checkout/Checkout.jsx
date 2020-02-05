import React, { useContext } from 'react';
import './Checkout.scss';
import { CartContext } from '../../providers/cart/CartProvider';

import CheckoutItem from '../CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../StripeButton/StripeButton';

//
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

export default Checkout;
