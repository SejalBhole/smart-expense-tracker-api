# Smart Expense Tracker API

A RESTful Expense Tracker API built using **Node.js** and **Express.js** as part of the **Diligent Software Engineering Apprenticeship Assignment**.

## Features

- Add a new expense
- Retrieve all expenses
- Filter expenses by category
- Get total expense summary
- Get category-wise expense summary
- Delete an expense
- Request validation
- Centralized error handling
- Swagger API documentation
- Automated testing with Jest & Supertest

---

## Tech Stack

- Node.js
- Express.js
- JavaScript
- Express Validator
- Swagger (OpenAPI)
- Jest
- Supertest

---

## Project Structure

```
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── validators/
├── app.js
└── server.js

tests/
README.md
AI_NOTES.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run the server

```bash
npm run dev
```

Server runs on

```
http://localhost:3000
```

---

## Swagger Documentation

```
http://localhost:3000/api-docs
```

---

## Running Tests

```bash
npm test
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health Check |
| POST | /expenses | Add Expense |
| GET | /expenses | Get All Expenses |
| GET | /expenses?category=Food | Filter by Category |
| GET | /expenses/summary | Total Summary |
| GET | /expenses/summary?category=Food | Category Summary |
| DELETE | /expenses/:id | Delete Expense |

---

## Bonus Feature

OpenAPI / Swagger Documentation

---

## Author

Sejal Bhole