class CreateItemSegment < ActiveRecord::Migration
  def up
    create_table :item_segments do |t|
      t.string :segment_code
      t.string :description
      t.string :status
      
      t.timestamps null: false
    end
    
    add_index :item_segments, :segment_code, :unique => true
  end

  def down
    drop_table :item_segments
  end
end
