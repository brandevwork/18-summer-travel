class ApplicationController < ActionController::Base
p  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :number_of_family_member, :postal_code, :address, :city, :state, :country, :jti])
  end
end
