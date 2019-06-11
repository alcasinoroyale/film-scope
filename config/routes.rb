Rails.application.routes.draw do

  namespace :api do

    resources :users do
      get :favorite_films,
      post :add_to_favorite_films
    end

    resources :films do
      get :favorite_by
    end
  end
end
