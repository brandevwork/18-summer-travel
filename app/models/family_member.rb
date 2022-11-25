class FamilyMember < ApplicationRecord
  before_save :set_age

  belongs_to :family
  has_one :survey

  validates :name, :date_of_birth, :family_id, presence: true
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
