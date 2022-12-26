class FamilyMember < ApplicationRecord
  enum survey_status: %i[pending in_progress completed]
  before_save :set_age

  belongs_to :family
  has_many :response_choices, dependent: :destroy
  has_many :choices, through: :response_choices

  validates :name, :birth_year, presence: true
  validate :check_year_of_birth
  validates_format_of :name, without: /\A[0-9]+\z/, message: 'only characters are allowed'

  private

  def set_age
    self.age = Date.today.year - birth_year.to_i
  end

  def check_year_of_birth
    if birth_year.present? && birth_year.to_i > Date.today.year
      errors.add(:birth_year, 'Birth year must be less than current year.')
    end
  end

end
