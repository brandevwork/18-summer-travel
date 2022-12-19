module Api::V1
  class FamilyMemberController::FamilyMemberSerializer < ActiveModel::Serializer
    include Api::V1::ChoicesController
    attributes :id, :name, :age, :birth_year, :survey_status, :is_active, :choices

    def choices
      object.choices.map do |choice|
        ChoiceSerializer.new(choice, scope: scope, root: false, question: object)
      end
    end

  end
end
