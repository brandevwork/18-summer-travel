class CreateFamilyRecommendations < ActiveRecord::Migration[7.0]
  def change
    create_table :family_recommendations do |t|
      t.references :family, null: false, foreign_key: true
      t.jsonb :recommendations

      t.timestamps
    end
  end
end
