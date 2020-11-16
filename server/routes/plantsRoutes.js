const express = require('express');
const plantController = require('../controllers/plantController');

const router = express.Router();

router.get('/', plantController.getPlants, (req, res) => {
  res.status(200).send(res.locals.plants);
});

router.post('/', plantController.addPlant, (req, res) => {
  res.status(200).send(res.locals.plants);
});

router.put('/:id', plantController.updatePlant, (req, res) => {
  res.status(200).send(res.locals.plants);
});

router.delete('/:id', plantController.deletePlant, (req, res) => {
  res.status(200).send(res.locals.plants);
});

module.exports = router;
