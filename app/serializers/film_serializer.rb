class FilmSerializer < ActiveModel::Serializer
  attributes :title, :genre, :film_id, :description
  has_many :users, through: :favorite_films
end
