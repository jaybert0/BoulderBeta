class Location < ApplicationRecord
    has_many :problems
    has_many :teches, through: :problems
end
