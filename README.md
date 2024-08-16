
# Mock API Project

A simple mock API built with Node.js and Express, intended primarily for development and testing purposes.

## Project Structure

```
mockapi/
│
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── models/
│   │   └── userModel.js
│   ├── services/
│   │   └── userService.js
│   ├── middlewares/
│   │   └── loggerMiddleware.js
│   ├── config/
│   │   └── config.js
│   ├── app.js
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md
```

## Features

- **RESTful API**: Provides endpoints to perform CRUD operations on user data.
- **Structured Project**: Follows best practices for organizing a Node.js project.
- **Environment-Specific Configurations**: Uses environment variables to manage configurations.
- **Middleware**: Includes basic middleware for logging requests.

## Endpoints

- **GET /api/users**: Fetch all users.
- **GET /api/users/:id**: Fetch a user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update an existing user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kidcampos/mockapi.git
   cd mockapi
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Server

- **Development Mode:**

  Starts the server with `nodemon`, which will automatically restart the server upon file changes.

  ```bash
  npm run dev
  ```

- **Watch Mode:**

  Starts the server in watch mode, monitoring the `src` directory for changes.

  ```bash
  npm run watch
  ```

- **Production Mode:**

  Starts the server in production mode.

  ```bash
  npm run prod
  ```

### Project Structure

- **src/controllers**: Contains the logic for handling requests and responses.
- **src/routes**: Defines the API endpoints and associates them with controller functions.
- **src/models**: Defines the data structures or mock data used in the API.
- **src/services**: (Optional) Contains business logic that can be reused across the application.
- **src/middlewares**: Stores middleware functions, such as request logging.
- **src/config**: Configuration files, including environment-specific settings.
- **src/app.js**: Initializes the Express application, including middleware and routes.
- **src/server.js**: Starts the server and listens for incoming requests.

## License

This project is currently not licensed for public use. The source code is proprietary, and no permissions are granted to use, modify, or distribute it. A license may be added in the future.
