class Survey < ApplicationRecord
  enum status: [:not_started, :started, :completed]
  enum survey_type: [:adult, :kids]
  belongs_to :family_member
end
