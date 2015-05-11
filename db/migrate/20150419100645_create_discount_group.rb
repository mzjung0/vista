class CreateDiscountGroup < ActiveRecord::Migration
  def up
    create_table :discount_groups do |t|
      t.string :discount_group_code
      t.decimal :discount, :default => 0, :precision => 8, :scale => 2
      t.string :status
      
      t.timestamps null: false
    end
  end

  def down
    drop_table :discount_groups
  end
end
