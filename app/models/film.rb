class Film < ApplicationRecord
  has_many :favorite_films
  has_many :favorited_by, through: :favorite_films, source: :user
end
