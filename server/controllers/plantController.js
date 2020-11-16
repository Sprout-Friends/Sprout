const db = require('../models');

const plantController = {};

plantController.getPlants = (req, res, next) => {
  const query = 'SELECT * FROM plants'; // update table name

  db.query(query)
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
  // const {data} = req.body --> --> will update after table is built
  const query = `
    INSERT INTO favorites () 
    VALUES ($1, $2, $3, $4)
  `;
  db.query(query)
    .then((data) => {
      res.locals.plants = data.rows;
    })
    .catch((err) => next({
      log: 'Plant not added. Check query syntax.',
      message: { error: err },
    }));
  next();
};

plantController.deletePlant = (req, res, next) => {
  // const { id } = req.body; --> will update after table is built
  const query = `
    DELETE FROM plants WHERE  = $1;
  `;

  const values = [];

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

plantController.updatePlant = (req, res, next) => {
  // const { id } = req.body; --> will update after table is built
  const query = `
    UPDATE plants
    SET col1=$1, col2=$2, col3=$3;
    WHERE condition
  `;

  const values = [/* values from req body */];

  db.query(query, values)
    .then((data) => {
      res.locals.plants = data.rows;
    })
    .catch((err) => next({
      log: 'Plant not updated. Check query syntax.',
      message: { error: err },
    }));
  next();
};

module.exports = plantController;
