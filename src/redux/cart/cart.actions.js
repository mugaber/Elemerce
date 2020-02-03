import cartTypes from './cart.types';

export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART
});

export const addItem = item => ({
  type: cartTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: cartTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});

export const clearItem = item => ({
  type: cartTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART
});
