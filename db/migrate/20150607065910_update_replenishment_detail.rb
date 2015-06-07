class UpdateReplenishmentDetail < ActiveRecord::Migration
  def up
    drop_table :replenishment_details

    create_table :replenishment_details do |t|
      t.integer :replenishment_header_id
      t.integer :item_id
      t.integer :uom_id
      t.integer :quantity, :default => 0
    end

    add_foreign_key :replenishment_details, :replenishment_headers
    add_foreign_key :replenishment_details, :items
    add_foreign_key :replenishment_details, :uoms
  end

  def down
    drop_table :replenishment_details
  end
end
