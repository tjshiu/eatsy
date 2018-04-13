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

export const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};
