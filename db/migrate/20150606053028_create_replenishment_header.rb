class CreateReplenishmentHeader < ActiveRecord::Migration
  def up
    drop_table :txn_replenishment_details
    drop_table :txn_replenishment_headers

    create_table :replenishment_headers do |t|
      t.string :reference_number
      t.integer :van_id
      t.date :replenishment_date

      t.timestamps null: false
    end

    add_foreign_key :replenishment_headers, :vans
  end
end
