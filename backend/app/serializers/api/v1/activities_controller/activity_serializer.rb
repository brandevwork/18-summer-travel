module Api::V1::ActivitiesController
  class ActivitySerializer < ActiveModel::Serializer
    include Rails.application.routes.url_helpers

    attributes :id, :name, :label, :activity_image

    def activity_image
      url_for(object.activity_image) if object.activity_image.attached?
    end

  end
end
