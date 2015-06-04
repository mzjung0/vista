class CreateArea < ActiveRecord::Migration
  def up
    create_table :areas do |t|
      t.string :area_code
      t.string :area_name
      t.string :status
      
      t.timestamps null: false
    end

    add_index :areas, :area_code, :unique => true
  end

  def down
    drop_table :areas
  end
end
