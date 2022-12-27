class Question < ApplicationRecord
  belongs_to :survey
  has_many :choices, dependent: :destroy
  has_one_attached :question_image
end
