const db = require('../models/plantModels');

const followerController = {};

followerController.getFollowers = (req, res, next) => {
  const { follower_id } = req.headers;
  const query = `
    SELECT * FROM relationships
    INNER JOIN users 
    ON users._id=relationships.follower_id
    WHERE users._id=$1;
  `;
  const values = [follower_id];

  db.query(query, values)
    .then((data) => {
      res.locals.followers = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Could not get followers. Check query syntax.',
        message: { error: err },
      })
    );
};

followerController.addFollower = (req, res, next) => {
  const { follower_id, followed_id } = req.headers;
  const query = `
    INSERT INTO relationships (follower_id, followed_id) 
    VALUES ($1,$2) 
  `;
  const values = [follower_id, followed_id];

  db.query(query, values)
    .then((data) => {
      res.locals.followers = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Could not get followers. Check query syntax.',
        message: { error: err },
      })
    );
};

followerController.deleteFollower = (req, res, next) => {
  const { follower_id, followed_id } = req.headers;
  const query = `
    DELETE FROM relationships 
    WHERE follower_id=$1 AND followed_id=$2 
  `;

  const values = [follower_id, followed_id];

  db.query(query, values)
    .then((data) => {
      res.locals.followers = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Follower not deleted. Check query syntax.',
        message: { error: err },
      })
    );
};

export default followerController;
