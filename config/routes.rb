Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # チャット画面作成のために仮置きした。あとで編集する。
  root  'messages#index'
  resource :users, only: [:index, :edit, :update]
  resource :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
