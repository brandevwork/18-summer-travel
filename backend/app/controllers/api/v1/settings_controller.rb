class Api::V1::SettingsController < BaseController
  include Api::V1

  swagger_controller :settings, 'Settings'

  swagger_api :family do
    summary 'Fetches a family and its all family members on settings page'
    response :unauthorized
    response :not_acceptable, 'The request you made is not acceptable'
  end

  swagger_api :reset_family_survey do
    summary 'Reset the survey response of all the family members of the family that is login'
    response :unauthorized
    response :not_acceptable, 'The request you made is not acceptable'
  end

  def family
    render json: current_family, serializer: FamiliesController::FamilySerializer, meta: { status: :ok, success: true }
  end

  def reset_family_survey
    familymembers = current_family.family_members
    if familymembers.present?
      familymembers.each do |familymember|
        familymember.member_preferences.destroy_all if familymember.member_preferences.present?
        familymember.update(survey_status: 0)
      end
      current_family.update(survey_start: nil, survey_end: nil)
      current_family.family_recommendation.destroy
      render json: { message: 'Survey has been reset successfully', status: :ok, success: true }
    else
      render json: { message: 'Unable to reset survey', status: 400, success: false }
    end
  end
end
