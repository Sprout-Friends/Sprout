const express = require('express');
const userController = require('../controllers/userController');
const followerController = require('../controllers/followerController');

const router = express.Router();

// check cookies if user has an active session => returns userInfo as object
router.get(
  '/check',
  userController.checkIfSessionActive,
  userController.getUserInfo,
  (req, res) => res.status(200).json(res.locals.user)
);

router.get('/search_page', userController.getUserInfo, (req, res) =>
  res.status(200).json(res.locals.user)
);

// receive username & password in headers => returns userInfo as object
router.get(
  '/login',
  userController.verifyUser,
  userController.createSessionAndSaveToCookies,
  (req, res) => res.status(200).json(res.locals.user)
);

// delete session from cookies
// CHANGE TO REDIRECT TO SIGN IN PAGE
router.delete('/signout', userController.deleteSession, (req, res) => {
  return res.status(200).json({ message: 'user is logged out' });
});

// receive userinfo in body => returns userInfo as object
router.post(
  '/register',
  userController.createUser,
  userController.verifyUser,
  userController.createSessionAndSaveToCookies,
  (req, res) => res.status(200).json(res.locals.user)
);

//FOLLOWER ROUTES
//recieves follower_id from headers => returns followers as an object
router.get('/followers', followerController.getFollowers, (req, res) => {
  res.status(200).json(res.locals.followers);
});

//recieves follower_id from headers => returns followers as an object
router.post('/followers', followerController.addFollower, (req, res) => {
  res.status(200).json(res.locals.followers);
});

//deletes follower  => returns updated followers as an object
router.delete(
  '/followers/:followed_id',
  followerController.deleteFollower,
  (req, res) => {
    res.status(200).json(res.locals.followers);
  }
);

module.exports = router;
