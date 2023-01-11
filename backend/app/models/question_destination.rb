class QuestionDestination < ApplicationRecord
  belongs_to :question
  belongs_to :destination
end
