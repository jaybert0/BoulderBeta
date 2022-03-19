# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'
puts "🌱 Seeding spices..."

# User.create(
#     username: 'jay',
#     password: '123',
#     email: 'jay',
#     admin: true,
# )
# Tech.create(
#     handholds: 'Jug',
#     hold_description: "The term 'jugs', derived from the expression 'jug-handle', has dual meanings in the climbing world. One meaning is size based—jugs are traditionally large holds. Most jugs should have space for both hands to fit on the hold. The other meaning of jug refers to a hold's positivity or degree of concavity. A hold that is called a jug should be fairly easy to use, meaning it is either a very positive hold or it is a flat hold on a less than vertical wall (slab). Because they are easy to use, jugs are often found on beginner routes, warm-up problems, and steep walls. Jugs are also commonly used as resting or clipping holds on routes.")
# Tech.create(
#     handholds: 'Mini-Jugs',
#     hold_description: 'Mini-jugs are holds that are positive but much smaller than traditional jugs. They are usually intended to be held with one hand only. They are useful because they are easier to carry in a bucket than big jugs and they use less material to manufacture than larger holds do (so they are more cost effective).')
# Tech.create(
#     handholds: 'Slopers',
#     hold_description: 'Slopers are the least positive of the handholds. They slope down away from the wall with generally a smooth surface, therefore requiring the climber, for maximum friction and in order to gain maximum effectiveness of the hold, to use an open handed grip to pull against the hold and push inwards. These holds are usually considered more difficult and are typically reserved for advanced routes.')

Problem.create(
    tech_id: 1,
location_id: 1,
grip_color: "pink",
problem_description: 'great',
difficulty: 1,
rating: 4
)
Problem.create(
    tech_id: 2,
location_id: 2,
grip_color: "green",
problem_description: 'meh',
difficulty: 3,
rating: 5
)
Problem.create(
    tech_id: 3,
location_id: 3,
grip_color: "black",
problem_description: 'gnarly',
difficulty: 1,
rating: 4
)
# Location.create(
#     location: 1,
#     loc_description: "End of the cave"
# )
# Location.create(
#     location: 1,
#     loc_description: "End of the cave"
# )
# Location.create(
#     location: 2,
#     loc_description: "End of the cave"
# )
# Location.create(
#     location: 3,
#     loc_description: "End of the cave"
# )
# Location.create(
#     location: 4,
#     loc_description: "End of the cave"
# )
# Location.create(
#     location: 5,
#     loc_description: "End of the cave"
# )
# Location.create(
#     location: 6,
#     loc_description: "End of the cave"
# )
# Location.create(
#     location: 7,
#     loc_description: "End of the cave"
# )
# Location.create(
#     location: 8,
#     loc_description: "End of the cave"
# )
Climbproblem.create(
    user_id: 1,
    problem_id: 1,
    favorite: true, 
    in_progress: false,
    feedback: "Great",
    rating: 4
)
Climbproblem.create(
    user_id: 1,
    problem_id: 2,
    favorite: false, 
    in_progress: true,
    feedback: "Great",
    rating: 4
)
Climbproblem.create(
    user_id: 1,
    problem_id: 3,
    favorite: true, 
    in_progress: true,
    feedback: "Great",
    rating: 4
)

puts "🌱 Seeded spices..."
