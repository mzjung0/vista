class AddAdditionalFieldsToUsers < ActiveRecord::Migration
  def up
    add_column :users, :salesman_id, :integer
    add_column :users, :user_role_id, :integer
    add_column :users, :customer_price_group_id, :integer

    add_foreign_key :users, :user_roles
  end

  def down
    remove_column :users, :salesman_id
    remove_column :users, :user_role_id
    remove_column :users, :customer_price_group_id

    remove_foreign_key :users, :user_roles
  end
end
