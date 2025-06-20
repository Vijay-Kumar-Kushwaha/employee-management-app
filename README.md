# 🧑‍💼 Employee Management App

A full-stack employee management application built with:

- **Backend**: Java Spring Boot (IntelliJ IDEA)
- **Frontend**: React.js (VS Code)

---

## 📁 Project Structure

employee-management-app/
├── ems-backend/ # Spring Boot backend project
└── ems-frontend/ # React.js frontend project

---

## ⚙️ How to Run the Project

### ▶️ Backend Setup (Spring Boot)

1. Open `ems-backend` folder in **IntelliJ IDEA**.
2. Make sure you have **Java 17+** and **Maven** installed.
3. Update the database config in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ems
   spring.datasource.username=root
   spring.datasource.password=yourpassword

Start MySQL and create a database:
CREATE DATABASE ems;
Run the application:

Right-click EmsBackendApplication.java > Run

It will start at:
http://localhost:8080/api/employees

💻 Frontend Setup (React)
Open ems-frontend in VS Code.

Make sure Node.js is installed.

Install dependencies:
npm install
Start the React app:

npm start
It will start at:
http://localhost:3000

📝 Features
Add new employee

List all employees

Form validation

Email uniqueness handled at backend

📦 Tech Stack
Java 17
Spring Boot
MySQL
React.js
Axios
Bootstrap

📌 Notes
Make sure both backend and frontend are running.

CORS config might be required if backend and frontend are on different ports.

You can improve validation by handling it on both client and server.

🧑‍💻 Author
Vijay Kumar Kushwaha
📧 [vijay77495@gmail.com]
🔗 GitHub: @Vijay-Kumar-Kushwaha
