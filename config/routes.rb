Rails.application.routes.draw do

  get 'sessions/create'
  get 'sessions/destroy'
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  root to: 'pages#home'

  resources :users, only: [:create, :show, :index]

  get '/home', to: 'pages#application'
  get '/login', to: 'pages#application'
  get '/signup', to: 'pages#application'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
