# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Demo User', password: 'password', email: 'demo@demo.com')
a = User.create(username: 'CitrusFarmer', password: 'password', email: "citrus@u.com")
b = User.create(username: 'Mediterranean foodie', password: 'password', email: "mediterranean@u.com")
c = User.create(username: "Andie", password: 'password', email: "andie@u.com")

Product.create(product_name: 'Farmed Citrus',
  overview: "Freshly Farmed Citrus Locally",
  description: "We are a family of farmers that have been growing fresh citrus for years.
  We would love to share our farmed fruit varieties. We will be selling the citrus
   gems in packs and you can access them now at home! Enjoy!",
  cost: 25.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/v1522965918/farrmed_citrus.jpg",
  user_id: a.id
)
Product.create(product_name: 'Hummus and Snacks',
  overview: "A light mediterranean snack",
  description: "We make our hummus fresh everyday and we love to share some hummus with you.",
  cost: 7.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/v1522965915/hummus_and_other_snacks.jpg",
  user_id: b.id
)
Product.create(product_name: 'Taco Me',
  overview: "Let's eat Tacos!",
  description: "We come over and create fresh tortilla's with organic beef that anyone will enjoy",
  cost: 20.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/v1522965918/beef_tacos.jpg",
  user_id: c.id
)
