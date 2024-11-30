# Backend README

## Introduction
This document provides instructions on how to start and use the backend of the Cybercellbcet.in project.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/ProgrammerSahilIN/Cybercellbcet.in.git
    ```
2. Navigate to the backend directory:
    ```sh
    cd Cybercellbcet.in/backend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration
1. Create a `.env` file in the backend directory.
2. Add the following environment variables:
    ```
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    ```

## Running the Server
1. Start the MongoDB server.
2. Run the backend server:
    ```sh
    npm run dev
    ```
3. The server should now be running at `http://localhost:3000`.

## API Endpoints
- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/:id` - Get a user by ID
- `PUT /users/:id` - Update a user by ID
- `DELETE /users/:id` - Delete a user by ID
- `GET /events` - Get all events
- `POST /events` - Create a new event
- `GET /events/:id` - Get an event by ID
- `PUT /events/:id` - Update an event by ID
- `DELETE /events/:id` - Delete an event by ID