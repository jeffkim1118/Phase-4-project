Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :update, :destroy]

  resources :posts, only: [:index, :show, :create, :update, :destroy]
  
  post '/login', to: 'sessions#create'

  post '/users', to: 'users#create'

  get '/users/:id', to: 'users#show'

  delete "/logout", to: "sessions#destroy"

  # get "/auth", to: "users#show"

   root 'pages#home'
  # # Routing logic: fallback requests for React Router.
  # # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
