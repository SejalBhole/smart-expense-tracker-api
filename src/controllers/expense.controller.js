const expenseService = require("../services/expense.service");

function addExpense(req, res) {
    const expense = expenseService.addExpense(req.body);

    return res.status(201).json({
        success: true,
        message: "Expense added successfully.",
        data: expense
    });
}

function getExpenses(req, res) {
    const { category } = req.query;

    const expenses = expenseService.getExpenses(category);

    return res.status(200).json({
        success: true,
        data: expenses
    });
}

function getExpenseSummary(req, res) {
    const { category } = req.query;

    const summary = expenseService.getExpenseSummary(category);

    return res.status(200).json({
        success: true,
        data: summary
    });
}

function deleteExpense(req, res) {
    const deletedExpense = expenseService.deleteExpense(req.params.id);

    if (!deletedExpense) {
        return res.status(404).json({
            success: false,
            message: "Expense not found."
        });
    }

    return res.status(200).json({
        success: true,
        message: "Expense deleted successfully.",
        data: deletedExpense
    });
}

module.exports = {
    addExpense,
    getExpenses,
    getExpenseSummary,
    deleteExpense
};