module Api::V1::QuestionsController
  class QuestionsSerializer < ActiveModel::Serializer
    attributes :id, :question_text, :survey_id
    has_many :choices
    attributes :id, :question_text, :survey_id
  end
end
