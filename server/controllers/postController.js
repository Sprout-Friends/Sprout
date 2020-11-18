const db = require('../models/plantModels');

const postController = {};

postController.getAllPosts = (req, res, next) => {
  const { userId, plantId } = req.headers;

  const query = `
  SELECT * FROM posts
  WHERE plant_id = $1
  `;
  const values = [plantId];

  db.query(query, values)
    .then((data) => {
      res.locals.posts = data.rows;
    })
    .catch((err) => next({
      log: 'Could not get plants. Check query syntax.',
      message: { error: err },
    }));
  next();
};

postController.addPost = (req, res, next) => {
  const { userId, plantId } = req.headers;
  const { url } = req.body;

  const query = `
  INSERT INTO posts (plant_id,url) 
  VALUES ($1,$2)
  `;
  const values = [plantId, url];

  db.query(query, values)
    .catch((err) => next({
      log: 'Could not get plants. Check query syntax.',
      message: { error: err },
    }));
  next();
};

module.exports = postController;
