class Response < ApplicationRecord
  after_commit :update_family_member_status, on: :create
  belongs_to :family_member
  has_many :response_choices, dependent: :destroy
  has_many :choices, through: :response_choices
  accepts_nested_attributes_for :response_choices

  private
  def update_family_member_status
    family_member.update(survey_status: 1)
  end
end
