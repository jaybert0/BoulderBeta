class ClimbproblemUserSerializer < ActiveModel::Serializer
  attributes :id, :favorite, :in_progress, :feedback, :rating
  has_one :user
end
