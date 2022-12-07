class Api::V1::SettingsController < ApplicationController
  include Api::V1

  skip_before_action :verify_authenticity_token

  swagger_controller :settings, "Settings"

  swagger_api :family do
    summary "Fetches a family and its all family members on settings page"
    response :unauthorized
    response :not_acceptable, "The request you made is not acceptable"
  end

  swagger_api :reset_family_survey do
    summary "Reset the survey response of all the family members of the family that is login"
    response :unauthorized
    response :not_acceptable, "The request you made is not acceptable"
  end

  def family
    render json: current_family, serializer: FamiliesController::FamilySerializer, meta: {status: :ok, code: 200}
  end

  def reset_family_survey
    familymembers = current_family.family_members
    if familymembers.present?
      familymembers.each do |familymember|
        familymember.response.destroy if familymember.response.present?
      end
      render json: { message: "Survey has been reset successfully", status: :ok, success: true }
    else
      render json: { message: "Unable to reset survey", status: 204}
    end
  end

end
