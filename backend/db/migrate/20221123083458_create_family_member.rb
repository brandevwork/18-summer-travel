class CreateFamilyMember < ActiveRecord::Migration[7.0]
  def change
    create_table :family_members do |t|
      t.string :name
      t.integer :age
      t.string :birth_year,          null: false
      t.boolean :status, default: true
      t.references :family
      t.integer :survey_status, default: 0
      t.boolean :is_active, default: 1
      t.timestamps
    end
  end
end
