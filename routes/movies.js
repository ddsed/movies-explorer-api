const router = require('express').Router();
const moviesController = require('../controllers/movies');
const { validationMovie, validationMovieId } = require('../middlewares/validation');

router.get('/', moviesController.getMovies);
router.post('/', validationMovie, moviesController.createMovie);
router.delete('/:movieId', validationMovieId, moviesController.deleteMovieById);

module.exports = router;
