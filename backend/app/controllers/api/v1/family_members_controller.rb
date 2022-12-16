class  Api::V1::FamilyMembersController < BaseController
  include Api::V1::QuestionsController

  before_action :get_family_member, only: %i[show update]
  swagger_controller :family_members, "Family Members"

  swagger_api :index do
    summary "Fetches all family members of a family"
    notes "These are the family members against a family"
    response :unauthorized
    response :not_acceptable, "The request you made is not acceptable"
  end

  swagger_api :show do
    summary "Fetches a single family member and its survey"
    param :path, :id, :integer, :required, "FamilyMember Id"
    response :ok, "Success", :Survey
    response :unauthorized
    response :not_acceptable
    response :not_found
  end

  swagger_api :update do
    summary "Updates the is_active status of given id family member"
    param :path, :id, :integer, :required, "FamilyMember Id"
    response :ok, "Success", :Survey
    response :unauthorized
    response :not_acceptable
    response :not_found
  end

  def index
    families = current_family.family_members
    render json: { data: { family: families }, status: :ok, success: true }
  end

  def show
    if @family_member.is_active? && !@family_member.completed?
      questions = Survey.first.questions
      questions = @family_member.age < 14 ? questions.limit(4) : questions
      response_choices = @family_member.response_choices
      if response_choices.present?
        questions = Question.where.not(id: response_choices.pluck(:question_id))
        questions = questions.limit(4 - response_choices.select(:question_id).distinct.count) if @family_member.age < 14
      end
      render json: questions, each_serializer: QuestionsSerializer, meta: { status: :ok, code: 200, success: true }
    else
      render json: { error: (@family_member.completed?) ? 'Family Member survey is already completed' : 'Family Member status is not active', success: false }
    end
  end

  def update
    @family_member.update(is_active: !@family_member.is_active)
    render json: { status: :ok, success: true }
  end

  private

  def family_member_params
    params.require(:family_member).permit(:name, :age, :birth_year, :family_id)
  end

  def get_family_member
    @family_member = FamilyMember.find_by(id: params[:id])
    return render json: { error: "Family Member not found", status: 404, success: false } if @family_member.nil?
    render json: { error: "You are unauthorized", status: 401, success: false } unless @family_member.family_id.eql?(current_family.id)
  end
end
