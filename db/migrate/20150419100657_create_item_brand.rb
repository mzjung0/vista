class CreateItemBrand < ActiveRecord::Migration
  def change
    create_table :item_brands do |t|
      t.string :brand_code
      t.string :description
      t.string :status
      
      t.timestamps null: false
    end
  end

  def down
    drop_table :item_brands
  end
end
