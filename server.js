const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
//const session = require('express-session'); 
const cors = require('cors');

app.use(cors());  // Allow all origins (for development purposes)

const app = express();
app.use(bodyParser.json());

const port = 5000;

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/expenses', require('./routes/expense'));
app.use('/transaction', require('./routes/transaction'));
app.use('/income', require('./routes/income'));
app.use('/budgets', require('./routes/budget'));
app.use('/reports', require('./routes/reports'));
app.use('/users', require('./routes/user'));

const corsOptions = {
    origin: 'http://localhost:3000',  // Your frontend URL
  };
  
  app.use(cors(corsOptions));
  
// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
