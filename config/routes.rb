Rails.application.routes.draw do
  root to: 'pianos#index'

  namespace :piano_keys do
    resources :scales, only: [:show]
  end

  resources :piano_keys, only: [:index, :show]
  resources :pianos, only: :index
  resources :pitches
  resources :scales
end
