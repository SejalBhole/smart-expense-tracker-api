const express = require("express");

const router = express.Router();

const expenseController = require("../controllers/expense.controller");

router.post("/", expenseController.addExpense);

router.get("/", expenseController.getExpenses);

router.get("/summary", expenseController.getExpenseSummary);

router.delete("/:id", expenseController.deleteExpense);

module.exports = router;