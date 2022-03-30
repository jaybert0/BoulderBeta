class Climbproblem < ApplicationRecord
  belongs_to :user
  belongs_to :problem

  validates :favorite, presence: true
  validates :in_progress, presence: true


end
