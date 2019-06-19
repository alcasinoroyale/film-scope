class AddUrlToFilms < ActiveRecord::Migration[5.2]
  def change
    add_column :films, :url, :string
  end
end
