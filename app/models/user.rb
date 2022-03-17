class User < ApplicationRecord
    has_many :problems
    has_many :climbproblems, through: :problems
    has_many :locations, through: :problems
    has_many :teches, through: :problems
    has_secure_password
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    
    def reset_password!(password)
        self.password = password
        save!
    end
    
end
