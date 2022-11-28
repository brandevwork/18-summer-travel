class  Api::V1::FamilyMembersController < ApplicationController
  before_action :authenticate_family!
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

  def index
    families = current_family.family_members
    render json: families, status: 200
  end

  def new; end

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
end
