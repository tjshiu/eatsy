export const fetchShoppingCartItems = optionalUserId =>
  $.ajax({
    method: "GET",
    url: "/api/shopping_cart_items",
    data: { user_id: optionalUserId }
  });

export const fetchShoppingCartItem = id =>
  $.ajax({
    method: "GET",
    url: `/api/shopping_cart_items/${id}`
  });

export const createShoppingCartItem = shoppingCartItem =>
  $.ajax({
    method: "POST",
    url: "/api/shopping_cart_items",
    data: { shoppingCartItem }
  });

export const updateShoppingCartItem = shoppingCartItem => {
  return $.ajax({
    method: "PATCH",
    url: `/api/shopping_cart_items/${shoppingCartItem.id}`,
    data: { shoppingCartItem }
  });};

export const deleteShoppingCartItem = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/shopping_cart_items/${id}`
  });

export const deleteShoppingCartItems = cartIds =>
  $.ajax({
    method: "DELETE",
    url: `/api/shopping_cart_items/delete_collection`,
    data: { cartIds }
  });
