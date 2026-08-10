<div align="center">
    <h1>Node.js Modular Starter</h1>
</div>

A scalable and production-ready Node.js starter template built with **TypeScript**, **Express.js**, **PostgreSQL**, and **Prisma ORM**. The project follows a modular architecture, clean code principles, and separation of concerns to help developers build maintainable and scalable backend applications.

## Features

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

## Tech Stack

* TypeScript
* Node.js
* Express.js
* PostgreSQL
* Prisma ORM

## Project Structure

```text
src/
├── config/
│   └── db.ts
│
├── middlewares/
│   └── validate.middleware.ts
│
├── modules/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.repository.ts
│   │   ├── auth.routes.ts
│   │   ├── auth.validation.ts
│   │   └── auth.middleware.ts
│   │
│   └── users/
│       ├── users.controller.ts
│       ├── users.service.ts
│       ├── users.repository.ts
│       ├── users.routes.ts
│       └── users.validation.ts
│
├── routes/v0
│   └── index.ts
│
├── services/
│   ├── token.service.ts
│   └── hash.service.ts
│
├── app.ts
└── server.ts

prisma/
├── models
└── prisma.config.ts
└── schema.prisma

scripts/
├── prisma-create-migration.ts
└── prisma-generate.ts
└── prisma-migrate-dev.ts
└── prisma-migrate.ts
```

## 📄 License

Node.js Modular Starter is [MIT licensed](./LICENSE).
