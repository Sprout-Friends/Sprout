const express = require('express');
const plantController = require('../controllers/plantController');
const postController = require('../controllers/postController');

const router = express.Router();

// receive userid & plantid in headers => returns post list as array of objects
router.get('/posts', postController.getAllPosts, (req, res) => {
  res.status(200).send(res.locals.posts);
});

// receive userid & plantid in headers, image file is uploaded as form data, postinfo in body
// => returns post list as array of objects
router.post(
  '/posts',
  postController.uploadPostImage,
  postController.addPost,
  postController.getAllPosts,
  (req, res) => {
    res.status(200).send(res.locals.posts);
  }
);

// receive userid in headers => returns plant list as array of objects
router.get(
  '/',
  plantController.getPlants,
  postController.getLatestPostAllPlants,
  (req, res) => {
    res.status(200).send(res.locals.plants);
  }
);

// receive userid in headers, plantobj in body => returns plant list as array of objects
router.post(
  '/',
  plantController.addPlant,
  plantController.getPlants,
  postController.getLatestPostAllPlants,
  (req, res) => {
    res.status(200).send(res.locals.plants);
  }
);

// receive plantid & userid in headers => returns deleted plant object
router.delete(
  '/',
  plantController.deletePlant,
  plantController.getPlants,
  postController.getLatestPostAllPlants,
  (req, res) => {
    res.status(200).send(res.locals.plants);
  }
);

module.exports = router;
