class Post < ApplicationRecord
    belongs_to :user
    has_many :postTags dependent: :destroy 
    has_many :postCategories dependent: :destroy 
    has_many :postComments dependent: :destroy
    has_many_attached :image, :dependent => :destroy
end
