class Post < ApplicationRecord
    belongs_to :user
    has_many :postTags 
    has_many :postCategories  
    has_many :postComments 
    has_many_attached :image, :dependent => :destroy
end
