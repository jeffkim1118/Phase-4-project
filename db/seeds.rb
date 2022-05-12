require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Fake users to test out
User.create(first_name: "Violet", last_name: "Evergarden", username: "vever23", email: "vever@gmail.com", password: "testing")
User.create(first_name: "Rye", last_name: "Anderson", username: "randerson21", email: "ryea@gmail.com", password: "testing2")

Post.create(title: "My Life", content: "Testing 1353543525233245", tags:"Life", author_id: "1")
# Random posts to display