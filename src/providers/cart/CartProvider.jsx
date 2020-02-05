import React, { createContext, useState, useEffect } from 'react';
import {
  addCartItem,
  removeCartItem,
  filterCartItem,
  itemsCount,
  getCartTotal
} from './utils';

//
export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
  toggleHidden: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {}
});

//
const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  const [cartItems, setItems] = useState([]);
  const addItem = item => setItems(addCartItem(cartItems, item));
  const removeItem = item => setItems(removeCartItem(cartItems, item));
  const clearItemFromCart = item => setItems(filterCartItem(cartItems, item));

  const [cartItemsCount, setItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setItemsCount(itemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
