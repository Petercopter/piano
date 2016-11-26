Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: 'pianos#index'

  namespace :keys do
    resources :scales, only: [:show]
  end

  resources :keys, only: [:index, :show]
  resources :pianos, only: :index
  resources :scales
end
