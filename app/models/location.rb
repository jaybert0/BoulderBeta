class Location < ApplicationRecord
    has_many :problems
    has_many :techniques, through: :problems
end
