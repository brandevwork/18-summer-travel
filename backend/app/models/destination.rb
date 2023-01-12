class Destination < ApplicationRecord
  belongs_to :country
  has_many :question_destinations
  has_many :questions, through: :question_destinations
  has_many :destination_activities
  has_many :activities, through: :destination_activities
  has_many :member_preferences, as: :preferenceable

  def is_usa?
    country.name.eql?('USA')
  end
end
