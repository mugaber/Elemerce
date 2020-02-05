import React, { useContext } from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import CartContext from '../../contexts/cart/cart.context';

//
const CartIcon = ({ itemsCount }) => {
  const { toggleHidden } = useContext(CartContext);

  return (
    <div onClick={toggleHidden} className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);
