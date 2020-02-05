import React, { useContext } from 'react';
import './CartDropdown.scss';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import { withRouter } from 'react-router-dom';
import { CartContext } from '../../providers/cart/CartProvider';

//
const CartDropdown = ({ history }) => {
  const { toggleHidden, cartItems } = useContext(CartContext);

  const hanldeClick = () => {
    history.push('/checkout');
    toggleHidden();
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={hanldeClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
