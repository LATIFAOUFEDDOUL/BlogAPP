const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware')




// regis route 
router.post('/register', userController.register);
// Login route
router.post('/login', userController.login);






//get all users
 router.get('/users',authMiddleware.authenticate , userController.getAllUsres);

// Get user by ID
router.get('/users/:id',authMiddleware.authenticate , userController.findUserById);

// Update user by ID
router.put('/users/:id', authMiddleware.authenticate ,userController.updateUser);

// Delete user by ID
router.delete('/users/:id',authMiddleware.authenticate , userController.deleteUser);

module.exports = router;


















