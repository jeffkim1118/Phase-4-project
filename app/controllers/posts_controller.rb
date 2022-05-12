class PostsController < ApplicationController
   wrap_parameters format: []

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
      @post = Post.create(post_param)
      @post.user_id = @signed_in_user.id

      if @post.save
         render json: @post, status: :ok
      else
         render json: { error: "Post was not created"}
      end
   end
   
   def destroy
      post = Post.find_by(id:params[:id])
      if post
          post.destroy
          head :no_content
      else
          render json: {error: "post not found"}, status: :not_found
      end
  end
  

   private
   def post_param
      params.permit(:title, :content, :tags, :author_id)
   end
end
