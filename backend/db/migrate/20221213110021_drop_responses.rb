class DropResponses < ActiveRecord::Migration[7.0]
  def change
    remove_column :response_choices, :response_id
    drop_table :responses
  end
end
