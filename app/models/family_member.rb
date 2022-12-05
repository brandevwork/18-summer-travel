class FamilyMember < ApplicationRecord
  enum survey_status: [:not_started, :started, :completed]
  enum member_type: [:adult, :kids]
  before_save :set_age
  after_commit :set_member_status, on: :create

  belongs_to :family

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

  def set_member_status
    member_value = (age < 14) ? 1 : 0
    update(member_type: member_value)
  end

end
