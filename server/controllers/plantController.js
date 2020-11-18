const db = require('../models/plantModels');

const plantController = {};

plantController.getPlants = (req, res, next) => {
  const { userId } = req.headers;

  const query = `
  SELECT * FROM plants
  WHERE user_id = $1
  `;
  const values = [userId];

  db.query(query, values)
    .then((data) => {
      res.locals.plants = data.rows;
    })
    .catch((err) => next({
      log: 'Could not get plants. Check query syntax.',
      message: { error: err },
    }));
  next();
};

plantController.addPlant = (req, res, next) => {
  const { userId } = req.headers;
  const { plantInfo } = req.body;
  const query = `
    INSERT INTO plants (user_id) 
    VALUES ($1)
  `;

  const values = [userId];

  db.query(query, values)
    .catch((err) => next({
      log: 'Plant not added. Check query syntax.',
      message: { error: err },
    }));
  next();
};

plantController.deletePlant = (req, res, next) => {
  const { userId } = req.headers;
  const query = `
    DELETE FROM plants WHERE id= $1;
  `;

  const values = [id];

  db.query(query, values)
    .then((data) => {
      res.locals.plants = data.rows;
    })
    .catch((err) => next({
      log: 'Plant not deleted. Check query syntax.',
      message: { error: err },
    }));
  next();
};

module.exports = plantController;
