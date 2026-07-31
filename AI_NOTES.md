# AI_NOTES.md

## AI Tool Used

- ChatGPT (OpenAI)

---

# 1. Which parts of the code were AI-generated vs. written by me

AI was used as a development assistant throughout the assignment to help with implementation ideas, code reviews, and best practices.

AI assisted with:

- Initial project structure
- Layered architecture suggestions
- Express.js route organization
- Validation using Express Validator
- Swagger/OpenAPI configuration
- Writing Jest and Supertest test cases
- README structure
- General code review and refactoring suggestions

I implemented the project locally, integrated the generated code, resolved integration issues, tested every endpoint, and modified code where necessary to fit the assignment requirements.

---

# 2. What I validated, tested, or changed in the AI's output, and why

I did not use AI-generated code without verification.

Examples include:

### UUID Package

The initial implementation used the latest UUID package, which caused an ES Module compatibility error with CommonJS.

I resolved this by using a compatible version of the package and verified that unique IDs were generated correctly.

---

### Controller Refactoring

During implementation, some controller methods required asynchronous handling after service methods were updated.

I updated the controllers to use async/await consistently and verified all endpoints through Postman and automated tests.

---

### Response Structure

I modified the API responses to improve consistency by:

- Adding success flags
- Returning appropriate HTTP status codes
- Including count for collection endpoints
- Returning descriptive success messages

---

### Repository Improvements

I updated the repository implementation to protect internal data by returning copies of collections where appropriate instead of exposing the original array.

---

### Testing

All endpoints were manually verified using Postman.

Additionally, I created automated API tests using Jest and Supertest and ensured the repository state is reset before each test for reliable execution.

---

# 3. AI suggestions I decided not to use, and why

Some AI suggestions were intentionally not adopted.

### Database Integration

AI suggested designing the project around a database-ready architecture.

I chose to keep an in-memory repository because the assignment explicitly states that a database is not required.

---

### Additional Features

AI suggested implementing additional functionality such as search endpoints and more advanced analytics.

I chose not to include these because the assignment requested implementing at most one bonus feature.

Instead, I selected Swagger/OpenAPI documentation.

---

### Overengineering

Some suggestions added unnecessary complexity for a take-home assignment.

I kept the implementation focused on readability, maintainability, and the assignment requirements instead of introducing additional abstractions that were not required.

---

# Reflection

AI accelerated development by providing explanations, implementation guidance, and code review suggestions.

However, every feature was implemented, integrated, debugged, and verified locally before being included in the final project.

The final implementation reflects my understanding of the code, the assignment requirements, and the design decisions made during development.