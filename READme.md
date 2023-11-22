# Ecommerce-Backend Project

## Description

This project is a functional Express.js API integrated with Sequelize, a powerful ORM (Object-Relational Mapping) library, and MySQL for data storage. The primary goal of this API is to provide a robust backend solution for managing categories, products, and tags. It utilizes Sequelize for efficient database operations, ensuring seamless connectivity and data manipulation.

## Functionality

The key functionalities of this Express.js API include:

- **Database Connection:**
  - Establishes a connection to a MySQL database using Sequelize.
  - Requires setting up environment variables for the database name, MySQL username, and MySQL password.

- **Database Initialization:**
  - Supports schema and seed commands to create a development database.
  - Seeds the database with test data for thorough testing.

- **Server Operation:**
  - Starts the server and synchronizes Sequelize models with the MySQL database.

- **API Endpoints:**
  - Provides GET routes for categories, products, and tags, displaying data in a formatted JSON.
  - Supports testing of API POST, PUT, and DELETE routes in tools like Insomnia Core.
  - Enables successful creation, updating, and deletion of data in the connected database.

## Installation Instructions

### Prerequisites

Ensure the following software is installed:

- [Node.js](https://nodejs.org/) (version X.X.X)
- [MySQL](https://www.mysql.com/) (version X.X.X)

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/express-api-with-sequelize.git
    ```

2. Navigate to the project directory:

    ```bash
    cd express-api-with-sequelize
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Database configuration:

    - Create an environment variable file (e.g., `.env`) in the root directory.

    - Add your database name, MySQL username, and MySQL password:

        ```env
        DB_NAME=your_database_name
        DB_USER=your_mysql_username
        DB_PASSWORD=your_mysql_password
        ```

5. Run schema and seed commands to initialize the database:

    ```bash
    npm run db:create
    npm run db:seed
    ```

### Usage

1. Start the application:

    ```bash
    npm start
    ```

2. Open Insomnia Core or your preferred API testing tool.

3. Test the API endpoints:

    - GET routes for categories, products, or tags.
    - Test POST, PUT, and DELETE routes.

4. Explore the formatted JSON responses.

## Contributors
Contributors include tutors from Rice University, ChatGPT, and Rice University class instruction.

## License

MIT

## Screenshots 
![image](https://github.com/nikchavez94/employee-tracker/assets/128064997/aa77dbfb-b142-4b4d-8b5b-0167feeb85be)
![image](https://github.com/nikchavez94/employee-tracker/assets/128064997/56c6d7d9-0edb-4f60-94c3-f0a16d05941a)
![image](https://github.com/nikchavez94/employee-tracker/assets/128064997/df8a3b4b-4ff9-4260-98c8-b3c4525a690d)
