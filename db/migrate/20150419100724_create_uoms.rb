class CreateUoms < ActiveRecord::Migration
  def up
    create_table :uoms do |t|
      t.string :uom_code
      t.string :description
      t.string :status
      
      t.timestamps null: false
    end

    add_index :uoms, :uom_code, :unique => true
    add_foreign_key :item_uoms, :uoms
  end

  def down
    drop_table :uoms
  end
end
