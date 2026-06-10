# 🍿 PopcornHub

A full-stack web application for discovering and exploring movies, built with JavaScript.

---

## 📁 Project Structure

```
popcornhub/
├── backend/        # Node.js/Express REST API
├── frontend/       # React/JS client application
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### 🔧 Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file and configure environment variables
cp .env.example .env

# Start the development server
npm run dev
```

> The backend server will start on `http://localhost:5000` (or your configured port).

---

### 💻 Frontend Setup

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

> The frontend app will be available at `http://localhost:3000`.

---

## ⚙️ Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

> Update these values according to your local setup.

---

## 🛠️ Tech Stack

| Layer     | Technology                      |
|-----------|---------------------------------|
| Frontend  | JavaScript, React, CSS, HTML    |
| Backend   | Node.js, Express.js             |
| Database  | MongoDB                         |
| Auth      | JWT (JSON Web Tokens)           |

---

## ✨ Features

- Browse and discover movies
- Search movies by title, genre, or category
- View detailed movie information
- User authentication (register & login)
- Responsive UI for desktop and mobile

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use and modify it.

---

## 👤 Author

**Vishal** — [@Vishal987472](https://github.com/Vishal987472)
