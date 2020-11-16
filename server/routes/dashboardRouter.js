const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// USERS CRUD FUNCTIONALITY
// INITIAL CHECK TO SEE IF USER IS ALREADY LOGGED IN
router.get('/',
  userController.checkIfSessionActive,
  userController.getUserInfo,
  (req, res) => {
    console.log(req);
    return res.send(200).json(res.locals.user);
  });

module.exports = router;
