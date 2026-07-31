const express = require("express");

const router = express.Router();

const expenseController = require("../controllers/expense.controller");
const { validateExpense } = require("../validators/expense.validator");
const validateRequest = require("../middlewares/validation.middleware");

/**
 * @swagger
 * /expenses:
 *   post:
 *     summary: Add a new expense
 *     tags:
 *       - Expenses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - amount
 *               - category
 *               - date
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Expense created successfully
 */

router.post(
    "/",
    validateExpense,
    validateRequest,
    expenseController.addExpense
);

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Get all expenses
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter expenses by category
 *     responses:
 *       200:
 *         description: List of expenses
 */

router.get("/", expenseController.getExpenses);

/**
 * @swagger
 * /expenses/summary:
 *   get:
 *     summary: Get expense summary
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *         description: Get total for a category
 *     responses:
 *       200:
 *         description: Expense summary
 */

router.get("/summary", expenseController.getExpenseSummary);


/**
 * @swagger
 * /expenses/{id}:
 *   delete:
 *     summary: Delete an expense
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Expense deleted successfully
 *       404:
 *         description: Expense not found
 */
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;