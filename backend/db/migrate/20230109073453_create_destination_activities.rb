class CreateDestinationActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :destination_activities do |t|
      t.references :destination, null: false, foreign_key: true
      t.references :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
