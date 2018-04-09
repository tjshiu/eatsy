@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :user_id, :product_name, :overview, :description, :cost
    json.seller do
      json.extract! product.seller, :username, :image_url
    end
    json.image_url asset_path(product.image_url)

  end
end
