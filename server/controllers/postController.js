const db = require('../models/plantModels');

const postController = {};

postController.getLatestPostAllPlants = (req, res, next) => {
  const { plants } = res.locals;
  const { userid } = req.headers;

  const query = `
  SELECT posts._id, posts.plant_id, posts.url, posts.created_at 
  FROM posts 
  INNER JOIN plants
  ON plants._id = posts.plant_id
  WHERE plants.user_id = $1 
  ORDER BY created_at DESC
  `;

  const values = [userid];

  db.query(query, values)
    .then((data) => {
      const posts = data.rows;
      posts.reverse().forEach((post) => {
        for (let i = 0; i < plants.length; ++i) {
          console.log(plants[i], 'vs', post.plant_id);
          if (plants[i]._id.toString() === post.plant_id.toString()) plants[i].url = post.url;
        }
      });
      res.locals.plants = plants;
      return next();
    })
    .catch((err) => next({
      log: 'Could not get posts. Check query syntax.',
      message: { error: err },
    }));
};

postController.getAllPosts = (req, res, next) => {
  const { userid, plantid } = req.headers;

  const query = `
  SELECT * FROM posts
  WHERE plant_id = $1
  `;
  const values = [plantid];

  db.query(query, values)
    .then((data) => {
      res.locals.posts = data.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Could not get posts. Check query syntax.',
      message: { error: err },
    }));
};

postController.addPost = (req, res, next) => {
  const { userid, plantid } = req.headers;
  const { url } = req.body;

  const query = `
  INSERT INTO posts (plant_id,url,created_at) 
  VALUES ($1,$2,$3)
  `;
  const timestamp = new Date().toISOString();
  const values = [plantid, userid, timestamp];

  db.query(query, values)
    .then(() => next())
    .catch((err) => next({
      log: 'Could not add posts. Check query syntax.',
      message: { error: err },
    }));
};

module.exports = postController;
