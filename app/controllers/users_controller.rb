class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
  end

  def show
    current_user = User.find(params[:id])
    render json: current_user
  end

  def favorite_films
    films = current_user.favorite_films
    render json: films
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
