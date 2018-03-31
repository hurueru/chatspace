Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # チャット画面作成のために仮置きした。あとで編集する。
  root  'groups#index'
  # resources :user, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
  resources :users do
    collection do
      get 'search'
    end
  end
end
