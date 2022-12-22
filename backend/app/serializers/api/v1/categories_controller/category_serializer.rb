module Api::V1::CategoriesController
  class CategorySerializer < ActiveModel::Serializer
    attributes :name 
    has_many :choices
  end
end
