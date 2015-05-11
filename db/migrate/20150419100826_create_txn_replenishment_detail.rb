class CreateTxnReplenishmentDetail < ActiveRecord::Migration
  def up
    create_table :txn_replenishment_details do |t|
      t.integer :txn_replenishment_header_id
      t.integer :item_id
      t.integer :item_uom_id
      t.integer :quantity, :default => 0
    end

    add_foreign_key :txn_replenishment_details, :txn_replenishment_headers
    add_foreign_key :txn_replenishment_details, :items
  end

  def down
    drop_table :txn_replenishment_details
  end
end
