module Api::V1::QuestionsController
  class QuestionsSerializer < ActiveModel::Serializer
    include Api::V1::ChoicesController
    attributes :id, :question_text, :survey_id, :choices

    def choices
      object.choices.map do |choice|
        ChoiceSerializer.new(choice, scope: scope, root: false, question: object)
      end
    end
  end
end
