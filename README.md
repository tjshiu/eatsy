# Eatsy

[Live Demo](https://eatsyapp.herokuapp.com/#/)

Eatsy is a shopping website for food. This was inspired by Etsy. It uses Rails/PostgreSQL backend with React.js and Redux on the frontend.

The project was built within a two-week timeframe. I do plan on continuing with the project and making improvements over time.

## Features
* Secure frontend to backend user authentication using BCrypt.
* Users can create, edit, and see products/food that they have made.
* Users can make purchases to products/food and see their own shopping cart.
* Users can also search for products by their name.
* Products/food support images.

![Homepage](https://res.cloudinary.com/dwanjkcku/image/upload/v1523655560/uploaded_images/Screen_Shot_2018-04-13_at_2.37.50_PM.png)

### Sign In and Register

![Sign In & Register](https://res.cloudinary.com/dwanjkcku/image/upload/v1523655560/uploaded_images/Screen_Shot_2018-04-13_at_2.32.04_PM.png)

### Search

![Search](https://res.cloudinary.com/dwanjkcku/image/upload/v1523655559/uploaded_images/Screen_Shot_2018-04-13_at_2.20.54_PM.png)

### Add to Cart

![Add to Cart](https://res.cloudinary.com/dwanjkcku/image/upload/v1523655560/uploaded_images/Screen_Shot_2018-04-13_at_2.35.29_PM.png)

### Shopping Cart

![Shopping Cart](https://res.cloudinary.com/dwanjkcku/image/upload/v1523655559/uploaded_images/Screen_Shot_2018-04-13_at_2.35.41_PM.png)

### User's Profile

![Profile](https://res.cloudinary.com/dwanjkcku/image/upload/v1523655560/uploaded_images/Screen_Shot_2018-04-13_at_2.35.56_PM.png)

### Editing A Product

![Edit a Product](https://res.cloudinary.com/dwanjkcku/image/upload/v1523655560/uploaded_images/Screen_Shot_2018-04-13_at_2.36.26_PM.png)

```Javascript
// This will prevent people from hacking to the edit page. If they go to the product show page
// and add edit top of the website.
const ProtectedToOwner = ({ component: Component, path, loggedIn, isOwner, exact, redirectToModal }) => (
  <Route
    path={path}
    exact={exact}
    render={props => {
      if (loggedIn && isOwner) {
        return <Component {...props} />;
      } else {
        return <MustBeOwner />;
      }
    }}
    />
);
```


## Project Design
Eatsy was designed to be functional and appealing. Food items were chosen based off of images found through [Unsplash](https://unsplash.com/). The focus was to make the site bug free so that you can see it

## Technologies
Rails was chosen due to the short time frame. Because this project is a small-scale, I began building things in a relatively short time, so convenience and speed was prioritized over scalability. The chosen technologies (Heroku, Rails, etc) were determined to be adequate for the amount of material.

Frontend Redux states are set up in so that there were separate reducers and actions for products, users, errors, and shopping cart items. This would help normalize the state and with each action we see changes accordingly.

In addition to the included packages, [Cloudinary](https://cloudinary.com/) was used to upload product images.


### Additional Resources
* [Proposal Wireframes](https://github.com/tjshiu/eatsy/wiki/Component-Hierarchy-with-Wireframes)
* [Sample State](https://github.com/tjshiu/eatsy/wiki/Sample-State)
* [Database Schema](https://github.com/tjshiu/eatsy/wiki/Database-Schema)


## Possible Future Features
In the future I would like to add:
* Comments/Reviews
* User is able to change their image
* Add Loading
