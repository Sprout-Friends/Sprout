const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// USERS CRUD FUNCTIONALITY
router.post('/login',
  userController.verifyUser,
  userController.createSession,
  userController.saveSessionIDToCookies,
  userController.checkIfSessionActive,
  userController.getUserInfo,
  (req, res) => {
    console.log(req);
    // redirect on login
    return res.send(200).json(res.locals.user);
  });

// CHANGE TO REDIRECT TO SIGN IN PAGE
router.delete('/signout',
  userController.deleteSession,
  userController.deleteSessionCookie,
  (req, res) => {
    console.log(req);
    return res.send(200).json({ message: 'user is logged out' });
  });

router.post('/register',
  userController.createUser,
  userController.verifyUser,
  userController.createSession,
  userController.saveSessionIDToCookies,
  userController.getUserInfo,
  (req, res) => {
    console.log(req);
    return res.send(200).json(res.locals.user);
  });

router.post('/update',
  userController.updateUserInfo,
  userController.getUserInfo,
  (req, res) => {
    console.log(req);
    return res.send(200).json(res.locals.user);
  });

module.exports = router;
