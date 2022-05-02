class PostTag < ApplicationRecord
    belongs_to :post dependent: :destroy 
end
