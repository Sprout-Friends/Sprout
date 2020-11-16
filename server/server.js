const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// const plantsRouter = require('./routes/plantsRoutes');
// const usersRouter = require('./routes/usersRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// SET UP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// PLANT ROUTES
// app.use('/plants', plantsRouter);

// USER ROUTES
// app.use('/users', usersRouter);

// REGULAR ROUTES
app.get('/', (req, res) => res.send('Hello World'));
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

console.log('Remember to check your .env file if you cannot connect to the database');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
