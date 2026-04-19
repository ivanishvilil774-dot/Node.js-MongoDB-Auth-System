# Node.js MongoDB Auth System

A full-stack authentication project built with **Node.js**, **Express**, **MongoDB**, **React**, and **Vite**.

This project includes a simple user authentication flow with registration and login pages, a MongoDB-backed Express API, and a small surprise after successful registration.

## Features

- User registration
- User login
- Password hashing with bcrypt
- MongoDB database connection with Mongoose
- React frontend with routing
- Express backend API
- Surprise page after registration 🎉

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- dotenv
- cors

## Project Structure

```bash
Node.js-MongoDB-Auth-System/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   └── package.json
├── server/
│   ├── controller/
│   ├── db/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
API Endpoints
Auth Routes
POST /api/users/signup — Register a new user
POST /api/users/login — Login user
User Routes
GET /api/users/ — Get all users (name and email)
GET /api/users/:id — Get user by ID
Getting Started
1. Clone the repository
git clone https://github.com/ivanishvilil774-dot/Node.js-MongoDB-Auth-System.git
cd Node.js-MongoDB-Auth-System
2. Setup the backend
cd server
npm install

Create a .env file inside the server folder:

MONGO_URI=your_mongodb_connection_string
PORT=3000

Start the backend server:

npm start
3. Setup the frontend

Open a new terminal:

cd frontend
npm install
npm run dev
How It Works
Users can create an account from the Register page.
During registration, the password is securely hashed before being saved to MongoDB.
Users can log in with their credentials.
After a successful registration, the app redirects the user to a special surprise page.
Surprise After Register 🎁

When a user registers successfully, they are redirected to a hidden/special message page.
So yes — there is a surprise after registration.

Notes
This project is a beginner-friendly MERN-style authentication app.
It is a great starting point for learning full-stack development.
You can improve it by adding JWT authentication, protected routes, form validation, and better error handling.
Future Improvements
Add JWT-based authentication
Add protected dashboard routes
Improve UI styling
Add validation for forms
Store auth token properly
Add logout functionality
Author

Built by Luka, a young developer from Georgia who is learning full-stack development and building projects with MongoDB, Express, React, and Node.js.
