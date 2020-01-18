export const addCartItem = (cartItems, newCartItem) => {
  const cartItemExists = cartItems.find(item => item.id === newCartItem.id);

  if (cartItemExists) {
    return cartItems.map(item => {
      if (item.id === newCartItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find(item => item.id === cartItem.id);

  // if the quantity is only one clear the iem
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItem.id);
  }

  // reduce the quantity of it's more than one
  return cartItems.map(item =>
    item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
