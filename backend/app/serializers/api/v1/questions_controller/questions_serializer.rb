module Api::V1::QuestionsController
  class QuestionsSerializer < ActiveModel::Serializer
    include Api::V1::ActivitiesController
    include Rails.application.routes.url_helpers
    attributes :id, :text, :question_image, :heading, :subheading, :boldtext, :question_type, :choices

    def choices
      if object.destinations.present?
        object.destinations
      else
        object.activities.map do |activity|
          ActivitySerializer.new(activity, scope: scope, root: false, question: object)
        end
      end
    end

    def question_image
      url_for(object.image)
    end
  end
end
