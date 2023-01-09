class MemberPreference < ApplicationRecord
  belongs_to :family_member
  belongs_to :preferenceable, polymorphic: true
end
