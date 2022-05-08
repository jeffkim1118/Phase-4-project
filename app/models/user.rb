class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }
    
    has_many :posts, dependent: :destroy 
    has_many :PostComment, through: :posts
    has_one_attached :image, :dependent => :destroy
end
