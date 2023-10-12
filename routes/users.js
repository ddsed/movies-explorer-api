const router = require('express').Router();
const { validationUpdateUser } = require('../middlewares/validation');
const usersController = require('../controllers/users');

router.get('/me', usersController.getCurrentUser);
router.patch('/me', validationUpdateUser, usersController.updateUser);

module.exports = router;
