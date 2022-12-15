class ResponseChoice < ApplicationRecord
  belongs_to :choices, optional: true
  belongs_to :family_member

  after_create :family_member_status

  private

  def family_member_status
    return if family_member.response_choices.count > 2
    family_member.update(survey_status: 1)
  end
end
