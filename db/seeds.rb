# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

User.create(username: 'jay',
    password: '123',
    email: 'jay'
    admin: true,
)
Tech.create(handholds: 'jug',
hold_description: 'grab it around')
Problem.create(tech_id: 1,
location_id: 1,
grip_color: "pink",
problem_description: 'great'
difficulty: 1)
