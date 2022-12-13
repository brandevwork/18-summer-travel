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
    render json: {data: {family: families}, status: :ok, success: true}
  end

  def show
    if @family_member
      survey = Survey.includes(:questions).first
      questions = (@family_member.age < 14) ? survey.questions.limit(4) : survey.questions
      render json: questions, each_serializer: QuestionsSerializer, meta: {status: :ok, code: 200}
    else
      render json: {error: "Family Member not found"}
    end
  end

  def update
    if @family_member
      @family_member.update(is_active: !@family_member.is_active)
      render json: { status: :ok, success: true }
    else
      render json: {error: "Family Member not found"}
    end
  end

  private

  def family_member_params
    params.require(:family_member).permit(:name, :age, :birth_year, :family_id)
  end

  def get_family_member
    @family_member = FamilyMember.find_by(id: params[:id])
  end
end
