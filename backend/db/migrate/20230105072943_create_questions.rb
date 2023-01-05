class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :text
      t.string :heading
      t.string :subheading
      t.references :question_categories, null: false, foreign_key: true

      t.timestamps
    end
  end
end
