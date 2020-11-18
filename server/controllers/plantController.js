const db = require('../models/plantModels');

const plantController = {};

plantController.getPlants = (req, res, next) => {
  const { userid } = req.headers;

  const query = `
  SELECT * FROM plants
  WHERE user_id = $1
  `;
  const values = [userid];

  db.query(query, values)
    .then((data) => {
      res.locals.plants = data.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Could not get plants. Check query syntax.',
      message: { error: err },
    }));
};

plantController.addPlant = (req, res, next) => {
  const { userid } = req.headers;
  const { plantInfo } = req.body;
  const query = `
    INSERT INTO plants (user_id) 
    VALUES ($1)
  `;

  const values = [userid];

  db.query(query, values)
    .then(() => next())
    .catch((err) => next({
      log: 'Plant not added. Check query syntax.',
      message: { error: err },
    }));
};

plantController.deletePlant = (req, res, next) => {
  const { userid } = req.headers;
  const { plantid } = req.headers;
  const query = `
    DELETE FROM plants WHERE _id= $1;
  `;

  const values = [plantid];

  db.query(query, values)
    .then((data) => next())
    .catch((err) => next({
      log: 'Plant not deleted. Check query syntax.',
      message: { error: err },
    }));
};

module.exports = plantController;
