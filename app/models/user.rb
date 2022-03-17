class User < ApplicationRecord
    has_many :climbproblems
    has_many :problems, through: :climbproblems
    has_many :teches, through: :climbproblems
    has_many :locations, through: :climbproblems
    has_secure_password
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    
    def reset_password!(password)
        self.password = password
        save!
    end
    
end
