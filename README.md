# Hackathon Project 
🏥 Healthcare Wellness & Preventive Care Portal

A full-stack healthcare web application that enables patients to track wellness activities and healthcare providers to monitor patient compliance.
Built using React (Vite), Node.js, Express, and MongoDB, with a focus on security, role-based access, and healthcare compliance principles.

📌 Features
👤 Patient

Secure login & authentication

Wellness tracking (steps, sleep, water intake)

Preventive care reminders

Profile management

Personalized dashboard

🧑‍⚕️ Healthcare Provider

Secure provider login

Provider dashboard

View patient wellness data

Monitor compliance

🔐 Security & Compliance

JWT-based authentication

HTTP-only cookies

Role-based access control

CORS-secured API

HIPAA-aware design principles

🏗️ Tech Stack
Frontend

React (Vite)

React Router

Axios

Tailwind CSS

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

bcrypt (password hashing)

DevOps & Tools

GitHub Actions (CI)

dotenv (environment variables)

MongoDB Compass / Atlas

📂 Project Structure
healthcare-portal/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── docs/
│   ├── api-spec.md
│   ├── architecture.md
│   └── security.md
│
├── .github/workflows/
│   └── ci.yml
│
└── README.md

⚙️ Environment Variables
Frontend (frontend/.env)
VITE_API_BASE_URL=http://localhost:8000

Backend (backend/.env)
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/healthcare
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5173

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/healthcare-portal.git
cd healthcare-portal

2️⃣ Start Backend
cd backend
npm install
npm run dev


Backend will run on:

http://localhost:8000


Health check:

http://localhost:8000/health

3️⃣ Start Frontend
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173

🔐 Login API Example
Request
{
  "email": "binit006@gmail.com",
  "password": "Password123",
  "role": "patient"
}

Response
{
  "success": true,
  "data": {
    "user": {
      "id": "userId",
      "email": "binit006@gmail.com",
      "role": "patient"
    }
  }
}

🧪 Demo Credentials (For Testing Only)

⚠️ Demo purpose only — never use in production

Email: binit006@gmail.com

Password: Password123

Role: patient

🧠 System Design Highlights

MVC architecture on backend

Context API for auth state

Role-based routing

Separation of concerns

Secure cookie handling

Scalable API structure

🧾 Documentation

📘 docs/api-spec.md – API endpoints

🏗️ docs/architecture.md – System architecture

🔐 docs/security.md – Security & compliance notes

🧪 CI/CD

GitHub Actions pipeline:

Installs frontend & backend dependencies

Ensures build integrity on every push

⚠️ Security Notes

Passwords are hashed using bcrypt

JWT tokens stored in HTTP-only cookies

CORS restricted to frontend origin

Role validation handled on backend

📌 Future Enhancements

Refresh token support

Appointment scheduling

Notifications

Analytics dashboard

Cloud deployment (AWS / Azure)
