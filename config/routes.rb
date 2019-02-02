Rails.application.routes.draw do
  resources :users
  resources :books 

  get '/nyt_bestseller', to: 'books#nyt_bestseller'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
