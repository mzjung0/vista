class CreateSalesman < ActiveRecord::Migration
  def up
    create_table :salesmen do |t|
      t.string :salesman_code
      t.string :salesman_name
      t.string :status
      
      t.timestamps null: false
    end

    add_index :salesmen, :salesman_code, :unique => true
  end

  def down
    drop_table :salesmen
  end
end
