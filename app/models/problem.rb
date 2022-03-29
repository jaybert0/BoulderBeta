class Problem < ApplicationRecord
  has_many :climbproblems, dependent: :destroy
  has_many :users, through: :climbproblems
  belongs_to :tech
  belongs_to :location

  validates :difficulty, :grip_color, presence: true

  # validates :end_date, presence: true,
  validates :problem_description, length: {minimum: 10}

end
