module Api::V1::QuestionsController
  class QuestionsSerializer < ActiveModel::Serializer
    include Api::V1::ChoicesController
    include Rails.application.routes.url_helpers
    attributes :id, :question_text, :survey_id, :question_image, :heading, :choices

    def choices
      object.choices.map do |choice|
        ChoiceSerializer.new(choice, scope: scope, root: false, question: object)
      end
    end

    def question_image
      url_for(object.question_image)
    end
  end
end
