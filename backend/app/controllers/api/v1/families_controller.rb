class  Api::V1::FamiliesController < BaseController

  def index
    render json: families, status: :ok
  end
end
