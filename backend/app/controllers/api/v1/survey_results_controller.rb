class  Api::V1::SurveyResultsController < BaseController
  include Api::V1::CategoriesController

  def result
    categories = Category.all
    family_members = current_family.family_members.where("age > ?", 4)
    if family_members.completed.length == family_members.count
      render json: categories, each_serializer: CategorySerializer, meta: { status: :ok, code: 200, success: true, data: family_members.response_choices  }
    else
      render json: { message: "Survey is not completed by the whole famliy", status: 204}
    end
  end
  
end
