const request = require("supertest");
const app = require("../src/app");
const expenseRepository = require("../src/repositories/expense.repository");

describe("Expense API", () => {

    beforeEach(() => {
        expenseRepository.clearExpenses();
    });

    describe("GET /", () => {

        test("should return API status", async () => {

            const response = await request(app).get("/");

            expect(response.statusCode).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.message).toBe(
                "Smart Expense Tracker API is running 🚀"
            );

        });

    });

    describe("POST /expenses", () => {

        test("should create a new expense", async () => {

            const response = await request(app)
                .post("/expenses")
                .send({
                    title: "Coffee",
                    amount: 250,
                    category: "Food",
                    date: "2026-07-31"
                });

            expect(response.statusCode).toBe(201);
            expect(response.body.success).toBe(true);
            expect(response.body.message).toBe("Expense added successfully.");

            expect(response.body.data.id).toBeDefined();
            expect(response.body.data.title).toBe("Coffee");
            expect(response.body.data.amount).toBe(250);
            expect(response.body.data.category).toBe("Food");
            expect(response.body.data.date).toBe("2026-07-31");

        });

        test("should reject invalid expense data", async () => {

            const response = await request(app)
                .post("/expenses")
                .send({
                    title: "",
                    amount: -100,
                    category: "ABC",
                    date: "today"
                });

            expect(response.statusCode).toBe(400);
            expect(response.body.success).toBe(false);
            expect(response.body.message).toBe("Validation failed.");
            expect(response.body.errors).toBeDefined();

        });

    });

    describe("GET /expenses", () => {

        test("should return an empty array initially", async () => {

            const response = await request(app)
                .get("/expenses");

            expect(response.statusCode).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.count).toBe(0);
            expect(response.body.data).toEqual([]);

        });

        test("should return all expenses", async () => {

            await request(app)
                .post("/expenses")
                .send({
                    title: "Coffee",
                    amount: 250,
                    category: "Food",
                    date: "2026-07-31"
                });

            const response = await request(app)
                .get("/expenses");

            expect(response.statusCode).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.count).toBe(1);
            expect(Array.isArray(response.body.data)).toBe(true);

        });

        test("should filter expenses by category", async () => {

            await request(app)
                .post("/expenses")
                .send({
                    title: "Coffee",
                    amount: 250,
                    category: "Food",
                    date: "2026-07-31"
                });

            await request(app)
                .post("/expenses")
                .send({
                    title: "Bus",
                    amount: 100,
                    category: "Travel",
                    date: "2026-07-31"
                });

            const response = await request(app)
                .get("/expenses?category=Food");

            expect(response.statusCode).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.count).toBe(1);
            expect(response.body.data[0].category).toBe("Food");

        });

    });

    describe("GET /expenses/summary", () => {

        test("should return total expense summary", async () => {

            await request(app)
                .post("/expenses")
                .send({
                    title: "Coffee",
                    amount: 250,
                    category: "Food",
                    date: "2026-07-31"
                });

            await request(app)
                .post("/expenses")
                .send({
                    title: "Movie",
                    amount: 500,
                    category: "Entertainment",
                    date: "2026-07-31"
                });

            const response = await request(app)
                .get("/expenses/summary");

            expect(response.statusCode).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data.total).toBe(750);

        });

        test("should return category-wise summary", async () => {

            await request(app)
                .post("/expenses")
                .send({
                    title: "Coffee",
                    amount: 250,
                    category: "Food",
                    date: "2026-07-31"
                });

            await request(app)
                .post("/expenses")
                .send({
                    title: "Burger",
                    amount: 150,
                    category: "Food",
                    date: "2026-07-31"
                });

            const response = await request(app)
                .get("/expenses/summary?category=Food");

            expect(response.statusCode).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data.category).toBe("Food");
            expect(response.body.data.total).toBe(400);

        });

    });

    describe("DELETE /expenses/:id", () => {

        test("should delete an existing expense", async () => {

            const created = await request(app)
                .post("/expenses")
                .send({
                    title: "Coffee",
                    amount: 250,
                    category: "Food",
                    date: "2026-07-31"
                });

            const id = created.body.data.id;

            const deleted = await request(app)
                .delete(`/expenses/${id}`);

            expect(deleted.statusCode).toBe(200);
            expect(deleted.body.success).toBe(true);

            const allExpenses = await request(app)
                .get("/expenses");

            expect(allExpenses.body.count).toBe(0);

        });

        test("should return 404 for non-existing expense", async () => {

            const response = await request(app)
                .delete("/expenses/invalid-id");

            expect(response.statusCode).toBe(404);
            expect(response.body.success).toBe(false);
            expect(response.body.message).toBe("Expense not found.");

        });

    });

});