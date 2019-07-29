class Api::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
    if save
      render json: user
    else
      render json: user.errors.full_messages
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def favorite_films
    films = user.films
    render json: films
  end

  def add_favorites
    user = User.find(params[:id])
    film = Film.find_or_create_by(film_params)
    user.films << film unless user.films.include?(film)
    render json: user.films
  end

  def remove_from_favorites
    user = User.find(params[:id])
    film = Film.find_by(title: params[:film][:title])
    user.films.delete(film)
    render json: user.films
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :bio, :password)
  end

  def film_params
    params.require(:film).permit(:title, :id)
  end
end
