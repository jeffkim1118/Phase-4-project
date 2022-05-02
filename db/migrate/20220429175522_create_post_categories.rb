class CreatePostCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :post_categories do |t|
      t.integer :postID
      t.integer :categoryID

      t.timestamps
    end
  end
end
