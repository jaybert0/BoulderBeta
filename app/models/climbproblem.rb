class Climbproblem < ApplicationRecord
  belongs_to :user
  belongs_to :problem

  validates :favorite, presence: true, inclusion: {in: %w(true false)}
  validates :in_progress, presence: true, , inclusion: {in: %w(true false)}


end
