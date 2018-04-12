# == Schema Information
#
# Table name: shopping_cart_items
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShoppingCartItem < ApplicationRecord
  validates :user_id, :product_id, :quantity, presence: true

  belongs_to :user
  belongs_to :product, dependent: :destroy
end
