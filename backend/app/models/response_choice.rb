class ResponseChoice < ApplicationRecord
  after_commit :choice_score
  belongs_to :response
  belongs_to :choice

  def choice_score
    update_column(:score, 1)
  end


end
