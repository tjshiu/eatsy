import * as ProductAPIUtil from "../util/product_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  productId
});

export const fetchProducts = () => dispatch =>
  ProductAPIUtil.fetchProducts().then(products =>
    dispatch(receiveAllProducts(products))
  );

export const fetchProduct = id => dispatch =>
  ProductAPIUtil.fetchProduct(id).then(product =>
    dispatch(receiveProduct(product))
  );

export const createProduct = product => dispatch =>
  ProductAPIUtil.createProduct(product).then(product =>
    dispatch(receiveProduct(product))
  );

export const updateProduct = product => dispatch =>
  ProductAPIUtil.updateProduct(product).then(product =>
    dispatch(receiveProduct(product))
  );

export const deleteProduct = id => dispatch =>
  ProductAPIUtil.deleteProduct(id).then(product =>
    dispatch(removeProduct(product.id))
  );
