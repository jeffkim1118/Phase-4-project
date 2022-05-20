class ApplicationController < ActionController::Base
  include ActionController::Cookies
  skip_before_action :verify_authenticity_token, raise: false
  # before_action :authorized

  # before_action :index
  # def index
  #   session[:user_id] ||= nil
  # end

  # def authorized
  #   return render json: {error: "not authorized"}, status: :unauthorized 
  #   unless session.include? :user_id
  #   end
  # end
end
