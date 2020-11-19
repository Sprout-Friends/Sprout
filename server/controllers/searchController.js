const db = require('../models/plantModels');

const searchController = {};

searchController.getEverything = (req, res, next) => {
  try {
    const query = `SELECT * FROM posts`;
    db.query(query).then((data) => {
      res.locals.posts = data.rows;
      return next();
    });
  } catch (err) {
    return next({
      log:
        'Express error handler caught searchController.getEverything middleware error',
      status: 500,
      message: { err: 'Something went wrong :(' },
    });
  }
};

module.exports = searchController;
