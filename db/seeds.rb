# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: "batman", email: "brucewayne@gmail.com", password: "batman")
user2 = User.create(username: "hansolo", email: "hansolo@gmail.com", password: "hansolo")
user3 = User.create(username: "sarahconnor", email: "sarahconnor@yahoo.com", password: "sarahconnor")
user4 = User.create(username: "ironman", email: "ironman@gmail.com", password: "avenger")
