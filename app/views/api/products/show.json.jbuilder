json.extract! @product, :id, :user_id, :product_name, :overview, :description, :cost
json.image_url asset_path(@product.image_url)
