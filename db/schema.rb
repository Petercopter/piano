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

ActiveRecord::Schema.define(version: 20161114071032) do

  create_table "keys", force: :cascade do |t|
    t.float    "offset"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "keys_notes", force: :cascade do |t|
    t.integer  "key_id"
    t.integer  "note_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["key_id"], name: "index_keys_notes_on_key_id"
    t.index ["note_id"], name: "index_keys_notes_on_note_id"
  end

  create_table "keys_scales", force: :cascade do |t|
    t.integer  "key_id"
    t.integer  "note_id"
    t.integer  "scale_id"
    t.integer  "finger_left"
    t.integer  "finger_right"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["key_id"], name: "index_keys_scales_on_key_id"
    t.index ["note_id"], name: "index_keys_scales_on_note_id"
    t.index ["scale_id"], name: "index_keys_scales_on_scale_id"
  end

  create_table "notes", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scales", force: :cascade do |t|
    t.integer  "type"
    t.integer  "note_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["note_id"], name: "index_scales_on_note_id"
  end

end
