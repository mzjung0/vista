class CreateCustomerPriceGroup < ActiveRecord::Migration
  def up
    create_table :customer_price_groups do |t|
      t.string :price_group_code
      t.integer :paid_quantity      
      t.integer :free_quantity
      
      t.timestamps null: false
    end
  end

  def down
    drop_table :customer_price_groups
  end
end
