Rails.application.routes.draw do
  
  resources :locations
  resources :teches
  resources :problems
  resources :climbproblems
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post "/reset", to: "passwords#reset"

  get '/makerproblem', to: 'problems#makerproblem'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
