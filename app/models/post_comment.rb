class PostComment < ApplicationRecord
    belongs_to :post, :user
end
