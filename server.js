"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const cookieParser = require('cookie-parser');
const knex = require('./db/knex');

const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Helper functions for database queries
const transactionHelpers = require('./lib/transactionHelpers')(knex);
const userHelpers = require('./lib/userHelpers')(knex);

// Import Routes
const transactionsRoutes = require('./routes/transactions');
const usersRoutes = require('./routes/users');

// API Routes
app.use('/api/transactions', transactionsRoutes(transactionHelpers));
app.use('/api/users', usersRoutes(userHelpers));

// Listening
app.listen(port, () => {
  console.log(`serving up on port: ${port}`)
});