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
