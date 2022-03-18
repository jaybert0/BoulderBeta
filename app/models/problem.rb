class Problem < ApplicationRecord
  has_many :climbproblems
  has_many :users, through: :climbproblems
  belongs_to :tech
  belongs_to :location
end
