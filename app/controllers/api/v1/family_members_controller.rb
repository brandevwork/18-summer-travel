class  Api::V1::FamilyMembersController < ApplicationController
  include Api::V1

  before_action :authenticate_family!
  before_action :get_family_member, only: [:show]
  swagger_controller :family_members, "Family Members"

  swagger_api :index do
    summary "Fetches all family members of a family"
    notes "These are the family members against a family"
    param :query, :family_id, :integer, :optional, "Family Id"
    response :unauthorized
    response :not_acceptable, "The request you made is not acceptable"
  end

  swagger_api :create do
    summary "Creates a new Family member"
    param :form, :name, :string, :required, "Name"
    param :form, :date_of_birth, :date, :required, "Date of Birth"
    param :form, :email, :string, :required, "Email address"
    response :not_acceptable
  end

  swagger_api :show do
    summary "Fetches a single family member and its survey"
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
      render json: questions, each_serializer: QuestionsController::QuestionsSerializer, meta: {status: :ok, code: 200}
    else
      render json: {error: "Family Member not found"}
    end
  end

  def create
    family_member = current_family.family_members.create(family_member_params)
    if family_member.save
      render json: family_member, status: 200
    else
      render json: {error: "Cannot create family member"}
    end
  end

  private

  def family_member_params
    params.require(:family_member).permit(:name, :age, :date_of_birth, :family_id)
  end

  def get_family_member
    @family_member = FamilyMember.find(params[:id])
  end
end
