class Survey < ApplicationRecord
  enum status: [:not_started, :started, :completed]
  enum survey_type: [:adult, :kids]
  belongs_to :family_member
  after_create :set_survey_type

  private

  def set_survey_type
    update(survey_type: (family_member.age > 14)? 0 : 1)
  end
end
