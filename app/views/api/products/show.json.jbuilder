json.product do
  json.extract! @product, :id, :user_id, :product_name, :overview, :description, :cost, :image_url
end
