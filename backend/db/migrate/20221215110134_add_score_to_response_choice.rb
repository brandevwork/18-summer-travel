class AddScoreToResponseChoice < ActiveRecord::Migration[7.0]
  def change
    add_column :response_choices, :score, :integer
  end
end
