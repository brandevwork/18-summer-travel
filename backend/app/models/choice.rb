class Choice < ApplicationRecord
  belongs_to :question
  has_many :response_choices
  has_many :responses, through: :response_choices
  has_one_attached :image
end
