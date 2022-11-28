class CreateFamilyMember < ActiveRecord::Migration[7.0]
  def change
    create_table :family_members do |t|
      t.string :name
      t.integer :age
      t.date :date_of_birth,          null: false
      t.boolean :status, default: true
      t.references :family
      t.timestamps
    end
  end
end
