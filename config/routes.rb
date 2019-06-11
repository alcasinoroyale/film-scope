Rails.application.routes.draw do

  namespace :api do

    resources :users do
      get '/favorites' => 'users#favoritefilms'
      post '/favorite/:id' => 'users#add_favorites'
    end

    resources :films do
      get :favorite_by
    end
  end
end
