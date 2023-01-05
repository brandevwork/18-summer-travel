class FamilyMember < ApplicationRecord
  enum survey_status: %i[pending in_progress completed]
  before_save :set_age
  after_update :set_survey_dates

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

  def set_survey_dates
    family_members = family.family_members.where("age > 4")
    family.update(survey_start: Date.today) if family_members.select { |record| record.survey_status.eql?("in_progress") }.size > 0 && family.survey_start.nil?
    family.update(survey_end: Date.today) if family_members.select { |record| record.survey_status.eql?("completed") }.size.eql?(family_members.size)
  end

end
