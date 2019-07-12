class Api::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def favorite_films
    films = user.favorite_films
    render json: films
  end

  def add_favorites
    user = User.find(params[:id])
    film = Film.find_or_create_by(film_params)
    user.favorite_films << film unless user.favorite_films.include?(film)
    render json: user.favorite_films
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :bio, :password)
  end

  def film_params
    params.require(:film).permit(:title, :id)
  end
end
