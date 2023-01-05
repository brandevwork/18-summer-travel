class Question < ApplicationRecord
  belongs_to :question_category
  has_one_attached :image
end
