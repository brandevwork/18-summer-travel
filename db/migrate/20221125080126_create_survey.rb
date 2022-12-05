class CreateSurvey < ActiveRecord::Migration[7.0]
  def change
    create_table :surveys do |t|
      t.timestamps
    end
  end
end
