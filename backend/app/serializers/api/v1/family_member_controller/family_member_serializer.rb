module Api::V1
  class FamilyMemberController::FamilyMemberSerializer < ActiveModel::Serializer
    include Api::V1::MemberPreferenceController
    attributes :id, :name, :age, :birth_year, :survey_status, :is_active, :choices

    def choices
      object.member_preferences.map do |choice|
        MemberPreferenceSerializer.new(choice, scope: scope, root: false, family_member: object)
      end
    end

  end
end
