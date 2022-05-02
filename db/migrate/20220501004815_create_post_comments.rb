class CreatePostComments < ActiveRecord::Migration[6.1]
  def change
    create_table :post_comments do |t|
      t.integer :userID
      t.integer :postID
      t.string :title
      t.string :content
      t.datetime :createdTime

      t.timestamps
    end
  end
end
