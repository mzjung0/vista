class CreateItem < ActiveRecord::Migration
  def up
    create_table :items do |t|
      t.string :item_code
      t.string :description
      t.string :description2
      t.integer :item_segment_id
      t.integer :item_brand_id
      t.string :status
      
      t.timestamps null: false
    end

    add_index :items, :item_code, :unique => true
    add_foreign_key :items, :item_brands
  end

  def down
    drop_table :items
  end
end
