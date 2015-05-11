class CreateVatPosting < ActiveRecord::Migration
  def up
    create_table :vat_postings do |t|
      t.string :vat_posting_code
      t.string :vat_posting_name
      t.decimal :vat_posting_rate, :default => 0, :precision => 8, :scale => 2
      t.string :status

      t.timestamps null: false
    end
    
    add_index :vat_postings, :vat_posting_code, :unique => true
  end

  def down
    drop_table :vat_postings
  end
end
