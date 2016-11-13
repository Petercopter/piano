Rails.application.routes.draw do
  root to: 'pianos#index'

  resources :pianos, only: :index
end
