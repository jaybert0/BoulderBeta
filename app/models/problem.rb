class Problem < ApplicationRecord
  has_many :climbproblems, dependent: :destroy
  has_many :users, through: :climbproblems
  belongs_to :tech
  belongs_to :location
end
