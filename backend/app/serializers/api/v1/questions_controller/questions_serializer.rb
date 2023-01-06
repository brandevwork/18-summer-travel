module Api::V1::QuestionsController
  class QuestionsSerializer < ActiveModel::Serializer
    include Api::V1::ActivitiesController
    include Rails.application.routes.url_helpers
    attributes :id, :text, :question_image, :heading, :subheading, :boldtext, :activities
    has_many :destinations

    def activities
      object.activities.map do |activity|
        ActivitySerializer.new(activity, scope: scope, root: false, question: object)
      end
    end

    def question_image
      url_for(object.image)
    end
  end
end
