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



## Implementation plan
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
* Implement pagination for all collections on the page

## Implementation
### Data structure
#### Collections
* Sessions (official)
* Users (official)
```javascript
{
    email: String,
    username: String,
    password: String,
    myCards: Array<String>,
    practiceCards: Array<String>
}
```
* Flashcard
```javascript
{
    title: String,
    topic: String,
    questionCount: Number
    owner:  Pointer<User>
}
```
## Additional functionality
* Implemented error handling and data validation
* The application is divided into components with separate CSS files
* Demonstrates use of programming concepts - React Hooks, Context API

## Additional improvements attempt
* Good UI and UX
* The application is deployed in the cloud - Heroku








# reactjs-craftities
 Full stack web application with rReactJS and NodeJS

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
