class UsersController < ApplicationController
    wrap_parameters format: []
    
    def index
        users = User.all
        render json: users, staus: :ok
    end


    def create
        user = User.create(first_name:params[:first_name], last_name:params[:last_name], email:params[:email], password:params[:password], username:params[:username])
        render json: user, status: :created
    end


    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            head :no_content
        else
            render json: {error: "user not found"}, status: :not_found
        end
    end
end
