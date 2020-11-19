require('dotenv').config('../.env');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const plantsRoutes = require('./routes/plantsRoutes');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// SET UP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// PLANT ROUTES
app.use('/plants', plantsRoutes);

// USER ROUTES
app.use('/users', usersRoutes);

// REGULAR ROUTES
app.get('/', (req, res) => res.status(200).send('../index.html'));
app.use(express.static('public'));

// ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error: Unknown middleware',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, err };

  console.log('ERROR LOG => ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

console.log(
  'Remember to check your .env file if you cannot connect to the database'
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
