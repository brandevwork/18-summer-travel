module Api::V1
  class MemberPreferenceController::MemberPreferenceSerializer < ActiveModel::Serializer
    attributes :choice_type, :choice

    def choice_type
      object.preferenceable_type
    end

    def choice
      object.preferenceable.label
    end
  end
end
