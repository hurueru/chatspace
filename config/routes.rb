Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # チャット画面作成のために仮置きした。あとで編集する。
  root  'messages#index'
  get 'messages' => 'messages#index'
end
