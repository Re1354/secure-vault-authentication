# 🚀 MERN Stack Authentication System

<div align="center">

![MERN](https://img.shields.io/badge/MERN-Stack-brightgreen?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge)

### 🔐 Secure | 🎨 Modern | ⚡ Fast

_A production-ready, scalable authentication system built with modern web
technologies, featuring JWT-based security, RESTful API architecture, and an
intuitive user interface._

</div>

---

## ✨ What Makes This Special?

🎯 **JWT-Based Authentication** - Industry-standard token security  
🔒 **BCrypt Encryption** - Military-grade password protection  
🎨 **Tailwind CSS** - Stunning, responsive design  
⚡ **Lightning Fast** - Vite-powered development  
📱 **Mobile Ready** - Works perfectly on all devices  
🛡️ **Session Management** - Secure user sessions with MongoDB

---

## 🎬 Quick Preview

```
Register → Login → Protected Dashboard → Secure Logout
```

**Features at a glance:**

- ✅ User Registration with validation
- ✅ Secure Login with JWT tokens
- ✅ Protected profile pages
- ✅ Beautiful gradient UI
- ✅ Fully responsive design
- ✅ Real-time form validation

---

## 🛠️ Built With

<table>
<tr>
<td>

**Frontend**

- ⚛️ React 18
- 🎨 Tailwind CSS
- ⚡ Vite
- 🧭 React Router

</td>
<td>

**Backend**

- 🟢 Node.js
- 🚂 Express.js
- 🔑 JWT
- 🔐 BCrypt

</td>
<td>

**Database**

- 🍃 MongoDB
- 📊 Mongoose
- 💾 Session Store

</td>
</tr>
</table>

---

## 🔐 Security Features

| Feature             | Implementation                |
| ------------------- | ----------------------------- |
| 🔒 Password Hashing | BCrypt with 10 salt rounds    |
| 🎫 Token Auth       | JWT with 24h expiry           |
| 🛡️ Protected Routes | Token verification middleware |
| 🔐 Session Security | MongoDB session store         |
| ✅ Input Validation | Client & server-side checks   |
| 🚫 CORS Protection  | Configured origin policies    |

---

### Frontend Architecture

```javascript
React v18.0+          // UI Library with Hooks
├── React Router v6   // Declarative Routing
├── Axios             // HTTP Client
├── Tailwind CSS      // Utility-first CSS Framework
└── Vite              // Next-gen Build Tool
```

### Backend Architecture

```javascript
Node.js v18+          // JavaScript Runtime
└── Express v4.18+    // Web Framework
    ├── MongoDB       // NoSQL Database
    ├── Mongoose      // ODM (Object Data Modeling)
    ├── JWT           // JSON Web Tokens
    ├── BCrypt        // Password Hashing
    ├── Express Session // Session Management
    └── CORS          // Cross-Origin Resource Sharing
```

## 🏗️ Architecture

### System Design

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   React UI   │──│ React Router │──│  Axios HTTP  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────┬───────────────────────────┘
                                  │
                           HTTPS/REST API
                                  │
┌─────────────────────────────────┴───────────────────────────┐
│                       Server Layer                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Express    │──│  JWT Verify  │──│   BCrypt     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────┬───────────────────────────┘
                                  │
                            MongoDB Protocol
                                  │
┌─────────────────────────────────┴───────────────────────────┐
│                      Database Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   MongoDB    │──│   Mongoose   │──│  User Model  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Project Structure

```
MongoPractice/
│
├── client/                          # Frontend Application
│   ├── src/
│   │   ├── components/              # React Components
│   │   │   ├── Navbar.jsx          # Navigation Component
│   │   │   ├── HomePage.jsx        # Landing Page
│   │   │   ├── LoginPage.jsx       # Login Form
│   │   │   ├── Registration.jsx    # Registration Form
│   │   │   ├── ProfilePage.jsx     # User Dashboard
│   │   │   └── LogOutPage.jsx      # Logout Handler
│   │   │
│   │   ├── routes/
│   │   │   └── index.js            # Route Configuration
│   │   │
│   │   ├── App.jsx                 # Root Component
│   │   ├── main.jsx                # Application Entry Point
│   │   └── index.css               # Global Styles
│   │
│   ├── public/                      # Static Assets
│   ├── package.json                 # Frontend Dependencies
│   ├── vite.config.js              # Vite Configuration
│   ├── postcss.config.js           # PostCSS Configuration
│   └── tailwind.config.js          # Tailwind Configuration
│
└── Mongo1/                          # Backend Application
    ├── models/
    │   └── user.model.js           # User Schema Definition
    │
    ├── routes/
    │   └── auth.js                 # Authentication Routes
    │
    ├── middleware/                  # Custom Middleware (future)
    ├── utils/                       # Utility Functions (future)
    ├── config/                      # Configuration Files (future)
    │
    ├── app.js                       # Express Application Setup
    ├── package.json                 # Backend Dependencies
    └── .env                         # Environment Variables
```

---

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 18+ | MongoDB | npm
```

### Installation (3 simple steps!)

**1️⃣ Clone the repo**

```bash
git clone https://github.com/Re1354/passport-mongo-auth.git
cd passport-mongo-auth
```

**2️⃣ Setup Backend**

```bash
cd Mongo1
npm install
# Create .env file with your MongoDB URI and secrets
npm start
```

**3️⃣ Setup Frontend**

```bash
cd client
npm install
npm run dev
```

**🎉 Done! Visit http://localhost:5174**

---

## 📡 API Endpoints

### Example Request

```javascript
// Register
POST /register
{
  "email": "user@example.com",
  "password": "secure123"
}

// Response
{
  "message": "Registration successful",
  "token": "eyJhbGc...",
  "user": { "id": "...", "email": "..." }
}
```

---

---

---

```bash
cd client
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Render)

```bash
cd Mongo1
# Set environment variables
npm start
```

### Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret
PORT=3000
```

---
