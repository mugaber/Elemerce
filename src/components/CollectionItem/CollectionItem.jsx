import React, { useContext } from 'react';
import './CollectionItem.scss';

import CustomButton from '../CustomButton/CustomButton';
import { CartContext } from '../../providers/cart/CartProvider';

//
const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const { addItem } = useContext(CartContext);

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
