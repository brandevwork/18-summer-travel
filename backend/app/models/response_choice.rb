class ResponseChoice < ApplicationRecord
  belongs_to :choices, optional: true
  belongs_to :family_member
end
