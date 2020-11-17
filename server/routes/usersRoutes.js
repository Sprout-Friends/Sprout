const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/check',
  userController.checkIfSessionActive,
  userController.getUserInfo,
  (req, res) => res.status(200).json(res.locals.user));

router.post('/login',
  userController.verifyUser,
  userController.createSessionAndSaveToCookies,
  (req, res) => res.status(200).json(res.locals.user));

// CHANGE TO REDIRECT TO SIGN IN PAGE
router.delete('/signout',
  userController.deleteSession,
  (req, res) => {
    console.log(req);
    return res.sendStatus(200).json({ message: 'user is logged out' });
  });

router.post('/register',
  userController.createUser,
  userController.verifyUser,
  userController.createSessionAndSaveToCookies,
  (req, res) => res.status(200).json(res.locals.user));

module.exports = router;
