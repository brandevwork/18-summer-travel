class CreateMemberPreferences < ActiveRecord::Migration[7.0]
  def change
    create_table :member_preferences do |t|
      t.integer :family_id
      t.integer :question_id
      t.references :family_member, null: false, foreign_key: true
      t.string :preferenceable_type
      t.integer :preferenceable_id

      t.timestamps
    end
  end
end
