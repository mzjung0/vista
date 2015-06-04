class CreateSalesmanCustomer < ActiveRecord::Migration
  def up
    create_table :salesman_customers do |t|
      t.integer :salesman_id
      t.integer :customer_id
      t.string :ship_to_code
      t.string :status
      
      t.timestamps null: false
    end
    
    add_foreign_key :salesman_customers, :salesmen    
    add_foreign_key :salesman_customers, :customers
  end

  def down
    drop_table :salesman_customers
  end
end
