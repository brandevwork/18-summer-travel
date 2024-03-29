class Family < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  validates :number_of_family_member, presence: true, numericality: { less_than_or_equal_to: 6 }
  validates :first_name, :address, :city, :country, :state, presence: true
  validates_format_of :first_name, :city, :state, :country, without: /\A[0-9]+\z/, message: 'only characters are allowed'

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :family_members, dependent: :destroy
  has_one :family_recommendation
  accepts_nested_attributes_for :family_members

  def jwt_payload
    super
  end
end
