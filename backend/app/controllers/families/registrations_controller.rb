class Families::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  swagger_controller :registrations, "Family Registration"
  swagger_api :create do
    summary "Creates a new Family"
    param :form, 'family[email]', :string, :required, "Email"
    param :form, 'family[first_name]', :string, :required, "Family Name"
    param :form, 'family[password]', :string, :required, "Password"
    param :form, 'family[number_of_family_member]', :integer, :required, "Number of Family Member"
    param :form, 'family[postal_code]', :integer, :required, 'Postal Code'
    param :form, 'family[address]', :string, :required, "Address"
    param :form, 'family[city]', :string, :required, "City"
    param :form, 'family[state]', :string, :required, "State"
    param :form, 'family[country]', :string, :required, "Country"
    param :form, 'family[family_members_attributes][1][name]', :string, :required, "First Family Member Name"
    param :form, 'family[family_members_attributes][1][birth_year]', :string, :required, "First Family Member Birth Year"
    param :form, 'family[family_members_attributes][2][name]', :string, :required, "First Family Member Name"
    param :form, 'family[family_members_attributes][2][birth_year]', :string, :required, "First Family Member Birth Year"
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
        message: "Family Account couldn't be created successfully. #{resource.errors.full_messages.to_sentence}",
        code: 400,
        success: false
      }, status: :unprocessable_entity
    end
  end

end
