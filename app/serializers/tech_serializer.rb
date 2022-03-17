class TechSerializer < ActiveModel::Serializer
  attributes :id, :handholds, :description
  has_one :problem
end
