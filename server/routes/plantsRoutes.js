const express = require('express');
const plantController = require('../controllers/plantController');

const router = express.Router();

// receive userid in headers => returns plant list as array of objects
router.get('/', plantController.getPlants, (req, res) => {
  res.status(200).send(res.locals.plants);
});

// receive userid in headers, plantobj in body => returns plant list as array of objects
router.post('/',
  plantController.addPlant,
  plantController.getPlants,
  (req, res) => { res.status(200).send(res.locals.plants); });

// receive plantid & userid in headers => returns deleted plant object
router.delete('/',
  plantController.deletePlant,
  plantController.getPlants,
  (req, res) => { res.status(200).send(res.locals.plants); });

module.exports = router;
