class  Api::V1::SurveyResultsController < BaseController

  def result
    if current_family.family_members.completed

    else
      render json: { message: "Survey is not completed by the whole famliy", status: 204}
    end
  end
  
end