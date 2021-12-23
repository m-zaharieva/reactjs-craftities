# Craftities 

Try the website here: [craftities.herokuapp.com](https://craftities.netlify.app/)

Craftities is a web application for handmade creative goods. 

## Public Part (Accessible without authentication) - access control
* The public part of the project is visible without authentication
* Home page containing basic information and hot links to the most rated goods. 
* Navigation menu, giving access only to the pages, intended for users with free access - home page, categories, user login and registration of a new user
* Ability to view the all categories and their content and a full catalog of all listed goods
* Access to detailed information about each listing - image, author name, description, category, prise and comments.
* No access to edit and delete buttons
* No access to "add to favourites" button 


## Private Part (Available for Registered Users) - access control

* Registered users have personal areas in the web application accessible after their successful login:
1. Home page giving access to their profile page.
2. Profile page containing information about the current user:
    - Personal data, email and option to add description
3. Access to user's personal catalogue of goods created by them.
4. Access to user's favourite listings.
5. Access to listing details page
- Option to edit or delete current listing, visible buttons only for its creator
    - Edit button - gives the functionality to change current listing parameters - image, title, description, category and prise.
    - Delete button removes the current listing from the database - both from the main listing library, visible to all unregistered users, and from the list of personal listings of the registered user
    - Option to favourite current listing, visible button only for non-creators of this listing. 
6. Create new listing - which add it to the personal collection of listings and to the main library.


## Technologies
* React.JS, NodeJS, ExpressJS, MongoDB, JavaScript, CSS, HTML 
* Heroku, Firebase, Netlify



## Satisfaction of requirements
Web application uses the following technologies, frameworks, and development techniques:
* It has at least 3 different dynamic pages - Profile page, page for each category, Add new listing, Edit listing, Create, Edit, etc.
* Has the required views:
    - Categories and All items – list of all created records
    - Details – information about a specific record (listing og good)
    - One collection, different from the User collection, with all CRUD operations (create, read, update, delete) - Listing collection
* Logged in users – create records and request to the REST API, interaction with the records - Add to favourites an leave a comment
* Logged in user (owner) is able to Edit / Delete their records
* A Guest has access to basic website information (library, details), but not to the functional activities
* React.js is used for the client-side
* Communicate to a remote service (REST API deployed to Heroku)
* Implemented authentication
* Implemented client-side routing
* Demonstrates use of programming concepts, specific to the React library: stateless and state full components, bound forms, synthetic events, Component Styling, etc.
* Uses a source control system, like GitHub  



## Screens (Pages)
* **Home Page** (home page) - home page for unregistered users
* **Login / Register** - registration with first and last name, e-mail and password
* **Categories** - a list of all available categories 
* **Category** - all listings related to this category
* **All listings** - All listings, not filterd by category
* **Profile Page** - information about the current user
* **My listed items** - a library of listings created by the current user
* **Details Page** - a page giving information about a specific listing, with the ability to edit and delete
* **Create Page** - page for creating new listing
* **Edit Page** - edit created listing



<!-- ## Implementation plan
### Part 1
* Create and set up an application in Back4app
* Deploy an application in Heroku
* Login / Register page, logout functionality
* Single Flashcard component functionality

### Part 2
* Creating a landing page
* Creating a home page
* Flashcard Details
* Flashcards library
* My Cards page
* Practice page
* Create Page
* Edit Page
* Delete functionality
* Profile page
* Context API
* Implement pagination for all collections on the page -->

## Implementation
### Data structure
#### Collections

* Users (official)
```javascript
{
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    imageUrl: String,
    Description: String,
    myListings: Array<Pointer<Listing>>
    favourites: Array<Pointer<Listing>>
}
```
* Listing
```javascript
{
    title: String,
    description: String,
    imageUrl: Number
    category: String,
    prise: Number,
    author: Pointer<User>,
    saved: Array<Pointer<User>>,
    savedLength: Number,
}
```

* Comment
```javascript
{
    item: Pointer<Listing>,
    author: Pointer<User>,
    date: String,
    message: String,
}
```

## Additional functionality
* Implemented error handling and data validation
* The application is divided into components with separate CSS files
* Demonstrates use of programming concepts - React Hooks, Context API

## Additional improvements attempt
* Good UI and UX
* The application is deployed in Netlify and its restAPI is deployed in Heroku.
