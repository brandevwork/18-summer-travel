class  Api::V1::SurveyResultsController < BaseController
  include Api::V1::FamilyMemberController

  def result
    family_members = current_family.family_members.where("age > ?", 4)
    if family_members.completed.length == family_members.count
      render json: family_members, each_serializer: FamilyMemberSerializer, meta: { status: :ok, code: 200, success: true }
    else
      render json: { message: "Survey is not completed by the whole famliy", status: 204, success: false}
    end
  end
  
end
