module Api::V1
<<<<<<< HEAD:backend/app/serializers/api/v1/questions_controller/questions_serializer.rb
  class QuestionsController::QuestionsSerializer < ActiveModel::Serializer
    attributes :id, :question_text, :survey_id
=======
  class FamilyMembersController::QuestionsSerializer < ActiveModel::Serializer
>>>>>>> main:backend/app/serializers/api/v1/family_members_controller/questions_serializer.rb
    has_many :choices
    attributes :id, :question_text, :survey_id
  end
end
