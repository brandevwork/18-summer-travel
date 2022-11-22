class FamiliesController < ApplicationController
  skip_before_action: authenticity_token
  before_action :authenticate_family!
  def index
    render json: family, status: :ok
  end
end
