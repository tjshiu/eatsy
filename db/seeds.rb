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
g = User.create(username: 'Krispy', password: 'password', email: "krispycreamy@krispy.com")
h = User.create(username: "Kristin", password: 'password', email: 'kristin@kristen.com')
i = User.create(username: 'VietCoffee', password: 'password', email: 'kevin@kevin.com')
j = User.create(username: 'Chateau Monte', password: 'password', email: 'chateu@monte.com')
k = User.create(username: "May", password: "password", email: "may@may.com")
l = User.create(username: 'Star', password: "password", email: "star@star.com")
m = User.create(username: 'Oathouse', password: "password", email: "oat@oat.com")
n = User.create(username: "BnB", password: 'password', email: "bnb@bnb.com")
o = User.create(username: 'TimeBurger', password: 'password', email: 'burger@b.com')
q = User.create(username: "Healthy Lunches", password: 'password', email: "healthy.com")
r = User.create(username: "LittleItaly", password: "password", email: "littleItaly@italy.com")
s = User.create(username: 'NoodleZip', password: 'password', email: "noodlezip@noodle.com")
t = User.create(username: "LobsterRed", password: "password", email: "lobsterred@.com")
u = User.create(username: "Nutty", password: "password", email: "nutty@nutty.com")






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

product18= Product.create(product_name: "Berry Smoothie",
  overview: "Variety of berries that you can enjoy in this healthy and organic smoothie.",
  description: "Hi~~~ I am May and I want to help you enjoy fresh made smoothies everyday. I have a passion for fruit and health.",
  cost: 8.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011839/berry_smoothie.jpg",
  user_id: k.id,
  category: "Drink"
)
product19= Product.create(product_name: "Exotic Smoothie",
  overview: "Passionfruit, Blackberrieies, Bloodoranges, Carrots, and more!",
  description: "Hi~~~ I am May and I want to help you enjoy fresh made smoothies everyday. I have a passion for fruit and health.",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011846/exotic_fruit_smoothie.jpg",
  user_id: k.id,
  category: "Drink"
)
product20= Product.create(product_name: "Fig Cocoa Smoothie",
  overview: "Fig and cocao smoothies that can be served warm or cold!",
  description: "Hi~~~ I am May and I want to help you enjoy fresh made smoothies everyday. I have a passion for fruit and health.",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011844/fig_smoothie.jpg",
  user_id: k.id,
  category: "Drink"
)




