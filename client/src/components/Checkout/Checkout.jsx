import React from 'react';
import './Checkout.scss';

import { connect } from 'react-redux';

import CheckoutItem from '../CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../StripeButton/StripeButton';

import { createStructuredSelector } from 'reselect';
import {
  selectCartTotal,
  selectCartItems
} from '../../redux/cart/cart.selectors';

const Checkout = ({ cartItems, cartTotal }) => {
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
      <p>
        *Please use the following test credit card for payments* 4242 4242 4242
        4242 - EXP 01/21 - CW: 123
      </p>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
