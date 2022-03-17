class ProblemSerializer < ActiveModel::Serializer
  attributes :id, :difficulty, :grip_color, :end_date
  has_one :user
end
