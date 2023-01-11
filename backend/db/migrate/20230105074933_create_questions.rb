class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :text
      t.string :heading
      t.string :subheading
      t.string :boldtext
      t.integer :question_type

      t.timestamps
    end
  end
end
