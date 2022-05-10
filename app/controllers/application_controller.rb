class ApplicationController < ActionController::Base
  include ActionController::Cookies
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authorized
  
  def authorized
    return render json: {error: "not authorized"}, status: :unauthorized 
    unless session.include? :user_id
    end
  end
end
