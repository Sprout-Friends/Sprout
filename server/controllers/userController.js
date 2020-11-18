const db = require('../models/plantModels.js');

const userController = {};

// SESSIONS
userController.checkIfSessionActive = async (req, res, next) => {
  const { sessionId } = req.cookies;
  // check for active sessionID in session table
  const query = 'SELECT * FROM session WHERE session_id=$1';
  db.query(query, [sessionId])
    .then((data) => {
      res.locals.userId = data.rows[0].user_id;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Could not get session from DB. Check query syntax.',
        message: { error: err },
      })
    );
};

userController.createSessionAndSaveToCookies = async (req, res, next) => {
  const randomSessionId = Math.random().toString(20).substr(2, 15);
  const { user } = res.locals;
  const query = 'INSERT INTO session(user_id, session_id) VALUES ($1, $2)';

  db.query(query, [user._id, randomSessionId])
    .then((data) => {
      res.cookie('sessionId', randomSessionId, { httpOnly: true });
      return next();
    })
    .catch((err) =>
      next({
        log: 'Could not get session from DB. Check query syntax.',
        message: { error: err },
      })
    );
};

userController.deleteSession = async (req, res, next) => {
  const { sessionId } = req.cookies;
  const query = 'DELETE FROM session WHERE _id=$1';

  db.query(query, [sessionId])
    .then((data) => {
      res.cookie('sessionId', res.locals.sessionId, { expires: Date.now() });
      return next();
    })
    .catch((err) =>
      next({
        log: 'Could not delete session from DB. Check query syntax.',
        message: { error: err },
      })
    );
};

// USER INFO
userController.createUser = async (req, res, next) => {
  const queryArray = [
    req.body.email, // -> $1
    req.body.first_name, // -> $2
    req.body.last_name, // -> $3
    req.body.password, // -> $4
  ];

  const query =
    'INSERT INTO users(email,first_name,last_name,password) VALUES ($1,$2,$3,$4)';

  db.query(query, queryArray)
    .then((data) => next())
    .catch((err) =>
      next({
        log: 'Could not createUser in DB. Check query syntax.',
        message: { error: err },
      })
    );
};

userController.verifyUser = async (req, res, next) => {
  const queryArray = [
    req.headers.email || req.body.email, // -> $1
    req.headers.password || req.body.password, // -> $2
  ];
  const query = `
    SELECT _id,email,first_name,last_name 
    FROM users 
    WHERE email=$1 AND password=$2
  `;

  db.query(query, queryArray)
    .then((data) => {
      if (data.rowCount === 0) res.sendStatus(403);
      res.locals.user = data.rows[0];
      return next();
    })
    .catch((err) =>
      next({
        log: 'Could not get verify user from DB. Check query syntax.',
        message: { error: err },
      })
    );
};

userController.getUserInfo = async (req, res, next) => {
  const { userId } = res.locals;
  const query = `
    SELECT _id,email,first_name,last_name
    FROM users
    WHERE _id=$1
  `;

  db.query(query, userId)
    .then((data) => {
      res.locals.user = data.rows[0];
      return next();
    })
    .catch((err) =>
      next({
        log: 'Could not get verify user from DB. Check query syntax.',
        message: { error: err },
      })
    );
};

module.exports = userController;
