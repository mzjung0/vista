class CreateStoretype < ActiveRecord::Migration
  def up
    create_table :storetypes do |t|
      t.string :storetype_code
      t.string :storetype_name
      t.string :status

      t.timestamps null: false
    end

    add_index :storetypes, :storetype_code, :unique => true
  end

  def down
  end
end
