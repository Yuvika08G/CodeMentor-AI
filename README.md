# 🚀 CodeMentor AI

An AI-Powered Coding Practice Assistant that helps students write, execute, debug, and improve code in real-time.

CodeMentor AI combines a professional code editor, cloud-based code execution, and AI-powered code review to provide instant feedback and mentorship for programming students.

---

# 📌 Project Overview

Learning programming can be difficult for beginners because compiler errors often do not explain the root cause of problems. Students spend significant time searching for solutions, understanding errors, and optimizing code.

CodeMentor AI bridges this gap by providing:

* Interactive code editing
* Real-time code execution
* AI-powered code analysis
* Bug detection
* Optimization suggestions
* Complexity analysis
* Learning-oriented hints

The platform acts as a virtual coding mentor that helps students learn faster and write better code.

---

# 🎯 Problem Statement

Students frequently struggle with:

* Syntax errors
* Logical bugs
* Runtime errors
* Understanding compiler messages
* Writing optimized solutions
* Estimating time complexity
* Getting immediate feedback

Traditional online compilers only execute code and display errors.

CodeMentor AI not only runs code but also explains mistakes, suggests improvements, and guides students toward better solutions.

---

# ✨ Features

## 📝 Smart Code Editor

* Monaco Editor (VS Code Editor)
* Syntax Highlighting
* Auto Indentation
* Code Formatting Support
* Dark Mode / Light Mode
* Professional Coding Environment

---

## ▶️ Online Code Execution

Users can execute code directly from the browser.

Powered by:

* JDoodle API

Features:

* Compile Code
* Execute Code
* Runtime Output
* Compiler Error Display
* Terminal View

Supported Languages:

* C++
* C
* Java
* Python

---

## 🤖 AI Code Analysis

Powered by:

* Groq API

The AI reviews code and provides:

### 🐞 Bug Detection

Detects:

* Infinite loops
* Common syntax issues
* Logical mistakes
* Potential runtime issues

---

### 💡 Learning Hints

Provides hints that guide students toward the solution rather than directly giving answers.

---

### ⚡ Optimization Suggestions

Suggests:

* Better coding practices
* Cleaner code structure
* More efficient approaches
* Improved readability

---

### 📊 Complexity Analysis

Estimates:

* Time Complexity
* Space Complexity

Examples:

* O(1)
* O(log n)
* O(n)
* O(n²)

---

## 🎨 Modern User Interface

Features:

* Responsive Design
* Interactive Dashboard
* Gradient UI
* Dark / Light Theme Toggle
* Professional Layout

---

# 🏗 System Architecture

User
↓
React Frontend
↓
Node.js + Express Backend
↓
├── Groq API
│
│ ├── Bug Detection
│ ├── Hint Generation
│ ├── Suggestions
│ └── Complexity Analysis
│
└── JDoodle API
│
├── Code Compilation
├── Code Execution
├── Runtime Output
└── Compiler Errors
↓
Frontend UI Update

---

# ⚙️ Tech Stack

## Frontend

* React.js
* JavaScript 
* Tailwind CSS
* Axios
* Monaco Editor

---

## Backend

* Node.js
* Express.js
* REST APIs
* Axios
* CORS

---

## AI Services

### Groq API

Used for:

* Code Review
* Bug Detection
* Complexity Analysis
* Learning Hints
* Optimization Suggestions

---

## Code Execution Service

### JDoodle API

Used for:

* Code Compilation
* Code Execution
* Runtime Output
* Error Handling

---

## Deployment

### Frontend

* Vercel

### Backend

* Render

---

# 📂 Project Structure

.
├── backend
│
├── server.js
├── routes
├── controllers
├── services
├── package.json
│
├── frontend
│
├── public
├── src
│ ├── components
│ ├── App.js
│ ├── App.css
│ └── assets
│
├── package.json
│
└── README.md

---

# 🔄 Request Flow

## Analyze Code

Example Input:

```cpp
while(true)
{
}
```

### Step 1

User writes code inside Monaco Editor.

### Step 2

Frontend sends request to backend.

POST /analyze

```json
{
  "code": "while(true){}"
}
```

### Step 3

Backend receives code.

### Step 4

Backend creates AI prompt.

### Step 5

Prompt sent to Groq API.

### Step 6

Groq analyzes code.

### Step 7

Groq returns:

```json
{
  "bug":"Infinite loop detected",
  "hint":"Loop has no exit condition",
  "suggestion":"Add break condition",
  "complexity":"O(∞)"
}
```

### Step 8

Backend sends response to frontend.

### Step 9

Frontend updates AI Assistant panel.

Displayed Results:

* Bug
* Hint
* Suggestion
* Complexity

---

## Run Code

### Step 1

User writes code.

### Step 2

User clicks Run Code.

### Step 3

Frontend sends request.

POST /run

```json
{
  "code":"..."
}
```

### Step 4

Backend forwards code to JDoodle API.

### Step 5

JDoodle compiles code.

### Step 6

JDoodle executes code.

### Step 7

Output returned to backend.

### Step 8

Backend sends output to frontend.

### Step 9

Output displayed in terminal window.

---

# 📡 API Endpoints

## Analyze Code

POST /analyze

Request:

```json
{
  "code":"..."
}
```

Response:

```json
{
  "bug":"...",
  "hint":"...",
  "suggestion":"...",
  "complexity":"..."
}
```

---

## Run Code

POST /run

Request:

```json
{
  "code":"..."
}
```

Response:

```json
{
  "output":"..."
}
```

---

# 💻 Local Setup

## Clone Repository

```bash
git clone <repository-url>
cd code-mentor-ai
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## Environment Variables

Create a .env file inside backend:

```env
GROQ_API_KEY=your_groq_api_key

JDOODLE_CLIENT_ID=your_client_id

JDOODLE_CLIENT_SECRET=your_client_secret

PORT=5000
```

---

## Start Backend

```bash
cd backend

node server.js
```

Backend:

```text
http://localhost:5000
```

---

## Start Frontend

```bash
cd frontend

npm start
```

Frontend:

```text
http://localhost:3000
```

---

# ☁️ Deployment

## Backend Deployment (Render)

Build Command:

```bash
npm install
```

Start Command:

```bash
node server.js
```

Add Environment Variables:

```env
GROQ_API_KEY
JDOODLE_CLIENT_ID
JDOODLE_CLIENT_SECRET
```

---

## Frontend Deployment (Vercel)

Build Command:

```bash
npm run build
```

Output Directory:

```text
build
```

Add Environment Variable:

```env
REACT_APP_API_URL=https://your-render-backend-url
```

---

# 🔐 Security Features

* API Keys stored in environment variables
* CORS enabled
* Backend API abstraction
* Sensitive credentials hidden from frontend
* Secure cloud execution through JDoodle

---

# 🚀 Future Enhancements

* User Authentication
* Coding History
* Saved Projects
* AI Chat Assistant
* Multi-Language Support
* Custom Test Cases
* Performance Analytics Dashboard

---

# 🎓 Educational Impact

CodeMentor AI helps students:

* Learn programming independently
* Understand coding mistakes faster
* Improve debugging skills
* Write optimized solutions
* Reduce learning time
* Receive instant AI mentorship

The platform acts as an intelligent coding companion that combines code execution and personalized AI guidance in a single interface.

