module Api::V1
  class FamilyMembersController::QuestionsSerializer < ActiveModel::Serializer
    attributes :id, :question_text, :survey_id
    has_many :choices
  end
end
