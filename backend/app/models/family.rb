class Family < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  validates :number_of_family_member, presence: true, numericality: { less_than_or_equal_to: 6 }
  validates :first_name, :address, :city, :country, :state, presence: true

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :family_members, dependent: :destroy
  accepts_nested_attributes_for :family_members

  def jwt_payload
    super
  end
end
