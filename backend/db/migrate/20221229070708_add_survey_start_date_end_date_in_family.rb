class AddSurveyStartDateEndDateInFamily < ActiveRecord::Migration[7.0]
  def change
    change_table :families do |t|
      t.date :survey_start
      t.date :survey_end
    end
  end
end
