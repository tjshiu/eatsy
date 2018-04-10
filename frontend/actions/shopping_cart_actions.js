import * as ProductAPIUtil from "../util/product_api_util";

export const RECEIVE_ALL_SHOPPING_CART_ITEMS = "RECEIVE_ALL_SHOPPING_CART_ITEMS";
export const RECEIVE_SHOPPING_CART_PAYLOAD = "RECEIVE_PRODUCT_PAYLOAD";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

export const receiveProduct = payload => ({
  type: RECEIVE_PRODUCT_PAYLOAD,
  payload
});

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  productId
});

export const receiveErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const fetchProducts = (optionalUserId) => dispatch =>
  ProductAPIUtil.fetchProducts(optionalUserId).then(products =>
    dispatch(receiveAllProducts(products))
  );

export const fetchProduct = id => dispatch =>
  ProductAPIUtil.fetchProduct(id).then(payload =>
    dispatch(receiveProduct(payload))
  );


export const createProduct = product => dispatch =>
  ProductAPIUtil.createProduct(product).then(
    payload => dispatch(receiveProduct(payload)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const updateProduct = product => dispatch =>
  ProductAPIUtil.updateProduct(product).then(
    payload => dispatch(receiveProduct(payload)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteProduct = id => dispatch =>
  ProductAPIUtil.deleteProduct(id).then(payload =>
    dispatch(removeProduct(payload.product.id))
  );