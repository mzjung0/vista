class CreateVan < ActiveRecord::Migration
  def up
    create_table :vans do |t|
      t.string :van_code
      t.string :van_type
      t.string :description
      t.decimal :load_limit_amount, :default => 0, :precision => 8, :scale => 2
      t.string :status

      t.timestamps null: false
    end
    
    add_index :vans, :van_code, :unique => true
    add_foreign_key :salesman_vans, :vans
  end

  def down
    drop_table :vans
  end
end
