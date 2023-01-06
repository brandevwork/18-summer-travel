class Activity < ApplicationRecord
  has_one_attached :activity_image
  has_many :question_activities
  has_many :questions, through: :question_activities
end
