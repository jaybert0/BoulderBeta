class ClimbproblemSerializer < ActiveModel::Serializer
  attributes :id, :favorite, :in_progress, :feedback, :rating
end
