class Api::V1::SurveyResultsController < BaseController
  include Api::V1::FamilyMemberController

  swagger_controller :survey_results, 'Survey Result'

  swagger_api :result do
    summary 'Fetches the survey results of all family members of a family'
    notes 'These are the survey results of all family members of a family'
    response :unauthorized
    response :not_acceptable, 'The request you made is not acceptable'
  end

  def result
    family_members = current_family.family_members.where('age > ?', 4)
    if family_members.completed.length == family_members.count
      render json: family_members, each_serializer: FamilyMemberSerializer, meta: { status: :ok, code: 200, success: true }
    else
      render json: { message: 'Survey is not completed by the whole famliy', status: 204, success: false }
    end
  end
  
end
