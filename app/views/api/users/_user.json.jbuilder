json.extract! user, :id, :username, :image_url
json.productIds user.product_ids
json.shoppingCartItemsIds user.shopping_cart_item_ids if user == current_user
