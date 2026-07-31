const { body } = require("express-validator");
const { EXPENSE_CATEGORIES } = require("../config/constants");

const validateExpense = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required.")
        .isLength({ min: 3, max: 100 })
        .withMessage("Title must be between 3 and 100 characters."),

    body("amount")
        .notEmpty()
        .withMessage("Amount is required.")
        .isFloat({ gt: 0 })
        .withMessage("Amount must be greater than 0."),

    body("category")
        .notEmpty()
        .withMessage("Category is required.")
        .isIn(EXPENSE_CATEGORIES)
        .withMessage("Invalid category."),

    body("date")
        .notEmpty()
        .withMessage("Date is required.")
        .isISO8601()
        .withMessage("Date must be in YYYY-MM-DD format.")
];

module.exports = {
    validateExpense
};