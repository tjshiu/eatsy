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

require 'test_helper'

class ShoppingCartItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
