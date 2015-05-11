class CreateTxnReplenishmentHeader < ActiveRecord::Migration
  def up
    create_table :txn_replenishment_headers do |t|
      t.string :reference_number
      t.integer :van_id
      t.date :replenishment_date

      t.timestamps null: false
    end

    add_foreign_key :txn_replenishment_headers, :vans
  end

  def down
    drop_table :txn_replenishment_headers
  end
end
