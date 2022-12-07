module Api::V1
  class FamilyMembersController::QuestionsSerializer < ActiveModel::Serializer
    has_many :choices
    attributes :id, :question_text, :survey_id
  end
end
