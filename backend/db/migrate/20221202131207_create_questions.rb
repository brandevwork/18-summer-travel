class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :question_text
      t.references :survey

      t.timestamps
    end
  end
end
