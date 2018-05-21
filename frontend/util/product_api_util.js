export const fetchProducts = (optionalUserId) =>
  $.ajax({
    method: "GET",
    url: "/api/products",
    data: {user_id: optionalUserId}
  });

export const fetchProduct = id =>
  $.ajax({
    method: "GET",
    url: `/api/products/${id}`
  });

export const createProduct = product =>
  $.ajax({
    method: "POST",
    url: "/api/products",
    data: { product }
  });

export const updateProduct = product =>
  $.ajax({
    method: "PATCH",
    url: `/api/products/${product.id}`,
    data: { product }
  });

export const deleteProduct = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/products/${id}`
  });

export const productSearch = (product_name) => (
  $.ajax({
    method: 'GET',
    url: 'api/search',
    data: { search: {product_name }}
  })
);

export const productCategory = (type) => (
  $.ajax({
    method: 'GET',
    url: 'api/category',
    data: { category: { type }}
  })
);
