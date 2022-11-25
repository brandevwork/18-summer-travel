class CreateSurvey < ActiveRecord::Migration[7.0]
  def change
    create_table :surveys do |t|
      t.string :status
      t.string :survey_type
      t.references :family_member

      t.timestamps
    end
  end
end
