class PostsController < ApplicationController
   def index
      posts = Post.all
      render json: posts, status: :ok
   end
   
   def show
      post = Post.find_by(id:params[:id])
      if post
         render json: post, status: :found
      else
         render json: { error: "Post not Found" }, status: :not_found
      end
   end
   
   def create
      
   end
end
