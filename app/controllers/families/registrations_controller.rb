class Families::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  swagger_controller :registrations, "Family Registration"
  swagger_api :create do
    summary "Creates a new Family member"
    param :form, :email, :string, :required, "Email"
    param :form, :password, :string, :required, "Password"
    param :form, :number_of_family_member, :integer, :required, "Number of Family Member"
    param :form, :postal_code, :integer, :required, 'Postal Code'
    param :form, :address, :string, :required, "Address"
    param :form, :city, :string, :required, "City"
    param :form, :state, :string, :required, "State"
    param :form, :country, :string, :required, "Country"
    response :not_acceptable
    response :unprocessable_entity
  end

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: {
        status: {code: 200, message: 'Signed up sucessfully.'},
        data: FamilySerializer.new(resource).serializable_hash[:data][:attributes]
      }, status: :ok
    else
      render json: {
        status: {message: "Family Account couldn't be created successfully. #{resource.errors.full_messages.to_sentence}"}
      }, status: :unprocessable_entity
    end
  end
end
