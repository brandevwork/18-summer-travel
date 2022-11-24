class  Api::V1::FamilyMembersController < ApplicationController
  before_action :authenticate_family!

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
