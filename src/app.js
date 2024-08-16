const express = require('express');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);

module.exports = app;