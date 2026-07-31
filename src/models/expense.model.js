const { v4: uuidv4 } = require("uuid");

/**
 * Creates a standardized Expense object.
 *
 * @param {Object} expenseData
 * @param {string} expenseData.title
 * @param {number} expenseData.amount
 * @param {string} expenseData.category
 * @param {string} expenseData.date
 * @returns {Object} Expense
 */
function createExpense(expenseData) {
    return {
        id: uuidv4(),
        title: expenseData.title.trim(),
        amount: Number(expenseData.amount),
        category: expenseData.category.trim(),
        date: new Date(expenseData.date)
    .toISOString()
    .split("T")[0]
    };
}

module.exports = {
    createExpense
};