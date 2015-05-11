class CreateSalesmanVan < ActiveRecord::Migration
  def up
    create_table :salesman_vans do |t|
      t.integer :salesman_id
      t.integer :van_id
      t.string :status
      
      t.timestamps null: false
    end
    
    add_foreign_key :salesman_vans, :salesmen
  end

  def down
    drop_table :salesman_vans
  end
end
