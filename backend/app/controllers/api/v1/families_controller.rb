class  Api::V1::FamiliesController < ApplicationController
  before_action :authenticate_family!

  def index
    render json: families, status: :ok
  end
end
