class AddIndexForUniqueShoppingCartItemsPerUser < ActiveRecord::Migration[5.1]
  def change

    add_index :shopping_cart_items, [:product_id, :user_id], unique: true
  end
end
