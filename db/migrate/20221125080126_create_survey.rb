class CreateSurvey < ActiveRecord::Migration[7.0]
  def change
    create_table :surveys do |t|
      t.integer :survey_type
      t.integer :status, default: 0
      t.references :family_member

      t.timestamps
    end
  end
end
