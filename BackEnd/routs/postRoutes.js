const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');







//get all posts 
router.get('/posts',authMiddleware.authenticate,postController.getAllPosts)


// get post by id 
router.get('/posts/:id',authMiddleware.authenticate,postController.getPostById)


// create new post
router.post('/posts',authMiddleware.authenticate,postController.createPost)


//update a post 
router.put('/posts/:id',authMiddleware.authenticate,postController.updatePost)


//delete a post
router.delete('/posts/:id',authMiddleware.authenticate,postController.deletePost)

module.exports= router;