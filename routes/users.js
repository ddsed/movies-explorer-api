const router = require('express').Router();
const { validationCurrentUser, validationUpdateUser } = require('../middlewares/validation');
const usersController = require('../controllers/users');

router.get('/me', validationCurrentUser, usersController.getCurrentUser);
router.patch('/me', validationUpdateUser, usersController.updateUser);

module.exports = router;
