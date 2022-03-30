# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'date'

puts "🌱 Seeding User..."

User.create(
    username: 'jay',
    password: '123',
    email: 'jay',
    admin: true,
)
User.create(
    username: 'test',
    password: 'test',
    email: 'jay',
    admin: false,
)

puts "User seeded! 🌱"
puts "🌱 Seeding Tech..."
Tech.create(
    handholds: 'Jug',
    hold_description: "The term 'jugs', derived from the expression 'jug-handle', has dual meanings in the climbing world. One meaning is size based—jugs are traditionally large holds. Most jugs should have space for both hands to fit on the hold. The other meaning of jug refers to a hold's positivity or degree of concavity. A hold that is called a jug should be fairly easy to use, meaning it is either a very positive hold or it is a flat hold on a less than vertical wall (slab). Because they are easy to use, jugs are often found on beginner routes, warm-up problems, and steep walls. Jugs are also commonly used as resting or clipping holds on routes.")
Tech.create(
    handholds: 'Mini-Jugs',
    hold_description: 'Mini-jugs are holds that are positive but much smaller than traditional jugs. They are usually intended to be held with one hand only. They are useful because they are easier to carry in a bucket than big jugs and they use less material to manufacture than larger holds do (so they are more cost effective).')
Tech.create(
    handholds: 'Slopers',
    hold_description: 'Slopers are the least positive of the handholds. They slope down away from the wall with generally a smooth surface, therefore requiring the climber, for maximum friction and in order to gain maximum effectiveness of the hold, to use an open handed grip to pull against the hold and push inwards. These holds are usually considered more difficult and are typically reserved for advanced routes.')
Tech.create(
    handholds: 'Pockets',
    hold_description: 'Pockets are holds that have a small opening, only allowing the climber to hold them with one to three fingers. Pockets can be shallow or deep. One fingered pockets are called monos, and are considered extremely stressful on the tendons. Finger strength must be trained in order to use pockets effectively. Though monos are the most dangerous, all pockets load only a couple of fingers, so climbers must be careful to avoid injuring their tendons. If the edge of the pocket has a sharp radius it will feel more positive but also more uncomfortable. A smooth radius on a pocket is generally the most comfortable to climb on.')
Tech.create(
    handholds: 'Pinches',
    hold_description: "Pinches are holds that have two opposing faces which must be pinched (usually by the entire hand, with fingers on one side and the thumb on the other) to grip. Technically, any hold in which the use of the thumb in opposition improves the hold's positivity is a pinch. Pinches require significant hand strength to use, and are usually used on more challenging routes and boulder problems.")
Tech.create(
    handholds: 'Edges',
    hold_description: "Edges vary in size and angle. The best way to grip an edge varies in all ways to grip a hold, from open hand grip, to flex grip, and closed hand grip (which is more commonly referred to as crimping). Crimping (which involves placing your thumb over your pointer finger) is often used as the way to refer to an edge as a 'crimp', and there are many ways to better describe an edge- microcrimper (smallest), slopey crimper, big crimper, bad crimper, good crimper, Fred Nicole crimper (microcrimper), juggy crimper.

    The picture to the right shows a person using a flex grip on an edge. Though the edge is being referred to as a 'crimp' in this case, the climber is not actually crimping on the hold.")
Tech.create(
    handholds: 'Volumes',
    hold_description: "Volumes are an extremely large type of hold that any variety of holds can be attached to. The volume is attached to the wall, and it has pre-placed t-nuts in it to which other holds can be attached. Volumes were at one time made from wood, but now they are also made in a variety of materials (including fiberglass, coated wood, resin, urethane, and moulded plastic) by several climbing companies. Volumes are especially prevalent in Europe and on the World Cup circuit, where sometimes entire routes will be constructed from gigantic volumes. To imitate these textured World Cup volumes, sandpaper can be placed on homemade wooden volumes to create texture and allow climbers to make use of the volume's features.")
    puts "Tech seeded! 🌱"
    puts "🌱 Seeding Location..."
Location.create(
    location: 1,
    loc_description: "In front of the bend."
)
Location.create(
    location: 2,
    loc_description: "In the crook of the bend."
)
Location.create(
    location: 3,
    loc_description: "The horn of the bend."
)
Location.create(
    location: 4,
    loc_description: "Front of the overhang."
)
Location.create(
    location: 5,
    loc_description: "Deep in the overhang cave."
)
Location.create(
    location: 6,
    loc_description: "End of the overhang."
)
Location.create(
    location: 7,
    loc_description: "Long wall in the front."
)
Location.create(
    location: 8,
    loc_description: "30 degree wall."
)
Location.create(
    location: 9,
    loc_description: "45 degree nook."
)
Location.create(
    location: 10,
    loc_description: "Back side wood wall."
)
puts "Location seeded! 🌱"
puts "🌱 Seeding Problem..."
Problem.create(
    tech_id: 1,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'A nice warmup. Only a few moves, but get your fingers ready.',
difficulty: 1,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 2,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'The pitch is the challenge, not the mini-jugs.',
difficulty: 4,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 3,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'Big grips do not mean easy',
difficulty: 5,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 5,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'ROCK LOBSTER',
difficulty: 7,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 4,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'Little pockets, big trouble',
difficulty: 2,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 6,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: "Crimping ain't easy",
difficulty: 10,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 7,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'Turn it up',
difficulty: 1,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 6,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'Hope you got a manicure',
difficulty: 5,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 5,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'Pinch by pinch',
difficulty: 3,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 4,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'Cargo sized',
difficulty: 1,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 3,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'Chalk up',
difficulty: 5,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 2,
location_id: rand(0..10),
grip_color: "White",
problem_description: 'Milk jugs',
difficulty: 3,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 1,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'Great warmup!',
difficulty: 0,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 6,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: "Razor's edge",
difficulty: 10,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 3,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'FACEPALM',
difficulty: 4,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 7,
location_id: rand(0..10),
grip_color: Faker::Color.color_name,
problem_description: 'Turn it down',
difficulty: 2,
end_date:Date.new(2022,4,27)
)
Problem.create(
    tech_id: 1,
location_id: rand(0..10),
grip_color: "Brown",
problem_description: 'Chocolate milk',
difficulty: 2,
end_date:Date.new(2022,4,27)
)
puts "Problem seeded! 🌱"
# Climbproblem.create(
#     user_id: 1,
#     problem_id: 1,
#     favorite: true, 
#     in_progress: false,
#     feedback: "Great",
#     rating: 4
# )
# Climbproblem.create(
#     user_id: 1,
#     problem_id: 2,
#     favorite: false, 
#     in_progress: true,
#     feedback: "Great",
#     rating: 4
# )
# Climbproblem.create(
#     user_id: 1,
#     problem_id: 3,
#     favorite: true, 
#     in_progress: true,
#     feedback: "Great",
#     rating: 4
# )

puts "🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱🌱"
