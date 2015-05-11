class CreateItemPrice < ActiveRecord::Migration
  def up
    create_table :item_prices do |t|
      t.integer :item_id
      t.integer :customer_price_group_id
      t.integer :item_uom_id
      t.decimal :unit_price, :default => 0, :precision => 8, :scale => 2
      t.string :status
      t.date :effective_date_from
      t.date :effective_date_to
      
      t.timestamps null: false
    end

    add_foreign_key :item_prices, :items
    add_foreign_key :item_prices, :item_uoms
  end

  def down
    drop_table :item_prices
  end
end
