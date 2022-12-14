class  Api::V1::ResponseChoicesController < BaseController

  def create
    if params["family_member_id"].present? and params["question_id"].present?
      if params["choice_ids"].nil?
        ResponseChoice.find_or_create_by(family_member_id: params["family_member_id"], question_id: params["question_id"])
      else
        params["choice_ids"].each do |choiceid|
          ResponseChoice.find_or_create_by(family_member_id: params["family_member_id"], choice_id: choiceid, question_id: params["question_id"])
        end
      end
      render json: { success: true, status: 200 }
    else
      error_message = params["family_member_id"].present? ? 'question_id is missing' : 'family_member_id is missing'
      render json: { message: error_message , success: false, status: 400 }
    end
  end

end
