class Question < ApplicationRecord
  enum question_type: %i[activities destinations]
  has_one_attached :image
end
