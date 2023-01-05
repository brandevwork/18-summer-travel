class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :name
      t.integer :four_to_eight, default: 0
      t.integer :nine_to_thirteen, default: 0
      t.references :country, null: false, foreign_key: true
      t.string :label
      t.timestamps
    end
  end
end
