class EditProductsTable < ActiveRecord::Migration[5.1]
  def change
    change_column :products, :user_id, :string
    remove_index :products, :user_id
  end
end
