class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :user_id, null: false
      t.string :product_name, null: false
      t.string :overview, null: false
      t.string :description, null: false
      t.float :cost, null: false
      t.string :image_url, null: false

      t.timestamps
    end

    add_index :products, :user_id
    add_index :products, :product_name
    add_index :products, [:user_id, :product_name], unique: true
  end
end
