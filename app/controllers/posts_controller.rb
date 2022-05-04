class PostsController < ApplicationController
    before_action :set_post, only: %i[ show edit update destroy]

    # Get /posts
    def index
        @posts = Post.all
    end

    # Get /posts/1
    def show
    end

    # GET /posts/new
    def new
        @post = Post.new
    end

    # Get /posts/1/edit
    def edit
    end

    # POST /posts
    def create
        @post = Post.new(post_params)

        respond_to do |format|
            if @post.save
                redirect_to @post, notice: "Post was successfully created."
            else
                render :new
            end
        end
    end

    def update
        respond_to do |format|
          if @post.update(post_params)
            redirect_to @post, notice: "Post was successfully updated."
          else
            render :edit
          end
        end
    end

    def destroy
        @post.destroy
        respond_to do |format|
          redirect_to posts_url, notice: "Post was successfully destroyed."
        end
    end

    def post_params
        params.require(:post).permit(:title, :description)
    end
end
