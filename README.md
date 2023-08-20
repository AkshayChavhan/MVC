# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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


Creating a well-organized folder structure is crucial for maintaining a clear and manageable
 codebase in an MVC (Model-View-Controller) architecture. Below is a folder structure for your 
 project using MongoDB, React, Redux, and Node.js:

 project-root/
│
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/       (Authentication-related components)
│   │   │   ├── UserData/   (User-specific data components)
│   │   │   └── ...
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   └── UserData.js
│   │   │
│   │   ├── redux/
│   │   │   ├── actions/    (Redux action creators)
│   │   │   ├── reducers/   (Redux reducers)
│   │   │   ├── store.js    (Redux store configuration)
│   │   │   └── types.js    (Redux action type constants)
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
├── server/
│   ├── controllers/
│   │   ├── userController.js
│   │   └── ...
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── ...
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   └── ...
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── ...
│   │
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
├── .gitignore
├── README.md
├── package.json
└── ...

mongodb+srv://akshaychavhan676:akshaychavhan676@mvc.t3kxt7i.mongodb.net/


INSTALLATION -->

here's an outline of the installations you'll need for both the server (Node.js) and the client (React) sides of your project.

Server (Node.js) Installation:

Node.js and npm: Make sure you have Node.js and npm (Node Package Manager) installed. You can download them from the official Node.js website: https://nodejs.org/

MongoDB: You'll need to have MongoDB installed and running. You can download MongoDB Community Edition from their official website: https://www.mongodb.com/try/download/community

Express.js: Express is a popular Node.js framework for building APIs. You'll need to install it in your server folder:

cd server
npm install express
Mongoose: Mongoose is an ODM (Object Data Modeling) library for MongoDB. It helps you interact with MongoDB in a more structured way:

cd server
npm install mongoose
jsonwebtoken: This library is used for creating and verifying JSON Web Tokens (JWTs) for user authentication:

cd server
npm install jsonwebtoken
bcrypt: bcrypt is used for hashing passwords securely:

cd server
npm install bcrypt
Client (React) Installation:

Create React App: Create React App is a tool that sets up a new React project with a good default configuration. You can install it globally:

npm install -g create-react-app
React and ReactDOM: These are the core libraries for building the user interface:

npx create-react-app client
cd client
npm start
Redux: Redux is a predictable state container for JavaScript apps. You can add it to your React app:

cd client
npm install redux react-redux
Axios: Axios is a promise-based HTTP client for making API requests:

cd client
npm install axios
React Router: If your application has multiple pages, you'll want to use React Router for routing:

cd client
npm install react-router-dom
Remember that you need to navigate to the respective server and client directories in your terminal before executing the installation commands.







####  Setting up Tailwind CSS
Tailwind CSS requires Node.js 12.13.0 or higher.

1 . Install Tailwind via npm
Install Tailwind and its peer-dependencies using npm:

npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

Create React App doesn’t support PostCSS 8 yet so you need to install the Tailwind CSS v2.0 PostCSS 7 compatibility 
build for now as we’ve shown above.



#### Install and configure CRACO

Since Create React App doesn’t let you override the PostCSS configuration natively, we also need to install CRACO to 
be able to configure Tailwind:

npm install @craco/craco

Once it’s installed, update your scripts in your package.json file to use craco instead of react-scripts for all scripts except eject:

{
    // ...
    "scripts": {
     "start": "react-scripts start",    //REMOVE
     "build": "react-scripts build",    //REMOVE
     "test": "react-scripts test",      //REMOVE
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }


Next, create a craco.config.js at the root of our project and add the tailwindcss and autoprefixer as PostCSS plugins:
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

### Create your configuration file
Next, generate your tailwind.config.js file:

npx tailwindcss-cli@latest init

This will create a minimal tailwind.config.js file at the root of your project:
Next, create a craco.config.js at the root of our project and add the tailwindcss and autoprefixer as PostCSS plugins:



### Configure Tailwind to remove unused styles in production
In your tailwind.config.js file, configure the purge option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:

 // tailwind.config.js
  module.exports = {
   purge: [],           //REMOVE
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }


### Include Tailwind in your CSS
Open the ./src/index.css file that Create React App generates for you by default and use the @tailwind directive to include Tailwind’s base, components, and utilities styles, replacing the original file contents:


/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;



### Finally, ensure your CSS file is being imported in your ./src/index.js file:


### You’re finished! Now when you run npm run start, Tailwind CSS will be ready to use in your Create React App project.

