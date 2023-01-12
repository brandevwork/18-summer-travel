module Api::V1
  class MemberPreferenceController::MemberPreferenceSerializer < ActiveModel::Serializer
    attributes :choice_type, :choice

    def choice_type
      object.preferenceable_type unless object.preferenceable_type.nil?
    end

    def choice
      object.preferenceable.label unless object.preferenceable_id.nil?
    end
  end
end
