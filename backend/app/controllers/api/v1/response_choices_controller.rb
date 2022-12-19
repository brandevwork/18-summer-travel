class  Api::V1::ResponseChoicesController < BaseController

  respond_to :json

  swagger_controller :response_choices, "Response Choices"
  swagger_api :create do
    summary "Creates a new response of a family member"
    param :form, 'family_member_id', :integer, :required, "Family Member ID"
    param :form, 'question_id', :integer, :required, "Question ID"
    param :form, 'choice_ids[1]', :integer,  "Choice ID 1"
    param :form, 'choice_ids[2]', :integer,  "Choice ID 2"
    param :form, 'choice_ids[3]', :integer,  "Choice ID 3"
    response :not_acceptable
    response :unprocessable_entity
  end

  def create
    if params["family_member_id"].present? and params["question_id"].present?
      if !params["choice_ids"].present? || params["choice_ids"].empty?
        ResponseChoice.find_or_create_by(family_member_id: params["family_member_id"], question_id: params["question_id"])
      else
        params["choice_ids"].each do |key, val|
          ResponseChoice.find_or_create_by(family_member_id: params["family_member_id"], choice_id: val, question_id: params["question_id"])
        end
      end
      render json: { status: 200, success: true }
    else
      return render json: { message: "Family Member and Question id is missing" , status: 400, success: false } unless (params["question_id"].present? || params["family_member_id"].present?) 
      render json: { message: params["family_member_id"].present? ? 'question_id is missing' : 'family_member_id is missing' , status: 400, success: false }
    end
  end

end
