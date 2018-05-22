json.product do
  json.extract! @product, :id, :user_id, :product_name, :overview, :description, :cost, :category
  json.image_url asset_path(@product.image_url)
end

json.seller do
  json.set! @product.seller.id do
    json.extract! @product.seller, :id, :username, :image_url
    json.productIds @product.seller.product_ids
  end
end

json.products do
  @product.seller.products.each do |product|
    json.set! product.id do
      json.id product.id
      json.user_id product.user_id
      json.product_name product.product_name
      json.overview product.overview
      json.description product.description
      json.cost product.cost
      json.image_url asset_path(product.image_url)
      json.category product.category
      json.seller do
        json.extract! product.seller, :username, :image_url, :id
      end
    end
  end
end
