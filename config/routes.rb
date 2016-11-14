Rails.application.routes.draw do
  root to: 'pianos#index'

  resources :keys, only: [:index, :show]
  resources :pianos, only: :index
end
