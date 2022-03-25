class ClimbproblemSerializer < ActiveModel::Serializer
  attributes :id, :favorite, :in_progress, :feedback, :rating, :user
  has_one :user
  has_one :problem
end
