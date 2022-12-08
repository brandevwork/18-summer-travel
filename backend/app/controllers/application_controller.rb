class ApplicationController < ActionController::Base
  include Swagger::Docs::Methods
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) {|u|
      u.permit(:email, :password, :first_name, :last_name, :number_of_family_member, :postal_code, :address, :city, :state, :country, :jti, family_members_attributes: [:name, :birth_year])
    }
  end
end
