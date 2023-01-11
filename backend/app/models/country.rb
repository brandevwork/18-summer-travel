class Country < ApplicationRecord
  has_many :destinations, dependent: :destroy
end
