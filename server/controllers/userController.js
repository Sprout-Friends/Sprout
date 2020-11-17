const axios = require('axios');
const db = require('../models/plantModels.js');

const userController = {};

// SESSIONS
userController.checkIfSessionActive = async (req, res, next) => {
  const { sessionId } = req.cookies;
  // check for active sessionID in session table
  const query = 'SELECT * FROM session WHERE _id=$1';
  db.query(query, [sessionId])
    .then((data) => {
      res.locals.userId = data.rows;
      console.log(`checkIfSessionActive SQL result: ${data.rows}`);
      if (rows in data) return next();
      // return to homepage if no session is active
      return res.redirect('/signin');
    })
    .catch((err) => next({
      log: 'Could not get session from DB. Check query syntax.',
      message: { error: err },
    }));
};

userController.createSession = async (req, res, next) => {
  const { userId } = res.locals;
  const query = 'INSERT INTO session(user_id) VALUES ($1)';

  db.query(query, [userId])
    .then((data) => {
      res.locals.userId = data.rows;
      console.log(`createSession SQL result: ${data.rows}`);
      return next();
      // return to homepage if no session is active
      return res.redirect('/signin');
    })
    .catch((err) => next({
      log: 'Could not get session from DB. Check query syntax.',
      message: { error: err },
    }));
  return next({
    log: `Error caught in userController.createSession. \n Error Message: ${err}`,
    message: { err },
  });
};

userController.saveSessionIDToCookies = async (req, res, next) => {
  const { userId } = res.locals;
  const query = 'SELECT * FROM session WHERE user_id=$1';

  db.query(query, [userId])
    .then((data) => {
      res.locals.userId = data.rows;
      console.log(`saveSessionIdToCookies SQL result: ${data.rows}`);
      res.cookie('sessionId', res.locals.sessionId, { httpOnly: true });
      if (res.locals.userId) return next();
      // return to homepage if no session is active
      return res.redirect('/signin');
    })
    .catch((err) => next({
      log: 'Could not save session to DB. Check query syntax.',
      message: { error: err },
    }));
};

userController.deleteSession = async (req, res, next) => {
  const { sessionId } = req.cookies;
  const query = 'DELETE FROM session WHERE _id=$1';

  db.query(query, [sessionId])
    .then((data) => {
      res.locals.userId = data.rows;
      res.cookie('sessionId', res.locals.sessionId, { expires: Date.now() });
      return next();
    })
    .catch((err) => next({
      log: 'Could not delete session from DB. Check query syntax.',
      message: { error: err },
    }));
};

// USER INFO
userController.createUser = async (req, res, next) => {
  const queryArray = [
    req.body.username, // -> $1
    req.body.first_name, // -> $2
    req.body.last_name, // -> $3
    req.body.password, // -> $4
  ];

  const query = 'INSERT INTO users(username,first_name,last_name,password) VALUES ($1,$2,$3,$4)';

  db.query(query, queryArray)
    .then((data) => {
      res.locals.user = data.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Could not createUser in DB. Check query syntax.',
      message: { error: err },
    }));
};

userController.verifyUser = async (req, res, next) => {
  const queryArray = [
    req.body.username, // -> $1
    req.body.password, // -> $2
  ];
  const query = 'SELECT * FROM users WHERE username=$1 AND password=$2';

  db.query(query, queryArray)
    .then((data) => {
      res.locals.user = data.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Could not get verify user from DB. Check query syntax.',
      message: { error: err },
    }));
};

userController.getUserInfo = async (req, res, next) => {
  const { sessionId } = req.cookies;
  const query = 'SELECT * FROM users WHERE sessionID=$1';

  db.query(query, sessionId)
    .then((data) => {
      res.locals.user = data.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Could not get verify user from DB. Check query syntax.',
      message: { error: err },
    }));
};

module.exports = userController;
