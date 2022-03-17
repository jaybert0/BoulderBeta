class Tech < ApplicationRecord
    has_many :problems
    has_many :location, through: :problems
end
