class Api::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
  end

  def show
    user = User.find(params[:id])
    render json: current_user
  end

  def favorite_films
    films = current_user.favorite_films
    render json: films
  end

  def add_favorites
    current_user = User.find(params[:id])
    film = Film.find_or_create_by(film_params)
    current_user.favorite_films << film unless current_user.favorite_films.include?(film)
    render json: current_user.favorite_films
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def film_params
    params.require(:film).permit(:title, :genre, :description)
  end
end
