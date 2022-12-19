class ResponseChoice < ApplicationRecord
  belongs_to :choice, optional: true
  belongs_to :family_member

  after_create :family_member_status

  private

  def family_member_status
    response_choices = family_member.response_choices
    question_count = Question.all.size
    family_member.update(survey_status: 1) if response_choices.count < 2
    if family_member.age < 14
      family_member.update(survey_status: 2) if response_choices.select(:question_id).distinct.count == question_count - 12
    else
      family_member.update(survey_status: 2) if response_choices.select(:question_id).distinct.count == question_count
    end
  end
end
