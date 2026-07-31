const { createExpense } = require("../models/expense.model");
const expenseRepository = require("../repositories/expense.repository");

function addExpense(expenseData) {
    const expense = createExpense(expenseData);

    return expenseRepository.addExpense(expense);
}

function getExpenses(category) {

    if (category) {
        return expenseRepository.getExpensesByCategory(category);
    }

    return expenseRepository.getAllExpenses();
}

function getExpenseSummary(category) {

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

function deleteExpense(id) {
    return expenseRepository.deleteExpense(id);
}

module.exports = {
    addExpense,
    getExpenses,
    getExpenseSummary,
    deleteExpense
};