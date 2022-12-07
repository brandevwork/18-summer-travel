class CreateSurvey < ActiveRecord::Migration[7.0]
  def change
    create_table :surveys do |t|
      t.string :survey_name
      t.integer :survey_type

      t.timestamps
    end
  end
end
