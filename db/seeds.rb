# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: "Batman", email: "brucewayne@gmail.com", bio: "Anti-Hero of Gotham", password: "batman")
user2 = User.create(username: "Hansolo", email: "hansolo@gmail.com", bio: "Captain of the Millennium Falcon", password: "hansolo")
user3 = User.create(username: "Sarahconnor", email: "sarahconnor@yahoo.com", bio: "Protagonist of the Terminator", password: "sarahconnor")
user4 = User.create(username: "Ironman", email: "ironman@gmail.com", bio: "Classic Marvel Superhero", password: "avenger")

film1 = Film.create(title: "Avengers: Endgame", genre: "Superhero" , description: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store." , url: "https://www.themoviedb.org/movie/299534-avengers-endgame")
film2 = Film.create(title: "The Godfather", genre: "Gangster" , description: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge." , url: "https://www.themoviedb.org/movie/238-the-godfather")
film3 = Film.create(title: "The Lord of the Rings: The Return of the King", genre: "Fantasy" , description: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm." , url: "https://www.themoviedb.org/movie/122-the-lord-of-the-rings-the-return-of-the-king")
