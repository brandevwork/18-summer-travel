class  Api::V1::ResponsesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    response = Response.create(response_params)
    
    if response.save
      render json: {message: "Response successfully created"}, status: 200
    else
      render json: {error: "Cannot create this response"}
    end
  end



  private

  def response_params
    params.require(:response).permit(:family_member_id, response_choices_attributes: [:choice_id])
  end
  


end