const expenseService = require("../services/expense.service");

async function addExpense(req, res, next) {
    try {
        const expense = await expenseService.addExpense(req.body);

        return res.status(201).json({
            success: true,
            message: "Expense added successfully.",
            data: expense
        });

    } catch (error) {
        next(error);
    }
}

async function getExpenses(req, res, next) {

    try {

        const { category } = req.query;

        const expenses = await expenseService.getExpenses(category);

        return res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        });

    } catch (error) {
        next(error);
    }

}

async function getExpenseSummary(req, res, next) {

    try {

        const { category } = req.query;

        const summary = await expenseService.getExpenseSummary(category);

        return res.status(200).json({
            success: true,
            message: "Expense summary fetched successfully.",
            data: summary
        });

    } catch (error) {
        next(error);
    }

}

async function deleteExpense(req, res, next) {

    try {

        const deletedExpense =
    await expenseService.deleteExpense(req.params.id);

        res.status(200).json({
            success: true,
            message: "Expense deleted successfully.",
            data: deletedExpense
        });

    } catch (error) {

        next(error);

    }

}

module.exports = {
    addExpense,
    getExpenses,
    getExpenseSummary,
    deleteExpense
};