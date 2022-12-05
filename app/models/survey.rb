class Survey < ApplicationRecord
  enum survey_type: [:adult, :kids]
  has_many :questions, dependent: :destroy
end
