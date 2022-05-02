class User < ApplicationRecord
    has_many :posts, dependent: :destroy 
    has_many :PostComment, through: :posts
    has_one_attached :image, :dependent => :destroy
end