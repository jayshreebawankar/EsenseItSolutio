const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserById, getAllUsers, loginStatus, updateUser, changePassword, forgotPassword } = require('../controllers/userController.js');
const { Protect } = require('../middlewares/authMiddleware.js');

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.get('/', getAllUsers)
router.get('/getuser/:id', Protect, getUserById)
router.get('/loggedin', loginStatus)
router.patch('/update', Protect, updateUser)
router.patch('/updatepassword', Protect, changePassword)
router.put('/forgotpassword', Protect, forgotPassword)

module.exports = router;