class CreateChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :choices do |t|
      t.string :choice_text
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
