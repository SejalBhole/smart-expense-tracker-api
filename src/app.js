const express = require("express");
const errorHandler = require("./middlewares/error.middleware");

const expenseRoutes = require("./routes/expense.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Smart Expense Tracker API is running 🚀"
    });
});

app.use("/expenses", expenseRoutes);
app.use(errorHandler);

module.exports = app;