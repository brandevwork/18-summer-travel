module Api::V1::ChoicesController
  class ChoiceSerializer < ActiveModel::Serializer
    include Rails.application.routes.url_helpers

    attributes :id, :choice_text, :has_image

    def has_image
      url_for(object.image)
    end

  end
end
