Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :books
    get '/nyt_fiction_bestseller', to: 'books#nyt_fiction_bestseller'
    get '/nyt_nonfiction_bestseller', to: 'books#nyt_nonfiction_bestseller'

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
