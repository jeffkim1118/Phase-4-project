Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :update, :destroy]

  resources :posts
  

  #Show all the posts
  # get '/posts', to: 'posts#index'
  # #Show a specific post
  # get '/posts/:id', to: 'posts#show'


  # #users login
  # post '/users', to: "users#create"
  # get "/users", to: "users#index"
  # get "/users/:user_id", to: "users#show"

  # #Logging out
  # delete "/logout", to: "sessions#destroy"

  # delete "/users/:id", to: "users#destroy"

  
  
  # # Routing logic: fallback requests for React Router.
  # # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
end
