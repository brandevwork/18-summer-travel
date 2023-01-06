class Destination < ApplicationRecord
  belongs_to :country
  has_many :question_destinations
  has_many :questions, through: :question_destinations
end
