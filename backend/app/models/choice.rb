class Choice < ApplicationRecord
  belongs_to :question
  belongs_to :category
  has_many :response_choices
  has_many :family_members, through: :response_choices
  has_one_attached :image
end
