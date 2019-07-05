class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio
  has_many :favorite_films
  has_many :films, through: :favorite_films
end
