# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Product.destroy_all
ShoppingCartItem.destroy_all


a = User.create(username: 'CitrusFarmer', password: 'password', email: "citrus@u.com")
b = User.create(username: 'Mediterranean foodie', password: 'password', email: "mediterranean@u.com")
c = User.create(username: "Andie", password: 'password', email: "andie@u.com")
d = User.create(username: 'BossCake', password: 'password', email: "bosscake@bosscake.com")
e = User.create(username: 'Demo User', password: 'password', email: 'demo@demo.com')
f = User.create(username: 'Fisherman', password: 'password', email: "firsherman@fisherman.com")
g = User.create(username: 'Krispy', password: 'password', email: "krispycreamy@krispy.com")
h = User.create(username: "Kristin", password: 'password', email: 'kristin@kristen.com')
i = User.create(username: 'VietCoffee', password: 'password', email: 'kevin@kevin.com')


product12= Product.create(product_name: "Funky Fresh Donuts",
  overview: "The Donut says it all.",
  description: "Buy this six pack of donuts, which are 6 unique mystery flavors.",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981606/pink_donuts.jpg",
  user_id: g.id,
  category: "Dessert"
)

product13= Product.create(product_name: "Simply Glazed Donuts",
  overview: "The Donut says it all.",
  description: "We sell our famous glazed donuts now! Enjoy this simple and delicate creation.",
  cost: 3.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981609/glazed_donuts.jpg",
  user_id: g.id,
  category: "Dessert"
)

product14= Product.create(product_name: "Macaron and Tea",
  overview: "Macarons and our favorite English Tea",
  description: "These small delicate macaron's can be enjoyed with our favorite English Tea. We send you a dozen of our chef's favorite flavors for you to enjoy.",
  cost: 19.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522965914/macaron_and_tea.jpg",
  user_id: h.id,
  category: "Dessert"
)

product15= Product.create(product_name: "Macarons for Two or One",
  overview: "Macarons made by Kristin",
  description: "Enjoy our love inspired macarons. Our flavors are chocolate, strawberry, orange, and green tea. We send you a dozen of these love macarons, but we don't blame you if you just want to eat all for yourself",
  cost: 19.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981606/macaron_love.jpg",
  user_id: h.id,
  category: "Dessert"
)

product1= Product.create(product_name: "Mama's Favorite Chocolate Cake",
  overview: "Two-tiered Chocolate Cake with our Award-winning white buttercream frosting",
  description: "Enjoy our homemade mama's favorite chocolate cake, which started three generations ago. The recipe is a secret family recipe and is served with our award-winning white buttercream frosting. We send the cake within 1 business day and will arrive depending on how far you live.",
  cost: 20.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981626/triple_chocolate_cake.jpg",
  user_id: d.id,
  category: "Dessert"
)

product2 = Product.create(product_name: 'Raspberry Mint Cake',
  overview: "Raspberry Mint Cake with White Buttercream Frosting",
  description: "Enjoy our homemade treats that is covered in our award-winning white buttercream frosting. The raspberries are grown from local farmers. We send the cake within 1 business day and will arrive depending on how far you live.",
  cost: 20.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981616/mint_rasberry_cake.jpg",
  user_id: d.id,
  category: "Dessert"
)

product3 = Product.create(product_name: 'Naked Citrus Cake',
  overview: "Naked Citrus Cake with fruit from the citrus farmer",
  description: "Enjoy this homemade naked cake. It has our award-winning white buttercream frosting. We send the cake within 1 business day and will arrive depending on how far you live.",
  cost: 19.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981611/naked_cake.jpg",
  user_id: d.id,
  category: "Dessert"
)
product4 = Product.create(product_name: 'Raspberry Chocolate Stacks',
  overview: "Layers and Layers of cake with chocolate inbetween",
  description: "Locally grown raspberries ontop of our seductive chocolate cake. We make stacks and stacks of cake layers and cover it with our thickest chocolate ganache. We send the cake within 1 business day and will arrive depending on how far you live.",
  cost: 20.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522965913/chocolate_stacks.jpg",
  user_id: d.id,
  category: "Dessert"
)

product5 = Product.create(product_name: 'Loganberry Popsicles',
  overview: "Loganberry Popsicles as Cool as You",
  description: "Homemade popsicles that anyone would enjoy! These are from a loganberry bush that is grown wild. Enjoy this sweet snack!",
  cost: 5.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_1059/v1522981629/loganberry_popsicles.jpg",
  user_id: e.id,
  category: "Dessert"
)

product6 = Product.create(product_name: 'Raspberry Popsicles',
  overview: "Sour and Sweet Raspberry Popsicles",
  description: "Homemade popsicles that anyone would enjoy! These are from a raspberry bush that is grown near my home. Enjoy this sweet snack!",
  cost: 5.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981610/rasberry_popscicles.jpg",
  user_id: e.id,
  category: "Dessert"
)

product7 = Product.create(product_name: 'Nutty-Dark-Chocolate Popsicles',
  overview: "Made with Peanuts and our finest Dark Chocolate Cocoa Powder",
  description: "Enjoy this decadent chocolate popsicle that anyone would enjoy. This is a fan favorite and our best selling item!",
  cost: 7.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981611/nutty_chocolatey_popscicles.jpg",
  user_id: e.id,
  category: "Dessert"
)

product8 = Product.create(product_name: 'Fresh Citrus',
  overview: "Freshly Farmed Citrus Locally",
  description: "We are a family of farmers that have been growing fresh citrus for years. We would love to share our farmed fruit varieties. We will be selling the citrus gems in packs and you can access them now at home! Enjoy!",
  cost: 24.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981848/citrus.jpg",
  user_id: a.id,
  category: "Snack"
)

product9 = Product.create(product_name: 'Hummus and Snacks',
  overview: "A light mediterranean snack",
  description: "We make our hummus fresh everyday and we love to share some hummus with you.",
  cost: 7.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522965915/hummus_and_other_snacks.jpg",
  user_id: b.id,
  category: "Snack"
)
product10 = Product.create(product_name: 'Beef Tacos',
  overview: "Let's eat Tacos!",
  description: "We come over and create fresh tortilla's with organic beef that anyone will enjoy",
  cost: 20.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522965918/beef_tacos.jpg",
  user_id: c.id,
  category: "Dinner"
)


product11= Product.create(product_name: "Magestic Muscles",
  overview: "Enjoy these daintiful muscles caught fresh from the ocean",
  description: "I go out to the ocean and go fishing for muscles every so often. There is a limited supply so buy while available!",
  cost: 30.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522965413/salty_muscles.jpg",
  user_id: f.id,
  category: "Dinner"
)

product16= Product.create(product_name: "Bahn Mi",
  overview: "VietnameseCoffee's favorite Bahn Mi",
  description: "Plan your next event with these sandwhiches! We cater to you!",
  cost: 5.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522965909/bahn_mi.jpg",
  user_id: i.id,
  category: "Lunch"
)

shopping1 = ShoppingCartItem.create(user_id: e.id, product_id: product1.id, quantity: 1);
shopping2 = ShoppingCartItem.create(user_id: e.id, product_id: product3.id, quantity: 1);
shopping5 = ShoppingCartItem.create(user_id: a.id, product_id: product9.id, quantity: 1);
shopping6 = ShoppingCartItem.create(user_id: a.id, product_id: product10.id, quantity: 2);
shopping7 = ShoppingCartItem.create(user_id: a.id, product_id: product8.id, quantity: 1);
shopping8 = ShoppingCartItem.create(user_id: a.id, product_id: product7.id, quantity: 2);
