class AddIndexUserCannotHaveSameProduct < ActiveRecord::Migration[5.1]
  def change
    add_index :products, [:user_id, :product_name], unique: true
  end
end
