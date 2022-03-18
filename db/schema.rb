# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_17_163527) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "climbproblems", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "problem_id", null: false
    t.boolean "favorite"
    t.boolean "in_progress"
    t.string "feedback"
    t.float "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["problem_id"], name: "index_climbproblems_on_problem_id"
    t.index ["user_id"], name: "index_climbproblems_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.integer "location"
    t.string "loc_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "problems", force: :cascade do |t|
    t.bigint "tech_id", null: false
    t.bigint "location_id", null: false
    t.string "grip_color"
    t.date "end_date"
    t.string "problem_description"
    t.integer "difficulty"
    t.float "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_problems_on_location_id"
    t.index ["tech_id"], name: "index_problems_on_tech_id"
  end

  create_table "teches", force: :cascade do |t|
    t.string "handholds"
    t.string "hold_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.boolean "admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "climbproblems", "problems"
  add_foreign_key "climbproblems", "users"
  add_foreign_key "problems", "locations"
  add_foreign_key "problems", "teches"
end
