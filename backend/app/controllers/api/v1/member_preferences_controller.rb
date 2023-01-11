class Api::V1::MemberPreferencesController < BaseController

  respond_to :json

  swagger_controller :member_preferences, 'Member Preferences'
  swagger_api :create do
    summary 'Creates a new response of a family member'
    param :form, 'family_member_id', :integer, :required, 'Family Member ID'
    param :form, 'question_id', :integer, :required, 'Question ID'
    param :form, 'family_id', :integer, :required, 'Family ID'
    param :form, 'preference_ids[1]', :integer, 'Preference ID 1'
    param :form, 'preference_ids[2]', :integer, 'Preference 2'
    param :form, 'preference_ids[3]', :integer, 'Preference 3'
    response :not_acceptable
    response :unprocessable_entity
  end

  def create
    if params['family_member_id'].present? && params['question_id'].present?
      question_type = Question.find_by(id: params['question_id']).question_type.capitalize
      if !params['preference_ids'].present? || params['preference_ids'].empty?
        MemberPreference.find_or_create_by(family_member_id: params['family_member_id'], question_id: params['question_id'], preferenceable_type: question_type)
      else
        params['preference_ids'].each do |key, value|
          MemberPreference.find_or_create_by!(family_member_id: params['family_member_id'], preferenceable_id: value, question_id: params['question_id'], family_id: params['family_id'], preferenceable_type: question_type)
        end
      end
      save_params = {
        question_id: params['question_id'],
      }
      save_params.store('preference_ids', params['preference_ids']) if params['preference_ids'].present?
      render json: { data: save_params, status: 200, success: true }
    else
      return render json: { message: 'Family Member and Question id is missing', status: 400, success: false } unless (params['question_id'].present? || params['family_member_id'].present?)

      render json: { message: params['family_member_id'].present? ? 'question_id is missing' : 'family_member_id is missing', status: 400, success: false }
    end
  end

end
