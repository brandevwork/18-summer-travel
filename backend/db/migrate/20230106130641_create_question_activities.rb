class CreateQuestionActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :question_activities do |t|
      t.references :question, null: false, foreign_key: true
      t.references :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
