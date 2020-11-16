const db = require('../models/plantModels');

const plantController = {};

plantController.getPlants = (req, res, next) => {
  const query = 'SELECT * FROM plants';

  db.query(query)
    .then((data) => {
      res.locals.plants = data.rows;
    })
    .catch((err) =>
      next({
        log: 'Could not get plants. Check query syntax.',
        message: { error: err },
      })
    );
  next();
};

plantController.addPlant = (req, res, next) => {
  const { user_id, plant_obj } = req.body;
  const query = `
    INSERT INTO favorites (user_id, plant_obj) 
    VALUES ($1, $2)
  `;

  const values = [user_id, plant_obj];

  db.query(query, values)
    .then((data) => {
      res.locals.plants = data.rows;
    })
    .catch((err) =>
      next({
        log: 'Plant not added. Check query syntax.',
        message: { error: err },
      })
    );
  next();
};

plantController.deletePlant = (req, res, next) => {
  const { id } = req.body;
  const query = `
    DELETE FROM plants WHERE id= $1;
  `;

  const values = [id];

  db.query(query, values)
    .then((data) => {
      res.locals.plants = data.rows;
    })
    .catch((err) =>
      next({
        log: 'Plant not deleted. Check query syntax.',
        message: { error: err },
      })
    );
  next();
};

plantController.updatePlant = (req, res, next) => {
  const { id, plant_obj } = req.body;
  const query = `
    UPDATE plants
    SET plant_obj=$2;
    WHERE id=$1
  `;

  const values = [id, plant_obj];

  db.query(query, values)
    .then((data) => {
      res.locals.plants = data.rows;
    })
    .catch((err) =>
      next({
        log: 'Plant not updated. Check query syntax.',
        message: { error: err },
      })
    );
  next();
};

module.exports = plantController;
