class Families::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  swagger_controller :sessions, "Family Login"
  swagger_api :create do
    summary "Login a Family"
    param :form, :email, :string, :required, "Email"
    param :form, :password, :string, :required, "Password"
    response :not_acceptable
    response :unprocessable_entity
  end

  swagger_api :destroy do
    summary "Logout a family"
    param :path, :id, :integer, :required, "User Id"
    response :unauthorized
    response :not_found
  end

  private

  def respond_with(resource, _opts = {})
    render json: {
      status: {code: 200, message: 'Logged in sucessfully.',
      data: current_family }
    }, status: :ok
  end

  def respond_to_on_destroy
    jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1], Rails.application.credentials.fetch(:secret_key_base)).first
    current_family = Family.find(jwt_payload['sub'])
    if current_family
      render json: {
        status: 200,
        message: "logged out successfully"
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end
end