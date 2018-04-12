# == Schema Information
#
# Table name: products
#
#  id           :integer          not null, primary key
#  product_name :string           not null
#  overview     :string           not null
#  description  :string           not null
#  cost         :float            not null
#  image_url    :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer          not null
#

class Product < ApplicationRecord
  validates :user_id, :product_name, :overview, :description, :cost, :image_url, presence: true

  belongs_to :seller,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :User

  has_many :shopping_cart_items, dependent: :destroy

  def self.top_ten_results(query_params)
    return Product.all if query_params == ""
    param = "%" + query_params.split("").join("%").downcase + '%'

    @products = Product.where('lower(product_name) LIKE ?', param).limit(10).to_a
  end
end
