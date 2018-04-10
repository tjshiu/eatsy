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

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
