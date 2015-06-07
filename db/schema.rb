# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150607065910) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "areas", force: :cascade do |t|
    t.string   "area_code"
    t.string   "area_name"
    t.string   "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "areas", ["area_code"], name: "index_areas_on_area_code", unique: true, using: :btree

  create_table "customer_price_groups", force: :cascade do |t|
    t.string   "price_group_code"
    t.integer  "paid_quantity"
    t.integer  "free_quantity"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string   "customer_code"
    t.integer  "area_id"
    t.string   "customer_name"
    t.string   "customer_name2"
    t.integer  "storetype_id"
    t.integer  "vat_posting_id"
    t.string   "vat_ex_flag"
    t.string   "address_1"
    t.string   "address_2"
    t.string   "address_3"
    t.string   "contact_name"
    t.string   "contact_num"
    t.string   "credit_limit"
    t.integer  "discount_group_id"
    t.string   "warehouse_code"
    t.string   "ship_to_code"
    t.integer  "customer_price_group_id"
    t.string   "status"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "customers", ["customer_code"], name: "index_customers_on_customer_code", unique: true, using: :btree

  create_table "discount_groups", force: :cascade do |t|
    t.string   "discount_group_code"
    t.decimal  "discount",            precision: 8, scale: 2, default: 0.0
    t.string   "status"
    t.datetime "created_at",                                                null: false
    t.datetime "updated_at",                                                null: false
  end

  create_table "invoices", force: :cascade do |t|
    t.string   "invoice_number"
    t.integer  "salesman_id"
    t.integer  "customer_id"
    t.string   "ship_to_code"
    t.string   "original_amount",  default: "0"
    t.string   "balance_amount",   default: "0"
    t.date     "invoice_date"
    t.date     "invoice_due_date"
    t.string   "document_type"
    t.string   "status"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  create_table "item_brands", force: :cascade do |t|
    t.string   "brand_code"
    t.string   "description"
    t.string   "status"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "item_prices", force: :cascade do |t|
    t.integer  "item_id"
    t.integer  "customer_price_group_id"
    t.integer  "uom_id"
    t.decimal  "unit_price",              precision: 8, scale: 2, default: 0.0
    t.string   "status"
    t.date     "effective_date_from"
    t.date     "effective_date_to"
    t.datetime "created_at",                                                    null: false
    t.datetime "updated_at",                                                    null: false
  end

  create_table "item_segments", force: :cascade do |t|
    t.string   "segment_code"
    t.string   "description"
    t.string   "status"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "item_segments", ["segment_code"], name: "index_item_segments_on_segment_code", unique: true, using: :btree

  create_table "item_uoms", force: :cascade do |t|
    t.integer  "item_id"
    t.integer  "uom_id"
    t.decimal  "unit_conversion", precision: 6, scale: 2, default: 0.0
    t.string   "status"
    t.datetime "created_at",                                            null: false
    t.datetime "updated_at",                                            null: false
  end

  create_table "items", force: :cascade do |t|
    t.string   "item_code"
    t.string   "description"
    t.string   "description2"
    t.integer  "item_segment_id"
    t.integer  "item_brand_id"
    t.string   "status"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "items", ["item_code"], name: "index_items_on_item_code", unique: true, using: :btree

  create_table "replenishment_details", force: :cascade do |t|
    t.integer "replenishment_header_id"
    t.integer "item_id"
    t.integer "uom_id"
    t.integer "quantity",                default: 0
  end

  create_table "replenishment_headers", force: :cascade do |t|
    t.string   "reference_number"
    t.integer  "van_id"
    t.date     "replenishment_date"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "salesman_customers", force: :cascade do |t|
    t.integer  "salesman_id"
    t.integer  "customer_id"
    t.string   "ship_to_code"
    t.string   "status"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "salesman_vans", force: :cascade do |t|
    t.integer  "salesman_id"
    t.integer  "van_id"
    t.string   "status"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "salesmen", force: :cascade do |t|
    t.string   "salesman_code"
    t.string   "salesman_name"
    t.string   "status"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "salesmen", ["salesman_code"], name: "index_salesmen_on_salesman_code", unique: true, using: :btree

  create_table "storetypes", force: :cascade do |t|
    t.string   "storetype_code"
    t.string   "storetype_name"
    t.string   "status"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "storetypes", ["storetype_code"], name: "index_storetypes_on_storetype_code", unique: true, using: :btree

  create_table "uoms", force: :cascade do |t|
    t.string   "uom_code"
    t.string   "description"
    t.string   "status"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "uoms", ["uom_code"], name: "index_uoms_on_uom_code", unique: true, using: :btree

  create_table "user_roles", force: :cascade do |t|
    t.string "role_name"
    t.json   "privileges"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.string   "email",                   default: "", null: false
    t.string   "encrypted_password",      default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",           default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.integer  "failed_attempts",         default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.integer  "salesman_id"
    t.integer  "user_role_id"
    t.integer  "customer_price_group_id"
    t.string   "name"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["unlock_token"], name: "index_users_on_unlock_token", unique: true, using: :btree

  create_table "vans", force: :cascade do |t|
    t.string   "van_code"
    t.string   "van_type"
    t.string   "description"
    t.decimal  "load_limit_amount", precision: 8, scale: 2, default: 0.0
    t.string   "status"
    t.datetime "created_at",                                              null: false
    t.datetime "updated_at",                                              null: false
  end

  add_index "vans", ["van_code"], name: "index_vans_on_van_code", unique: true, using: :btree

  create_table "vat_postings", force: :cascade do |t|
    t.string   "vat_posting_code"
    t.string   "vat_posting_name"
    t.decimal  "vat_posting_rate", precision: 8, scale: 2, default: 0.0
    t.string   "status"
    t.datetime "created_at",                                             null: false
    t.datetime "updated_at",                                             null: false
  end

  add_index "vat_postings", ["vat_posting_code"], name: "index_vat_postings_on_vat_posting_code", unique: true, using: :btree

  add_foreign_key "customers", "areas"
  add_foreign_key "invoices", "customers"
  add_foreign_key "invoices", "salesmen"
  add_foreign_key "item_prices", "items"
  add_foreign_key "item_prices", "uoms"
  add_foreign_key "item_uoms", "items"
  add_foreign_key "item_uoms", "uoms"
  add_foreign_key "items", "item_brands"
  add_foreign_key "replenishment_details", "items"
  add_foreign_key "replenishment_details", "replenishment_headers"
  add_foreign_key "replenishment_details", "uoms"
  add_foreign_key "replenishment_headers", "vans"
  add_foreign_key "salesman_customers", "customers"
  add_foreign_key "salesman_customers", "salesmen"
  add_foreign_key "salesman_vans", "salesmen"
  add_foreign_key "salesman_vans", "vans"
  add_foreign_key "users", "user_roles"
end
