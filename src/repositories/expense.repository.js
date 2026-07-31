const expenses = [];

/**
 * Save a new expense
 */
function addExpense(expense) {
    expenses.push(expense);
    return expense;
}

/**
 * Get all expenses
 */
function getAllExpenses() {
    return [...expenses];
}

/**
 * Find expenses by category
 */
function getExpensesByCategory(category) {
    return expenses.filter(
        expense => expense.category.toLowerCase() === category.toLowerCase()
    );
}

/**
 * Calculate total of all expenses
 */
function getTotalExpenses() {
    return expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );
}

/**
 * Calculate total by category
 */
function getTotalByCategory(category) {
    return expenses
        .filter(
            expense => expense.category.toLowerCase() === category.toLowerCase()
        )
        .reduce(
            (total, expense) => total + expense.amount,
            0
        );
}

/**
 * Delete expense by ID
 */
function deleteExpense(id) {

    const index = expenses.findIndex(
        expense => expense.id === id
    );

    if (index === -1) {
        return null;
    }

    return expenses.splice(index, 1)[0];
}

module.exports = {
    addExpense,
    getAllExpenses,
    getExpensesByCategory,
    getTotalExpenses,
    getTotalByCategory,
    deleteExpense
};