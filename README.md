# Restaurant Management System

## About the Project

The Restaurant Management System is a full-stack web application developed to manage the basic operations of a restaurant. The project provides a simple interface for handling restaurant-related activities and is divided into two main parts, frontend and backend.

The frontend is built using React, while the backend is developed using Node.js and Express. MongoDB is used for storing application data.

The main purpose of this project is to create a simple and practical restaurant management application while working with modern web development technologies.

## Technologies Used

### Frontend

* React
* React DOM
* React Router
* Vite
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv
* bcryptjs

## Project Structure

```text
Restaurant-Management-System/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── package.json
│   ├── src/
│   └── ...
│
├── package.json
├── package-lock.json
└── README.md
```

The repository contains separate `frontend` and `backend` applications.

## Features

* Restaurant management interface
* Frontend built with React
* Backend API using Express.js
* MongoDB database integration
* User authentication support
* Password hashing using bcryptjs
* Routing using React Router
* CORS support for frontend and backend communication
* Environment variable support using dotenv

## Frontend

The frontend is developed using React and Vite. React Router is used for handling navigation between different pages of the application. The frontend can be started using the Vite development server.

### Run Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

## Backend

The backend is developed using Node.js and Express.js. It handles server-side operations and communicates with the MongoDB database using Mongoose.

The backend also uses bcryptjs for password hashing, CORS for communication with the frontend, and dotenv for environment configuration.

### Run Backend

Navigate to the backend folder:

```bash
cd backend
```

Install the required packages:

```bash
npm install
```

Start the server:

```bash
npm start
```

For development with automatic server restarts:

```bash
npm run dev
```

## Database

This project uses MongoDB as the database. Mongoose is used in the backend to connect to MongoDB and work with database models.

Before running the backend, make sure MongoDB is installed and running on your system.

The database connection can be configured using environment variables in a `.env` file.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Do not upload your actual `.env` file or database credentials to GitHub.

## How to Run the Complete Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/hardik-0509/Restaurant-Management-System.git
```

### Step 2: Open the Project

```bash
cd Restaurant-Management-System
```

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 4: Configure MongoDB

Create a `.env` file inside the `backend` folder and add your MongoDB connection string and other required environment variables.

### Step 5: Start the Backend

```bash
npm run dev
```

### Step 6: Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local frontend URL shown by Vite in your browser.

## Available Scripts

### Backend

```bash
npm start
```

Starts the backend using Node.js.

```bash
npm run dev
```

Starts the backend using Nodemon for development.

The backend package configuration currently defines these scripts.

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

The frontend package configuration includes these Vite scripts.

## Authentication

The backend includes bcryptjs for handling password hashing. This allows passwords to be stored more securely instead of keeping them as plain text.

## Future Improvements

Some features that can be added to the project in the future include:

* Online food ordering
* Table reservation
* Online payment
* Order tracking
* Restaurant inventory management
* Admin dashboard
* Customer reviews and ratings
* Sales and revenue reports
* Better authentication and role-based access
* Deployment to a cloud platform

## Learning Outcomes

Working on this project provides practical experience with:

* React development
* Creating REST APIs with Express.js
* Connecting a Node.js application with MongoDB
* Using Mongoose for database operations
* Frontend and backend integration
* User authentication
* Password hashing
* React routing
* Environment variables
* Running a full-stack application locally
