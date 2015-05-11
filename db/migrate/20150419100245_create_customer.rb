class CreateCustomer < ActiveRecord::Migration
  def up
    create_table :customers do |t|
      t.string :customer_code
      t.integer :area_id
      t.string :customer_name
      t.string :customer_name2
      t.integer :storetype_id
      t.integer :vat_posting_id
      t.string :vat_ex_flag
      t.string :address_1
      t.string :address_2
      t.string :address_3
      t.string :contact_name
      t.string :contact_num
      t.string :credit_limit
      t.integer :discount_group_id
      t.string :warehouse_code
      t.string :ship_to_code
      t.integer :customer_price_group_id
      t.string :status
      
      t.timestamps null: false
    end

    add_index :customers, :customer_code, :unique => true
    add_foreign_key :customers, :areas
  end

  def down
    drop_table :customers
  end
end
