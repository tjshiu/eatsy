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

  has_many :shopping_cart_items
end
