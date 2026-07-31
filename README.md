# Smart Expense Tracker API

A RESTful Expense Tracker API built using **Node.js** and **Express.js** for the **Diligent Software Engineering Apprenticeship 2026 Take-Home Assignment**.

## Features

- Add a new expense
- View all expenses
- Filter expenses by category
- Calculate total expenses
- Calculate total expenses by category
- Delete an expense
- Input validation using Express Validator
- Centralized error handling
- OpenAPI (Swagger) documentation
- Automated tests using Jest and Supertest

---

## Tech Stack

- Node.js
- Express.js
- JavaScript
- Express Validator
- UUID
- Swagger (OpenAPI)
- Jest
- Supertest

---

## Project Structure

```
your-repo/
│
├── README.md
├── AI_NOTES.md
├── package.json
├── package-lock.json
├── .gitignore
│
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── validators/
│
└── tests/
    └── expense.test.js
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project directory

```bash
cd <repository-folder>
```

Install dependencies

```bash
npm install
```

---

# Run the Server

Development mode

```bash
npm run dev
```

or

```bash
npm start
```

Server runs on

```
http://localhost:3000
```

---

# Run Tests

```bash
npm test
```

---

# API Documentation

Swagger UI

```
http://localhost:3000/api-docs
```

---

# API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health Check |
| POST | /expenses | Add Expense |
| GET | /expenses | View All Expenses |
| GET | /expenses?category=Food | Filter by Category |
| GET | /expenses/summary | Overall Expense Summary |
| GET | /expenses/summary?category=Food | Category Summary |
| DELETE | /expenses/:id | Delete Expense |

---

# Bonus Feature Implemented

**OpenAPI (Swagger) Documentation**

Interactive API documentation is available through Swagger UI.

---

# Testing

Automated API tests have been written using:

- Jest
- Supertest

The tests cover:

- API health check
- Expense creation
- Validation failures
- View expenses
- Category filtering
- Expense summary
- Category summary
- Delete expense
- Delete invalid expense

---

# Assumptions

- Data is stored in memory as per the assignment instructions.
- Expense IDs are generated automatically using UUID.
- Data will reset whenever the server restarts.

---

# Author

Sejal Bhole