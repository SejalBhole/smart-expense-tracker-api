const { createExpense } = require("../models/expense.model");
const expenseRepository = require("../repositories/expense.repository");
const AppError = require("../utils/AppError");
async function addExpense(expenseData) {
    const expense = createExpense(expenseData);

    return expenseRepository.addExpense(expense);
}

async function getExpenses(category) {

    if (category) {
        return expenseRepository.getExpensesByCategory(category);
    }

    return expenseRepository.getAllExpenses();
}

async function getExpenseSummary(category) {

    if (category) {
        return {
            category,
            total: expenseRepository.getTotalByCategory(category)
        };
    }

    return {
        total: expenseRepository.getTotalExpenses()
    };
}

async function deleteExpense(id) {

    const deletedExpense = expenseRepository.deleteExpense(id);

    if (!deletedExpense) {
        throw new AppError("Expense not found.", 404);
    }

    return deletedExpense;
}

module.exports = {
    addExpense,
    getExpenses,
    getExpenseSummary,
    deleteExpense
};