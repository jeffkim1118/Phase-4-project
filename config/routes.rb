Rails.application.routes.draw do
  namespace :api do
    resource :posts
  end
  
  get '/post', to: 'posts#index'
  get '/post/:id', to: 'posts#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
end
