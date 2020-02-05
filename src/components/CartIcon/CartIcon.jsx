import React, { useContext } from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../providers/cart/CartProvider';

//
const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div onClick={toggleHidden} className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
