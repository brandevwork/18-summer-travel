module Api::V1::ChoicesController
  class ChoiceSerializer < ActiveModel::Serializer
    include Rails.application.routes.url_helpers

    attributes :id, :choice_text, :choice_image

    def choice_image
      url_for(object.image) if object.image.attached?
    end

  end
end
