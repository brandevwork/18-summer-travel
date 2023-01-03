module Api::V1
  class FamiliesController::FamilySerializer < ActiveModel::Serializer
    attributes :id, :email, :number_of_family_member, :postal_code, :first_name, :address, :city,
               :state, :country, :survey_start_date, :survey_end_date
    has_many :family_members

    def survey_start_date
      object.survey_start.strftime('%B %e, %Y')
    end

    def survey_end_date
      object.survey_end.strftime('%B %e, %Y')
    end
  end
end
