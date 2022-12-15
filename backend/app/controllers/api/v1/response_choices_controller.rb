class  Api::V1::ResponseChoicesController < BaseController

  def create
    if params["family_member_id"].present? and params["question_id"].present?
      if params["choice_ids"].length < 1
        ResponseChoice.find_or_create_by(family_member_id: params["family_member_id"], question_id: params["question_id"])
      else
        params["choice_ids"].each do |choice_id|
          ResponseChoice.find_or_create_by(family_member_id: params["family_member_id"], choice_id: choice_id, question_id: params["question_id"], score: 1)
        end
      end
      render json: { status: 200, success: true }
    else
      return render json: { message: "Family Member and Question id is missing" , status: 400, success: false } unless (params["question_id"].present? || params["family_member_id"].present?) 
      error_message = params["family_member_id"].present? ? 'question_id is missing' : 'family_member_id is missing'
      render json: { message: error_message , status: 400, success: false }
    end
  end

end
