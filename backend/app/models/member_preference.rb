class MemberPreference < ApplicationRecord
  belongs_to :family_member
  belongs_to :preferenceable, polymorphic: true, optional: true
  after_create :family_member_status

  private

  def family_member_status
    member_preferences = family_member.member_preferences
    question_count = Question.all.size
    family_member.update(survey_status: 1) if member_preferences.count < 2
    if family_member.age < 14
      family_member.update(survey_status: 2) if member_preferences.select(:question_id).distinct.count == question_count - 12
    else
      family_member.update(survey_status: 2) if member_preferences.select(:question_id).distinct.count == question_count
    end
  end
end