product28= Product.create(product_name: "Honey and Pear Oats",
  overview: "Sweet and Fruity Oats",
  description: "Enjoy some oats for a quick and sweet breakfast",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527020931/honey_pear_oats.jpg",
  user_id: m.id,
  category: "Breakfast"
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

product30= Product.create(product_name: "Classic Breakfast",
  overview: "Classic Breakfast, eggs any way you like with hashbrowns, toast, and sausage patties.",
  description: "We are a family who likes to host breakfasts and brunches. Every Sunday we create an enviornment where we eat with as a breakfast family.",
  cost: 15.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527020925/classic_breakfast.jpg",
  user_id: n.id,
  category: "Breakfast"
)
product31= Product.create(product_name: "Shakshuka",
  overview: "Enjoy this amazing shakshuka with fresh herbs and eggs and tomatoes harvested locally",
  description: "We are a family who likes to host breakfasts and brunches. Every Sunday we create an enviornment where we eat with as a breakfast family.",
  cost: 20.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527020928/shakshuka.jpg",
  user_id: n.id,
  category: "Breakfast"
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




product16= Product.create(product_name: "Bahn Mi",
  overview: "VietnameseCoffee's favorite Bahn Mi",
  description: "Plan your next event with these sandwhiches! We cater to you!",
  cost: 5.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522965909/bahn_mi.jpg",
  user_id: i.id,
  category: "Lunch"
)


product23= Product.create(product_name: "Mulled Wine",
  overview: "Come to Chateau Monte! We have mulled wine year round!",
  description: "Enjoy our mulled wine on a cold day to warm your hearts.",
  cost: 7.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011845/mulled_wine.jpg",
  user_id: j.id,
  category: "Drink"
)


product24= Product.create(product_name: "Blueberry and Cranberry Smoothie",
  overview: "Enjoy this tangy and sweet smoothie with cranberries, blueberries, and honey.",
  description: "Hi~~~ I am May and I want to help you enjoy fresh made smoothies everyday. I have a passion for fruit and health.",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011840/blue_cran_drink.jpg",
  user_id: k.id,
  category: "Drink"
)
product21= Product.create(product_name: "Limeanade",
  overview: "Refreshing Limes on a warm day!",
  description: "We are a family of farmers that have been growing fresh citrus for years. We would love to share our farmed fruit varieties. Enjoy!",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011844/limeanade.jpg",
  user_id: a.id,
  category: "Drink"
)

product22= Product.create(product_name: "Lemonade",
  overview: "Refreshing Lemons on a warm day!",
  description: "We are a family of farmers that have been growing fresh citrus for years. We would love to share our farmed fruit varieties. Enjoy!",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011850/lemonade.jpg",
  user_id: a.id,
  category: "Drink"
)


product25= Product.create(product_name: "Fresh Squeezed Orange",
  overview: "We have fresh squeezed orange juice with a little bit of a lime kick",
  description: "We are a family of farmers that have been growing fresh citrus for years. We would love to share our farmed fruit varieties. Enjoy!",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011844/fresh_squeezed_orange_juice.jpg",
  user_id: a.id,
  category: "Drink"
)

product26= Product.create(product_name: "Ethiopian Coffee Beans",
  overview: "Coffee beans freshly ground so you can take it home.",
  description: "Order with our ethiopian coffee beans which are fair trade",
  cost: 20.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011841/ethiopian_coffee_beans.jpg",
  user_id: l.id,
  category: "Drink"
)

product10 = Product.create(product_name: 'Beef Tacos',
  overview: "Let's eat Tacos!",
  description: "We come over and create fresh tortilla's with organic beef that anyone will enjoy",
  cost: 20.99,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522965918/beef_tacos.jpg",
  user_id: c.id,
  category: "Dinner"
)

product27= Product.create(product_name: "Cappuccino Social",
  overview: "Fresh brewed coffee in our little home",
  description: "Our humble home hosts coffee meetups where we enjoy cappuccinos and talk.",
  cost: 4.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527011843/cappucino_with_milk.jpg",
  user_id: l.id,
  category: "Drink"
)

product28= Product.create(product_name: "Cinnamon Sugar Walnut Oat Waffles",
  overview: "Sweet, nutty, and full of spice waffles",
  description: "Enjoy our homemade oat waffles for a quick and sweet breakfast",
  cost: 15.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527020925/cinnamon_sugar_walnut_waffles.jpg",
  user_id: m.id,
  category: "Breakfast"
)

product47= Product.create(product_name: "Bibimbap",
  overview: "Korean dish mixed with an egg yolk rice, and other vegetables with gochujang. We also provide some sides for you to enjoy.",
  description: "We like to help you travel the world with our food.",
  cost: 14.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026782/jakub-kapusnak-296881-unsplash.jpg",
  user_id: s.id,
  category: "Dinner"
)

product44= Product.create(product_name: "Tortellini",
  overview: "Enjoy our tartellini filled with your choice of meats or cheeses.",
  description: "We are a family of pasta makers where we specialize at making pastas from scratch.",
  cost: 14.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026792/Tortelloni.jpg",
  user_id: r.id,
  category: "Dinner"
)

product29= Product.create(product_name: "Persimmon and Sweet Raisin Oats",
  overview: "Sweet and Fruity Oats",
  description: "Enjoy some oats for a quick and sweet breakfast",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527020928/seasonal_oatmeal.jpg",
  user_id: m.id,
  category: "Breakfast"
)

product40= Product.create(product_name: "Spanish Paella",
  overview: "Enjoy this spanish paella with mixed meet and cooked in a dutch oven.",
  description: "Healthy Life - Wealthy Life",
  cost: 17.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527022808/Spanish_Paella.jpg",
  user_id: q.id,
  category: "Lunch"
)


product32= Product.create(product_name: "Avocado Toast with Herloim Tomatoes",
  overview: "Tomatoes are in season and enjoy our simple yet savory dish of tomatoes and avocado toast.",
  description: "We are a family who likes to host breakfasts and brunches. Every Sunday we create an enviornment where we eat with as a breakfast family.",
  cost: 12.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527020925/avocado_toast_with_herloim_tomatoes.jpg",
  user_id: n.id,
  category: "Breakfast"
)
product33= Product.create(product_name: "Spiced Acorn Squash Tarts",
  overview: "Warm and cozy spiced tarts that are small and bitsize. We give you a dozen of these to enjoy",
  description: "We are a family who likes to host breakfasts and brunches. Every Sunday we create an enviornment where we eat with as a breakfast family.",
  cost: 6.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527020926/melon_tarts.jpg",
  user_id: n.id,
  category: "Breakfast"
)
product34= Product.create(product_name: "Apricot and Peart Tart",
  overview: "Warm and cozy tarts that are filled with appricots of the summer season. Enjoy these bitesized tarts. A dozen tarts for you to enjoy.",
  description: "We are a family who likes to host breakfasts and brunches. Every Sunday we create an enviornment where we eat with as a breakfast family.",
  cost: 8.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1522981642/apricot_and_pear_tart.jpg",
  user_id: n.id,
  category: "Breakfast"
)
product35= Product.create(product_name: "Fried Chicken with Purple Cabbage Slaw",
  overview: "It's Time for a burger! Enjoy this Fried Chicken with our Zesty Slaw all in a sandwhch for you to enjoy",
  description: "We make sandwiches for anyone to enjoy! All at one flat price.",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527022803/Fried_Chicken_Cabbage_Topped.jpg",
  user_id: o.id,
  category: "Lunch"
)
product36= Product.create(product_name: "Loaded Chiecken Burger",
  overview: "It's Time for a burger! Enjoy this chicken burger with fries on the side. We give you all the things you need to load this burger.",
  description: "We make sandwiches for anyone to enjoy! All at one flat price.",
  cost: 10.00,
  image_url: "https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527022804/Loaded_Chicken_Burger.jpg",
  user_id: o.id,
  category: "Lunch"
)
product37= Product.create(product_name: "Bacon Cheeseburger",
  overview: "It's Time for a burger! Enjoy this Bacon Cheeseburger with fries and our homemade aioli.",
  description: "We make sandwiches for anyone to enjoy! All at one flat price.",
  cost: 10.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527022808/Bacon_Cheeseburger.jpg",
  user_id: o.id,
  category: "Lunch"
)
product38= Product.create(product_name: "Loaded Fries",
  overview: "It's Time for Fries! Enjoy these loaded fries for a savory and delicious combination",
  description: "Enjoy our very first loaded fries. Our off the menu item is now being sold! All at one flat price.",
  cost: 10.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/v1527022805/Loaded_Fries.jpg",
  user_id: o.id,
  category: "Lunch"
)
product38= Product.create(product_name: "Turkey Sandwich",
  overview: "It's Time for a sandwhich! Enjoy our take on a classic turkey sandwich.",
  description: "Enjoy our very turkey sandwich. Our off the menu item is now being sold! All at one flat price.",
  cost: 10.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527022808/Turkey_Sandwich.jpg",
  user_id: o.id,
  category: "Lunch"
)
product39= Product.create(product_name: "Spinach Salad",
  overview: "We created this spinach salad with rainbow trout on top. Enjoy the zing from this lemony savory combination.",
  description: "Healthy Life - Wealthy Life",
  cost: 15.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527022809/Spinach_Salad.jpg",
  user_id: q.id,
  category: "Lunch"
)


product41= Product.create(product_name: "Pesto Bow Tie Pasta Salad",
  overview: "Refreshing fresh pesto on a bed of bow tie pasta and salad greens.",
  description: "Healthy Life - Wealthy Life",
  cost: 15.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527022802/Pesto_Bow_Tie_pasta.jpg",
  user_id: q.id,
  category: "Lunch"
)
product42= Product.create(product_name: "Seared Tuna",
  overview: "We create this seared tuna for a light meal.",
  description: "Healthy Life - Wealthy Life",
  cost: 15.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527022804/Seared_Tuna.jpg",
  user_id: q.id,
  category: "Lunch"
)
product43= Product.create(product_name: "Pancetta Pasta",
  overview: "Pancetta Pasta where you can enjoy at home. We make this pasta for you to enjoy!",
  description: "We are a family of pasta makers where we specialize at making pastas from scratch.",
  cost: 25.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026785/Pancetta_Pasta.jpg",
  user_id: r.id,
  category: "Dinner"
)

product45= Product.create(product_name: "Grandma's Pasta",
  overview: "Enjoy our great grandmother's recipe of thick pasta and meat sauce.",
  description: "We are a family of pasta makers where we specialize at making pastas from scratch.",
  cost: 14.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026783/Rustic_Thick_Pasta_Sauce.jpg",
  user_id: r.id,
  category: "Dinner"
)
product46= Product.create(product_name: "Simple Spaghetti",
  overview: "This is our classic award winning spaghetti. Enjoy our tangy red sauce and fresh herbs",
  description: "We are a family of pasta makers where we specialize at making pastas from scratch.",
  cost: 14.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026785/Spaghetti.jpg",
  user_id: r.id,
  category: "Dinner"
)

product39= Product.create(product_name: "Seasoned Salmon",
  overview: "Enjoy this seasoned salmon on top of a bed of couscous and asparagus.",
  description: "Healthy Life - Wealthy Life",
  cost: 20.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527022806/Seasoned_Salmon.jpg",
  user_id: q.id,
  category: "Lunch"
)
product47= Product.create(product_name: "Shoyu Ramen",
  overview: "Shoyu ramen cooked for you to enjoy with a soft boiled eggs and baby bok choy.",
  description: "We like to help you travel the world with our food.",
  cost: 14.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026783/Ramen.jpg",
  user_id: s.id,
  category: "Dinner"
)

product48= Product.create(product_name: "Seafood Noodles",
  overview: "Our Filipino style seafood noodles with spices",
  description: "We like to help you travel the world with our food.",
  cost: 14.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026784/Seafood_Noodles.jpg",

  user_id: s.id,
  category: "Dinner"
)
product49= Product.create(product_name: "Gnocchi",
  overview: "Try our homemade gnocchi that can be accompanied with a variety of sauces.",
  description: "We like to help you travel the world with our food.",
  cost: 14.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026772/Gnocchi.jpg",
  user_id: s.id,
  category: "Dinner"
)
product50= Product.create(product_name: "Lobster Dinner",
  overview: "Fresh lobster dinner for one.",
  description: "We specialize in creating seafood that you would enjoy",
  cost: 17.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026772/Lobster_Dinner.jpg",
  user_id: t.id,
  category: "Dinner"
)
product51= Product.create(product_name: "Clams with Lemon",
  overview: "Fresh squeezed lemon juice on our savory clam creation.",
  description: "We specialize in creating seafood that you would enjoy",
  cost: 18.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026774/Clam_and_Mussel_with_lemon.jpg",
  user_id: t.id,
  category: "Dinner"
)
product52= Product.create(product_name: "Sea bass in Creamy Cast Iron",
  overview: "Our creamiest sauce filled with herbs and fish that a family can enjoy.",
  description: "We specialize in creating seafood that you would enjoy",
  cost: 27.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527026776/Cast_iron_Skillet_Sauteed_Fish_in_Cream_Sauce.jpg",
  user_id: t.id,
  category: "Dinner"
)
product53= Product.create(product_name: "Almonds",
  overview: "Almonds that everyone can enjoy for a quick snack in an 8oz package.",
  description: "Nut farmer that wants to bring the snacks to you.",
  cost: 10.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527031581/almonds.jpg",
  user_id: u.id,
  category: "Snack"
)
product54= Product.create(product_name: "Candied Pecans",
  overview: "Pecans that have been sweetened. A great topping on salads.",
  description: "Nut farmer that wants to bring the snacks to you.",
  cost: 10.00,
  image_url: "http://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_700/v1527031579/candied_pecans.jpg",
  user_id: u.id,
  category: "Snack"
)











shopping1 = ShoppingCartItem.create(user_id: e.id, product_id: product1.id, quantity: 1);
shopping5 = ShoppingCartItem.create(user_id: a.id, product_id: product9.id, quantity: 1);
shopping6 = ShoppingCartItem.create(user_id: a.id, product_id: product10.id, quantity: 2);
shopping7 = ShoppingCartItem.create(user_id: a.id, product_id: product8.id, quantity: 1);
shopping8 = ShoppingCartItem.create(user_id: a.id, product_id: product7.id, quantity: 2);
