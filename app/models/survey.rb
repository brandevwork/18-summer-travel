class Survey < ApplicationRecord
  has_many :questions, dependent: :destroy
end
