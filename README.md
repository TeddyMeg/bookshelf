# Bookshelf

A simple book shelf management app.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Backend API Endpoints](#backend-api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Bookshelf is a full-stack application for managing a collection of books. The frontend is built with React and deployed on Vercel, while the backend is built with Node.js, Express, and MongoDB, and deployed on Render.

## Features
- Add, update, and delete books
- User authentication and authorization
- Responsive design
## User Interface
  ![image](https://github.com/user-attachments/assets/f54052e7-518e-429f-996f-a4a73391ffac)

## Project Structure
```
bookshelf/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Setup and Installation
### Prerequisites
- Node.js
- npm or yarn
- MongoDB

### Clone the Repository
```bash
git clone https://github.com/TeddyMeg/bookshelf.git
cd bookshelf
```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start or npm run server
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start or npm run dev
   ```

## Running the Application
### Backend
To run the backend server, navigate to the `backend` directory and use the following command:
```bash
npm start or npm run dev
```

### Frontend
To run the frontend development server, navigate to the `frontend` directory and use the following command:
```bash
npm start
```

## Backend API Endpoints
### User Routes
- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Login a user

### Book Routes
- **GET /api/books**: Get all books
- **POST /api/books**: Add a new book
- **PUT /api/books/:id**: Update a book
- **DELETE /api/books/:id**: Delete a book

## Environment Variables
### Backend
Create a `.env` file in the `backend` directory and add the following environment variables:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend
Create a `.env` file in the `frontend` directory and add the following environment variables:
```
REACT_APP_API_URL=your_backend_api_url
```

## Deployment
### Frontend
The frontend is deployed on Vercel. You can access it [here](https://bookshelf-frontend-six.vercel.app/).

### Backend
The backend is deployed on Render. You can access it [here](https://bookshelf-server-npl7.onrender.com/).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

---

Feel free to customize this README further based on your specific needs and additional details about your project!
