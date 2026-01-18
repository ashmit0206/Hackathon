Backend Authentication Service (Node.js + MongoDB)

This project is a backend authentication service built using Node.js, Express.js, and MongoDB.
It provides basic user authentication features such as user registration and login using JWT-based authentication.


Features

User Registration

User Login

Password hashing using bcrypt

JWT-based authentication

MongoDB database integration

Environment-based configuration using .env



Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JSON Web Tokens (JWT)

Security: bcrypt

Tools: Git, GitHub, Postman


backend/
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── auth.routes.js
│   └── config/
│       └── db.js
├── server.js
├── package.json
├── .env.example
└── README.md


.env file 

PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=1d





