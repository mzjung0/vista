class CreateReplenishmentDetail < ActiveRecord::Migration
  def up
    create_table :replenishment_details do |t|
      t.integer :replenishment_header_id
      t.integer :item_id
      t.integer :item_uom_id
      t.integer :quantity, :default => 0
    end

    add_foreign_key :replenishment_details, :replenishment_headers
    add_foreign_key :replenishment_details, :items
  end
end
