class User < ApplicationRecord
    has_many :climbproblems
    has_many :problems, through: :climbproblems
    # has_many :teches, through: :climbproblems
    # has_many :locations, through: :climbproblems
    has_secure_password
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true, length: {minimum: 3}
    
    def reset_password!(password)
        self.password = password
        save!
    end
    
end
