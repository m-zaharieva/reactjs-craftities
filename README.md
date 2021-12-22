# Craftities 

Try the website here: [craftities.herokuapp.com](https://craftities.netlify.app/)

Craftities is a web application for handmade creative goods. 

## Public Part (Accessible without authentication) - access control
* The public part of the project is visible without authentication
* Home page containing basic information and hot links to the most favourited goods. 
* Navigation menu, giving access only to the pages, intended for users with free access - home page, categories, user login and registration of a new user
* Ability to view the all categories and their content and a full catalog of all listed goods
* Access to detailed information about each listing - image, author name, description, category and prise.
* No access to edit and delete buttons
* No access to "add to favourites" button 


## Private Part (Available for Registered Users) - access control

<!-- * Registration of users comes into effect after successful verification of their e-mail address -->
* Registered users have personal areas in the web application accessible after their successful login:
1. Home page giving access to their profile page.
    <!-- - Personalized welcoming screen showing current user's name and a "Continue" button that takes them below to the categorization section -->
2. Profile page containing information about the current user:
    - Identification number, username, email, contributions count - the total number of cards created, level of the user based on his contribution to the total number of cards in the database, information about the date of account creation
    - Implantation of personal titles according to the user level - maximum level 100
    - Ability to upload a personal profile picture
    - Functionality to delete the personal account from the database
3. Access to user's personal library of flashcards created by them, sorted by category
4. Access to flashcard's details page
- Option to edit or delete current flashcard, visible buttons only for the creator of the card
    - Edit button - gives the functionality to change current flashcard's parameters - question and/or answer
    - Category cannot be changed once the flashcard has been created
    - Delete button removes the current flashcard from the database - both from the main library, visible to all unregistered users, and from the list of personal flashcards of the registered user


## Technologies
* HTML, CSS, JavaScript, React.JS
* Dependencies: Parse, React notifications, React Scripts, React Scroll, React Spinners
* Heroku, Back4app as BAAS



## Satisfaction of requirements
Web application uses the following technologies, frameworks, and development techniques:
* It has at least 3 different dynamic pages - My cards, Profile page, Practice List, Create, Edit, etc.
* Has the required views:
    - Catalog – list of all created records (Flashcards Library)
    - Details – information about a specific record (Flashcard details)
    - One collection, different from the User collection, with all CRUD operations (create, read, update, delete) - Flashcard collection
* Logged in users – create records and request to the REST API, interaction with the records (add to Practice List)
* Logged in user (owner) is able to Edit / Delete their records
* A Guest has access to basic website information (library, details), but not to the functional activities
* React.js is used for the client-side
* Communicate to a remote service (Back4App)
* Implemented authentication
* Implemented client-side routing
* Demonstrates use of programming concepts, specific to the React library: stateless and state full components, bound forms, synthetic events, Component Styling, etc.
* Uses a source control system, like GitHub  



## Screens (Pages)
* **Welcome Page** (landing page) - home page for unregistered users
* **Login / Register** - registration with e-mail, username, password
* **Flashcards Library** - a list of all flashcards created by users
* **Home Page** - a page for registered users, pointing to libraries with the three main categories of flashcards
* **Profile Page** - information about the current user, with the possibility to delete the profile
* **My Cards** - a library of flashcards created by the current user
* **Details Page** - a page giving information about a specific flashcard, with the ability to edit and delete
* **Practice List Page** - a page where the user can find all the cards created by other users, but he himself wants to practice
* **Create Page** - page for creating flashcards
* **Edit Page** - edit created flashcards, their questions and answers



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
