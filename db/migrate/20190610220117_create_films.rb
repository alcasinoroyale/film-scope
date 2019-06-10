class CreateFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :films do |t|
      t.string :title
      t.string :genre
      t.string :description
      t.integer :film_id

      t.timestamps
    end
  end
end
