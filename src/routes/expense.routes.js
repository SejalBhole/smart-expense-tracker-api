const express = require("express");

const router = express.Router();

const expenseController = require("../controllers/expense.controller");
const { validateExpense } = require("../validators/expense.validator");
const validateRequest = require("../middlewares/validation.middleware");

router.post(
    "/",
    validateExpense,
    validateRequest,
    expenseController.addExpense
);

router.get("/", expenseController.getExpenses);

router.get("/summary", expenseController.getExpenseSummary);

router.delete("/:id", expenseController.deleteExpense);

module.exports = router;