class User < ApplicationRecord
    has_secure_password

    has_many :posts, dependent: :destroy, foreign_key: :author_id
    has_many :PostComment, through: :posts
    # has_one_attached :image, :dependent => :destroy
end
