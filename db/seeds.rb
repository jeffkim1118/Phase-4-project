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


# Random posts to display