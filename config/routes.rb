Rails.application.routes.draw do
  devise_for :users
  root  'groups#index'
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
    resources :users, only: [:index, :edit, :update]
  end
  resources :users, only: [:index]
end
