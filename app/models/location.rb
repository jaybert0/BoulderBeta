class Location < ApplicationRecord
    has_many :problems
    has_many :teches, through: :problems

    validates :location, presence: true
    validates :loc_description, presence: true
end
