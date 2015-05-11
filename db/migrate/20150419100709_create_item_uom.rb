class CreateItemUom < ActiveRecord::Migration
  def up
    create_table :item_uoms do |t|
      t.integer :item_id
      t.integer :uom_id
      t.decimal :unit_conversion, :default => 0, :precision => 6, :scale => 2
      t.string :status
      
      t.timestamps null: false
    end

    add_foreign_key :item_uoms, :items
  end

  def down
    drop_table :item_uoms
  end
end
