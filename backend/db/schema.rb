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

ActiveRecord::Schema[7.0].define(version: 2022_12_06_113002) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "choices", force: :cascade do |t|
    t.string "choice_text"
    t.bigint "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_choices_on_question_id"
  end

  create_table "families", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.integer "number_of_family_member"
    t.integer "postal_code"
    t.string "first_name"
    t.string "last_name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "country"
    t.string "jti", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_families_on_email", unique: true
    t.index ["jti"], name: "index_families_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_families_on_reset_password_token", unique: true
  end

  create_table "family_members", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.date "date_of_birth", null: false
    t.boolean "status", default: true
    t.bigint "family_id"
    t.integer "survey_status", default: 0
    t.boolean "is_active", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["family_id"], name: "index_family_members_on_family_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "question_text"
    t.bigint "survey_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["survey_id"], name: "index_questions_on_survey_id"
  end

  create_table "response_choices", force: :cascade do |t|
    t.bigint "response_id", null: false
    t.bigint "choice_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["choice_id"], name: "index_response_choices_on_choice_id"
    t.index ["response_id"], name: "index_response_choices_on_response_id"
  end

  create_table "responses", force: :cascade do |t|
    t.bigint "family_member_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["family_member_id"], name: "index_responses_on_family_member_id"
  end

  create_table "surveys", force: :cascade do |t|
    t.string "survey_name"
    t.integer "survey_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "choices", "questions"
  add_foreign_key "response_choices", "choices"
  add_foreign_key "response_choices", "responses"
  add_foreign_key "responses", "family_members"
end
