const router = require('express').Router();
const userRouter = require('./users');
// const cardRouter = require('./cards');
const { createUser, loginUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { validationUserInfo } = require('../middlewares/validation');
const NotFoundError = require('../errors/not-found');

router.post('/signup', validationUserInfo, createUser);
router.post('/signin', validationUserInfo, loginUser);

router.use(auth);

router.use('/users', userRouter);
// router.use('/cards', cardRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Такой страницы не существует'));
});

module.exports = router;
