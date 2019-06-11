class FavoriteFilmSerializer < ActiveModel::Serializer
  attributes :user_id, :film_id

  belongs_to :user
  belongs_to :film
end
