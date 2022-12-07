class BaseController < ApplicationController

  before_action :authenticate_family!
  skip_before_action :verify_authenticity_token

end
