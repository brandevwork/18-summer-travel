class Api::V1::SettingsController < ApplicationController
  skip_before_action :verify_authenticity_token

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
