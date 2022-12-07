class FamilyMember < ApplicationRecord
  enum survey_status: [:pending, :in_progress, :completed]
  before_save :set_age

  belongs_to :family
  has_one :response, dependent: :destroy

  validates :name, :date_of_birth, presence: true
  validate :check_date_of_birth

  private

  def set_age
    self.age = Time.zone.now.year - date_of_birth.year
  end

  def check_date_of_birth
    if date_of_birth.present? && date_of_birth.year > Time.zone.now.year
      errors.add(:date_of_birth, 'Date of birth must be less than today.')
    end
  end

end
