class User < ApplicationRecord
  has_secure_password
  validates :username, :email, :bio, :presence => true
  validates :username, :uniqueness => true
  validates :password, presence: true, allow_nil: true
  has_many :favorite_films
  has_many :films, through: :favorite_films
end
