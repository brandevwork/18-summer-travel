class FamilyMember < ApplicationRecord
  belongs_to :family
  before_save :set_age
  validates :name, :date_of_birth, :family_id, presence: true

  private

  def set_age
    self.age = Time.zone.now.year - date_of_birth.year
  end
end
