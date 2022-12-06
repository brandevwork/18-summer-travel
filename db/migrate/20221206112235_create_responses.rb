class CreateResponses < ActiveRecord::Migration[7.0]
  def change
    create_table :responses do |t|
      t.references :family_member, null: false, foreign_key: true

      t.timestamps
    end
  end
end
