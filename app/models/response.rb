class Response < ApplicationRecord
  belongs_to :family_member
  has_many :response_choices
  has_many :choices, through: :response_choices
end
