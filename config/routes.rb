Rails.application.routes.draw do

  namespace :api do

    resources :users do
      get '/favorites' => 'users#favoritefilms'
      post :add_favorites, on: :member
    end

    resources :films do
      get :favorite_by
    end
  end
end
