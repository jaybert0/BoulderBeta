class ProblemSerializer < ActiveModel::Serializer
  attributes :id, :grip_color, :end_date, :problem_description, :difficulty, :rating
  has_many :climbproblems
  has_one :tech
  has_one :location
end
