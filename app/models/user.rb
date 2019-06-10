class User < ApplicationRecord
  validates :username, :email => true
  validates :username, :uniqueness => true
  has_secure_password
  has_many :favorite_films
  has_many :films, through: :favorite_films
end
