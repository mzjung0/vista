class ChangePrivilegeToJson < ActiveRecord::Migration
  def up
    remove_column :user_roles, :privileges
    add_column :user_roles, :privileges, :json
  end

  def down
    remove_column :user_roles, :privileges
    add_column :user_roles, :privileges, :string, default: [], array: true
  end
end
