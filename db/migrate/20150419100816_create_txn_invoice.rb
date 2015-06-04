class CreateTxnInvoice < ActiveRecord::Migration
  def up
    create_table :txn_invoices do |t|
      t.string :invoice_number
      t.integer :salesman_id
      t.integer :customer_id
      t.string :ship_to_code
      t.string :original_amount, :default => 0, :precision => 8, :scale => 2
      t.string :balance_amount, :default => 0, :precision => 8, :scale => 2
      t.date :invoice_date
      t.date :invoice_due_date
      t.string :document_type
      t.string :status

      t.timestamps null: false
    end

    add_foreign_key :txn_invoices, :salesmen
    add_foreign_key :txn_invoices, :customers
  end

  def down
    drop_table :txn_invoices
  end
end
