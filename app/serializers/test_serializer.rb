class TestSerializer < ActiveModel::Serializer
  attributes :id, :grip_color, :end_date, :problem_description, :difficulty, :rating
  has_many :climbproblems
end
