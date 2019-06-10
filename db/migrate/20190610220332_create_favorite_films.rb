class CreateFavoriteFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_films do |t|
      t.integer :user_id
      t.integer :film_id

      t.timestamps
    end
  end
end
