class AddForeignKeyToResponseChoices < ActiveRecord::Migration[7.0]
  def change
    add_reference :response_choices, :family_member, type: :integer, foreign_key: true
    add_column :response_choices, :question_id, :integer
    change_column :response_choices, :choice_id, :int, null:true
  end
end
