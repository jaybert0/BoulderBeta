class Tech < ApplicationRecord
    has_many :problems
    has_many :locations, through: :problems

    validates :handholds, presence: true
    validates :hold_description, presence: true
end
