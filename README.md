# 🍿 PopcornHub

A full-stack **Movie Discovery & Streaming Hub** web application built using **Node.js**, **Express**, **MongoDB**, **React**, and **JWT Authentication**.

This project is designed to manage and deliver movie experiences digitally including:
- movie browsing & discovery,
- user management & authentication,
- watchlist & favorites management,
- review & rating system,
- secure REST APIs,
- and role-based access control.

The backend follows modern full-stack architecture and production-ready practices.

---

# 🚀 Features

## 🔐 Authentication & Authorization
- JWT-based authentication
- Role-Based Access Control (RBAC)
- BCrypt password encryption
- Stateless authentication
- Protected API routes

---

## 🎬 Movie Management
- Browse all movies
- Search movies by title, genre, or keyword
- View detailed movie information
- Filter by category / genre
- Trending & top-rated movies

---

## 👤 User Management
- User registration & login
- Update profile
- Manage watchlist
- View watch history
- User roles (Admin / User)

---

## ⭐ Reviews & Ratings
- Add movie reviews
- Rate movies
- View all reviews per movie
- Delete / update own reviews

---

## 📋 Watchlist Management
- Add movies to watchlist
- Remove from watchlist
- View personal watchlist

---

## 🛡️ Security Features
- JWT token authentication
- Protected APIs
- Role-based authorization
- Password hashing using BCrypt
- Input validation & sanitization

---

# 🛠️ Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Frontend    | React.js, CSS, HTML           |
| Backend     | Node.js, Express.js           |
| Database    | MongoDB                       |
| ORM         | Mongoose                      |
| Security    | JWT + BCrypt                  |
| Validation  | Express Validator             |
| Build Tool  | npm                           |
| API Testing | Postman                       |
| Language    | JavaScript (ES6+)             |

---

# 🏗️ Backend Architecture

```text
backend/
│
├── config/              # DB and app configuration
├── controllers/         # Route handler logic
├── dto/                 # Data Transfer Objects
├── middleware/          # Auth & error middleware
├── models/              # Mongoose schemas/entities
├── routes/              # Express route definitions
├── services/            # Business logic layer
├── utils/               # Helper functions
├── validators/          # Input validation rules
└── server.js            # App entry point
```

---

# 🖥️ Frontend Architecture

```text
frontend/
│
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, fonts
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context (global state)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page-level components
│   ├── services/        # API call functions (Axios)
│   ├── utils/           # Helper utilities
│   ├── App.js           # Root component
│   └── index.js         # Entry point
└── package.json
```

---

# 📦 Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

---

## 🔧 Backend Setup

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Start the development server
npm run dev
```

> Server runs at `http://localhost:5000`

---

## 💻 Frontend Setup

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

> App runs at `http://localhost:3000`

---

# ⚙️ Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

# (Optional) External Movie API
MOVIE_API_KEY=your_tmdb_or_omdb_api_key
MOVIE_API_URL=https://api.themoviedb.org/3
```

---

# 🔌 API Endpoints

## Auth Routes — `/api/auth`

| Method | Endpoint              | Description          | Access  |
|--------|-----------------------|----------------------|---------|
| POST   | `/api/auth/register`  | Register new user    | Public  |
| POST   | `/api/auth/login`     | Login user           | Public  |
| GET    | `/api/auth/me`        | Get current user     | Private |
| POST   | `/api/auth/logout`    | Logout user          | Private |

## Movie Routes — `/api/movies`

| Method | Endpoint                  | Description            | Access  |
|--------|---------------------------|------------------------|---------|
| GET    | `/api/movies`             | Get all movies         | Public  |
| GET    | `/api/movies/:id`         | Get movie by ID        | Public  |
| GET    | `/api/movies/search`      | Search movies          | Public  |
| POST   | `/api/movies`             | Add new movie          | Admin   |
| PUT    | `/api/movies/:id`         | Update movie           | Admin   |
| DELETE | `/api/movies/:id`         | Delete movie           | Admin   |

## User Routes — `/api/users`

| Method | Endpoint                      | Description            | Access  |
|--------|-------------------------------|------------------------|---------|
| GET    | `/api/users/profile`          | Get user profile       | Private |
| PUT    | `/api/users/profile`          | Update profile         | Private |
| GET    | `/api/users/watchlist`        | Get watchlist          | Private |
| POST   | `/api/users/watchlist/:id`    | Add to watchlist       | Private |
| DELETE | `/api/users/watchlist/:id`    | Remove from watchlist  | Private |

## Review Routes — `/api/reviews`

| Method | Endpoint                  | Description            | Access  |
|--------|---------------------------|------------------------|---------|
| GET    | `/api/reviews/:movieId`   | Get reviews for movie  | Public  |
| POST   | `/api/reviews/:movieId`   | Add review             | Private |
| PUT    | `/api/reviews/:id`        | Update review          | Private |
| DELETE | `/api/reviews/:id`        | Delete review          | Private |

---

# 🗃️ Database Schema Overview

### User
```
_id, name, email, password, role, watchlist[], createdAt
```

### Movie
```
_id, title, description, genre[], releaseYear, rating, poster, createdAt
```

### Review
```
_id, userId, movieId, rating, comment, createdAt
```

---

# 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

# 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

# 👤 Author

**Vishal** — [@Vishal987472](https://github.com/Vishal987472)

---

> ⭐ If you found this project helpful, please consider giving it a star!
