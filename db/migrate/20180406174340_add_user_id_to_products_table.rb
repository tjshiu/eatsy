class AddUserIdToProductsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :products, :user_id, :string, null: false
    add_column :products, :user_id, :integer, null: false
    add_index :products, :user_id
  end
end
