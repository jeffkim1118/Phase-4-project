class UsersController < ApplicationController
    wrap_parameters format: []
    
    def index
        users = User.all
        render json: users, staus: :ok
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, status: :found
    end

    def create
        user = User.create(user_params)
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
    
    private
    def user_params
        params.permit(:first_name, :last_name, :email, :password, :username)
    end 
end
