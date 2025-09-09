# 🌊 Sea Inside — Business Website

Welcome to the source code of **Sea Inside** — a modern business website for a sea-inspired brand. This is a full-stack application, fully built and deployed by a single developer.

🔗 **Live Site**: [https://www.sea-inside.co.il](https://www.sea-inside.co.il)

---

## 🚀 Project Overview

This project consists of a frontend application, a backend API server, and a MongoDB database. It was designed, developed, and deployed entirely by a single developer.

### 🖥️ Frontend

The frontend is built with:

- **React** – Component-based UI library for building dynamic interfaces.
- **TypeScript** – Strongly-typed superset of JavaScript.
- **JavaScript** – Used for various UI logics and DOM interactions.
- **CSS** – Custom styles and responsive layout for branding and design.

### 🛠️ Backend

The backend is built using:

- **Node.js** – JavaScript runtime environment for the server.
- **Express.js** – Lightweight and minimal web framework for building APIs.

### 🗄️ Database

- **MongoDB** – NoSQL cloud-based database (MongoDB Atlas) used to store form submissions, dynamic content, and other data.

---

## 📁 Project Structure

```
root/
├── client/              # Frontend (React)
│   ├── public/
│   └── src/
│       ├── components/  # Reusable UI components
│       ├── pages/       # Page views
│       ├── styles/      # Global and component styles
│       └── App.tsx      # App entry point
├── server/              # Backend (Node.js + Express)
│   ├── routes/          # API routes
│   ├── controllers/     # Route logic
│   └── index.js         # Server entry point
├── .env                 # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Getting Started (Local Development)

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sea-inside.git
cd sea-inside
```

### 2. Install dependencies

**Frontend:**

```bash
cd client
npm install
```

**Backend:**

```bash
cd ../server
npm install
```

### 3. Setup environment variables

Create a `.env` file inside the `server/` folder and add the following:

```env
MONGO_URI=your-mongodb-connection-string
PORT=5000
```

> Replace `your-mongodb-connection-string` with your actual MongoDB URI.

### 4. Run the backend server

```bash
npm run dev
```

### 5. Run the frontend app

Open a new terminal window:

```bash
cd client
npm start
```

The frontend will be running at:

```
http://localhost:3000
```

---

## ✨ Key Features

- Fully responsive and mobile-friendly design
- Smooth page navigation and transitions
- Functional contact forms
- Data persistence via MongoDB
- Modern UI components and layout
- Cross-browser compatibility
- Clean and maintainable codebase

---

## 📦 Production & Deployment

- Production build for frontend:

  ```bash
  npm run build
  ```

- The site is hosted and accessible at:  
  👉 [https://www.sea-inside.co.il](https://www.sea-inside.co.il)

- Backend is deployed on a Node.js-compatible server or cloud host
- MongoDB is hosted on **MongoDB Atlas**

---

## 👩‍💻 Developer Info

This project was fully built and deployed by a full-stack developer using the following stack:

- **Frontend**: React + TypeScript + CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB (NoSQL)
- **Deployment**: Live on a public domain

Version control is managed via Git. The project follows modular structure and scalable architecture.

---

## 📬 Contact

For questions, business inquiries or feedback, please use the contact form available on the website:

🔗 [https://www.sea-inside.co.il](https://www.sea-inside.co.il)

---
