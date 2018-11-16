const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Importing Routes
const transactionsRoutes = require('./routes/transactions');

// Routes
app.use('/api/transactions', transactionsRoutes);

// Listening
app.listen(port, () => {
  console.log(`serving up on port: ${port}`)
});