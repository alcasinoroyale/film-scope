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
