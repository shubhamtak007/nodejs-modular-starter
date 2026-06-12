# Node.js Modular Starter

A scalable and production-ready Node.js starter template built with **TypeScript**, **Express.js**, **PostgreSQL**, and **Prisma ORM**. The project follows a modular architecture, clean code principles, and separation of concerns to help developers build maintainable and scalable backend applications.

## 🚀 Features

* Modular architecture
* TypeScript support
* RESTful APIs
* JWT Authentication
* Access Token & Refresh Token strategy
* HttpOnly cookie-based authentication
* Password hashing with bcrypt
* Request validation with Zod
* Centralized error handling
* Environment-based configuration
* PostgreSQL integration with Prisma ORM
* Service-Repository pattern
* Scalable project structure
* Protected routes via authentication middleware

## 🛠️ Tech Stack

* TypeScript
* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* JWT
* bcrypt
* Zod
* dotenv
* cookie-parser

## 📁 Project Structure

```text
src/
├── config/
│   └── db.ts
│
├── middlewares/
│   ├── auth.middleware.ts
│   ├── error.middleware.ts
│   └── validation.middleware.ts
│
├── modules/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.repository.ts
│   │   ├── auth.routes.ts
│   │   └── auth.validation.ts
│   │
│   └── user/
│       ├── user.controller.ts
│       ├── user.service.ts
│       ├── user.repository.ts
│       ├── user.routes.ts
│       └── user.validation.ts
│
├── routes/v0
│   └── index.ts
│
├── services/
│   ├── jwt.service.ts
│   └── password.service.ts
│
├── utils/
│   ├── ApiError.ts
│   └── apiResponse.ts
│
├── app.ts
└── server.ts

prisma/
├── schema.prisma
└── migrations/
```

## ⚡ Getting Started

### Clone the Repository

```bash
git clone https://github.com/shubhamtak007/nodejs-modular-starter.git
cd nodejs-modular-starter
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

DATABASE_URL=postgresql://username:password@localhost:5432/database_name

JWT_ACCESS_TOKEN_SECRET=your_access_secret
JWT_REFRESH_TOKEN_SECRET=your_refresh_secret

ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d

NODE_ENV=development
```

### Run Prisma Migrations

```bash
npx prisma migrate dev
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Start Development Server

```bash
npm run dev
```

### Start Production Server

```bash
npm run build
npm start
```

## 🔐 Authentication

This starter uses JWT-based authentication with:

* Access Token
* Refresh Token
* Secure HttpOnly cookie storage
* Authentication middleware
* Route protection

### Authentication Flow

1. User registers or logs in.
2. Server validates credentials.
3. Access Token and Refresh Token are generated.
4. Tokens are sent using HttpOnly cookies through the `Set-Cookie` response header.
5. Protected routes verify the Access Token.
6. Refresh Token is used to issue new tokens when required.
7. Logout clears authentication cookies.

## 📡 API Endpoints

### Register User

```http
POST /api/v0/auth/sign-up
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123"
}
```

### Login User

```http
POST /api/v0/auth/sign-in
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

Successful response:

```json
{
  "success": true,
  "message": "Login successful"
}
```

### Refresh Access Token

```http
POST /api/v0/auth/refresh-token
```

Uses the Refresh Token from the HttpOnly cookie to issue new authentication tokens.

### Logout User

```http
POST /api/v0/auth/logout
```

Clears authentication cookies.

### Get User Profile

```http
GET /api/v0/user/profile
```

Protected Route

## 🏗️ Architecture

Each feature is organized into its own module.

```text
module/
├── controller
├── service
├── repository
├── routes
└── validation
```

### Layer Responsibilities

| Layer      | Responsibility                      |
| ---------- | ----------------------------------- |
| Controller | Handles HTTP requests and responses |
| Service    | Contains business logic             |
| Repository | Handles database operations         |
| Routes     | Defines API endpoints               |
| Validation | Validates incoming requests         |

## 📜 Available Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
npm run format
```

## 🔒 Security

* JWT Authentication
* Access Token & Refresh Token strategy
* HttpOnly Cookies
* Password hashing with bcrypt
* Request validation using Zod
* Centralized error handling
* Environment variable protection

## 🌱 Scalability Benefits

* Easy to add new modules
* Clear separation of concerns
* Reusable services and utilities
* Maintainable codebase
* Suitable for startups and enterprise applications

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## 📄 License

Node.js Modular Starter is [MIT licensed](./LICENSE).
