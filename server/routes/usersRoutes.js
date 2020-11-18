const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// check cookies if user has an active session => returns userInfo as object
router.get('/check',
  userController.checkIfSessionActive,
  userController.getUserInfo,
  (req, res) => res.status(200).json(res.locals.user));

// receive username & password in headers => returns userInfo as object
router.get('/login',
  userController.verifyUser,
  userController.createSessionAndSaveToCookies,
  (req, res) => res.status(200).json(res.locals.user));

// delete session from cookies
// CHANGE TO REDIRECT TO SIGN IN PAGE
router.delete('/signout',
  userController.deleteSession,
  (req, res) => {
    console.log(req);
    return res.sendStatus(200).json({ message: 'user is logged out' });
  });

// receive userinfo in body => returns userInfo as object
router.post('/register',
  userController.createUser,
  userController.verifyUser,
  userController.createSessionAndSaveToCookies,
  (req, res) => res.status(200).json(res.locals.user));

module.exports = router;
