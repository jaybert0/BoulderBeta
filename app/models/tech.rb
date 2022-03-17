class Tech < ApplicationRecord
    has_many :problems
    has_many :locations, through: :problems
end
