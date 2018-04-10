if @current_user
#   @shopping_cart_items.each do |shopping_item|
    if @current_user.id === @shopping_cart_item.user_id

        json.shopping_cart_item do
          json.set! @shopping_cart_item.id do
            json.extract! @shopping_cart_item, :id, :user_id, :product_id, :quantity
          end
        end

        json.users do
          json.set! @shopping_cart_item.user.id do
            json.id @shopping_cart_item.user.id
            json.username @shopping_cart_item.user.username
            json.image_url asset_path(@shopping_cart_item.user.image_url)
            json.shopping_cart_items @shopping_cart_item.user.shopping_cart_item_ids
          end
        end

        json.products do
          json.set! @shopping_cart_item.product.id do
            json.id @shopping_cart_item.product.id
            json.user_id @shopping_cart_item.product.user_id
            json.product_name @shopping_cart_item.product.product_name
            json.overview @shopping_cart_item.product.overview
            json.description @shopping_cart_item.product.description
            json.cost @shopping_cart_item.product.cost
            json.image_url asset_path(@shopping_cart_item.product.image_url)
          end
        end

#     end
  end
end
