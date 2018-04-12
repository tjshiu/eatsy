// Create this in a `selectors` file in your `reducers` folder
// Then import to your container
export const itemInCart = (state, productId) => {
  if (state.session.currentUser) {
    let shoppingCartIds = state.session.currentUser.shoppingCartItemsIds;
    let shoppingCartItems = Object.keys(state.entities.shoppingCartItems).map(
      id => state.entities.shoppingCartItems[id]
    );
    let cartItems = shoppingCartItems.filter(item => item.productId === productId);
    return cartItems[0];
  } else {
    return false;
  }
};
