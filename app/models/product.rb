# == Schema Information
#
# Table name: products
#
#  id           :integer          not null, primary key
#  user_id      :string           not null
#  product_name :string           not null
#  overview     :string           not null
#  description  :string           not null
#  cost         :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Product < ApplicationRecord
  validates :user_id, :product_name, :overview, :description, :cost, :image_url, presence: true
  belongs_to :user

end
