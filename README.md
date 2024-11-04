Task Manager Backend
This is the backend service for the Task Manager application, built using the MEAN stack (MongoDB, Express, Angular, and Node.js). This service handles user authentication and task management operations, including creating, reading, updating, and deleting tasks.

Features
User Authentication: Register and login with JWT-based authentication.
Task Management: Users can create, view, update, and delete their tasks.
Data Validation: Validations are applied to ensure data integrity.
Protected Routes: All task-related routes require authentication.

Requirements
Node.js and npm installed
MongoDB installed or use MongoDB Atlas for cloud hosting

Getting Started
1. Clone the repository
   git clone https://github.com/Gursevak56/task-manaer-backend.git
   cd task-manager-backend
2. Install Dependencies
   npm install
3. Configure Environment Variables
   Create a .env file in the root directory and add the following variables:
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
4. Run the Application
    node server.js
6. API Endpoints
   1.Auth Routes
      POST /register: Register a new user
      POST /login: Login and receive a JWT token
      Task Routes (Protected)
      POST /tasks: Create a new task
      GET /tasks: Retrieve all tasks for the logged-in user
      PUT /tasks/
      : Update a task
      DELETE /tasks/
      : Delete a task

  
