class AddForeignKeyToChoice < ActiveRecord::Migration[7.0]
  def change
    add_reference :choices, :category, index: true, foreign_key: true
  end
end
