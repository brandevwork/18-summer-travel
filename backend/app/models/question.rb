class Question < ApplicationRecord
  enum question_type: %i[activity destination]
  has_one_attached :image
  has_many :question_activities
  has_many :activities, through: :question_activities
  has_many :question_destinations
  has_many :destinations, through: :question_destinations
end
