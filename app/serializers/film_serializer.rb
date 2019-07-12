class FilmSerializer < ActiveModel::Serializer
  attributes :title, :id
  has_many :favorited_by, through: :favorite_films, source: :user
end
