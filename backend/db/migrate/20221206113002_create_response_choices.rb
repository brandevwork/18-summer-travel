class CreateResponseChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :response_choices do |t|
      t.references :response, null: false, foreign_key: true
      t.references :choice, null: false, foreign_key: true
      t.timestamps
    end
  end
end
